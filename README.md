# Neeva – Crafting Worlds with Words

> A modern platform where writers discover, create, and share captivating short stories, poetry, and flash fiction with a vibrant community of storytellers.

![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat-square&logo=svelte)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase)

---

## 🎯 Overview

**Neeva** is a full-stack web application designed for writers and readers to connect through the art of concise storytelling. Built with modern web technologies, it provides an intuitive platform where creators can craft and share micro-fiction, poetry, and short stories while building engaged communities around their work.

Whether you're a seasoned author or an aspiring writer, Neeva empowers you to tell compelling stories where every word counts.

---

## ✨ Key Features

### 📚 **Lens (Story Hub)**
- Discover and read curated short stories organized by genre
- Intelligent prioritization algorithm to surface quality content
- View story metadata including word count, genre, and author details
- Track reading progress across your favorite stories

### 📖 **Bookshelf**
- Personalized library for bookmarks and saved stories
- Quick-access reading interface with story reader
- Organize stories into custom categories
- Track your reading history and preferences

### 🔍 **Browse & Discovery**
- Advanced filtering by genre, author, and popularity
- Featured stories and trending content
- Search functionality to find specific stories and writers
- Category-based navigation for easy exploration

### ✍️ **Create & Publish**
- Intuitive story editor powered by TipTap (rich text editor)
- Multi-step story creation workflow
- Support for story details, content editing, and publication
- Real-time preview and formatting

### 👥 **Community**
- Community feed to discover stories from other writers
- Category-based communities for genre-specific discussions
- Enhanced social interaction and writer collaboration
- Community search and filtering

### 💬 **Comments & Engagement**
- Nested comment system for story discussions
- Reply threads to foster conversations
- User avatars and profile integration
- Real-time comment notifications

### 👤 **User Profiles**
- Customizable user profiles with profile images
- Author bio and story showcase
- Lens created by the user
- Reading statistics and engagement metrics

### 🔐 **Authentication**
- Google OAuth integration for seamless sign-up
- Secure session management with Supabase
- Auto-refresh token handling
- Protected routes and user-specific data access

---

## 🏗️ Tech Stack

### **Frontend**
- **Svelte 5** – Reactive UI framework with minimal JavaScript overhead
- **SvelteKit** – Full-stack framework for SSR and routing
- **TypeScript** – Type-safe development
- **Tailwind CSS 4** – Utility-first CSS framework
- **DaisyUI** – Component library built on Tailwind

### **Backend & Database**
- **Supabase** – Open-source Firebase alternative
  - PostgreSQL database
  - Real-time subscriptions
  - Row-level security policies
- **Node.js** – Server-side runtime

### **Libraries & Tools**
- **TipTap** – Headless rich text editor
- **Iconify** – Icon library integration
- **svelte-french-toast** – Toast notifications
- **Vite** – Lightning-fast build tool
- **ESLint & Prettier** – Code quality and formatting

### **Deployment**
- **Vercel** – Hosting platform with edge functions
- **Environment variables** – Secure configuration management

---

## 📁 Project Structure

```
neeva/
├── src/
│   ├── components/           # Reusable Svelte components
│   │   ├── auth/            # Authentication components (Signin, Signup)
│   │   ├── bookdetail/      # Book detail view components
│   │   ├── Bookshelf/       # Bookshelf feature components
│   │   ├── browse/          # Browse & discovery components
│   │   ├── comment/         # Comment & discussion components
│   │   ├── community/       # Community components
│   │   ├── Create/          # Story creation components
│   │   ├── lens/            # Lens (story) related components
│   │   ├── Profile/         # User profile components
│   │   └── Sidebar.svelte   # Main navigation sidebar
│   │
│   ├── lib/                  # Utility and service files
│   │   ├── supabase.ts      # Supabase client initialization
│   │   ├── database.types.ts # TypeScript database types
│   │   ├── appStore.ts      # Global state management
│   │   ├── utils.ts         # Helper utilities
│   │   ├── lensPriorityCalc.ts # Story ranking algorithm
│   │   └── compressImage.ts # Image compression utility
│   │
│   ├── routes/              # SvelteKit routes (file-based routing)
│   │   ├── +layout.svelte   # Root layout
│   │   ├── +page.svelte     # Home page
│   │   ├── (dashboard)/     # Protected dashboard routes
│   │   │   ├── bookshelf/   # Bookshelf page
│   │   │   ├── browse/      # Browse stories page
│   │   │   ├── community/   # Community page
│   │   │   ├── create/      # Story creation pages
│   │   │   ├── lens/        # Lens hub page
│   │   │   └── profile/     # User profile page
│   │   └── auth/            # Authentication routes
│   │       ├── signin/      # Sign in page
│   │       ├── signup/      # Sign up page
│   │       ├── callback/    # OAuth callback handler
│   │       └── details/     # Profile details setup
│   │
│   ├── app.css             # Global styles with Tailwind
│   ├── app.html            # HTML template
│   └── hooks.server.ts     # Server-side hooks (auth middleware)
│
├── static/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── svelte.config.js        # Svelte configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+
- **Yarn** (package manager)
- **Supabase account** (for database and auth)
- **Google OAuth credentials** (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/neeva.git
   cd neeva
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the project root:
   ```env
   PUBLIC_SUPABASE_URL=your_supabase_url
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

### Environment Setup

Configure the following in your Supabase project:
- **Authentication**: Enable Google OAuth provider
- **URL Configuration**: Add callback URLs for local and production environments
- **Database**: Set up required tables and row-level security policies

---

## 🔐 Authentication Flow

Neeva implements a secure OAuth2 authentication flow with Supabase:

1. **User Initiates Login**
   - User clicks "Continue with Google" on signin/signup page
   - Dynamic redirect URL based on current origin

2. **OAuth Authorization**
   - Redirects to Supabase OAuth endpoint
   - User authenticates with Google
   - Supabase handles token exchange

3. **Session Callback**
   - `/auth/callback` route exchanges auth code for session
   - Server-side session validation
   - User data loaded into global store

4. **Session Management**
   - Client listens for auth state changes
   - Auto-refresh tokens enabled
   - Secure session persistence

---

## 🎨 Core Architecture

### State Management
- **Global Store** (`appStore.ts`): Centralized state for user session, UI states
- **Svelte Stores**: Reactive store pattern for component-level state
- **Server-side Load Functions**: Data fetching with server context

### Data Flow
```
User Action → Component → Server Action → Database → Global Store → UI Update
```

### Security Considerations
- Row-level security (RLS) policies in Supabase
- Server-side session validation
- Protected routes with authentication checks
- Secure token handling with httpOnly cookies

---

## 📝 Available Scripts

```bash
# Development
yarn dev              # Start development server with HMR
yarn check           # Run TypeScript and Svelte checks
yarn check:watch     # Run checks in watch mode

# Production
yarn build           # Build for production
yarn preview         # Preview production build locally

# Code Quality
yarn lint            # Run ESLint and Prettier checks
yarn format          # Format code with Prettier
```

---

## 🎯 Key Features Deep Dive

### Lens Prioritization Algorithm
The platform uses a sophisticated ranking system to surface quality stories:
- Engagement metrics (views, likes, comments)
- Freshness of content (newer stories prioritized)
- Author reputation and history
- Genre-specific trending

### Rich Text Editor
TipTap integration provides:
- Formatting options (bold, italic, links, lists)
- Markdown support
- Real-time preview
- Clean, accessible editor interface

### Comment System
Nested comment threading enables:
- Multi-level conversation threads
- Author identification with avatars
- Real-time updates (potential)
- Reply notifications

---

## 🔄 Development Workflow

### Code Organization Best Practices
- **Components**: Small, reusable, single responsibility
- **Stores**: Centralized state management
- **Routes**: Organized by feature/domain
- **Utilities**: Pure functions for data transformation

### Type Safety
- Full TypeScript coverage
- Generated database types from Supabase schema
- Type-safe components with props validation

### Testing Recommendations
- Unit tests for utility functions
- Component testing with Vitest
- Integration tests for API calls
- E2E tests with Playwright

---

## 📊 Database Schema Highlights

### Key Tables
- **auth.users** – User authentication (managed by Supabase)
- **UserDetails** – Extended user profile information
- **Lens** – Stories with metadata and content
- **Comments** – Comment threads and replies
- **Likes** – User engagement tracking
- **Bookshelf** – Saved stories per user

---

## 🌐 Deployment

### Vercel Deployment
The project is configured for Vercel with:
- Automatic deployments from Git
- Edge function support
- Environment variable management
- Preview deployments for pull requests

### Build Configuration
- Vercel adapter for SvelteKit
- Fallback local adapter for development
- Optimized bundle splitting

---

## 🎓 Learning Outcomes & Architecture Decisions

### Why SvelteKit?
- **Reactivity**: Svelte's fine-grained reactivity reduces boilerplate
- **Performance**: Compiler-based approach with minimal runtime
- **DX**: File-based routing and server hooks simplify development
- **Full-stack**: Unified development with server and client in one codebase

### Why Supabase?
- **Open-source**: Community-driven with transparent development
- **PostgreSQL**: Powerful, mature database with RLS
- **Real-time**: Built-in real-time subscriptions
- **Developer-friendly**: Excellent documentation and tooling

### CSS Strategy
- **Tailwind CSS**: Utility-first for consistency and rapid development
- **DaisyUI**: Pre-built components reduce custom CSS
- **Dark mode**: Tailwind's dark mode with DaisyUI support

---

## 📸 Screenshots & Demo

Visit the live application: **[neevaverse.com](https://neevaverse.com)**

Main features showcase:
- **Lens Hub**: Discover stories by genre and trending
- **Story Reader**: Immersive reading experience
- **Create**: Write and publish your own stories
- **Community**: Engage with other writers

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow existing code style (Prettier + ESLint)
- Write TypeScript for new features
- Test your changes locally with `yarn dev`
- Update documentation as needed

---

## 📋 Future Roadmap

- [ ] Advanced search and filtering
- [ ] Reading time estimations
- [ ] User notifications system
- [ ] Collaborative writing features
- [ ] Story analytics for authors
- [ ] Content recommendations AI
- [ ] Mobile app (React Native)
- [ ] Real-time collaboration (WebSockets)

---

## 📄 License

This project is private. All rights reserved.

---

## 👨‍💻 Author

**Cedar** – Building platforms for storytellers and writers  
[GitHub](https://github.com/yourusername) | [Portfolio](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- **Supabase** for the excellent backend-as-a-service platform
- **Svelte** and **SvelteKit** communities for amazing frameworks
- **Tailwind CSS** and **DaisyUI** for beautiful UI components
- All contributors and community members supporting the project

---

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check existing documentation
- Review the Supabase documentation for backend questions

---

**Happy writing! 📝✨**
