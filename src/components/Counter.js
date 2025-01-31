const { useState } = require("react")

const Counter = () =>{
const [count, setCount]=useState(0)
const getData = async () => {
    try{
        const data = await fetch("API URL");
        const json = await data.json();
    }
    catch(error){
        console.log("Error Fetching Data", error);
    }
    };
    getData();
    return(
        <>
        <div>Count: {count} </div>
        <button onClick={()=>{setCount(count+1)}} >+</button>
        <button onClick={()=>{setCount(count-1)}} >-</button>
        </>
    )
}

export default Counter