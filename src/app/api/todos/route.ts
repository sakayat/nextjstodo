import { connectDB } from "@/app/lib/db"
import Todo from "@/app/model/todoSchema"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    await connectDB()
    try{
        const getTodos = await Todo.find()
        return NextResponse.json(getTodos)
    } catch(error){
       return NextResponse.json("Internal Server Error", {status: 404})
    }
}