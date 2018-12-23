import * as React from 'react';
import './AddUserExtended.css';

function linkState(component, statePartName, attr){
    return {
        value: component.state[statePartName][attr],
        setValue(x){
            component.setState({[statePartName]: { ...component.state[statePartName], [attr]: x}})
        }
    }
}

const Input = ({link, ...other}) => {
    const {type, ...restProps} = other;
    let input;

    switch(type){
        case 'checkbox': input = <input {...other} onChange= { e => link.setValue(e.target.checked) } checked={link.value}/>; break;
        default: input = <input {...other} onChange= { e => link.setValue(e.target.value) } value={link.value}/>
    }
    
    return input;
}

class AddUserExtended extends React.Component {
    state = {
        basicInfo: {
            firstName: '',
            lastName: '',
            age: null,
            email: '',
            isActive: true,
        },
        adress: {
            street: '',
            houseNumber: '',
            postalCode: '',
            city: ''
        }
    }

    onSubmit = e => { alert(JSON.stringify(this.state)) }

    render(){
        return(
            <form className='form' onSubmit={this.onSubmit} >
                <label>First name:  
                    <Input type='text' link={linkState(this, 'basicInfo', 'firstName')} />
                </label>            
                <label>Last name:   
                    <Input type='text' link={linkState(this, 'basicInfo', 'lastName')} />
                </label>
                <label>Age:   
                    <Input type='number' link={linkState(this, 'basicInfo', 'age')} />
                </label>
                <label>Email:   
                    <Input type='text' link={linkState(this, 'basicInfo', 'email')} />
                </label>
                <label>Is active:
                    <Input type='checkbox' link={linkState(this, 'basicInfo', 'isActive')} />
                </label>
                <label>Street:    
                    <Input type='text' link={linkState(this, 'adress', 'street')} />
                </label> 
                <label>House number:    
                    <Input type='text' link={linkState(this, 'adress', 'houseNumber')} />
                </label>
                <label>Postal code:    
                    <Input type='text' link={linkState(this, 'adress', 'postalCode')} />
                </label>
                <label>City:
                    <Input type='text' link={linkState(this, 'adress', 'city')} />
                </label>

                <button type='submit'>Add user</button>

            </form>
        )
    }
}

export default AddUserExtended;