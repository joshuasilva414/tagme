// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "@/lib/schemas/project";
import mongoose, { model } from "mongoose";

/*
Handles adding a new task to the project pipeline
body: {
    project_id: String -> The id of the project being added to,
    task: Task -> The task object to be pushed to the document
}
*/
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method == "POST") {
			await mongoose.connect(
			`mongodb+srv://joshua-silva-414:${process.env.DB_PASSWORD}@tagme1.0fgl2.mongodb.net/test?retryWrites=true&w=majority`
		);
		await Project.update(
			{ _id: req.body.projectId },
			{ $push: { pipeline: req.body.task } }
		);
		res.status(200).json({ data: Project.findOne({ _id: req.body.projectId }) });
	} else {
		res.status(405).end();
	}
}
