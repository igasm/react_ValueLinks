import * as React from 'react';

function linkState( component, attr ){
    return {
        value: component.state[attr],
        set(x){
            component.setState({[attr]: x});
        }
    }
}

const Input = ({link, ...other}) => {
    const {type, ...restProps} = other;
    let input;

    switch(type){
        case 'checkbox': input = <input {...other} onChange= { e => link.set(e.target.checked) } checked={link.value}/>; break;
        default: input = <input {...other} onChange= { e => link.set(e.target.value) } value={link.value}/>
    }
    
    return input;
}
    

class AddUser extends React.Component {
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
                    <Input type='text' link={linkState(this, 'name')} />
                </label>

                <label> Email: 
                    <Input type='text' link={linkState(this, 'email')} />
                </label>

                <label> Is active: 
                    <Input type='checkbox' link={linkState(this, 'isActive')}/>
                </label>

                <button type='submit'>Add user</button>

            </form>
        );
    }
}

export default AddUser;