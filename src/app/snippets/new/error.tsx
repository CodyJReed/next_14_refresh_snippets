'use client'

interface ComponentProps {
    error: Error,
    reset: () => void
}

export default function Error({error}: ComponentProps) {
    return <div>
        {error.message}
    </div>
}