import mongoose, { model, Schema } from "mongoose";
import { ITask, taskSchema } from "./task";
import { IExample, exampleSchema } from "./example";

export interface IProject {
	name: String;
	description: String;
	task: ITask;
	examples: IExample[];
	active: Boolean;
}

export const projectSchema = new Schema<IProject>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	task: { type: String, required: false },
	examples: [{ type: exampleSchema, default: [], required: true }],
	active: {type: Boolean, required: true}
});

export const Project = mongoose.models.Project || model<IProject>("Project", projectSchema, "projects");