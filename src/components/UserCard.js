import React from "react";

export default function UserCard({id, username, password, owner_first_name, owner_last_name,business_name,avatar}){



    return(
        <section>
            <div>
                <img src={avatar} alt="merchant"/>
            </div>
            <div>
                <h1>ID:{id}</h1>
                <p>Username: {username}</p>
                <p>password: {password}</p>
                <p>fname: {owner_first_name}</p>
                <p>lname:{owner_last_name}</p>
                <p>Business: {business_name}</p>
            </div>
        </section>

    )
}