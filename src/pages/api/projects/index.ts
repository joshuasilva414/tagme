// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import projectSchema, { IProject } from "@/lib/schemas/project";
import mongoose, { model } from "mongoose";

// Handles the creation of a new project
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method == "GET") {
		await mongoose.connect(
			`mongodb+srv://joshua-silva-414:${process.env.DB_PASSWORD}@tagme1.0fgl2.mongodb.net/test?retryWrites=true&w=majority`
		);
		const Project = model("Project", projectSchema, "projects");
		const allProjects = await Project.find({});
		res.status(200).json({ data: allProjects });
	} else {
		res.status(405).end();
	}
}
