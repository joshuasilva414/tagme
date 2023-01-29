import mongoose, { model, Schema } from "mongoose";
import { ITask, taskSchema } from "./task";
import { IExample, exampleSchema } from "./example";

export interface IProject extends mongoose.Document {
	name: String;
	description: String;
	pipeline: ITask[];
	examples: IExample[];
}

export default new Schema<IProject>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	pipeline: [{ type: taskSchema, default: [] }],
	examples: [{ type: exampleSchema, default: [] }],
});
