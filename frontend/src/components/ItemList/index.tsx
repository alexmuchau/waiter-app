'use client'

import { Item } from "../Item"

export interface ItemProps {
    value: string,
    isActive: boolean
}

interface ItemListProps {
    listKey: "board" | "command"
    selectItem: (key: "board" | "command", value: string | undefined) => void,
    disabled: boolean
    list: ItemProps[]
    activeItem: string | undefined
}

export function ItemList({ listKey, selectItem, disabled, list, activeItem } : ItemListProps) {
    function onClick(number: string) {
        const value = number === activeItem ? undefined : number
        
        selectItem(listKey, value)
    }
    
    return (
        <div className="flex gap-4 flex-wrap">
          {
            list.map((item) => (
              <Item
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