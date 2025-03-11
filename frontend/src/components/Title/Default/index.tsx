import { Button } from "@heroui/react"

interface TitleProps {
    text: string
}

export function Title({text} : TitleProps) {
    return (
        <Button
            className="flex h-full py-5 opacity-100"
            fullWidth={true}
            radius="md"
            isDisabled={true}
            color="primary"
            startContent={<h2 className="flex w-full items-start font-bold text-[2rem] whitespace-nowrap capitalize text-white">{text}</h2>}
            variant="shadow"
        />
    )
}