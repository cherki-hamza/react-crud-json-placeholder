import React ,{ Component} from 'react';
import css from './App.css';
import ViewUser from "./components/ViewUser";
import {getUsers, deleteUser, updateUser, addUser} from './Api/Users'
import UsersForm from "./components/UsersForm";



class App extends Component{

    state = {
        users : [],
        user: {}
    }

    componentDidMount =  () => {
         getUsers().then(response=>{
          this.setState({
              users : response.data
          })
         });
    }

    setActive = (user) =>{
        this.setState({
            user:user
        })
    }

    // methode to delete user ********************************************
    the_deleteUser = (user) => {
        // delete user from server
        deleteUser(user.id)
            .then(()=>{
                // delete user
                console.log('deleted')
                let users = this.state.users;
                const index = users.indexOf(user);
                users.splice(index,1);
                this.setState({users:users});
            })
            .catch(error=>{
               alert('Oops error server '+error)
            }).catch(error=>{
                alert('Oops problem of server');
        });

    }
    //**********************************************************************

    // methode to update user **********************************************
    the_updateUser = (values) => {
       addUser(values)
           .then(() =>{
               alert('the user updated with success');
           }).catch(error=>{
           alert('Oops problem of server');
       });
    }
    //**********************************************************************

    // methode to add user **********************************************
    the_addUser = (values) => {
        addUser(values)
            .then(() =>{
                alert('the user adding with success');
            }).catch(error=>{
            alert('Oops problem of server');
        });
    }
    //**********************************************************************

    render() {

        return (
            <div className="App">
                <div className={"container my-5"}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <div className={'card my-3'}>
                                <div className={'card-body'}>
                                    <h1 className={'card-header text-success'}>Users api </h1>

                                    <div className="col-md-12">
                                        <h4 className={"text-primary"}>Add User</h4>
                                            <UsersForm
                                                values={{
                                                    name: '',
                                                    email: '',
                                                }}
                                                onSubmit={this.the_addUser}
                                            />

                                    </div>

                                </div>

                                <div className={'card-body'}>
                                <table className={"table table-bordered table-hover text-align-center"}>
                                    <thead>
                                        <tr className='bg-primary'>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Username</th>
                                            {/*<th>Email</th>*/}
                                            {/*<th>Address</th>*/}
                                            <th>Phone</th>
                                            <th>Website</th>
                                            <th>Company</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {
                                         this.state.users.map((user,index) => {
                                         return (
                                        <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        {/*<td>{user.email}</td>*/}
                                        {/*<td>{`${user.address.street}, ${user.address.city}`}</td>*/}
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}</td>

                                        <td>
                                            <div className={'row'}>
                                              <span onClick={()=>this.setActive(user)} className={'btn btn-primary btn-sm'}><i className={'fa fa-eye'}></i>Show</span>
                                              <span  className={'btn btn-success btn-sm'}><i className={'fa fa-edit'}></i>Edit</span>
                                              <span onClick={()=>this.the_deleteUser(user)} className={'btn btn-danger btn-sm'}><i className={'fa fa-trash'}></i>Delete</span>
                                            </div>
                                        </td>
                                        </tr>
                                        )
                                    })
                                    }

                                    </tbody>
                                </table>
                            </div>

                            <div className={'card-footer'}>
                                {this.state.user.id > 0 ?
                                 <ViewUser user={this.state.user}/>
                                 :
                                    'Please Select user'
                                }
                            </div>


                                <div className="col-md-12">
                                    <h4 className={"text-warning"}>Edit User</h4>
                                    {this.state.user.id > 0 ?
                                    <UsersForm
                                      values={this.state.user}
                                      onSubmit={this.the_updateUser}
                                    />
                                    :
                                    'Please Select user'
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
