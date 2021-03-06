import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {MenuBar} from "./components/MenuBar";
import {Notes} from "./components/Notes";
import './css/index.css';
import './css/menuBar.css';
import {RivalRush} from "./components/RivalRush";
import {Messenger} from "./components/Messenger";




class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="mainContainer" id="body">
                    <RivalRush/>
                    <Messenger/>
                    <Notes/>
                </div>
                <MenuBar/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
