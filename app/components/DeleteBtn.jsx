"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { HiOutlineTrash } from "react-icons/hi2";

const DeleteBtn = ({ id }) => {
	const router = useRouter();
	const deletePost = async () => {
		const confirmed = confirm("Are you sure to delete this post");
		if (confirmed) {
			const res = await fetch(`/api/posts?id=${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				router.refresh();
			}
		}
	};
	return (
		<button onClick={deletePost}>
			<HiOutlineTrash size={24} />
		</button>
	);
};

export default DeleteBtn;
