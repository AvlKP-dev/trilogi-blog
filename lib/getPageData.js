import path from "path";
import matter from "gray-matter";

export default function getPageData(fileName) {
	const data = {};

	const dir = path.join(process.cwd(), "_org", fileName);
	const file = matter.read(dir);
	const res = file.content
		.split("\n")
		.filter((item) => item.length > 0)
		.forEach((item) => {
			const [title, content] = item.split(": ");
			data[title] = content;
		});

	return data;
}
