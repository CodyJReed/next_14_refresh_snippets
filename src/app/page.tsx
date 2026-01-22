import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany()

  const renderedSnippets = snippets.map(snippet => {
    const { id, title } = snippet

    return (
      <Link
        href={`/snippets/${id}`}
        key={id}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{title}</div>
        <div>View</div>
      </Link>
    )
  })
  return (
    <div>
      <div className="flex justify-between py-2 items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>
    </div>
  );
}
