from fastapi import FastAPI
from app.api.routes import router
from app.core.database import Base, engine

app = FastAPI(title="Finance App API")

# Create database tables
Base.metadata.create_all(bind=engine)

# Include API routes
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Finance App"}
