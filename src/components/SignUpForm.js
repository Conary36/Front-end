import React, {Component} from "react";
import axios from "axios";

export default class UserForm extends Component{
        constructor(){
            super();
            this.state = {
                email: '',
                username: '',
                owner_first_name: '',
                owner_last_name: '',
                business_name: '',
            
            };
        }

    onChange = (e) => {
        
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, username, owner_first_name, owner_last_name, business_name} = this.state;

        axios
            .post('https://bw-african-marketplace.herokuapp.com/api/users', { email, username, owner_first_name, owner_last_name, business_name })
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.error('Error', err)
            });
    }

    render() {
        const { email, username, owner_first_name,owner_last_name,business_name } = this.state;
        return (
            <form className="inputFields">
                <input
                    type="text"
                    email="email"
                    value={email}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    username="username"
                    value={username}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    fname="first name"
                    value={owner_first_name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    lname="last name"
                    value={owner_last_name}
                    onChange={this.onChange}
                    />
                <input
                    type="text"
                    business="business name"
                    value={business_name}
                    onChange={this.onChange}
                    />

            </form>
        );
    }
}

