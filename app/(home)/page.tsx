import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center gap-6 px-4 py-24">
      <h1 className="text-4xl font-bold">xsql</h1>
      <p className="max-w-xl text-fd-muted-foreground">
        SQL-like language for querying and mutating XML files. Built for
        automated editing toolchains: reads a script (or inline query),
        applies it to XML documents in memory, and writes the result to
        stdout — a well-behaved Unix filter.
      </p>
      <Link
        href="/docs"
        className="rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
      >
        Read the docs
      </Link>
    </main>
  );
}
