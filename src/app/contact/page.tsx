import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with the Image Converter team. We're here to help with any questions or feedback about our image conversion tools.",
};

export default function ContactPage() {
	return (
		<main className='container max-w-4xl mx-auto py-12 px-4'>
			<h1 className='text-4xl font-bold mb-6'>Contact Us</h1>

			<div className='grid md:grid-cols-2 gap-10'>
				<div>
					<p className='text-lg mb-6'>
						Have questions, feedback, or need assistance with our
						image conversion tools? We&apos;re here to help! Fill
						out the form and we&apos;ll get back to you as soon as
						possible.
					</p>

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>Email</h2>
						<p className='text-primary'>
							support@pngimageconverter.com
						</p>
					</div>

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>
							Business Hours
						</h2>
						<p>Monday - Friday: 9am - 5pm EST</p>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>
							Follow Us
						</h2>
						<div className='flex space-x-4'>
							<a
								href='https://twitter.com/imageconverter'
								className='text-primary hover:text-primary/80'>
								Twitter
							</a>
							<a
								href='https://facebook.com/imageconverter'
								className='text-primary hover:text-primary/80'>
								Facebook
							</a>
							<a
								href='https://instagram.com/imageconverter'
								className='text-primary hover:text-primary/80'>
								Instagram
							</a>
						</div>
					</div>
				</div>

				<div className='bg-card rounded-lg p-6 shadow-sm'>
					<ContactForm />
				</div>
			</div>
		</main>
	);
}
