"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditPostForm = ({ id, title, description }) => {
	const [newTitle, setNewTitle] = useState(title);
	const [newDescription, setNewDescription] = useState(description);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch(`/api/posts/${id}`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ newTitle, newDescription }),
			});

			if (!res.ok) {
				throw new Error("Failed to update post");
			}
			router.push("/");
			router.refresh();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-3">
			<input
				type="text"
				placeholder="Post Title"
				className="border border-slate-500 px-8 py-2 rounded-md font-sans"
				onChange={(e) => setNewTitle(e.target.value)}
				value={newTitle}
			/>
			<input
				type="text"
				placeholder="Post Description"
				className="border border-slate-500 px-8 py-2 rounded-md font-sans"
				onChange={(e) => setNewDescription(e.target.value)}
				value={newDescription}
			/>
			<button
				type="submit"
				className="bg-green-700 font-bold text-white py-3 px-6 w-fit rounded"
			>
				Update Post
			</button>
		</form>
	);
};

export default EditPostForm;
