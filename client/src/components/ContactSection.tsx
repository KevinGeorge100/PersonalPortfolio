import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. I'll get back to you soon!",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full md:w-7/12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project Inquiry" 
                          {...field} 
                          className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or inquiry..." 
                          rows={5} 
                          {...field} 
                          className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Info */}
          <div className="w-full md:w-5/12 bg-dark p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6 font-inter">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Email</h4>
                  <a href="mailto:kevin@example.com" className="text-white hover:text-primary transition-colors">kevin@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-white hover:text-primary transition-colors">+1 (123) 456-7890</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Location</h4>
                  <p className="text-white">Gujarat, INDIA</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-gray-300 font-medium mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <FaGithub />
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <FaDribbble />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
