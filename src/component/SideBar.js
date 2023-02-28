import { makeStyles } from '@material-ui/core';
import React from 'react'



const SideBar = () => {
  const classes= useStyle();
  return (
<div className={classes.title} > 
            <div className={classes.header} >
                <img className={classes.img} src="https://cdn.dribbble.com/users/37508/screenshots/3951611/media/e822822de1c9da25e172f7e3dc457691.png?compress=1&resize=400x300" alt="" />
           

                 <ul className={classes.body}>
                 
                
                  <li className={{hover: classes.li}}>
                      <a className={classes.li} href="#">Home</a>
                  </li>
                  <li className={{hover: classes.li}}>
                      <a className={classes.li} href="#">My Tasks</a>
                  </li>
  
              </ul>
              </div>
       
</div>
  )
}

const useStyle= makeStyles(theme =>({
  title:{
      display:"flex",
      justifyContent: "space-around",
     borderTopLeftRadius:"24px",
     borderTopRightRadius:"24px",
      background: "#2C2F33",
  },
  img:{
    width:"100px",
    marginTop:"15px",
    marginLeft:"66px"

  },
  header:{
    background: "#2C2F33",
    borderTopLeftRadius:"24px",
    borderTopRightRadius:"24px",
    
  },
  body:{
    background: "#2C2F33",
    marginTop:"50px",
    listStyle:"none",
    
  },

  li: {
    
    textDecoration:"none",
    color:"#fff",
    background:"#2C2F33",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 0px 0px 16px",
    gap: "16px",

      width: "215px",
      height: "56px",
    

      flex: "none",
      order: 0,
      flexGrow: 0,

    "&:hover": {
      background: "linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)",
    }
  }
  
}))

export default SideBar