# uvicorn main:app --reload --port 8888
from fastapi import FastAPI

app = FastAPI()

@app.get("/mess/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}