export default function trim(text, length) {
	if (text.length > length) {
		const textLastChar = text.substring(0, length);
		const textLastWord = textLastChar.substring(
			0,
			Math.min(textLastChar.length, textLastChar.lastIndexOf(" "))
		);
		return textLastWord;
	} else {
		const textLastWord = text;
		return textLastWord;
	}
}
