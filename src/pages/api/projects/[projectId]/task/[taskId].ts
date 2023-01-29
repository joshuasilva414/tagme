// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "@/lib/schemas/project";
import mongoose, { model } from "mongoose";

// Handles the creation of a new project
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const {projectId, taskId} = req.query;

	if (req.method == "GET") {
		await mongoose.connect(
			`mongodb+srv://joshua-silva-414:${process.env.DB_PASSWORD}@tagme1.0fgl2.mongodb.net/test?retryWrites=true&w=majority`
		);
		const task = await Project.find({_id: projectId});
		res.status(200).json({ data: task });
	} else {
		res.status(405).end();
	}
}