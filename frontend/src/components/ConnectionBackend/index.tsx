interface ConnectionBackendProps {
    status: boolean
}

export function ConnectionBackend({status}: ConnectionBackendProps) {
    return (
        <div className={`
            ${ status === true
                ? 'bg-accent-blur'
                : 'bg-red-500 bg-opacity-20'
            }
            flex py-2 px-8 text-xs rounded-full
        `}>
            <p className={`
                ${ status === true
                    ? 'before:bg-accent'
                    : 'before:bg-red-600'
                }
                before:inline-block  before:w-3 before:h-3 before:rounded-full
                flex justify-center items-center gap-1 font-bold
            `}>
                Status Conexão Servidor
            </p>
        </div>
    )
}