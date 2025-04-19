import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { 
  users, 
  contactMessages, 
  skills, 
  projects, 
  milestones,
  type User, 
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type Skill,
  type InsertSkill,
  type Project,
  type InsertProject,
  type Milestone,
  type InsertMilestone
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  markContactMessageAsRead(id: number): Promise<void>;
  
  // Skills methods
  getSkills(): Promise<Skill[]>;
  getSkill(id: number): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<void>;
  
  // Projects methods
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<void>;
  
  // Milestones methods
  getMilestones(): Promise<Milestone[]>;
  getMilestone(id: number): Promise<Milestone | undefined>;
  createMilestone(milestone: InsertMilestone): Promise<Milestone>;
  updateMilestone(id: number, milestone: Partial<InsertMilestone>): Promise<Milestone | undefined>;
  deleteMilestone(id: number): Promise<void>;
}

export class DbStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    // Get the database URL from environment variables
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    
    // Initialize the Postgres client
    const client = postgres(connectionString);
    
    // Initialize Drizzle with the client
    this.db = drizzle(client);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return await this.db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const result = await this.db.select().from(contactMessages).where(eq(contactMessages.id, id)).limit(1);
    return result[0];
  }
  
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = await this.db.insert(contactMessages).values(message).returning();
    return result[0];
  }
  
  async markContactMessageAsRead(id: number): Promise<void> {
    await this.db.update(contactMessages).set({ read: true }).where(eq(contactMessages.id, id));
  }
  
  // Skills methods
  async getSkills(): Promise<Skill[]> {
    return await this.db.select().from(skills).orderBy(skills.order);
  }
  
  async getSkill(id: number): Promise<Skill | undefined> {
    const result = await this.db.select().from(skills).where(eq(skills.id, id)).limit(1);
    return result[0];
  }
  
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const result = await this.db.insert(skills).values(skill).returning();
    return result[0];
  }
  
  async updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const result = await this.db.update(skills).set(skill).where(eq(skills.id, id)).returning();
    return result[0];
  }
  
  async deleteSkill(id: number): Promise<void> {
    await this.db.delete(skills).where(eq(skills.id, id));
  }
  
  // Projects methods
  async getProjects(): Promise<Project[]> {
    return await this.db.select().from(projects).orderBy(projects.order);
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    const result = await this.db.select().from(projects).where(eq(projects.id, id)).limit(1);
    return result[0];
  }
  
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return await this.db.select().from(projects).where(eq(projects.category, category)).orderBy(projects.order);
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const result = await this.db.insert(projects).values(project).returning();
    return result[0];
  }
  
  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const result = await this.db.update(projects).set(project).where(eq(projects.id, id)).returning();
    return result[0];
  }
  
  async deleteProject(id: number): Promise<void> {
    await this.db.delete(projects).where(eq(projects.id, id));
  }
  
  // Milestones methods
  async getMilestones(): Promise<Milestone[]> {
    return await this.db.select().from(milestones).orderBy(milestones.order);
  }
  
  async getMilestone(id: number): Promise<Milestone | undefined> {
    const result = await this.db.select().from(milestones).where(eq(milestones.id, id)).limit(1);
    return result[0];
  }
  
  async createMilestone(milestone: InsertMilestone): Promise<Milestone> {
    const result = await this.db.insert(milestones).values(milestone).returning();
    return result[0];
  }
  
  async updateMilestone(id: number, milestone: Partial<InsertMilestone>): Promise<Milestone | undefined> {
    const result = await this.db.update(milestones).set(milestone).where(eq(milestones.id, id)).returning();
    return result[0];
  }
  
  async deleteMilestone(id: number): Promise<void> {
    await this.db.delete(milestones).where(eq(milestones.id, id));
  }
}

// Use DbStorage since we now have a PostgreSQL database
export const storage = new DbStorage();
