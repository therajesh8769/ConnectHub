# LinkedIn-like Community Platform (MERN Stack)

A professional networking platform built with the MERN stack, featuring user authentication, profiles, and a global post feed.

## Features

### User Authentication
- Register/Login with email and password
- Password hashing using bcrypt
- JWT token-based authentication
- Protected routes with middleware

### User Profiles
- User profiles with name, email, and bio
- Editable name and bio
- View own profile and public profiles of others

### Post Feed
- Text-only posts
- Global feed with all posts
- Display author name and creation timestamp
- ndividual user profile pages with their posts

## Project Structure

```
root/
├── frontend/          # React app (Vite)
│   ├── src/
│   │   ├── components/ # PostCard, Navbar, CreatePost
│   │   ├── pages/      # Login, Register, Home, Profile, UserProfile
│   │   ├── App.tsx     # Main app component
│   │   ├── main.tsx    # Entry point
│   │   └── api.js      # Axios instance and API calls
│   └── package.json
│
└── backend/           # Node.js + Express + MongoDB 
    ├── controllers/   # Business logic
    ├── models/        # MongoDB schemas
    ├── routes/        # API routes
    ├── middleware/    # Authentication middleware
    ├── config/        # Database configuration
    ├── server.js      # Entry point
    └── package.json
```

## Tech Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Environment Setup**
   Update `backend/.env` with your MongoDB connection string:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/linkedin-clone
   JWT_SECRET=""
   NODE_ENV=development
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on http://localhost:5000

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user  
- `GET /api/auth/me` - Get current user info

### Users
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/profile/:userId` - Get user profile and posts

### Posts
- `POST /api/posts` - Create new post
- `GET /api/posts` - Get all posts

## Features Implemented

-  Secure user authentication with JWT
-  Password hashing and validation
-  Protected API routes
-  User profile management
-  Global post feed
-  Individual user profiles with posts
-  Responsive design
-  Error handling and loading states
-  Professional LinkedIn-inspired UI

## Security Features

- Passwords hashed with bcrypt (12 rounds)
- JWT tokens with 7-day expiration
- Protected routes requiring authentication
- Input validation and sanitization
- CORS configuration
- Error handling without exposing sensitive data

## Future Enhancements

- Image upload for posts and profile pictures
- Like and comment functionality
- Real-time notifications
- Search functionality
- Connection requests system
- Email verification
- Password reset functionality
