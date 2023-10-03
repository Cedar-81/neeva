export function splitTextIntoPages(text, divHeight) {
	const tempDiv = document.createElement('div');
	tempDiv.style.visibility = 'hidden';
	tempDiv.style.position = 'absolute';
	tempDiv.style.width = '100%';
	tempDiv.style.height = 'auto';
	tempDiv.style.overflow = 'hidden';
	tempDiv.style.whiteSpace = 'pre-wrap';
	tempDiv.style.wordWrap = 'break-word';
	document.body.appendChild(tempDiv);

	const words = text.split(' ');
	let currentHeight = 0;
	let currentPage = [];
	const pages = [currentPage];

	for (let i = 0; i < words.length; i++) {
		tempDiv.textContent = currentPage.join(' ') + ' ' + words[i];
		const height = tempDiv.offsetHeight;

		if (height <= divHeight) {
			currentPage.push(words[i]);
			currentHeight = height;
		} else {
			currentPage = [words[i]];
			pages.push(currentPage);
			currentHeight = tempDiv.offsetHeight;
		}
	}

	document.body.removeChild(tempDiv);
	return pages.map((page) => page.join(' '));
}
