import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
	{
		title: String,
		description: String,
	},
	{
		timeStamps: true,
	}
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
