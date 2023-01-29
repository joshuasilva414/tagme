import mongoose, { Schema } from "mongoose";

export interface IExample extends mongoose.Document {
	inputTypes: String[];
	outputTypes: String[];
	input: String[];
	output: String[];
}

export const exampleSchema = new Schema<IExample>({
	inputTypes: [String],
	outputTypes: [String],
	input: [String],
	output: [String],
});
