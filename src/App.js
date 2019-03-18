import React, {Component} from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import UserInfo from "./component/UserInfo";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar title="Github API"/>
                <UserInfo/>
            </div>
        );
    }
}
export default App;
