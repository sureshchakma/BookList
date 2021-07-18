import React from "react";


let Person = (props) => {
    console.log(props);
    return(
        <div>
            <h3>Name: {props.name} and age: {props.age} years old.</h3>
            <h4>Extra Info: {props.children} </h4>
        </div>
    );
}

// class Person extends Component {
// //    constructor(props){
// //        super(props); 
// //    }
//    render(){
//        return(
//         <div>
//             <h3>Name: {this.props.name} and Age: {this.props.age} years old. </h3>
//             <h4>Extra Info: {this.props.children} </h4>
//         </div>
//        );
//    }
// }

export default Person;