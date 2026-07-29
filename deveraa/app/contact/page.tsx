"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Mail, MessageSquare, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import { sendContactEmail } from "@/app/actions/contact"; // Hum server action ko separate import karenge

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 py-24 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <Link href="/" className="text-sm font-semibold text-primary hover:underline mb-4 inline-block transition-all">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Let's Start Your Project</h1>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and our engineering team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-background rounded-2xl border p-8 shadow-lg">
          {isSubmitted ? (
            /* Success Message UI */
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 ml-1" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for reaching out. We have received your project details and will contact you shortly.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="font-semibold cursor-pointer">
                Send Another Message
              </Button>
            </div>
          ) : (
            /* Actual Form UI */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3 text-sm bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-center">
                  {errorMessage}
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground" 
                    placeholder="Enter Your Name" 
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground" 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Project Details</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-muted-foreground">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-foreground" 
                    placeholder="Tell us about your requirements, timeline, and goals..." 
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={isLoading} size="lg" className="w-full h-14 text-lg font-bold hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}