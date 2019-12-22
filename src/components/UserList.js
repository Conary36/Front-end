import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserCard from './UserCard';


export default function UserList(){


    const [users, setUsers] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const [searchResults, setSearchResults] = useState(users);

    const handleChange = event =>{
        setSearchResults(event.target.value);
    }

    useEffect(()=>{
        const getUsers = () =>{
            axios
                .get('https://bw-african-marketplace.herokuapp.com/api/users')
                .then(res =>{
                    console.log(res.data);
                    setUsers(res.data);
                })
                .catch(err =>{
                    console.error('Error', err);
                });
        }
        console.log(users);

        const results = users.filter(character => {
            return character.name.toLowerCase().includes(searchItems.toLowerCase());
        });


        getUsers();
        setSearchResults(results);

    }, [searchItems]);

    return(

        <section>
            <SearchForm searchItems={searchItems} handleChange={handleChange}/>

            <UserCard avatar={users.img} id={users.id} username={users.username} owner_first_name={users.owner_first_name} owner_last_name={users.owner_last_name} business_name={users.business_name}/>
        </section>
    )
}