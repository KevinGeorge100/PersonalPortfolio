import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const formData = contactFormSchema.parse(req.body);
      
      // In a real application, you would save this to a database or send an email
      console.log('Contact form submission:', formData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will get back to you soon.' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'An error occurred while processing your request. Please try again later.'
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
