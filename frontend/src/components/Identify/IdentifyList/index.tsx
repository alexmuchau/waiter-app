'use client'

import { TableItemProps, CommandItemProps } from "../../../../../utils/types"
import { IdentifyItem } from "./IdentifyItem"

interface IdentifyListProps {
    listKey: "table" | "command"
    selectItem: (key: "table" | "command", value: string | undefined) => void,
    disabled: boolean
    list: TableItemProps[] | CommandItemProps[]
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
                    text={item.tableDescription}
                    onClick={onClick}
                    isDisabled={disabled}
                    isActive={item.tableNumber === activeItem}
                    isUsing={item.isActive}
                  />
                )
              }

              item = item as CommandItemProps
              return (
                <IdentifyItem
                  key={item.commandNumber}
                  text={item.commandNumber}
                  onClick={onClick}
                  isDisabled={disabled}
                  isActive={item.commandNumber === activeItem}
                  isUsing={item.isActive}
                />
              )
            })
          }
        </div>
    )
}