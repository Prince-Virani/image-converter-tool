"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<span className='text-2xl font-bold'>ImageConverter</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center space-x-6'>
					<Link
						href='/'
						className='text-sm font-medium transition-colors hover:text-primary'>
						Home
					</Link>
					<Link
						href='/about'
						className='text-sm font-medium transition-colors hover:text-primary'>
						About
					</Link>
					<Link
						href='/contact'
						className='text-sm font-medium transition-colors hover:text-primary'>
						Contact
					</Link>
					<ModeToggle />
				</nav>

				{/* Mobile Menu Button */}
				<div className='flex md:hidden items-center space-x-2'>
					<ModeToggle />
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className='md:hidden border-t'>
					<div className='container py-4 flex flex-col space-y-4'>
						<Link
							href='/'
							className='text-sm font-medium transition-colors hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>
						<Link
							href='/about'
							className='text-sm font-medium transition-colors hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							About
						</Link>
						<Link
							href='/contact'
							className='text-sm font-medium transition-colors hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Contact
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
