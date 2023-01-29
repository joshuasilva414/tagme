import mongoose, { Schema } from "mongoose";
import { ITask, taskSchema } from "./task";

export interface IExample {
	input: String,
	output?: String
}

export const exampleSchema = new Schema<IExample>({
	input: {type: String, required: true, unique: true},
	output: {type: String, required: false},
})

// export interface IExample {
// 	inputTypes: String[];
// 	outputTypes: String[];
// 	input: String[];
// 	output: String[];
// 	isComplete: Boolean;
// }

// export const exampleSchema = new Schema<IExample>({
// 	inputTypes: [String],
// 	outputTypes: [String],
// 	input: [String],
// 	output: [String],
// 	isComplete: Boolean
// });
