import requests
from fastapi import APIRouter
from app.core.config import settings

router = APIRouter()

@router.get("/link-bank")
def link_bank():
    response = requests.post("https://sandbox.plaid.com/link/token/create", json={
        "client_id": settings.PLAID_CLIENT_ID,
        "secret": settings.PLAID_SECRET,
        "client_name": "FinanceApp",
        "products": ["transactions"],
        "country_codes": ["US"],
        "language": "en"
    })
    return response.json()
