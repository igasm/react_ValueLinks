import * as React from 'react';

export class Adress extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            street: '',
            houseNumber: '',
            postalCode: '',
            city: '',
            isOnSubmit: false
        }
    }

    componentDidMount(){
        this.setState(this.props.address);
    }

    render(){
        return(
            <>
                <label>Street:    
                    <input 
                        type='text' 
                        value={this.state.street} onChange={ e=>this.setState({street: e.target.value}) }
                    />
                </label> 
                <label>House number:    
                    <input 
                        type='text' 
                        value={this.state.houseNumber} onChange={ e=>this.setState({houseNumber: e.target.value}) }
                    />
                </label>
                <label>Postal code:    
                    <input 
                        type='text' 
                        value={this.state.postalCode} onChange={ e=>this.setState({postalCode: e.target.value}) }
                    />
                </label>
                <label>City:    
                    <input 
                        type='text' 
                        value={this.state.city} onChange={ e=>this.setState({city: e.target.value}) }
                    />
                </label>
            </>
        )
    }

}

export default Adress;