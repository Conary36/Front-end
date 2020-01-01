import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import SearchForm from  './SearchForm';

export default function UserList(){


    const [users, setUsers] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const [searchResults, setSearchResults] = useState(users);

    const handleChange = event =>{
        setSearchItems(event.target.value);
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

            {searchResults.map(e =>(
                <UserCard avatar_url={e.image} id={e.id} email={e.email} username={e.username} owner_first_name={e.fname} owner_last_name={e.lname} business_name={e.business.name} />
            ))}
           
        </section>
    )
}