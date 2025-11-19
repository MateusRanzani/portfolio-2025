import { connectDB } from "@/lib/mongoose";
import { Comments } from "@/models/Comments";

export async function GET() {
  await connectDB();

  const comments = await Comments.find({ approved: true });
  return Response.json(comments);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();
  const comments = await Comments.create(data);

  return Response.json(comments);
}

export async function PATCH(req: Request) {
  await connectDB();

  const { adminKey, id, approved } = await req.json();

  if (adminKey !== process.env.ADMIN_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updated = await Comments.findByIdAndUpdate(
    id,
    { approved },
    { new: true }
  );

  return Response.json(updated);
}
