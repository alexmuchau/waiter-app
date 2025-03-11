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
            <div className="flex flex-col gap-8">
                {
                    activeTables.map((activeTable) => (
                        <div
                            key={activeTable.tableNumber}
                            className="flex flex-col gap-4"
                        >
                            <Title text={'Mesa '+ activeTable.tableDescription}/>
                            <div className="flex gap-4 flex-wrap pl-8">
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
                        </div>
                    ))
                }
            </div>
        </>
    )
}