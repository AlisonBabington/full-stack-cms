import React, {Component, Fragment} from 'react';
import HomeNavBar from '../components/Home/HomeNavBar';
import UserList from '../components/Home/UserList';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // We might be able to refactor this to a stateless function
        //if we do the request in user list
        
       fetch(`/users`)
            .then(response => response.json())
            .then( users => this.setState({users: users}));
    }

    render() {
        return(
            <Fragment>
                <HomeNavBar />
                <UserList users={this.state.users}/>  
            </Fragment>
        );
    }
}