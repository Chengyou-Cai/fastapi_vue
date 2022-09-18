# uvicorn main:app --reload --port 8888 --host 0.0.0.0
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "root page"}
    
@app.get("/mess/")
async def hello():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}