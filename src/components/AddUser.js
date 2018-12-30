import * as React from 'react';
import Link, { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';
import './AddUser.css';

function FormInput({label, validate, ...props}) {
    return (
    <div className={props.valueLink.error ? "invalidInput" : "validInput"}>
        <label> {label}
            <Input {...props} />
            <div className='error-placeholder'>
                {props.valueLink.error || ''}
            </div>
        </label>
    </div>
    );
}

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

        const nameLink = Link.state(this, 'name')
                            .check( value => value, 'Name is required')
                            .check( value => value.indexOf(' ')<0, 'Name could not contain spaces');

        const emailLink = Link.state(this, 'email') //assigning validation
                            .check( value => value, 'Email is required')
                            .check( value => this.validateEmail(value), 'Email must be valid');

        return (
            <form className='form' onSubmit={this.onSubmit} >

                <FormInput label="Name: " valueLink={nameLink} type="text" />
                <FormInput label="Email: " valueLink={emailLink} type="text" />

                <label> Is active: 
                    <Input type="checkbox" checkedLink={Link.state(this,'isActive')}/>
                </label>

                <button disabled={nameLink.error || emailLink.error} type='submit'>Add user</button>

            </form>
        );
    }
}

export default AddUser;