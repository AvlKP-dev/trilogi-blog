import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function getPosts(type) {
	const postsDir = path.join(process.cwd(), "_posts", type);

	const fileNames = fs.readdirSync(postsDir);
	const posts = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md/, "");

		const filePath = path.join(postsDir, fileName);
		const matterRes = matter.read(filePath);
		const content = matterRes.content;

		return {
			slug,
			...matterRes.data,
			content,
		};
	});

	return posts;
}
