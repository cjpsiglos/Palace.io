import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "Finance App"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your_default_secret_key")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./test.db")
    ACCESS_TOKEN_EXPIRE_MINUTES = 60  # 1 hour expiry for JWT

    # Plaid API Configurations
    PLAID_CLIENT_ID = os.getenv("PLAID_CLIENT_ID")
    PLAID_SECRET = os.getenv("PLAID_SECRET")

settings = Settings()
