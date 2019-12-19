import React from "react";

export default function UserCard({url, names, local, product, price}){



    return(
        <section>
            <div>
                <img src={url} alt="merchant"/>
            </div>
            <div>
                <h1>Name: {names}</h1>
                <p>Location: {local}</p>
                <p>Product: {product}</p>
                <p>Price: {price}</p>
            </div>
        </section>

    )
}