// import React from "react";
// import { useState } from "react";
import noteContext from "./NoteContext";


const NoteState = (props) => {
  const state = {
    name: "mera naam",
    age: "15",
  };

  //To change the value of state in context
//   const [state, setState] = useState(stateOne);
//   const update = ()=>{
//     setTimeout(() => {
//         setState({
//             name : "Utkarsh ",
//             age :"21"
//         })
//     }, 1000);
//   }

  return (
    // <noteContext.Provider value={{state,update}}>
    <noteContext.Provider value={state}>
    {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
