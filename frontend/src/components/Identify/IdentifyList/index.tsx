'use client'

import { TableItemProps, CommandItemProps } from "../../../../../utils/types"
import { IdentifyItem } from "./IdentifyItem"

interface IdentifyListProps {
    setIdentify: (value: TableItemProps | CommandItemProps) => void,
    list: TableItemProps[] | Array<CommandItemProps & { disabled: boolean }>
    activeItem: string | undefined
    disabled: boolean
}

export function IdentifyList({ setIdentify, disabled, list, activeItem }: IdentifyListProps) {
    function selectItem(value: TableItemProps | CommandItemProps) {
        setIdentify(value)
    }

    return (
        <div className="flex gap-4 flex-wrap">
            {
                list.map((item) => 
                    <IdentifyItem
                        key={"commandNumber" in item ? `C${item.commandNumber}` : `T${item.tableNumber}`}
                        id={"commandNumber" in item ? item.commandNumber : item.tableNumber}
                        text={"commandNumber" in item ? item.commandNumber : item.tableDescription}
                        isActive={"commandNumber" in item ? item.commandNumber === activeItem : item.tableNumber === activeItem}
                        isDisabled={disabled === true ? true : "disabled" in item ? item.disabled : false}
                        isUsing={item.isActive}
                        onClick={() => selectItem(item)}
                    />
                )
            }
        </div>
    )
}