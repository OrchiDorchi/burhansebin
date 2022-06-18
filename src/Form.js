import React from 'react';
import './App.css';

function Form() {
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [publicKey, setPublicKey] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('name:', name);
        console.log('last name:', lastName);
        console.log('email:', email);
        console.log('publicKey:', publicKey);

    }
    const logo = require('./earnU.png');
    return (
        <div
            class="background"
        >
            <img class="logo" src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <div class="input-div">
                    <label class="label" htmlFor="name">Name</label>
                    <input
                        class="input"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="input-div">
                    <label class="label" htmlFor="lastname">Last Name</label>
                    <input
                        class="input"
                        id="lastname"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div class="input-div">
                    <label class="label" htmlFor="email">Email</label>
                    <input
                        class="input"
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="input-div">
                    <label class="label" htmlFor="email">Public Key</label>
                    <input
                        class="input"
                        id="publicKey"
                        type="text"
                        value={publicKey}
                        onChange={(e) => setPublicKey(e.target.value)}
                    />
                </div>
                <div class="button-div">
                    <button class="button" type="submit">Submit</button>
                </div>
            </form>
        </div>

    );
} export default Form;