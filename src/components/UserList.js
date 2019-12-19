import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function UserList(){


    const [users, setUsers] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const [searchResults, setSearchResults] = useState(users)

    const handleChange = event =>{
        setSearchResults(event.target.value);
    }

    useEffect(()=>{
        getUsers = () =>{
            axios
                .get('https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0')
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