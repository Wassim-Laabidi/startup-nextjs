"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import Post from "@/database/post.model";
import {
  CreateUserParams,
  GetUserByIdParams,
  GetUserStatsParams,
} from "./shared.types";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserInfo(params: GetUserByIdParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error("❌🔍 User not found 🔍❌");
    }

    const userOutput = {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      password: user.password, // Note: It's not recommended to store passwords in plain text. Consider using a secure password hashing algorithm.
      phoneNumber: user.phoneNumber,
      bio: user.bio,
      picture: user.picture,
      location: user.location,
      socialMediaLink: user.socialMediaLink,
      reputation: user.reputation,
      saved: user.saved,
      joinedAt: user.joinedAt,
    };

    return userOutput;
  } catch (error) {
    console.error(error);
  }
}
