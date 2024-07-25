import { Schema, model } from "mongoose";

const userSchema = new Schema({
 username: String,
 age: Number,
 alter:Number,
});

export const UserModel = model("User", userSchema, "user");
