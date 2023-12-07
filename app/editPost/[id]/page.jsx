import EditPostForm from "@/app/components/EditPostForm";
import React from "react";

const getPostById = async (id) => {
  const apiurl = process.env.API_URL
	try {
		const res = await fetch(`${apiurl}/api/posts/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Faild to fetch post");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

const EditTopic = async ({ params }) => {
	const { id } = params;
	const { post } = await getPostById(id);
	const { title, description } = post;
	return <EditPostForm id={id} title={title} description={description} />;
};

export default EditTopic;
