import Link from "next/link";
import { useCookies } from "react-cookie";

interface ActiveCommandItemProps {
    commandNumber: string
    tableNumber: string
    clientName?: string
}

export function ActiveCommandItem({ commandNumber, tableNumber, clientName }: ActiveCommandItemProps) {
    const [ orderCookies, setOrderCookies ] = useCookies(['orderCookies']);
    
    function onClickActiveTable() {
        setOrderCookies('orderCookies', {
            client: clientName ? commandNumber : undefined,
            table: tableNumber,
            command: commandNumber,
            chopps: [],
            foods: []
        })
    }
    
    return (
        <Link
            href='/order'
            className={`
                flex px-4 py-2 transition-all cursor-pointer border-accent
                border-2 rounded-full bg-accent-blur
            `}
            onClick={() => onClickActiveTable()}
            key={commandNumber}
        >
            {clientName ? clientName : commandNumber}
        </Link>
    )
}