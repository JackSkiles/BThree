
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


import { Link } from 'react-router-dom'
import './login.css'
import { Redirect, withRouter } from 'react-router-dom'
import Account from './account';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: ""
        }
        this.authorizeLogin = this.authorizeLogin.bind(this)


    }


    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        })
    }
    authorizeLogin = (e) => {
        e.preventDefault();
        axios.post('/api/v1/login', {
            ...this.state
        })


            // the axios comparison of the line above
            // fetch('/api/v1/login', 
            // { 
            //     method: 'POST', 
            //     body: JSON.stringify(this.state), 
            //     headers: {
            //         'Content-Type': 'application/json;charset=UTF-8'
            //       },
            //     }) 

            .then((response) => {
                console.log(response)
                this.setState({ redirect: '/account' })
                this.props.setLoggedIn('logged in')
                this.props.history.push('/feed')
                // this.setState({ redirect: `/account` })
            })
            .catch(err => {
                console.log(err);
                alert('Error logging in please try again')
            })
    }
    render() {
        return (

            <div className="LoginPage">
                <div className="blackboard">
                    {/* {this.state.redirect && <Redirect to={this.state.redirect} />} */}

                    <h3 style={loginColor}>Log In</h3>
                    {/* <!-- form for user login  --> */}
                    <form onSubmit={this.authorizeLogin} style={{ width: '30%', margin: '40px auto' }} >

                        {/* <!-- input field for Username --> */}
                        <div className="form-group" style={loginColor}>
                            <label>
                                Username:
                         <input name="username" type="text" onChange={this.myChangeHandler} value={this.state.username} />
                            </label> <br />
                        </div>
                        {/* <!-- input field for Password --> */}
                        <div className="form-group" style={loginColor}>
                            <label>
                                Password:
                        <input name="password" type="password" onChange={this.myChangeHandler} value={this.state.password} />
                            </label> <br />
                        </div>
                        <Button className="btn btn-primary btn-block" style={{display: 'flex', justifyContent: 'center', width: '100%', fontSize: '90%'}}onClick={this.authorizeLogin} > Login</Button>


                        <p className="text"><Link to={'/register'}>Not signed up? Register here</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);


const loginColor = {
    color: 'white'
}
