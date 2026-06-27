"use client";

import { useState } from "react";

export default function LoginPage() {

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [message,setMessage]=useState("");

const login=async()=>{

const res=await fetch("http://localhost:5000/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username,
password
})

});

const data=await res.json();

setMessage(data.message);

}

return(

<div className="min-h-screen flex justify-center items-center bg-green-50">

<div className="bg-white shadow-xl rounded-xl p-8 w-96">

<h1 className="text-3xl font-bold text-center text-green-700 mb-6">

Login

</h1>

<input

className="border w-full p-3 rounded-lg mb-4"

placeholder="Username"

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>

<input

type="password"

className="border w-full p-3 rounded-lg mb-4"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button

onClick={login}

className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"

>

Login

</button>

<p className="text-center mt-5 text-green-700">

{message}

</p>

</div>

</div>

)

}