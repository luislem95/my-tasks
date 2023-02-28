import { makeStyles } from '@material-ui/core';
import React from 'react'

const SearchBar = () => {
  const classes= useStyle();
  return (
    <div className={classes.searchBar}>
         <input className={classes.searchBar}  id='navBar' type="search" placeholder="Search" aria-label="Search"/>

    </div>
  )
}


const useStyle= makeStyles(theme =>({
  searchBar:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
    
    gap: "801px",
    
    position: "absolute",
    height: "64px",
    width:"100%",
    left: "0px",
   
    
    /* neutral.4 */
    
    background:"#2C2F33",
    borderRadius: "16px",
  }
}))

export default SearchBar