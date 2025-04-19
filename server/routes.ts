import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertContactMessageSchema, 
  insertSkillSchema, 
  insertProjectSchema, 
  insertMilestoneSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data with the schema from shared/schema.ts
      const formData = insertContactMessageSchema.parse(req.body);
      
      // Save to database
      const savedMessage = await storage.createContactMessage(formData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will get back to you soon.',
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      } else {
        console.error('Error processing contact form:', error);
        res.status(500).json({ 
          success: false, 
          message: 'An error occurred while processing your request. Please try again later.'
        });
      }
    }
  });

  // === Skills API Endpoints ===
  // Get all skills
  app.get('/api/skills', async (req, res) => {
    try {
      const skills = await storage.getSkills();
      res.status(200).json({ success: true, data: skills });
    } catch (error) {
      console.error('Error fetching skills:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch skills.'
      });
    }
  });

  // Get a specific skill
  app.get('/api/skills/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const skill = await storage.getSkill(id);
      
      if (!skill) {
        return res.status(404).json({ 
          success: false, 
          message: 'Skill not found.'
        });
      }
      
      res.status(200).json({ success: true, data: skill });
    } catch (error) {
      console.error('Error fetching skill:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch skill.'
      });
    }
  });

  // Create a new skill
  app.post('/api/skills', async (req, res) => {
    try {
      const skillData = insertSkillSchema.parse(req.body);
      const newSkill = await storage.createSkill(skillData);
      res.status(201).json({ success: true, data: newSkill });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid skill data', 
          errors: error.errors 
        });
      } else {
        console.error('Error creating skill:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Failed to create skill.'
        });
      }
    }
  });

  // === Projects API Endpoints ===
  // Get all projects
  app.get('/api/projects', async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch projects.'
      });
    }
  });

  // Get projects by category
  app.get('/api/projects/category/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const projects = await storage.getProjectsByCategory(category);
      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      console.error('Error fetching projects by category:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch projects by category.'
      });
    }
  });

  // Get a specific project
  app.get('/api/projects/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      
      if (!project) {
        return res.status(404).json({ 
          success: false, 
          message: 'Project not found.'
        });
      }
      
      res.status(200).json({ success: true, data: project });
    } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch project.'
      });
    }
  });

  // Create a new project
  app.post('/api/projects', async (req, res) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const newProject = await storage.createProject(projectData);
      res.status(201).json({ success: true, data: newProject });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid project data', 
          errors: error.errors 
        });
      } else {
        console.error('Error creating project:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Failed to create project.'
        });
      }
    }
  });

  // === Milestones API Endpoints ===
  // Get all milestones
  app.get('/api/milestones', async (req, res) => {
    try {
      const milestones = await storage.getMilestones();
      res.status(200).json({ success: true, data: milestones });
    } catch (error) {
      console.error('Error fetching milestones:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch milestones.'
      });
    }
  });

  // Get a specific milestone
  app.get('/api/milestones/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const milestone = await storage.getMilestone(id);
      
      if (!milestone) {
        return res.status(404).json({ 
          success: false, 
          message: 'Milestone not found.'
        });
      }
      
      res.status(200).json({ success: true, data: milestone });
    } catch (error) {
      console.error('Error fetching milestone:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch milestone.'
      });
    }
  });

  // Create a new milestone
  app.post('/api/milestones', async (req, res) => {
    try {
      const milestoneData = insertMilestoneSchema.parse(req.body);
      const newMilestone = await storage.createMilestone(milestoneData);
      res.status(201).json({ success: true, data: newMilestone });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid milestone data', 
          errors: error.errors 
        });
      } else {
        console.error('Error creating milestone:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Failed to create milestone.'
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
