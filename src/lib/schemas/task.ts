import mongoose, { Schema } from "mongoose";

export interface ITaskField extends mongoose.Document {
	prompt: String;
	fieldType: String;
}

const taskFieldSchema = new Schema<ITaskField>({
	prompt: String,
	fieldType: String,
});

export interface ITask extends mongoose.Document {
	description: String;
	taskFields: ITaskField[];
}

export const taskSchema = new Schema<ITask>({
	description: String,
	taskField: [taskFieldSchema],
});
