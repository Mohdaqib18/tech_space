"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddPost = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!title || !description) {
			alert("Please enter the title and description to add post");
			return;
		}

		try {
			const res = await fetch("/api/posts", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ title, description }),
			});
			if (res.ok) {
				router.push("/");
				router.refresh();
			} else {
				throw new Error("failed to add post");
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-3">
			<input
				type="text"
				placeholder="Post Title"
				className="border border-slate-500 px-8 py-2 rounded-md"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<input
				type="text"
				placeholder="Post Description"
				className="border border-slate-500 px-8 py-2 rounded-md"
				onChange={(e) => setDescription(e.target.value)}
				value={description}
			/>
			<button
				type="submit"
				className="bg-green-700 font-bold text-white py-3 px-6 w-fit  rounded"
			>
				Add Post
			</button>
		</form>
	);
};

export default AddPost;
