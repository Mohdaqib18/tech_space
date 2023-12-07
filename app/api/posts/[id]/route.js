import connectMongoDB from "@/app/libs/mongodb";
import Post from "@/app/models/post";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
	const { id } = params;
	const { newTitle: title, newDescription: description } = await request.json();
	await connectMongoDB();
	await Post.findByIdAndUpdate(id, { title, description });
	return NextResponse.json({ message: "Title updated" }, { status: 200 });
}

export async function GET(request, { params }) {
	const { id } = params;
	await connectMongoDB();
	const post = await Post.findOne({ _id: id });
	return NextResponse.json({ post }, { status: 200 });
}
