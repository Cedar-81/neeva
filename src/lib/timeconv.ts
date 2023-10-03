export default function convertTimestamp(timestamp: string) {
	const date = new Date(timestamp);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const period = hours >= 12 ? 'PM' : 'AM';
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	return `${formattedHours}:${formattedMinutes}${period}`;
}
