"use server";

import Post from "@/database/post.model";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";

export async function createPost(params: any) {
  try {
    connectToDatabase();
    const { title, content, tags, author, path } = params;

    //create the post
    const post = await Post.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    // create the tags or get them if theu already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { post: post._id } },
        { upsert: true, new: true },
      );
      tagDocuments.push(existingTag._id);
    }

    await Post.findByIdAndUpdate(post._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // create an interaction record for the user's
    //ask_question action

    //Increment author's reputation by +5 for creating a post
  } catch (error) {}
}
