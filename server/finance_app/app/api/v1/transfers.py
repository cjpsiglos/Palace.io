from fastapi import APIRouter, Depends, HTTPException
from app.schemas.transaction import Transfer
from app.core.database import get_db

router = APIRouter()

@router.post("/transfer")
def transfer_money(transfer: Transfer, db: Session = Depends(get_db)):
    return {"message": "Transfer successful", "amount": transfer.amount}
