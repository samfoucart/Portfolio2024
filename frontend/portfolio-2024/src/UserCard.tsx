import { UserResponseBody } from "./UserResponseBody";

// type UserCardProps = {
//     users: UserResponseBody[],
// }

function UserCard({ users }: { users: UserResponseBody[]}) {
    const usersDiv = users.map((user) => {
        return (
            <>
                <ul>
                    <li>{user.userName}</li>
                    <li>{user.userId}</li>
                    <li>{user.rowId}</li>
                    <li>{user.signedUpAt}</li>
                </ul>
            </>
        );
    });

    if (usersDiv.length == 0) {
        usersDiv.push(<h2>Could not find users</h2>);
    }

    return (
        <>
            {usersDiv}
        </>
    );
};

export default UserCard;
