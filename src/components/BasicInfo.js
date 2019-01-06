import * as React from 'react';

export class BasicInfo extends React.Component {

    //does it need it's own state???
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            isActive: true,
            isOnSubmit: false
        }
    }
    
    componentDidMount(){
        this.setState(this.props.basicInfo);
    }


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
        //problem is probably in here -> setState is async and 
        //to onBasicInfoChange probably goes unupdated value
        this.props.onBasicInfoChange({[e.target.name]: e.target.value});
    }

    render(){
        return(
            <>
                <label>First name:  
                <input 
                        type='text' 
                        name='firstName'
                        value={this.state.firstName}  onChange={this.changeHandler}
                    />
                </label>            
                <label>Last name:   
                    <input 
                        type='text' 
                        name='lastName'
                        value={this.state.lastName} onChange={this.changeHandler}
                    />
                </label>
                <label>Age:   
                    <input 
                        type='number'
                        name='age'
                        value={this.state.age} onChange={this.changeHandler}
                    />
                </label>
                <label>Email:   
                    <input 
                        type='text' 
                        name='email'
                        value={this.state.email} onChange={this.changeHandler}
                    />
                </label>
                <label>Is active:
                    <input
                        type='checkbox'
                        name='isActive'
                        checked={this.state.isActive} onChange={ e=>this.setState({isActive: e.target.checked}) }
                    />
                </label>
            </>
        )
    }

}

export default BasicInfo;