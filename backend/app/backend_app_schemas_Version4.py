from pydantic import BaseModel, EmailStr
from typing import Optional, List
import datetime

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    is_active: bool
    created_at: datetime.datetime

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class EventCreate(BaseModel):
    event_type: str
    event_time: datetime.datetime
    metadata: Optional[str] = None

class PurchaseCreate(BaseModel):
    amount: float
    currency: str
    purchased_at: datetime.datetime