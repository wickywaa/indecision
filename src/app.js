import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';







const Layout = (props) =>{
    return(
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}


const template = (
    <div>
    <h1>page title</h1>
    <p>this is my page</p>
    </div>
)

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));