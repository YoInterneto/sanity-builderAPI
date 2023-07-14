import { defineField, defineType } from "sanity";

export default defineType({
	name: "general-settings",
	title: "General Settings",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
	],
});
