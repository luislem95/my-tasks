import { Collapse, fade, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CollAssignee from './CollAssignee';

const EditAssignee = () => {
    const classes= useStyle();
    const[open,setOpen]=useState(false);
  return (
    <div className={classes.root}>
        <Collapse in={open} className={classes.buttonOpen}>
        <button className={classes.cross} onClick={()=>setOpen(false)}>x</button>
        <CollAssignee/>
        
        </Collapse>
        <Collapse className={classes.button} in={!open}> 
         <button className={classes.center} onClick={()=>setOpen(true)}>Assignee</button>
         </Collapse>
    </div>
  )
}





const useStyle= makeStyles(theme =>({
  center:{
      color:"#fff",
      border:0,
      background:"rgba(148, 151, 154, 0.4)",
      height:"30px",

         },
         cross:{
            border:0,
            color:"#fff",
            display:"flex"
         },
         button:{
          marginRight:"18px",
          background: "rgba(148, 151, 154, 0.1)",
         },
         buttonOpen:{
          display:"flex",
          marginTop:"225px",
          
         },

         root:{
          display: "flex",
          flexDirection: "row",
          alignItems:"center",
          justifyContent:"space-around",
          padding: "4px 16px",
          gap: "8px",
          marginRight:"20px",
      
          width: "96px",
          height: "25px",
      
          background: "rgba(148, 151, 154, 0.1)",
          borderRadius: "4px",
          border:"none",
      
          /* Inside auto layout */
          
          flex: "none",
          order: 0,
          flexGrow: 0,
          "&:hover":{
            background: "linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)",
          }
          
         },
  
}))

export default EditAssignee