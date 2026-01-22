import { db } from "@/db"
import { notFound } from "next/navigation"


interface ComponentProps {
    params: {
        id: string
    }
}

export default async function SnippetDetail(props: ComponentProps) {
await new Promise((r) => setTimeout(r, 2000))

    const {id} = await props.params

    const snippet = await db.snippet.findFirst({
        where: {id: parseInt(id)}
    })

    if (!snippet) return notFound()

    return <div>
        {snippet.title}
    </div>
}