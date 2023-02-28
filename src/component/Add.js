
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ModalAdd from './ModalAdd';




function Add() {
  const[active, setActive]= useState(false);
  const toggle=()=>{
    setActive(!active);
  }
  const classes= useStyle();
  return (

 
    <>
    <button onClick={toggle} className={classes.bntImg}><img className={classes.img}   src="https://cdn-icons-png.flaticon.com/512/5535/5535444.png" alt="Card image cap"/></button>
      <ModalAdd active={active} toggle={toggle}>
      
      </ModalAdd>
    </>
  


  )
}

const useStyle= makeStyles(theme =>({
  img:{
      display:"flex",
      width:"60px",
      color:"red",
      
  },
  bntImg:{
  border:0
  }
}))
export default Add