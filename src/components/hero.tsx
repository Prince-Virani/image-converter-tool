"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
							Convert Images Online with Ease
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Free online tools to convert images between PNG,
							JPG, JPEG, WebP, and more formats instantly.
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-4'>
						<Link href='#conversion-tools'>
							<Button size='lg'>Get Started</Button>
						</Link>
						<Link href='/about'>
							<Button variant='outline' size='lg'>
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
