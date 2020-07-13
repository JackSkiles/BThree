import React, { Component } from 'react'
import './feed.css'
import { Link } from 'react-router-dom';
import Friends from '../component/Friends';
import Chat from '../component/Chat'
import { Navbar, Nav } from 'react-bootstrap'
import MapContainer from '../component/MapContainer'


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="FeedPage">
            <Navbar>
                <Navbar.Brand style={{fontSize: '55px', color: 'white'}}>BThree</Navbar.Brand>
                <Nav className="justify-content-end ml-auto" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href="/feed">Home</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href='/chat'>Messages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href="/account">Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href='/'>Log Out</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

                <header>
                    <div className="flexRow">
                        <h1 style={{margin: '10px auto', width: '100px', color: 'white'}}> Feed </h1>
                    </div>
                </header>

                <div className="flexRow spaceBetween end">  

                    {/* timeline of all notifications from friends and yourself */}
                    <div className="FriendsArea"> 
                        Friends <hr/>
                        <Friends />
                    </div>

                    {/* Users can see their location and have the option to have it turned on or off */}
                    <div className="LocationArea"> Location <hr/>
                        <MapContainer />
                    </div>
                </div>
                {/* Standard footer of any website including the copyright, link to the about page, and help */}
                <footer> 
                    link to about page copyright Help
                </footer>
            </div>
        );
    }
}

export default Feed;