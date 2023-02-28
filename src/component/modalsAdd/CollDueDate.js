import { makeStyles } from '@material-ui/core';
import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



const CollEstimated = ({type,setOpen}) => {
    const classes= useStyle();
    const state={
        fecha:new Date("2023","02","27")
    }
    return (
      <div className={classes.container}>
          <DatePicker selected={state.fecha}  className={classes.container}/>
      </div>
    )
  }
  
  const useStyle= makeStyles(theme =>({
  container:{
    color:"#fff"
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
    marginTop:"10px",
  
  },
  list:{
    color:"#fff",
    display:"flex",
    flexDirection: "column",
  }
  }))
export default CollEstimated