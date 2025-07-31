# PostgreSQL + Next.js Template

A minimal template for getting started with PostgreSQL and Next.js using direct SQL queries.

## Features

- ✅ PostgreSQL database connection check
- ✅ Simple SQL queries (no ORM)
- ✅ Database connection status indicator
- ✅ Ready for Vercel deployment

## Quick Start

1. **Clone this template**
   ```bash
   npx create-next-app@latest my-app --example https://github.com/your-username/postgresql-nextjs-template
   cd my-app
   ```

2. **Get a PostgreSQL database**
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (recommended)
   - [Neon](https://neon.tech)
   - [Supabase](https://supabase.com)
   - [Railway](https://railway.app)

3. **Set up your environment**
   ```bash
   # Copy your PostgreSQL connection string to .env
   echo 'DATABASE_URL="postgresql://username:password@host:port/database"' > .env
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
│   └── db.ts            # PostgreSQL connection pool
├── package.json         # Dependencies (pg, @types/pg)
└── README.md           # This file
```

## Database Operations

The template includes a simple database connection check:

- **Connection check**: `SELECT NOW()`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Other Platforms

Make sure to set the `DATABASE_URL` environment variable in your deployment platform.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [pg (Node.js PostgreSQL client)](https://node-postgres.com/)

## License

MIT
