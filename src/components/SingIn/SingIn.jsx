import React from "react";


function SingIn() {

    const getToken = () => {
        console.log('Token');
    }
    return (
        <div className="px-20 py-4 w-2/3 space-y-4 mx-auto rounded-md bg-gray-400">
            <h2 className="text-black text-lg font-bold text-center">Sing In</h2>
            <from className="space-y-4 flex flex-col justify-center item-center" action="#">
                <input type="text" className="text-black rounded" id="token" name="token" placeholder="API Token" required="required" />
                {/* <input type="checkbox" className="rounded block text-pink-500" /> */}
                <button className="py-2 px-3 rounded text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-800 focus:outline-none"
                    onClick={getToken}>
                    Sing In
                </button>
            </from>
        </div>
    );
}

export default SingIn;
