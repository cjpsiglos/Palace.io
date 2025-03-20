from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.budget import Budget
from app.schemas.budget import BudgetCreate

router = APIRouter()

@router.post("/set-budget")
def set_budget(budget: BudgetCreate, db: Session = Depends(get_db)):
    new_budget = Budget(**budget.dict())
    db.add(new_budget)
    db.commit()
    return {"message": "Budget saved"}
