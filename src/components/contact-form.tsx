"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions";
import { toast } from "sonner";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(event.currentTarget);

		try {
			await submitContactForm(formData);

			toast.success("Message sent", {
				description:
					"Thank you for your message. We'll get back to you soon.",
			});

			// Reset form
			event.currentTarget.reset();
		} catch (error) {
			console.error(error);
			toast.error(
				"There was a problem sending your message. Please try again."
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-6'>
			<div className='space-y-2'>
				<Label htmlFor='name'>Name</Label>
				<Input id='name' name='name' required />
			</div>

			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input id='email' name='email' type='email' required />
			</div>

			<div className='space-y-2'>
				<Label htmlFor='subject'>Subject</Label>
				<Input id='subject' name='subject' required />
			</div>

			<div className='space-y-2'>
				<Label htmlFor='message'>Message</Label>
				<Textarea id='message' name='message' rows={5} required />
			</div>

			<Button type='submit' className='w-full' disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
}
