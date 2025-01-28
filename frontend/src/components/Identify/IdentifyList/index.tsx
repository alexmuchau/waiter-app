'use client'

import { TableItemProps, CommandItemProps } from "../../../../../utils/types"
import { IdentifyItem } from "./IdentifyItem"

interface IdentifyListProps {
    setIdentify: (value: TableItemProps | CommandItemProps) => void,
    list: TableItemProps[] | Array<CommandItemProps & { disabled: boolean }>
    activeItens: string[]
    disabled: boolean
}

export function IdentifyList({ setIdentify, disabled, list, activeItens }: IdentifyListProps) {
    function selectItem(value: TableItemProps | CommandItemProps) {
        setIdentify(value)
    }

    return (
        <div className="flex gap-4 flex-wrap">
            {
                list.map((item) => 
                    <IdentifyItem
                        key={item.id}
                        id={item.id}
                        text={item.description}
                        isActive={activeItens.includes(item.id)}
                        isDisabled={disabled === true ? true : "disabled" in item ? item.disabled : false}
                        isUsing={item.isActive}
                        onClick={() => selectItem(item)}
                    />
                )
            }
        </div>
    )
}