import React, { useState } from "react";


function App(){

const [fullName, setFullName] = useState({
    fName:'',
    lName:'',
    email:''
})


function handleChange(event){

const {value, name}=event.target;
console.log(name)

setFullName(prevValue => {

        if ( name === "fName") {
         return {
            fName: value,
            lName: prevValue.lName,
            email: prevValue.email
         };

    }
    else if(name === "lName") {
          return {
              fName : prevValue.fName,
              lName : value,
              email :prevValue.email
            };
    }
    else if(name === "email") {
        return {
            fName : prevValue.fName,
            lName : prevValue.lName,
            email : value
          };
  }
});
}

    return (
        <div className="bg-teal-500 h-screen flex flex-col justify-center items-center gap-3">
            <div>
                 <h1 className="text-white">Hello {fullName.fName} {fullName.lName} {fullName.email} </h1>
            </div>
            <form action="" className="flex flex-col gap-3">
                <input type="text"  onChange={handleChange} name="fName"  value={fullName.fName} placeholder="First Name"  className="text-center bg-teal-800 shadow-xl border-spacing-1 border-stone-400 p-1 cursor-pointer"/>
                <input type="text"  onChange={handleChange} name="lName"  placeholder="last Name" value={fullName.lName} className="text-center bg-teal-800 shadow-xl border-spacing-1 border-stone-400 p-1 cursor-pointer" />
                <input type="email" onChange={handleChange} name="email"  placeholder="email" value={fullName.email} className="text-center bg-teal-800 shadow-xl border-spacing-1 border-stone-400 p-1 cursor-pointer" />
                <button className="bg-white text-teal-500 font-semibold shadow-xl p-1">Submit</button>
            </form>
        </div>
    )
}


export default App;