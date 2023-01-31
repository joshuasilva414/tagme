import mongoose, { Schema, model } from "mongoose";

export interface ITaskField {
	prompt: String;
	fieldType: String;
}

export const taskFieldSchema = new Schema<ITaskField>({
	prompt: String,
	fieldType: String,
});

export interface ITask {
	description: String;
	taskFields: ITaskField[];
}

export const taskSchema = new Schema<ITask>({
	description: {type: String, required: true},
	taskFields: [{type: {
		prompt: String,
		fieldType: String
	}, required: true}],
});

// export default mongoose.models.Task || model<ITask>("Task", taskSchema, "tasks");