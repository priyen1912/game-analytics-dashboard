from fastapi import FastAPI
from .routes import auth, users, events, purchases, analytics

app = FastAPI(
    title="Game Analytics Dashboard API",
    description="Backend for Game Analytics Dashboard",
    version="1.0.0"
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(events.router, prefix="/events", tags=["events"])
app.include_router(purchases.router, prefix="/purchases", tags=["purchases"])
app.include_router(analytics.router, prefix="/analytics", tags=["analytics"])