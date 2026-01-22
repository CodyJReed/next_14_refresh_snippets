interface ComponentProps {
    params: {
        id: string
    }
}

export default function Edit(props: ComponentProps) {
    const id = parseInt(props.params.id)

    return <div>Editing snippet with id {id}</div>
}