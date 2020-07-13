// import react
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

// class component
// class Greeting extends React.Component {
//     render() {
//         console.log(this.props.name);
//         return (
//             <h1>Hello {this.props.name}</h1>
//         )
//     }
// }

// functional component
// const Greeting = (props) => {
//     console.log(props);
//     return <h1>Hello {props.name}</h1>
// }


ReactDOM.render(
    <App />,
    document.getElementById('root')
);