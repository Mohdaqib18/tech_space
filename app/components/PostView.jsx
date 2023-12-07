import React from "react";
import DeleteBtn from "./DeleteBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const getPosts = async () => {
	const apiUrl = process.env.API_URL
	try {
		const res = await fetch(`${apiUrl}/api/posts`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch post");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

const PostView = async () => {
	const { posts } = await getPosts();
	return (
		<>
			{posts.map((post, index) => (
				<div
					key={index}
					className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5 rounded-md"
				>
				<p className="font-semibold text-sm mt-[3px] absolute ">{index+1}.</p>
					<div className="ml-5">
						<h2 className="font-semibold text-lg">{post.title}</h2>
						<div className="text-sm ">{post.description}</div>
					</div>

					<div className="flex gap-2">
						<DeleteBtn id={post._id} />
						<Link href={`/editPost/${post._id}`}>
							<HiPencilAlt size={24} />
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default PostView;
