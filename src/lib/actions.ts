"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate a delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would send this data to your backend or email service
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // For demonstration purposes, we'll just log the data
  console.log({
    name,
    email,
    subject,
    message,
  })

  // Return success
  return { success: true }
}
