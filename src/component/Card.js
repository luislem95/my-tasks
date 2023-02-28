import React from 'react'
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { makeStyles, Paper } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({card, index}) => {
  const classes= useStyle();
  return (


    
  <Draggable draggableId={card.id} index={index}>
    {
      (provided)=>(

<div className={classes.div} ref={provided.innerRef}{...provided.dragHandleProps}{...provided.draggableProps}>



  <Paper  className={classes.card}>
  <div className={classes.title}>
    {card.name}
    <MoreHoriz className={classes.div}/>
    </div>
   <div className={classes.cont}>
   <div className={classes.estimate}>  {card.pointEstimate}</div>
   <div className={classes.date}> {card.dueDate}</div>
   </div> 
   <div className={classes.tagsContainer}>
    {
                           card.tags.map(tag=>(
                             <div className={classes.tags}>{card.tags}</div>
                           ))
    }
   </div>
   
   <div className={classes.img} >
   <img className={classes.img} style={{"height" : "32px"}}  src={card.assignee.avatar}  alt="Title" />
   </div>
    
</Paper>

</div>
      )
    }
  </Draggable>
    
  )
}

const useStyle= makeStyles(theme =>({  
      div:{
        background: "#2C2F33",
        
      },
      card:{
          display: "grid",
          alignItems: "flex-start",
          padding: "16px",
          gap: "16px",
          justifyContent: "space-between",

          width: "348px",
          height: "208px",
          marginBottom:"50px",
          marginTop:"25px",

          /* neutral.4 */

          background: "#2C2F33",
          borderRadius: "8px",

          /* Inside auto layout */

          flex: "none",
          order: 1,
          flexGrow: 0,
      },
      title:{
        width: "356px",
        height: "32px",

        /* Desktop/Body/L/bold */

        fontFamily: 'SF Pro Display',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "32px",
        /* identical to box height, or 178% */

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        letterSpacing: "0.75px",

        /* neutral.1 */
        background: "#2C2F33",
        color: "#FFFFFF",
      },
      cont:{
        display:"flex",
        background: "#2C2F33",
      },
      estimate:{
        width: "60px",
        height: "24px",
        marginRight:"130px",
        /* Desktop/Body/M/bold */
        
        fontFamily: 'SF Pro Display', 
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "24px",
        /* identical to box height, or 160% */
        
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.75px",
        background: "#2C2F33",
        /* neutral.1 */
        
        color: "#FFFFFF",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: 0,
        flexGrow: 0,
      },
      date:{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "8px",
        
        width: "161px",
        height: "32px",
        
        background: "rgba(148, 151, 154, 0.1)",
        borderRadius: "4px",
        
        /* Inside auto layout */
        color: "#FFFFFF",
        flex: "none",
        order: 1,
        flexGrow: 0,
      },
      tags:{
        display: "flex",
        flexDirection: "row",
        alignItems:'center',
        padding: "4px 16px",
        gap: "8px",
        marginRight:"20px",
        width: "92px",
        height: "32px",

        background: "rgba(112, 178, 82, 0.1)",
        borderRadius: "4px",
        color:"#70B252;" ,
        /* Inside auto layout */
        justifyContent: "space-evenly",
        flex: "none",
        order: 0,
        flexGrow: 0,
      },
      tagsContainer:{
        display:"flex",
        background: "#2C2F33",
      },
      img:{
        background: "#2C2F33",
        borderRadius:"18px"
      }


}))

export default Card