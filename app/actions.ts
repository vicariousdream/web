'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." }
  }

  const { name, email, message } = validatedFields.data

  try {
    // Log the form data (in a real app, you'd send an email or save to a database here)
    console.log('Form submission:', { name, email, message })
    
    // Here you would typically send an email or save to a database
    // For example:
    // await sendEmail({ to: 'your@email.com', subject: 'New Contact Form Submission', body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` })
    // or
    // await db.insert({ name, email, message }).into('contact_submissions')

    return { success: true }
  } catch (error) {
    console.error('Error processing form submission:', error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}

