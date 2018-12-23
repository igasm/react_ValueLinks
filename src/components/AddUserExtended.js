import * as React from 'react';
import './AddUserExtended.css';

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
                    <input 
                        type='text' 
                        value={this.state.basicInfo.firstName} onChange={ e=>this.setState({basicInfo: {...this.state.basicInfo, firstName: e.target.value}}) }
                    />
                </label>            
                <label>Last name:   
                    <input 
                        type='text' 
                        value={this.state.basicInfo.lastName} onChange={ e=>this.setState({basicInfo: {...this.state.basicInfo, lastName: e.target.value}}) }
                    />
                </label>
                <label>Age:   
                    <input 
                        type='number' 
                        value={this.state.basicInfo.age} onChange={ e=>this.setState({basicInfo: {...this.state.basicInfo, age: e.target.value}}) }
                    />
                </label>
                <label>Email:   
                    <input 
                        type='text' 
                        value={this.state.basicInfo.email} onChange={ e=>this.setState({basicInfo: {...this.state.basicInfo, email: e.target.value}}) }
                    />
                </label>
                <label>Is active:
                    <input
                        type='checkbox'
                        checked={this.state.basicInfo.isActive} onChange={ e=>this.setState({basicInfo: {...this.setState, isActive: e.target.checked }}) }
                    />
                </label>
                <label>Street:    
                    <input 
                        type='text' 
                        value={this.state.adress.street} onChange={ e=>this.setState({adress: {...this.state.adress, street: e.target.value}}) }
                    />
                </label> 
                <label>House number:    
                    <input 
                        type='text' 
                        value={this.state.adress.houseNumber} onChange={ e=>this.setState({adress: {...this.state.adress, houseNumber: e.target.value}}) }
                    />
                </label>
                <label>Postal code:    
                    <input 
                        type='text' 
                        value={this.state.adress.postalCode} onChange={ e=>this.setState({adress: {...this.state.adress, postalCode: e.target.value}}) }
                    />
                </label>
                <label>City:    
                    <input 
                        type='text' 
                        value={this.state.adress.city} onChange={ e=>this.setState({adress: {...this.state.adress, city: e.target.value}}) }
                    />
                </label>

                <button type='submit'>Add user</button>

            </form>
        )
    }
}

export default AddUserExtended;