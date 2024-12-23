import { User } from "../../../../utils/types";

interface LoggedUserProps {
    user: User
}

export function LoggedUser({user}: LoggedUserProps) {
    return (
        <div>
            {user.name}
        </div>
    )
}