import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Terms and conditions for using Image Converter's online image conversion tools and services.",
};

export default function TermsPage() {
	return (
		<main className='container max-w-4xl mx-auto py-12 px-4'>
			<h1 className='text-4xl font-bold mb-6'>Terms of Service</h1>

			<p className='text-lg mb-6'>Last Updated: April 22, 2024</p>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					1. Acceptance of Terms
				</h2>
				<p className='mb-4'>
					By accessing or using Image Converter&apos;s website and
					services, you agree to be bound by these Terms of Service.
					If you do not agree to these terms, please do not use our
					services.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					2. Description of Service
				</h2>
				<p className='mb-4'>
					Image Converter provides online tools for converting images
					between different formats. Our services are provided
					&quot;as is&quot; and may be modified or updated at any
					time.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>3. User Conduct</h2>
				<p className='mb-4'>
					You agree to use our services only for lawful purposes and
					in accordance with these Terms. You are responsible for
					ensuring that the content you upload does not violate any
					laws or infringe on any third-party rights.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					4. Intellectual Property
				</h2>
				<p className='mb-4'>
					All content, features, and functionality on our website,
					including but not limited to text, graphics, logos, and
					code, are owned by Image Converter and are protected by
					copyright, trademark, and other intellectual property laws.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>5. Privacy</h2>
				<p className='mb-4'>
					Your use of our services is also governed by our Privacy
					Policy, which can be found at{" "}
					<a href='/privacy' className='text-primary hover:underline'>
						/privacy
					</a>
					.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					6. Limitation of Liability
				</h2>
				<p className='mb-4'>
					In no event shall Image Converter be liable for any
					indirect, incidental, special, consequential, or punitive
					damages, including without limitation, loss of profits,
					data, use, goodwill, or other intangible losses.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					7. Changes to Terms
				</h2>
				<p className='mb-4'>
					We reserve the right to modify these Terms at any time. We
					will provide notice of significant changes by posting the
					new Terms on our website. Your continued use of our services
					after such modifications constitutes your acceptance of the
					revised Terms.
				</p>
			</section>

			<section>
				<h2 className='text-2xl font-semibold mb-4'>
					8. Contact Information
				</h2>
				<p>
					If you have any questions about these Terms, please contact
					us at{" "}
					<a
						href='mailto:legal@pngimageconverter.com'
						className='text-primary hover:underline'>
						legal@pngimageconverter.com
					</a>
					.
				</p>
			</section>
		</main>
	);
}
