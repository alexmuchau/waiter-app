import Link from "next/link";
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next';

interface ActiveCommandItemProps {
    commandNumber: string
    tableNumber: string
    clientName?: string
}

export function ActiveCommandItem({ commandNumber, tableNumber, clientName }: ActiveCommandItemProps) {
    function onClickActiveTable() {
        setCookie('orderCookies', {
            client: clientName ? commandNumber : undefined,
            table: tableNumber,
            command: commandNumber,
            chopps: [],
            foods: []
        }, {
            maxAge: 60 * 60 * 24 * 7,
        })
    }
    
    return (
        <Link href={`/order`}
            className={`
                flex px-4 py-2 transition-all cursor-pointer border-accent
                border-2 rounded-full bg-accent-blur
            `}
            onClick={onClickActiveTable}
            key={commandNumber}
        >
            {clientName ? clientName : commandNumber}
        </Link>
    )
}