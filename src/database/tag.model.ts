import { Schema, models, model, Document } from "mongoose";

/**
 * why extend Document?
 * This means that it's going to get some properties as well,
 * such as the _id, version and everything else that
 * each Document in the MongoDB database has
 *
 */
export interface ITag extends Document {
  name: String;
  description: String;
  posts: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

// Check if the model alredy exists, if not create it
const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
