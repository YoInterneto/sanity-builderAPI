import { defineField, defineType } from "sanity";

export default defineType({
	name: "cookie-settings",
	title: "cookie Settings",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
	],
});
