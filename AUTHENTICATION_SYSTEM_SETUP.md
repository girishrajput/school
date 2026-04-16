# Full-Stack Authentication System Setup Guide

## Project Structure

```
school/
├── frontend/                    # Next.js Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── login/          # Login page
│   │   │   ├── register/       # Register page
│   │   │   ├── dashboard/      # Protected dashboard
│   │   │   ├── layout.tsx      # Root layout with AuthProvider
│   │   │   ├── page.tsx        # Home page (redirects to login)
│   │   │   └── globals.css     # Global styles
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Input.tsx       # Input component with validation
│   │   │   └── Button.tsx      # Button component with loading state
│   │   ├── hooks/
│   │   │   └── useAuth.ts      # Authentication context and hook
│   │   ├── services/
│   │   │   ├── api.ts          # Axios instance with interceptors
│   │   │   └── authService.ts  # Authentication API methods
│   │   └── types/
│   │       └── auth.ts         # TypeScript interfaces
│   ├── .env.local              # Environment variables
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── backend/                     # NestJS Backend
│   ├── src/
│   │   ├── common/
│   │   │   └── guards/
│   │   │       └── auth.guard.ts  # JWT authentication guard
│   │   ├── modules/
│   │   │   └── auth/
│   │   │       ├── auth.controller.ts  # Auth endpoints
│   │   │       ├── auth.service.ts     # Auth business logic
│   │   │       └── auth.module.ts      # Auth module
│   │   ├── prisma/
│   │   │   └── prisma.service.ts
│   │   ├── app.module.ts       # Main app module
│   │   └── main.ts             # Application entry point
│   ├── prisma/
│   │   └── schema.prisma       # Database schema
│   ├── .env                    # Environment variables
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE schoolerp;
```

2. Update the `.env` file in the backend directory:
```
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/schoolerp"
JWT_SECRET="your_super_secret_jwt_key_change_this_in_production"
```

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Run database migrations:
```bash
npm run prisma:migrate
```

5. Start the backend server:
```bash
npm run start:dev
```

The backend will be available at `http://localhost:4000`

### Backend API Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get user profile (protected)

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Update the `.env.local` file if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Testing the Authentication System

1. Open your browser and go to `http://localhost:3000`
2. You'll be redirected to the login page
3. Click "create a new account" to register
4. Fill in the registration form:
   - First Name
   - Last Name
   - Email
   - Password
5. After successful registration, you'll be redirected to the dashboard
6. You can log out and log back in with your credentials

## Key Features Implemented

### Backend
- ✅ User registration with password hashing (bcrypt)
- ✅ User login with JWT token generation
- ✅ Protected routes with JWT authentication
- ✅ User profile endpoint
- ✅ Error handling and validation
- ✅ Prisma ORM with PostgreSQL

### Frontend
- ✅ Login page with form validation
- ✅ Register page with form validation
- ✅ Protected dashboard route
- ✅ Authentication context (useAuth hook)
- ✅ Axios interceptors for token management
- ✅ Automatic token refresh on 401 errors
- ✅ Local storage for token persistence
- ✅ Loading states and error handling
- ✅ Responsive UI with Tailwind CSS
- ✅ Logout functionality

## Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt with a salt round of 12
2. **JWT Authentication**: Stateless authentication using JSON Web Tokens
3. **Protected Routes**: Backend routes protected with JWT middleware
4. **Token Expiration**: Tokens expire after 7 days
5. **CORS Configuration**: Proper CORS setup for cross-origin requests
6. **Input Validation**: Server-side validation for all inputs

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/schoolerp
JWT_SECRET=your_super_secret_jwt_key
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists

### Port Already in Use
- Backend: Change port in `main.ts` (default: 4000)
- Frontend: Change port in `package.json` dev script (default: 3000)

### Prisma Errors
```bash
# Reset and regenerate Prisma client
npx prisma generate
npx prisma migrate dev
```

## Production Deployment

### Backend
1. Set `NODE_ENV=production`
2. Use strong JWT_SECRET
3. Configure proper CORS origins
4. Use environment variables for all sensitive data
5. Enable HTTPS

### Frontend
1. Build the application: `npm run build`
2. Set proper API URL in environment variables
3. Deploy to Vercel, Netlify, or your preferred platform

## Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is for educational purposes.