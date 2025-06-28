"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Download, ImageIcon, Trash2 } from "lucide-react";
import { convertImage } from "@/lib/image-converter";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface ImageConverterProps {
	sourceFormat: string;
	targetFormat: string;
	description: string;
}

export default function ImageConverter({
	sourceFormat,
	targetFormat,
	description,
}: ImageConverterProps) {
	const [file, setFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const [convertedImage, setConvertedImage] = useState<string | null>(null);
	const [isConverting, setIsConverting] = useState(false);
	const [progress, setProgress] = useState(0);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const selectedFile = e.target.files[0];

			// Check if file is an image
			if (!selectedFile.type.startsWith("image/")) {
				toast.error("Please select an image file.");
				return;
			}

			// Check file size (max 10MB)
			if (selectedFile.size > 10 * 1024 * 1024) {
				toast.error("Please select an image smaller than 10MB.");
				return;
			}

			setFile(selectedFile);
			setConvertedImage(null);

			const reader = new FileReader();
			reader.onload = (event) => {
				setPreview(event.target?.result as string);
			};
			reader.readAsDataURL(selectedFile);
		}
	};

	const handleConvert = async () => {
		if (!file) return;

		setIsConverting(true);
		setProgress(0);

		try {
			// Simulate progress
			const progressInterval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 90) {
						clearInterval(progressInterval);
						return 90;
					}
					return prev + 10;
				});
			}, 300);

			const result = await convertImage(file, targetFormat.toLowerCase());

			clearInterval(progressInterval);
			setProgress(100);
			setConvertedImage(result);

			toast.success("Conversion complete");
		} catch (error) {
			console.error(error);
			toast.error("Conversion failed");
		} finally {
			setIsConverting(false);
		}
	};

	const handleReset = () => {
		setFile(null);
		setPreview(null);
		setConvertedImage(null);
		setProgress(0);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleDownload = () => {
		if (!convertedImage) return;

		const link = document.createElement("a");
		link.href = convertedImage;
		link.download = `converted-image.${targetFormat.toLowerCase()}`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Card className='w-full'>
			<CardContent className='p-6'>
				<div className='grid gap-6'>
					<div className='text-center'>
						<h3 className='text-2xl font-bold mb-2'>
							{sourceFormat} to {targetFormat} Converter
						</h3>
						<p className='text-muted-foreground'>{description}</p>
					</div>

					{!file ? (
						<div
							className='border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors'
							onClick={() => fileInputRef.current?.click()}>
							<div className='flex flex-col items-center gap-2'>
								<Upload className='h-10 w-10 text-muted-foreground' />
								<h3 className='text-lg font-medium'>
									Click to upload or drag and drop
								</h3>
								<p className='text-sm text-muted-foreground'>
									{sourceFormat} files up to 10MB
								</p>
								<input
									ref={fileInputRef}
									type='file'
									accept={`image/${sourceFormat.toLowerCase()}`}
									className='hidden'
									onChange={handleFileChange}
								/>
							</div>
						</div>
					) : (
						<div className='space-y-6'>
							<div className='grid md:grid-cols-2 gap-6'>
								<div className='space-y-2'>
									<div className='font-medium'>
										Original Image ({sourceFormat})
									</div>
									<div className='relative aspect-square rounded-lg overflow-hidden border bg-muted'>
										{preview && (
											<Image
												src={
													preview ||
													"/placeholder.svg"
												}
												alt='Original image'
												fill
												className='object-contain'
											/>
										)}
									</div>
								</div>

								<div className='space-y-2'>
									<div className='font-medium'>
										Converted Image ({targetFormat})
									</div>
									<div className='relative aspect-square rounded-lg overflow-hidden border bg-muted'>
										{convertedImage ? (
											<Image
												src={
													convertedImage ||
													"/placeholder.svg"
												}
												alt='Converted image'
												fill
												className='object-contain'
											/>
										) : (
											<div className='flex items-center justify-center h-full'>
												<ImageIcon className='h-16 w-16 text-muted-foreground/30' />
											</div>
										)}
									</div>
								</div>
							</div>

							{isConverting && (
								<div className='space-y-2'>
									<div className='text-sm text-muted-foreground'>
										Converting... {progress}%
									</div>
									<Progress value={progress} />
								</div>
							)}

							<div className='flex flex-wrap gap-3'>
								{!convertedImage ? (
									<Button
										onClick={handleConvert}
										disabled={isConverting}>
										Convert to {targetFormat}
									</Button>
								) : (
									<Button onClick={handleDownload}>
										<Download className='mr-2 h-4 w-4' />
										Download {targetFormat}
									</Button>
								)}
								<Button variant='outline' onClick={handleReset}>
									<Trash2 className='mr-2 h-4 w-4' />
									Reset
								</Button>
							</div>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
