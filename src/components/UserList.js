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
        getUsers = () =>{
            axios
                .get('')
                .then(res =>{
                    console.log(res.data);
                    setUsers(res.data.results);
                })
                .catch(err =>{
                    console.error('Error', err);
                });
        }
        console.log(users);


        getUsers();
        setSearchResults(results);

    }, [searchItems]);

    return(

        
    )
}