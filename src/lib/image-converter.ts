export async function convertImage(
	file: File,
	targetFormat: string
): Promise<string> {
	return new Promise((resolve, reject) => {
		try {
			// Create a FileReader to read the file
			const reader = new FileReader();

			reader.onload = (event) => {
				const img = new Image();
				img.onload = () => {
					// Create a canvas element
					const canvas = document.createElement("canvas");
					canvas.width = img.width;
					canvas.height = img.height;

					// Draw the image on the canvas
					const ctx = canvas.getContext("2d");
					if (!ctx) {
						reject(new Error("Could not get canvas context"));
						return;
					}

					// Fill with white background for formats that don't support transparency
					if (targetFormat === "jpg" || targetFormat === "jpeg") {
						ctx.fillStyle = "white";
						ctx.fillRect(0, 0, canvas.width, canvas.height);
					}

					ctx.drawImage(img, 0, 0);

					// Convert the canvas to the target format
					let mimeType: string;
					switch (targetFormat) {
						case "png":
							mimeType = "image/png";
							break;
						case "jpg":
						case "jpeg":
							mimeType = "image/jpeg";
							break;
						case "webp":
							mimeType = "image/webp";
							break;
						default:
							mimeType = "image/png";
					}

					// Get the data URL from the canvas
					const dataUrl = canvas.toDataURL(mimeType, 0.9);
					resolve(dataUrl);
				};

				img.onerror = () => {
					reject(new Error("Failed to load image"));
				};

				// Set the source of the image to the FileReader result
				img.src = event.target?.result as string;
			};

			reader.onerror = () => {
				reject(new Error("Failed to read file"));
			};

			// Read the file as a data URL
			reader.readAsDataURL(file);
		} catch (error) {
			reject(error);
		}
	});
}
