import React from "react";

function Home() {
    return (
        <div className="px-20 py-4 w-2/3 mx-auto rounded-md bg-red-400">
            <h2 className="text-black text-center">Home</h2>
            <from>
                <input type="email" className="" id="email" name="email" placeholder="Email" required="required" />
                <input type="checkbox" class="rounded text-pink-500" />
            </from>
        </div>
    );
}

export default Home;
