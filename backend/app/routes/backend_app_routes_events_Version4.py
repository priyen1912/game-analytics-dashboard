from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from .. import database, models, schemas
from sqlalchemy.future import select

router = APIRouter()

@router.post("/", status_code=201)
async def ingest_event(event: schemas.EventCreate, db: AsyncSession = Depends(database.get_db)):
    db_event = models.Event(
        user_id=1,  # Replace with actual user from token
        event_type=event.event_type,
        event_time=event.event_time,
        metadata=event.metadata
    )
    db.add(db_event)
    await db.commit()
    await db.refresh(db_event)
    return {"message": "Event ingested"}