import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany()

  const renderedSnippets =  snippets.map(snippet => {
    const {id, title} = snippet

    return (
      <div key={id}>
        {title}
      </div>
    )
  })
  return (
    <div>
      {renderedSnippets}
    </div>
  );
}
