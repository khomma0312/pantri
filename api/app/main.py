from fastapi import FastAPI
import os

def create_app() -> FastAPI:
    app = FastAPI(
        docs_url=None if os.getenv("ENV") == "production" else "/docs",
        redoc_url=None if os.getenv("ENV") == "production" else "/redoc",
        openapi_url=None if os.getenv("ENV") == "production" else "/openapi.json",
    )
    return app

app = create_app()