import React from "react";
import Counter from "./components/Counter";
import Container from "./components/Container";
export default App;



function App() {
    const counterProps = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
    }

    return(

        <Container>
            <div>
                <Counter {...counterProps} />
            </div>
        </Container> 
     
    )
}