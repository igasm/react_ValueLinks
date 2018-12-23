import * as React from 'react';

class AddUser extends React.Component {
    state = {
        name: '',
        email: '',
        isActive: true
    }

    onSubmit = e => { /* logic form submit */ }

    render(){

    const { state } = this;

        return (
            <form onSubmit={this.onSubmit} >

                <label> Name: 
                    <input 
                        type='text' 
                        value = {state.name} 
                        onChange={ e => this.setState({name: e.target.value})}
                    />
                </label>

                <label> Email: 
                    <input 
                        type='text' 
                        value = {state.email} 
                        onChange={ e => this.setState({email: e.target.value})}
                    />
                </label>

                <label> Is active: 
                    <input 
                    type='checkbox' 
                    checked = {state.isActive} 
                    onChange={ e => this.setState({isActive: e.target.checked})}
                    />
                </label>

                <button type='submit'>Add user</button>

            </form>
        );
    }
}

export default AddUser;