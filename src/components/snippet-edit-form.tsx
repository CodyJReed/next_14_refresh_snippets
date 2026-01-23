'use client'

import * as actions from "@/actions"

import type { Snippet } from "@prisma/client"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"

interface ComponentProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: ComponentProps) {
    const [code, setCode] = useState(snippet.code)

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

    // Add in 'bind' server action to update snippet record
    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

    return <div>
        <Editor
            height="40vh"
            theme="vs-dark"
            language="javascript"
            defaultValue={snippet.code}
            options={{
                minimap: { enabled: false }
            }}
            onChange={handleEditorChange}
        />
        <form action={editSnippetAction}>
            <button type="submit" className="p-2 border rounded">Save</button>
        </form>
    </div>
}