import { makeStyles } from '@material-ui/core';
import React from 'react'




const CollEstimated = ({type,setOpen}) => {
    const classes= useStyle();
    
    return (
      <div className={classes.container}>
          <div className={classes.list}>
          <div className={classes.title}>
          <h5>Estimated</h5>
        
       </div>  

            <button className={classes.btn} onClick={()=>setOpen(false)}>0 Points</button>
            <button className={classes.btn} onClick={()=>setOpen(false)}>1 Points</button>
            <button className={classes.btn} onClick={()=>setOpen(false)}>2 Points</button>
            <button className={classes.btn} onClick={()=>setOpen(false)}>4 Points</button>
            <button className={classes.btn} onClick={()=>setOpen(false)}>8 Points</button>
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
    marginTop:"10px",
  
  },
  list:{
    color:"#fff",
    display:"flex",
    flexDirection: "column",
  }
  }))
export default CollEstimated