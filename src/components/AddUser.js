import * as React from 'react';
import Link, { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';
import './AddUser.css';

class AddUser extends LinkedComponent {
    state = {
        name: '',
        email: '',
        isActive: true
    }

    onSubmit = e => { alert(JSON.stringify(this.state)) }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render(){

        const nameLink = Link.state(this, 'name');
        const nameIsValid = nameLink.value && nameLink.value.indexOf(' ')<0;

        const emailLink = Link.state(this, 'email');
        const emailIsValid = emailLink.value && this.validateEmail(emailLink.value);

        return (
            <form className='form' onSubmit={this.onSubmit} >

                <div className={nameIsValid ? "validInput" : "invalidInput"}>
                    <label> Name: 
                        <Input valueLink={nameLink} />
                    </label>
                </div>

                <div className={emailIsValid ? "validInput" : "invalidInput"}>
                    <label> Email: 
                        <Input valueLink={emailLink} />
                        <div>
                            { emailIsValid ? '' : 'Email is required and must be valid'}
                        </div>
                    </label>
                </div>

                <label> Is active: 
                    <Input type="checkbox" checkedLink={Link.state(this,'isActive')}/>
                </label>

                <button disabled={!nameIsValid || !emailIsValid} type='submit'>Add user</button>

            </form>
        );
    }
}

export default AddUser;