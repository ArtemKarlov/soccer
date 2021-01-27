import React from "react";

function Button(props) {

    const { name } = props;

    const handleClick = () => {
        console.log(`${name}`)
    };    

    return (
        <button className="py-2 px-3 rounded text-white bg-blue-400 hover:bg-blue-500 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-800"
            onClick={handleClick}>
            { name }
        </button>
    );
}

export default Button;