# Kevin George - Professional Portfolio Website
![Portfolio Preview](/screenshot.png)
A modern, responsive portfolio website showcasing my skills, projects, and professional experience as an Engineer, Developer, and Problem Solver.
## 🌟 Features
- **Modern UI/UX Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dynamic Content**: PostgreSQL database integration for managing portfolio content
- **Interactive Elements**: Animated sections, modals, and smooth scrolling
- **Contact Form**: Backend integration for receiving messages directly from visitors
- **Dark/Light Theme**: Theme toggle for better user experience
- **SEO Friendly**: Optimized for search engines
## 🛠️ Technologies Used
### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- React Query for data fetching
- Wouter for routing
### Backend
- Node.js with Express
- PostgreSQL database
- Drizzle ORM for database operations
- Zod for schema validation
### DevOps
- Replit for development and hosting
- PostgreSQL for data persistence
## 📋 Sections
- **Hero**: Introduction and call-to-action
- **About**: Professional background and skills
- **Milestones**: Educational and career timeline
- **Strategy**: Approach to solving problems
- **Portfolio**: Showcase of projects and work
- **Contact**: Form to get in touch
## 🚀 Getting Started
### Prerequisites
- Node.js (v16+)
- PostgreSQL database
### Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/kevinjosegeorge/portfolio.git
cd portfolio
Install dependencies
npm install
Set up environment variables
Create a .env file in the root directory with the following variables:
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
Run database migrations
npm run db:push
Start the development server
npm run dev
Open your browser and navigate to http://localhost:5000
📝 Database Schema
The portfolio uses a PostgreSQL database with the following schema:

users: Authentication and admin access
skills: Technical and professional skills with proficiency levels
projects: Portfolio projects with details and categories
milestones: Career and educational timeline events
contact_messages: Messages from the contact form
🔧 Project Structure
portfolio/
├── client/               # Frontend React application
│   ├── public/           # Static assets
│   └── src/
│       ├── components/   # UI components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utility functions
│       └── pages/        # Page components
├── server/               # Backend Express application
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database operations
└── shared/               # Shared code between frontend and backend
    └── schema.ts         # Database schema and types
📱 Contact
Email: kevinjosegeorge@ieee.org
LinkedIn: linkedin.com/in/kwingeorge
Education: Amal Jyothi College of Engineering
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
