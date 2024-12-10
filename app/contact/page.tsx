'use client'

import { useRef, useState } from "react"
import { useFormStatus } from "react-dom"
import { submitContactForm } from "../actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/useToast"

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button 
      type="submit" 
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState({ success: false, error: null })
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    if (result.success) {
      setFormState({ success: true, error: null })
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      })
      formRef.current?.reset()
    } else {
      setFormState({ success: false, error: result.error })
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2 luxury-text">Contact Me</CardTitle>
          <CardDescription>Get in touch for opportunities or collaborations.</CardDescription>
        </CardHeader>
        <form ref={formRef} action={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="luxury-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="luxury-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                className="luxury-border"
              />
            </div>
            <SubmitButton />
          </CardContent>
        </form>
      </Card>
    </div>
  )
}

