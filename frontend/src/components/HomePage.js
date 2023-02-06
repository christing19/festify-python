import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Switch, Routes, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                    <Routes>
                        <Route path='/' element={<p> This is the home page </p>}/>
                        <Route path='/join' element={<RoomJoinPage />}/>
                        <Route path='/create' element={<CreateRoomPage />}/>
                    </Routes>
            </Router>
        );
    }
}
