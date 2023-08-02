import { connectDB } from "@/app/lib/db";
import Todo from "@/app/model/todoSchema";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, { params }: { params: any }) => {
    await connectDB()
    const { id } = params;
    try {
      const body = await req.json();
      const todo = await Todo.findByIdAndUpdate(id, { ...body }, { new: true });
      return NextResponse.json(todo);
    } catch (error) {
      return NextResponse.json("Internal Server Error", { status: 404 });
    }
  };

  export const DELETE = async (req: Request, { params }: { params: any }) => {
    await connectDB()
    const { id } = params;
    try {
      const removeTodo = await Todo.findByIdAndDelete(id);
      return NextResponse.json(removeTodo);
    } catch (error) {
      return NextResponse.json("Internal Server Error", { status: 404 });
    }
  };
  