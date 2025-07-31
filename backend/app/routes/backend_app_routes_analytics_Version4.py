from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import func
from .. import database, models

router = APIRouter()

@router.get("/dau")
async def get_dau(db: AsyncSession = Depends(database.get_db)):
    result = await db.execute(
        "SELECT event_time::date, COUNT(DISTINCT user_id) FROM events GROUP BY event_time::date"
    )
    data = [{"date": str(row[0]), "dau": row[1]} for row in result]
    return data

@router.get("/mau")
async def get_mau(db: AsyncSession = Depends(database.get_db)):
    result = await db.execute(
        "SELECT DATE_TRUNC('month', event_time), COUNT(DISTINCT user_id) FROM events GROUP BY DATE_TRUNC('month', event_time)"
    )
    data = [{"month": str(row[0]), "mau": row[1]} for row in result]
    return data

@router.get("/revenue")
async def get_revenue(db: AsyncSession = Depends(database.get_db)):
    result = await db.execute(
        "SELECT purchased_at::date, SUM(amount) FROM purchases GROUP BY purchased_at::date"
    )
    data = [{"date": str(row[0]), "revenue": float(row[1])} for row in result]
    return data