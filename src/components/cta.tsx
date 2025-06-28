"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
	return (
		<section className='w-full py-12 md:py-24 bg-primary text-primary-foreground'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
							Ready to Convert Your Images?
						</h2>
						<p className='mx-auto max-w-[700px] md:text-xl'>
							Our free online tools make image conversion quick
							and easy. No registration required.
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-4'>
						<Link href='#conversion-tools'>
							<Button size='lg' variant='secondary'>
								Get Started Now
							</Button>
						</Link>
						<Link href='/contact'>
							<Button
								variant='outline'
								size='lg'
								className='border-primary-foreground hover:bg-primary-foreground hover:text-primary'>
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
