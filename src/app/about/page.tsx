import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about Image Converter, our mission, and the team behind our free online image conversion tools.",
};

export default function AboutPage() {
	return (
		<main className='container max-w-4xl mx-auto py-12 px-4'>
			<h1 className='text-4xl font-bold mb-6'>About Image Converter</h1>

			<section className='mb-10'>
				<h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
				<p className='text-lg mb-4'>
					At Image Converter, our mission is to provide free,
					high-quality image conversion tools that are accessible to
					everyone. We believe that image editing and conversion
					should be simple, fast, and available without the need for
					expensive software or technical expertise.
				</p>
				<p className='text-lg mb-4'>
					Founded in 2023, we&apos;ve been committed to developing
					tools that help individuals, content creators, and
					businesses manage their visual assets efficiently.
				</p>
			</section>

			<section className='mb-10'>
				<h2 className='text-2xl font-semibold mb-4'>What We Offer</h2>
				<p className='text-lg mb-4'>
					Our platform provides a comprehensive suite of image
					conversion tools, including:
				</p>
				<ul className='list-disc pl-6 mb-4 space-y-2'>
					<li>PNG to JPG conversion</li>
					<li>JPG to PNG conversion</li>
					<li>JPEG to PNG conversion</li>
					<li>PNG to WebP conversion</li>
					<li>WebP to JPG conversion</li>
					<li>And many more format conversions</li>
				</ul>
				<p className='text-lg'>
					All our tools are designed with user privacy in mind. We
					don&apos;t store your images on our servers longer than
					necessary for processing, and we never share your files with
					third parties.
				</p>
			</section>

			<section className='mb-10'>
				<h2 className='text-2xl font-semibold mb-4'>Our Technology</h2>
				<p className='text-lg mb-4'>
					We use cutting-edge web technologies to ensure our
					conversion tools are fast, reliable, and produce
					high-quality results. Our platform is built on a modern tech
					stack including Next.js, React, and cloud-based image
					processing APIs.
				</p>
				<p className='text-lg'>
					We&apos;re constantly improving our algorithms and adding
					new features to provide you with the best possible
					experience.
				</p>
			</section>

			<section>
				<h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
				<p className='text-lg'>
					Have questions or suggestions? We&apos;d love to hear from
					you! Visit our{" "}
					<a href='/contact' className='text-primary hover:underline'>
						Contact page
					</a>{" "}
					to get in touch with our team.
				</p>
			</section>
		</main>
	);
}
