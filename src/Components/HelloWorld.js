import React from "react";

//Stateless functional component
// eslint-disable-next-line
export function HelloWorldFunctional(props) {
    return <h1>Hello {props.name}</h1>;
}

//Stateful Class --> NOT USED MUCH ANYMORE
export class HelloWorldClass extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}
//export default HelloWorldClass
