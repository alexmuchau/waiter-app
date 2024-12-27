import { ActiveTableItemProps } from "../../../../utils/types"
import { HeaderTitle } from "../Header/HeaderTitle"
import { Title } from "../Title/Default"
import { ActiveCommandItem } from "./ActiveCommandItem"

interface ActiveTablesListProps {
    activeTables: ActiveTableItemProps[]
}

export function ActiveTablesList({ activeTables }: ActiveTablesListProps) {
    return (
        <>
            <HeaderTitle text="mesas ativas"/>
            <div className="flex flex-col gap-4">
                {
                    activeTables.map((activeTable) => (
                        <>
                            <Title text={activeTable.tableDescription}/>
                            <div className="flex gap-4 flex-wrap">
                                {
                                    activeTable.commands.map((command) => (
                                        <ActiveCommandItem
                                            key={command.commandNumber}
                                            commandNumber={command.commandNumber}
                                            tableNumber={activeTable.tableNumber}
                                            clientName={command.clientName}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}