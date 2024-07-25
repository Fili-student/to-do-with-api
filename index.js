
import express, { json } from "express";
import { config } from "dotenv";
import {
  mongoConnect,
  mongoDCListener,
  mongoErrorListener,
} from "./db/connection.db.js";
import { UserRouter } from "./routes/user.router.js";
config();

const app = express();
app.use(json());

//DB Connect
mongoDCListener();
mongoErrorListener();
await mongoConnect();

//Routes
app.use("/user", UserRouter);


app.get("/user", (req,res)=>{
    res.status(200).json({
        code:200,
        answer: "hey bro",
    })
});

app.post("/user", (req,res)=>{
    res.status(200).json({
        code:200,
        answer: "",
    })
});


app.delete("/user/gone", (req,res)=>{
    res.status(200).json({
        code:200,
        answer: "mh",
    })
});

// 404 Handler
app.all("*", (req, res) => {
  res.status(404).json({
    code: 404,
    answer: "Page not found.",
  });
});

//ErrorMiddleware
app.use((err, req, res, next) => {
  res.status(500).json({
    code: 500,
    answer: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server startet on Port 3000.");
});
