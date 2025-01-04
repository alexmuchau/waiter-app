import { User } from "../../../../utils/types";

interface LoggedUserProps {
    user: User
}

export function LoggedUser({user}: LoggedUserProps) {
    return (
        <div className="flex gap-8 py-2 px-8 bg-accent-blur text-xs rounded-full">
            <p className="
                before:inline-block before:bg-accent before:w-3 before:h-3 before:rounded-full before:text-accent
                flex justify-center items-center font-bold gap-1
            ">
                {user.name}
            </p>
        </div>
    )
}