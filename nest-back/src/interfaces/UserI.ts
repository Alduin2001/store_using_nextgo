import { Request } from "express";

export interface UserI extends Request{
    user:{
        id:number,
        role:number
    }
}