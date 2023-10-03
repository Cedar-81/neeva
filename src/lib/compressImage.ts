export default function compressImage(
	inputFile: File,
	maxWidth: number,
	maxHeight: number,
	quality: number
): Promise<Blob> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(inputFile);

		reader.onload = (event) => {
			const img = new Image();
			img.src = event.target?.result as string;

			img.onload = () => {
				const canvas = document.createElement('canvas');
				let width = img.width;
				let height = img.height;

				// Calculate the new dimensions while maintaining aspect ratio
				if (width > maxWidth) {
					height *= maxWidth / width;
					width = maxWidth;
				}
				if (height > maxHeight) {
					width *= maxHeight / height;
					height = maxHeight;
				}

				canvas.width = width;
				canvas.height = height;

				const ctx = canvas.getContext('2d');

				if (!ctx) {
					reject(new Error('Could not get 2D context'));
					return;
				}

				// Draw the image on the canvas with the new dimensions
				ctx.drawImage(img, 0, 0, width, height);

				// Convert the canvas content back to a compressed image
				canvas.toBlob(
					(blob) => {
						if (!blob) {
							reject(new Error('Failed to compress image'));
							return;
						}
						resolve(blob);
					},
					'image/jpeg', // You can change the format here (e.g., 'image/png')
					quality // You can adjust the image quality (0 to 1)
				);
			};

			img.onerror = (error) => {
				reject(error);
			};
		};

		reader.onerror = (error) => {
			reject(error);
		};
	});
}
