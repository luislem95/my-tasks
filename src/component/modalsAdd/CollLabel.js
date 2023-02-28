import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

const CollLabel = ({setOpen}) => {
  const classes= useStyle();
  
  return (
    <div className={classes.container}>
        <div className={classes.list}>
        <div className={classes.title}>
        <h5>Label</h5>
     </div>
          
          <button className={classes.btn}>ANDROID</button>
          <button className={classes.btn}>RECTt</button>
          <button className={classes.btn}>IOS</button>
          <button className={classes.btn}>RILS</button>
          <button className={classes.btn}>NODE_JS</button>
        </div>
    </div>
  )
}

const useStyle= makeStyles(theme =>({
container:{
  
},
title:{
  display:"flex",
  width:"200px",
  zIndex:"10"
},
x:{
color:"#fff",
marginLeft:"40px"
},
btn:{
  color:"#fff",
  border:0,
  width:"60px",
  marginBottom:"10px"

},
list:{
  color:"#fff",
  display:"flex",
  flexDirection: "column",
}
}))

export default CollLabel