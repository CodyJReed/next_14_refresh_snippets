import { notFound } from "next/navigation"
import { db } from "@/db"

import SnippetEditForm from "@/components/snippet-edit-form"

interface ComponentProps {
    params: Promise<{
        id: string
    }>
}

export default async function Edit(props: ComponentProps) {

    const { id: snippetId } = await props.params
    const id = parseInt(snippetId)
    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) return notFound()

    return <div>
        <SnippetEditForm
            snippet={snippet}
        />
    </div>
}