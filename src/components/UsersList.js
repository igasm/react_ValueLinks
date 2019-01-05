import * as React from 'react'; 
import Link from 'valuelink/lib';
import './UsersList.css';
import { EditUser } from './EditUser';

const Header = () => (
    <div className="users-row">
        <div>Name</div>
        <div>Email</div>
        <div>Is Active</div>
    </div>
)

const UserRow = ({userLink, onEdit}) => {

    const user = userLink.value;
    const isActiveLink = userLink.at('isActive');

    return (
        <div className="users-row">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div onClick={()=> isActiveLink.set(!isActiveLink.value)}>
                {user.isActive ? 'Yes' : 'No'}
            </div>
            <div>
                <button onClick={onEdit}>Edit</button>
                <button onClick={()=>userLink.remove()}>X</button>
            </div>
        </div>
)}

export class UsersList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users: [
                {
                    name: 'admin',
                    email: 'admin@google.com',
                    isActive: true
                }
            ],
            isModalOpen: false,
            editedUserLink: null
        }
    }

    edit(userLink){
        this.setState({isModalOpen: true, editedUserLink: userLink});
    }

    closeModal(){
        this.setState({isModalOpen: false, editedUserLink: null});
    }

    render(){

        const usersLink = Link.state(this, 'users');

        return(
            <div>
                <Header />
                    {
                        usersLink.map((userLink, index) => (
                            <UserRow key={index} userLink={userLink} onEdit={()=>this.edit(userLink)} />
                        ))

                    }
                <modal isOpen={this.state.isModalOpen} >
                    <EditUser userLink={this.state.editedUserLink} onClose={this.closeModal}/>
                </modal>


            </div>
        )
    }

}