import * as React from 'react';
import Link, { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';

class AddUser extends LinkedComponent {
    state = {
        name: '',
        email: '',
        isActive: true
    }

    onSubmit = e => { alert(JSON.stringify(this.state)) }

    render(){
        return (
            <form onSubmit={this.onSubmit} >

                <label> Name: 
                    <Input valueLink={this.linkAt('name')} />
                </label>

                <label> Email: 
                    <Input valueLink={this.linkAt('email')} />
                </label>

                <label> Is active: 
                    <Input checkedLink={this.linkAt('isActive')}/>
                </label>

                <button type='submit'>Add user</button>

            </form>
        );
    }
}

export default AddUser;