'use client'

import { TableItemProps, CommandItemProps } from "../../../../../utils/types"
import { IdentifyItem } from "./IdentifyItem"

interface IdentifyListProps {
    listKey: "table" | "command"
    selectItem: (key: "table" | "command", value: string | undefined) => void,
    disabled: boolean
    list: TableItemProps[] | Array<CommandItemProps & { disabled: boolean }>
    activeItem: string | undefined
}

export function IdentifyList({ listKey, selectItem, disabled, list, activeItem } : IdentifyListProps) {
    function onClick(number: string) {
        const value = number === activeItem ? undefined : number
        
        selectItem(listKey, value)
    }
    
    return (
        <div className="flex gap-4 flex-wrap">
          {
            list.map((item) => {
              if (listKey === "table") {
                item = item as TableItemProps

                return (
                  <IdentifyItem
                    key={item.tableNumber}
                    id={item.tableNumber}
                    text={item.tableDescription}
                    onClick={onClick}
                    isDisabled={disabled}
                    isActive={item.tableNumber === activeItem}
                    isUsing={item.isActive}
                  />
                )
              }

              if (listKey === "command") {
                item = item as CommandItemProps & { disabled: boolean }

                return (
                  <IdentifyItem
                    key={item.commandNumber}
                    id={item.commandNumber}
                    text={item.commandNumber}
                    onClick={onClick}
                    isDisabled={disabled === true ? true : item.disabled}
                    isActive={item.commandNumber === activeItem}
                    isUsing={item.isActive}
                  />
                )
              }

            })
          }
        </div>
    )
}