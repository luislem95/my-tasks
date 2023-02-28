import { InputBase, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

const InputAdd = () => {
    const classes= useStyle();
    const[task, setTask]=useState("");
  return (
    <>
        <InputBase 
    multilinevalue={task}
    onChange={e=> setTask(e.target.value)}
    placeholder="Task Title"
    className={classes.input}/></>
  )
}
const useStyle= makeStyles(theme =>({
    wrapper:{
        position:'absolute',
        top:200,
        left:"100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "16px",
        gap: "24px",
        
        
        width: "572px",
        height: "184px",
        /* neutral.3 */
        background: "#393D41",
        borderRadius: "8px",
       },
       input:{
        position:'relative',
        border:0,
        borderRadius:4,
        padding:15,
        color:"#fff",
        background: "#393D41",
        width:"568px",
        left:14,
        top:5
       },

}))

export default InputAdd