from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from .. import database, models, schemas

router = APIRouter()

@router.post("/", status_code=201)
async def create_purchase(purchase: schemas.PurchaseCreate, db: AsyncSession = Depends(database.get_db)):
    db_purchase = models.Purchase(
        user_id=1,  # Replace with actual user from token
        amount=purchase.amount,
        currency=purchase.currency,
        purchased_at=purchase.purchased_at
    )
    db.add(db_purchase)
    await db.commit()
    await db.refresh(db_purchase)
    return {"message": "Purchase recorded"}