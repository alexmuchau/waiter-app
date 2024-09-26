interface HeaderTitleProps {
    text: string
}

export function HeaderTitle({ text }: HeaderTitleProps) {
    return (
        <h1 className="text-3xl">
          {text}
        </h1>
    )
}