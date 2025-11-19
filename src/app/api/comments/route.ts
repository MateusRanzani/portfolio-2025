import { connectDB } from "@/lib/mongoose";
import { Comments } from "@/models/Comments";

export async function GET() {
  await connectDB();

  const comments = await Comments.find();
  return Response.json(comments);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();
  const comments = await Comments.create(data);

  return Response.json(comments);
}
