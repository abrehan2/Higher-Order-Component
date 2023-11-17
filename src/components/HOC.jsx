// IMPORTS -
import { useState } from 'react';


const HOC = (Component) => {

    function SubComponent() 
    {
        const [value, setValue] = useState(0);
        const incrementHandler = () => {
            setValue(() => value + 1);

        }

        return (
            <Component
            incrementHandler = {incrementHandler}
            value = {value}/>
        );
    }


  return SubComponent;
}

export default HOC;