# API ディレクトリ構成

## 方針

- **ドメイン/機能ごとにディレクトリを分ける**（技術レイヤー別ではなく、auth / ingredients / meal_planning などでまとめる）。
- 各ドメインに **router・schemas・models・service** をまとめ、拡張しやすくする。
- 共通処理は **core**（設定・DB・依存性・例外・ミドルウェア）に集約。
- エントリポイントは **app パッケージ内の app** とし、`uvicorn app.main:app` で起動する。

---

## ディレクトリ構成

```
api/
├── app/
│   ├── __init__.py
│   ├── main.py              # アプリファクトリ（FastAPI インスタンス生成・ルーター登録・lifespan）
│   ├── config.py             # pydantic-settings（BaseSettings）
│   ├── database.py           # AsyncEngine, async_sessionmaker, get_db
│   │
│   ├── core/                 # 共通基盤
│   │   ├── __init__.py
│   │   ├── dependencies.py  # 共通 Depends（get_current_user 等）
│   │   ├── exceptions.py    # 共通例外クラス・ハンドラ
│   │   └── logging.py       # structlog 初期化（任意）
│   │
│   ├── auth/                 # 認証（Cognito・JWT 検証）
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── service.py
│   │   └── dependencies.py  # 認証専用 Depends
│   │
│   ├── users/                # ユーザー・プロフィール
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   └── service.py
│   │
│   ├── ingredients/          # 食材管理
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   └── service.py
│   │
│   ├── meal_planning/        # 献立プランニング
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   └── service.py
│   │
│   ├── recipes/              # レシピ検索・管理
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   └── service.py
│   │
│   ├── shopping/             # 買い物リスト
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   └── service.py
│   │
│   └── family/               # 家族共有（フェーズ2で拡張しやすいよう枠だけ用意可）
│       ├── __init__.py
│       ├── router.py
│       ├── schemas.py
│       ├── models.py
│       └── service.py
│
├── alembic/                  # マイグレーション（env.py で app.config / app.database を参照）
│   ├── env.py
│   ├── script.py.mako
│   └── versions/
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py           # pytest フィクスチャ（client, session, app）
│   ├── unit/
│   └── api/                  # エンドポイントテスト（ドメイン別でも可）
│
├── docs/
│   ├── technology-stack.md
│   └── directory-structure.md
│
├── requirements.txt
├── pyproject.toml
├── .env.example
└── .gitignore
```

---

## 各パスの役割

| パス | 役割 |
|------|------|
| **app/main.py** | FastAPI アプリ生成、`include_router` で各ドメインをマウント、lifespan で DB プール等の初期化・破棄 |
| **app/config.py** | `pydantic_settings.BaseSettings` で `DATABASE_URL`, `ENV`, `SECRET_KEY` 等を定義。`env_file=".env"` で読み込み |
| **app/database.py** | `create_async_engine`（asyncpg）、`async_sessionmaker`、`async def get_db()` を定義 |
| **app/core/** | 全ドメインで使う Depends・HTTP 例外ハンドラ・structlog 設定 |
| **app/{domain}/** | そのドメインの API（router）、リクエスト/レスポンス（schemas）、DB モデル（models）、ビジネスロジック（service） |

---

## ルーティングのマウント例（app/main.py）

```python
from fastapi import FastAPI
from app.config import settings
from app.database import ...
from app.auth.router import router as auth_router
from app.ingredients.router import router as ingredients_router
# ...

def create_app() -> FastAPI:
    app = FastAPI(...)
    app.include_router(auth_router, prefix="/auth", tags=["auth"])
    app.include_router(ingredients_router, prefix="/ingredients", tags=["ingredients"])
    # ...
    return app

app = create_app()
```

---

## エントリポイント

- **開発**: `uvicorn app.main:app --reload`（api ディレクトリがカレントの場合）
- **本番**: `gunicorn app.main:app -k uvicorn.workers.UvicornWorker` など、`app.main:app` を指定する

ルートに `main.py` は置かず、アプリは `app.main` モジュールの `app` のみをエントリとする。

---

## Alembic との関係

- **alembic/env.py** で `from app.config import settings` と `from app.database import Base`（またはモデルを import するモジュール）を使い、`config.set_main_option("sqlalchemy.url", settings.DATABASE_URL)` および `target_metadata = Base.metadata` を設定する。
- モデルは各ドメインの `app/**/models.py` に定義し、env.py で `import app.users.models`, `import app.ingredients.models` のように一括 import して `Base.metadata` を参照するか、`app.database` で Base を export し、各モデルでそれを継承する形にするとよい。

---

## まとめ

- ドメインは **auth, users, ingredients, meal_planning, recipes, shopping, family** の7つを想定し、各ドメインに router / schemas / models / service を配置する。
- 共通部分は **app/core** と **app/config**, **app/database** に集約する。
- **alembic** は api 直下に置き、env.py で app の設定・メタデータを参照する。
- **tests** は api 直下に置き、conftest で app とテスト用 DB セッションを用意する。
- 起動は常に **app.main:app** を指定し、ルートの main.py は使わない。
