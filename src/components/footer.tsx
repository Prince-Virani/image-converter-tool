"use client";

import Link from "next/link";

export default function Footer() {
	return (
		<footer className='border-t bg-background'>
			<div className='container mx-auto py-8 md:py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>
							Image Converter
						</h3>
						<p className='text-sm text-muted-foreground'>
							Free online tools to convert images between
							different formats.
						</p>
					</div>

					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Tools</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/#png-to-jpg'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									PNG to JPG
								</Link>
							</li>
							<li>
								<Link
									href='/#jpg-to-png'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									JPG to PNG
								</Link>
							</li>
							<li>
								<Link
									href='/#webp-converter'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									WebP Converter
								</Link>
							</li>
							<li>
								<Link
									href='/#image-resizer'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									Image Resizer
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Company</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/about'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Legal</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/terms'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href='/privacy'
									className='text-muted-foreground hover:text-foreground transition-colors'>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-8 pt-8 border-t text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} Image Converter. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
