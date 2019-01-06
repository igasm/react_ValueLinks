import * as React from 'react';
import './AddUserExtended.css';
import BasicInfo from './BasicInfo';
import Adress from './Adress';

class AddUserExtended extends React.Component {
    state = {
        basicInfo: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            isActive: true,
            isOnSubmit: false
        },
        adress: {
            street: '',
            houseNumber: '',
            postalCode: '',
            city: '',
            isOnSubmit: false
        }
    }

    onSubmit = e => { 
        alert(JSON.stringify(this.state)) 
    }

    basicInfoChangeHandler = (updateObj) => {
        const basicInfo = this.state.basicInfo;
        const updateObjKey = Object.keys(updateObj)[0];
        const updateObjValue = updateObj[updateObjKey];
        const basicInfoNew = {...basicInfo, [updateObjKey] : updateObjValue};
        this.setState({...this.state, basicInfo: basicInfoNew});
    }

    render(){
        return(
            <form className='form' onSubmit={this.onSubmit} >
                <BasicInfo basicInfo={this.state.basicInfo} onBasicInfoChange={basicInfo => this.basicInfoChangeHandler(basicInfo)}/>
                <Adress adress={this.state.adress} />
                <button type='submit'>Add user</button>
            </form>
        )
    }
}

export default AddUserExtended;