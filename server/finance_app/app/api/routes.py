from fastapi import APIRouter
from app.api.v1 import auth, banking, budget, transfers

router = APIRouter()

router.include_router(auth.router, prefix="/auth", tags=["Auth"])
router.include_router(banking.router, prefix="/bank", tags=["Banking"])
router.include_router(budget.router, prefix="/budget", tags=["Budget"])
router.include_router(transfers.router, prefix="/transfers", tags=["Transfers"])
