import connectMongoDB from "@/app/libs/mongodb";
import Post from "@/app/models/post";
import { NextResponse } from "next/server";

export async function POST(request) {
	const { title, description } = await request.json();
	await connectMongoDB();
	await Post.create({ title, description });
	return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
	await connectMongoDB();
	const posts = await Post.find();
	return NextResponse.json({ posts });
}

export async function DELETE(request) {
	const id = request.nextUrl.searchParams.get("id");
	await connectMongoDB();
	await Post.findByIdAndDelete(id);
	return NextResponse.json({ message: "Post deleted" }, { status: 200 });
}
