import React from "react";

function Welcome(props){
    return <h1>Привет, {props.name}</h1>;
}

function App(){
    return(
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Argen"/>
            <Welcome name="Arsen"/>
        </div>
    );
}

export default App;