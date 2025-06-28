"use client";

import {
	Zap,
	Shield,
	Globe,
	Smartphone,
	FileType,
	Download,
	Lock,
	Repeat,
} from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: <Zap className='h-10 w-10' />,
			title: "Fast Conversion",
			description:
				"Convert your images in seconds with our optimized processing engine.",
		},
		{
			icon: <Shield className='h-10 w-10' />,
			title: "Secure Processing",
			description:
				"Your images are processed securely and deleted after conversion.",
		},
		{
			icon: <Globe className='h-10 w-10' />,
			title: "Works Everywhere",
			description: "Access our tools from any device with a web browser.",
		},
		{
			icon: <Smartphone className='h-10 w-10' />,
			title: "Mobile Friendly",
			description:
				"Fully responsive design works perfectly on smartphones and tablets.",
		},
		{
			icon: <FileType className='h-10 w-10' />,
			title: "Multiple Formats",
			description:
				"Support for PNG, JPG, JPEG, WebP, GIF, and more image formats.",
		},
		{
			icon: <Download className='h-10 w-10' />,
			title: "Batch Processing",
			description: "Convert multiple images at once to save time.",
		},
		{
			icon: <Lock className='h-10 w-10' />,
			title: "Privacy First",
			description:
				"No registration required. We don't store your images.",
		},
		{
			icon: <Repeat className='h-10 w-10' />,
			title: "Unlimited Conversions",
			description: "No limits on the number of images you can convert.",
		},
	];

	return (
		<section className='w-full py-12 md:py-24'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center mb-10'>
					<h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
						Why Choose Our Image Converter
					</h2>
					<p className='mx-auto max-w-[700px] text-muted-foreground md:text-lg'>
						Our tools are designed to make image conversion simple,
						fast, and secure.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='flex flex-col items-center text-center p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow'>
							<div className='p-2 rounded-full bg-primary/10 text-primary mb-4'>
								{feature.icon}
							</div>
							<h3 className='text-xl font-bold mb-2'>
								{feature.title}
							</h3>
							<p className='text-muted-foreground'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
