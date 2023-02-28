import React, { useContext, useState } from 'react'
import { InputBase, makeStyles, Typography } from '@material-ui/core'
import ContextAPI from '../ContextAPI';




const ListTitle = ({title, listId,index}) => {
    const classes= useStyle();
    const[open,setOpen]=useState(false);
    const[newTitle,setNewTitle]=useState(title);
    const{updateListTitle}= useContext(ContextAPI);
    const handleBlur=()=>{

      updateListTitle(newTitle,listId)
      setOpen(false);
    }
  return (
<>

            {open?( 
            <InputBase 
            value={newTitle}
            onChange={e=>setNewTitle(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            fullwidth
            inputProps={{className:classes.input}}
            />
            
            )  :  ( 
            <div className={classes.title}>
                <Typography className={classes.titleText} onClick={()=>setOpen(true)}>
                    {title}
                </Typography>
                
            </div>
            
            )}



        </>
  )
}

  const useStyle= makeStyles(theme =>({
        title:{
          fontFamily: 'SF Pro Display',
            display:"flex",  
            width:"348px",
            height: "32px",
            fontWeight: "600",
            lineHeight: "32px",
            color: "#FFFFFF",
            alignItems: "center",
        },
        titleText:{
         fontSize:"18px"
        },
        input:{
          fontSize:"1.1rem",
          fontWeight:"bold",
          color:"#fff",
        }
  }))

  



  
export default ListTitle