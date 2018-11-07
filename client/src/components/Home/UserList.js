import React from 'react';
import User from './User';

const UserList = ({users}) => {

    if (!users) {
        return null
    }
    console.log(users)
    const userList = users.map((user) => {
       return <User user={user} key={user.id} userId={user.id}/>
    });


    return (
        <ul>
            {userList}
        </ul>
    )
}

export default UserList;