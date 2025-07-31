import pool from '../lib/db';
import Image from 'next/image';

async function checkDatabaseConnection() {
  try {
    const client = await pool.connect();
    client.release();
    return { connected: true, error: null };
  } catch (error) {
    return { connected: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export default async function Home() {
  const { connected, error } = await checkDatabaseConnection();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="w-full bg-neutral-800 rounded-lg p-8 max-w-2xl">
        <div className="text-center">
          <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
            <Image src="/Prisma-LightLogo.svg" alt="Prisma Logo" width={150} height={150} className="mb-4 mx-auto" />
          </a>
          <h1 className="text-2xl font-bold text-white mb-2">
            Prisma Postgres Template
          </h1>
          <p className="text-gray-300 mb-6">
            A minimal template for getting started with <a href="https://www.prisma.io/postgres" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400">Prisma Postgres</a>
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              connected 
                ? 'bg-green-200 text-green-800' 
                : 'bg-red-200 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                connected ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              {connected ? 'Database Connected' : 'Database Disconnected'}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
              <p className="text-sm text-red-800">
                <strong>Error:</strong> {error}
              </p>
              <p className="text-xs text-red-600 mt-1">
                Make sure your DATABASE_URL in .env is correct and the database is accessible.
              </p>
            </div>
          )}

          <h3 className="text-lg font-bold text-white mb-2">Set up a database</h3>
          <div className="text-left text-sm text-gray-300 space-y-4">
            <p><strong>Create a new database</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Run <code className="bg-neutral-900 px-1 py-0.5 rounded text-gray-200">npx create-db@latest</code></li>
              <li>Copy the connection string labeled as <strong><i>Connection string for everything else</i></strong></li>
              <li>In <code className="bg-neutral-900 px-1 py-0.5 rounded text-gray-200">.env.example</code>, set the <code className="bg-neutral-900 px-1 py-0.5 rounded text-gray-200">DATABASE_URL</code> to the connection string you copied</li>
              <li>Rename <code className="bg-neutral-900 px-1 py-0.5 rounded text-gray-200">.env.example</code> to <code className="bg-neutral-900 px-1 py-0.5 rounded text-gray-200">.env</code></li>
            </ol>
            <p><strong>Notes</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>If you'd like to use <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400">Prisma ORM</a>, you can use the connection string labeled as <strong><i>Optimized for Prisma ORM</i></strong> and follow our <a href="https://www.prisma.io/docs/guides/nextjs" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400">Prisma + Next.js guide</a> to complete the setup.</li>
              <li><code className="bg-neutral-900 px-1 py-0.5 rounded text-gray-200">npx create-db@latest</code> deletes the database after 24 hours. A claim url is provided to transfer to your account if you would like to keep it.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
