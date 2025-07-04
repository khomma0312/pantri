# 料理・買い物支援アプリ 開発チケット

## フロントエンド開発チケット

### FE-001: プロジェクトセットアップ
**優先度**: 高  
**工数見積**: 1日  
**説明**: Next.jsプロジェクトの初期セットアップ
- [ ] Next.jsプロジェクトの作成
- [ ] TypeScript設定
- [ ] ESLint/Prettier設定
- [ ] Tailwind CSS設定
- [ ] 基本的なディレクトリ構造の作成
- [ ] AWS Amplify Gen2との接続設定

### FE-002: 認証機能UI
**優先度**: 高  
**工数見積**: 2日  
**説明**: ユーザー認証画面の実装
- [ ] ログイン画面
- [ ] ユーザー登録画面
- [ ] パスワードリセット画面
- [ ] 認証状態の管理（Context API）
- [ ] 認証が必要なページの保護

### FE-003: 基本レイアウト・ナビゲーション
**優先度**: 高  
**工数見積**: 2日  
**説明**: アプリ全体の基本UI構造
- [ ] ヘッダーコンポーネント
- [ ] サイドナビゲーション
- [ ] レスポンシブ対応
- [ ] ページ遷移の実装
- [ ] 基本的なUIコンポーネント（Button, Input等）

### FE-004: 献立レコメンド画面
**優先度**: 高  
**工数見積**: 3日  
**説明**: 献立提案機能のUI実装
- [ ] 献立提案表示画面
- [ ] 条件設定画面（調理時間、難易度等）
- [ ] 主菜・副菜・汁物セット表示
- [ ] レシピ詳細モーダル
- [ ] 献立の採用・却下機能

### FE-005: 冷蔵庫管理画面
**優先度**: 高  
**工数見積**: 4日  
**説明**: 冷蔵庫の食材管理UI
- [ ] 食材一覧表示
- [ ] 写真撮影・アップロード機能
- [ ] 食材認識結果の表示・編集
- [ ] 食材の手動追加・編集・削除
- [ ] 賞味期限管理・表示
- [ ] 賞味期限アラート表示

### FE-006: 買い物リスト画面
**優先度**: 高  
**工数見積**: 3日  
**説明**: 買い物リスト機能のUI
- [ ] 買い物リスト表示
- [ ] 献立からの自動生成結果表示
- [ ] 手動でのアイテム追加・編集・削除
- [ ] チェックボックス機能（購入済み管理）
- [ ] 分量・数量の表示・編集
- [ ] リストの共有機能

### FE-007: 家族・プロフィール管理画面
**優先度**: 中  
**工数見積**: 2日  
**説明**: ユーザー・家族情報管理
- [ ] プロフィール設定画面
- [ ] 家族情報登録・編集
- [ ] 好み・アレルギー情報設定
- [ ] 家族人数設定
- [ ] アカウント設定

### FE-008: 食材使い切りレシピ画面
**優先度**: 中  
**工数見積**: 2日  
**説明**: 余り食材活用機能のUI
- [ ] 余り食材選択画面
- [ ] 使い切りレシピ提案表示
- [ ] レシピフィルタリング機能
- [ ] レシピ詳細表示

### FE-009: 通知・アラート機能
**優先度**: 中  
**工数見積**: 1日  
**説明**: 各種通知機能のUI
- [ ] 賞味期限アラートの表示
- [ ] 通知設定画面
- [ ] トースト通知コンポーネント
- [ ] 通知履歴表示

### FE-010: PWA対応・最適化
**優先度**: 低  
**工数見積**: 2日  
**説明**: パフォーマンス最適化
- [ ] PWA設定
- [ ] 画像最適化
- [ ] コード分割
- [ ] キャッシュ戦略の実装
- [ ] SEO対応

---

## バックエンド開発チケット

### BE-001: インフラストラクチャセットアップ
**優先度**: 高  
**工数見積**: 2日  
**説明**: AWS環境の構築
- [ ] AWS Amplify Gen2プロジェクト作成
- [ ] Amazon Cognito設定（ユーザープール）
- [ ] Amazon RDS設定（PostgreSQL）
- [ ] S3バケット設定（画像保存用）
- [ ] IAM roles/policies設定
- [ ] 環境変数設定

### BE-002: データベース設計・構築
**優先度**: 高  
**工数見積**: 3日  
**説明**: データベーススキーマの設計・実装
- [ ] ER図作成
- [ ] テーブル設計（Users, Ingredients, Recipes, MealPlans等）
- [ ] マイグレーションファイル作成
- [ ] インデックス設定
- [ ] 初期データ投入

### BE-003: 認証・認可API
**優先度**: 高  
**工数見積**: 2日  
**説明**: ユーザー認証機能のAPI実装
- [ ] ユーザー登録API
- [ ] ログイン/ログアウトAPI
- [ ] トークン検証middleware
- [ ] パスワードリセットAPI
- [ ] ユーザー情報取得/更新API

### BE-004: 食材管理API
**優先度**: 高  
**工数見積**: 4日  
**説明**: 冷蔵庫・食材管理のAPI実装
- [ ] 食材CRUD API
- [ ] 画像アップロードAPI
- [ ] 食材認識API（外部サービス連携）
- [ ] 賞味期限管理API
- [ ] 食材検索・フィルタリングAPI
- [ ] 賞味期限アラートバッチ処理

### BE-005: レシピ管理API
**優先度**: 高  
**工数見積**: 3日  
**説明**: レシピデータ管理のAPI実装
- [ ] 外部レシピサイト連携API
- [ ] レシピデータ取得・保存API
- [ ] レシピ検索API
- [ ] レシピお気に入り機能API
- [ ] レシピデータ正規化処理

### BE-006: 献立レコメンドAPI
**優先度**: 高  
**工数見積**: 5日  
**説明**: 献立提案ロジックの実装
- [ ] 献立レコメンドアルゴリズム実装
- [ ] 冷蔵庫食材との照合処理
- [ ] 栄養バランス計算
- [ ] 季節・調理時間フィルタリング
- [ ] 重複回避ロジック（1週間制限）
- [ ] 献立履歴管理API

### BE-007: 買い物リストAPI
**優先度**: 高  
**工数見積**: 3日  
**説明**: 買い物リスト機能のAPI実装
- [ ] 買い物リストCRUD API
- [ ] 献立からの自動生成API
- [ ] 冷蔵庫在庫との照合・除外処理
- [ ] 分量計算・調整API
- [ ] 買い物履歴管理API
- [ ] リスト共有機能API

### BE-008: 家族・共有機能API
**優先度**: 中  
**工数見積**: 3日  
**説明**: 家族間での情報共有機能
- [ ] 家族グループ管理API
- [ ] 共有リンク生成・管理API
- [ ] アクセス権限制御
- [ ] 家族メンバー招待API
- [ ] 共有データ同期API

### BE-009: 通知・アラートAPI
**優先度**: 中  
**工数見積**: 2日  
**説明**: 各種通知機能のAPI実装
- [ ] 賞味期限アラート生成API
- [ ] 通知設定管理API
- [ ] プッシュ通知機能
- [ ] メール通知機能
- [ ] 通知履歴API

### BE-010: 使い切りレシピAPI
**優先度**: 中  
**工数見積**: 3日  
**説明**: 食材活用機能のAPI実装
- [ ] 余り食材分析API
- [ ] 使い切りレシピ検索API
- [ ] レシピマッチングアルゴリズム
- [ ] 食材消費追跡API
- [ ] レシピ評価・フィードバックAPI

### BE-011: データ分析・最適化
**優先度**: 低  
**工数見積**: 3日  
**説明**: システム最適化・分析機能
- [ ] ユーザー行動分析
- [ ] レコメンド精度改善
- [ ] パフォーマンス最適化
- [ ] ログ収集・分析
- [ ] データバックアップ・復旧

### BE-012: テスト・品質保証
**優先度**: 中  
**工数見積**: 4日  
**説明**: テスト実装・品質管理
- [ ] ユニットテスト実装
- [ ] 統合テスト実装
- [ ] API仕様書作成
- [ ] セキュリティテスト
- [ ] 負荷テスト実装

---

## 開発順序推奨

### フェーズ1（MVP）
**フロントエンド**: FE-001 → FE-002 → FE-003 → FE-004 → FE-005 → FE-006  
**バックエンド**: BE-001 → BE-002 → BE-003 → BE-004 → BE-005 → BE-006 → BE-007

### フェーズ2（機能拡張）
**フロントエンド**: FE-007 → FE-008 → FE-009  
**バックエンド**: BE-008 → BE-009 → BE-010

### フェーズ3（最適化・品質向上）
**フロントエンド**: FE-010  
**バックエンド**: BE-011 → BE-012

---

**作成日**: 2025-06-16  
**最終更新日**: 2025-06-16