import React from "react";

const Container = ({children}) => {
    return (
        <div style={{padding : 20, margin: 20, border: "4px solid grey"}}>{children}</div>
    )
}

export default Container;