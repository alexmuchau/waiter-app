'use client'

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key } from "react";

interface ItemProps {
    id: string,
    name: string
}

interface SelectItemProps {
    label: string
    onChange: (key: Key | null) => void
    items: ItemProps[]
}

export function SelectItem({ label, onChange, items }: SelectItemProps) {
    return (
        <Autocomplete
            variant="underlined"
            defaultItems={items}
            label={label}
            className=""
            onSelectionChange={onChange}
        >
            { (item) => 
                <AutocompleteItem
                    key={item.id}
                    color="primary"
                    className="flex w-full"
                >
                    {item.name}
                </AutocompleteItem>
            }
        </Autocomplete>
    )
}