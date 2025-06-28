"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageConverter from "./image-converter";

export default function ConversionTools() {
	return (
		<section
			id='conversion-tools'
			className='w-full py-12 md:py-24 bg-muted/50'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center mb-10'>
					<h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
						Image Conversion Tools
					</h2>
					<p className='mx-auto max-w-[700px] text-muted-foreground md:text-lg'>
						Select a tool below to convert your images to the format
						you need.
					</p>
				</div>

				<Tabs
					defaultValue='png-to-jpg'
					className='w-full max-w-4xl mx-auto'>
					<TabsList className='grid grid-cols-2 md:grid-cols-4 mb-8'>
						<TabsTrigger value='png-to-jpg'>PNG to JPG</TabsTrigger>
						<TabsTrigger value='jpg-to-png'>JPG to PNG</TabsTrigger>
						<TabsTrigger value='webp-to-jpg'>
							WebP to JPG
						</TabsTrigger>
						<TabsTrigger value='jpg-to-webp'>
							JPG to WebP
						</TabsTrigger>
					</TabsList>

					<TabsContent value='png-to-jpg'>
						<ImageConverter
							sourceFormat='PNG'
							targetFormat='JPG'
							description='Convert PNG images to JPG format. Reduce file size while maintaining good image quality.'
						/>
					</TabsContent>

					<TabsContent value='jpg-to-png'>
						<ImageConverter
							sourceFormat='JPG'
							targetFormat='PNG'
							description='Convert JPG images to PNG format. Ideal for images that need transparency or higher quality.'
						/>
					</TabsContent>

					<TabsContent value='webp-to-jpg'>
						<ImageConverter
							sourceFormat='WebP'
							targetFormat='JPG'
							description='Convert WebP images to JPG format for better compatibility with all devices and platforms.'
						/>
					</TabsContent>

					<TabsContent value='jpg-to-webp'>
						<ImageConverter
							sourceFormat='JPG'
							targetFormat='WebP'
							description='Convert JPG images to WebP format. WebP offers superior compression and quality, ideal for web use.'
						/>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
