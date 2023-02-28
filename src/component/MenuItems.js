import React from 'react'
import Menu from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';



const MenuItems = () => {
  const classes= useStyle();
  return (
    <div className={classes.menuContainer} >
        
        
        <Menu className={classes.menu} />
        
        <img className={classes.img} src="https://cdn-icons-png.flaticon.com/512/58/58477.png" alt="Card image cap"/>
        </div>
        
        
      
  )
}
const useStyle= makeStyles(theme =>({
  img:{
      display:"flex",
      width:"25px",
      color:"red",
      
  },
  menuContainer:{
    display:"flex",
    background:"#111111",
  },
  menu:{
    display:"flex",
    width:"45px",
  }
}))

export default MenuItems