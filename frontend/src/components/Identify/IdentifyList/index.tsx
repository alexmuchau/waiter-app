'use client'

import { IdentifyItemProps } from "../../../../../utils/types"
import { IdentifyItem } from "./IdentifyItem"

interface IdentifyListProps {
    listKey: "board" | "command"
    selectItem: (key: "board" | "command", value: string | undefined) => void,
    disabled: boolean
    list: IdentifyItemProps[]
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
            list.map((item) => (
              <IdentifyItem
                text={item.value}
                onClick={onClick}
                isDisabled={disabled ? true : item.value === activeItem || activeItem === undefined ? false : true}
                isActive={!activeItem ? false : activeItem == item.value ? true : false}
                key={item.value}
              />
            ))
          }
        </div>
    )
}