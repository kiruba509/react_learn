from fastapi import FastAPI

app = FastAPI()

# Fake database (just for learning)
users = []

# ---------------- REGISTER ----------------
@app.post("/register")
def register(user: dict):
    users.append(user)
    return {"message": "User registered", "data": user}

@app.get("/")
def home():
    return{"status":"ok"}
# ---------------- LOGIN ----------------
@app.post("/login")
def login(user: dict):
    for u in users:
        if u["email"] == user["email"] and u["password"] == user["password"]:
            return {"message": "Login success"}
    
    return {"message": "Invalid email or password"}