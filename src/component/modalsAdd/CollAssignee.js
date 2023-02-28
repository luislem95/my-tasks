import { makeStyles } from '@material-ui/core';
import React from 'react'
import mockData from '../../mockData';



const CollAssignee = ({type,setOpen}) => {
    const classes= useStyle();
    
    return (
      <div className={classes.container}>
          <div className={classes.list}>
          <div className={classes.title}>
          <h5>Assign to...</h5>
       </div>  
       <div className={classes.img} >
         <img className={classes.img} style={{"height" : "32px"}}  src="https://avatars.dicebear.com/api/initials/gs.svg"  alt="Title" />
         <h6 className={classes.text}>Grace Stone</h6>
         </div>
         <div className={classes.img} >
         <img className={classes.img} style={{"height" : "32px"}}  src="https://avatars.dicebear.com/api/initials/jd.svg"  alt="Title" />
         <h6 className={classes.text}>Jhon Doe</h6>
         </div>
         <div className={classes.img} >
         <img className={classes.img} style={{"height" : "32px"}}  src="https://avatars.dicebear.com/api/initials/jd.svg"  alt="Title" />
         <h6 className={classes.text}>Jhon Doe</h6>
         </div>
         <div className={classes.img} >
         <img className={classes.img} style={{"height" : "32px"}}  src="https://avatars.dicebear.com/api/initials/rb.svg"  alt="Title" />
         <h6 className={classes.text}>Romeo Barnes</h6>
         </div>
         <div className={classes.img} >
         <img className={classes.img} style={{"height" : "32px"}}  src="https://blog.newoldman.com.br/wp-content/uploads/2021/04/Touca-Pom-Pom-2.jpg"  alt="Title" />
         <h6 className={classes.text}>Luis Rodrigo Lemus Mendoza</h6>
         </div>

          </div>
      </div>
    )
  }
  
  const useStyle= makeStyles(theme =>({
  container:{
    background: "#2C2F33",
  },
  title:{
    display:"flex",
    width:"200px",
    zIndex:"10",
    
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
    background: "#2C2F33",
  },
  img:{
    display:"flex",
    alignItems: "center",
    background: "#2C2F33",
    borderRadius:"18px"
  },
  text:{
    background: "#2C2F33",
  }
  }))
export default CollAssignee