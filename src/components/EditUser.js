import * as React from 'react';
import { LinkedComponent } from 'valuelink/lib';

export class EditUser extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            isActive: true
        }
    }

    componentDidMount(){
        this.setState(this.props.userLink.value);
    }

    onSubmit(e){
        e.preventDefault();
        const {userLink, onClose} = this.props;
        userLink.set(this.setState);
        onClose();
    }

    onCancel(){
        this.props.onClose();
    }

    render(){return null}

}