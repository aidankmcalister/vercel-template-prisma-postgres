# Prisma Postgres Template

A minimal template for getting started with Prisma Postgres and Next.js.

## Features

- ✅ Prisma Postgres database connection check
- ✅ Simple database connectivity testing
- ✅ Database connection status indicator
- ✅ Ready for Vercel deployment

## Quick Start

1. **Clone this template**
   ```bash
   npx create-next-app@latest my-app --example https://github.com/your-username/prisma-postgres-template
   cd my-app
   ```

2. **Get a Prisma Postgres database**
   - [Prisma Data Platform](https://cloud.prisma.io) (recommended)
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
   - [Neon](https://neon.tech)
   - [Supabase](https://supabase.com)
   - [Railway](https://railway.app)

3. **Set up your environment**
   ```bash
   # Copy your database connection string to .env
   echo 'DATABASE_URL="your-connection-string"' > .env
   ```

4. **Install dependencies and run**
   ```bash
   npm install
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to see your app!

## Project Structure

```
├── app/
│   ├── page.tsx          # Main page with database connection check
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── lib/
│   └── db.ts            # Database connection pool
├── package.json         # Dependencies (pg, @types/pg)
└── README.md           # This file
```

## Database Operations

The template includes a simple database connection check:

- **Connection check**: Tests database connectivity

## Setup Instructions

The template provides step-by-step instructions on the homepage:

1. **Create a new database** using `npx create-db@latest`
2. **Copy the connection string** labeled as "Connection string for everything else"
3. **Add it to your `.env` file** as `DATABASE_URL`
4. **Start building your app!**

For Prisma ORM integration, use the connection string labeled as "Optimized for Prisma ORM" and follow the Prisma + Next.js guide.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Other Platforms

Make sure to set the `DATABASE_URL` environment variable in your deployment platform.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Postgres](https://www.prisma.io/postgres)
