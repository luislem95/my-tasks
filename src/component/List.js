import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from './Card'
import ListTitle from './ListTitle'



const List = ({list,index}) => {
    
    const classes= useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {  (provided)=>(
      <div  ref={provided.innerRef}{...provided.dragHandleProps}{...provided.draggableProps}>
              <Paper className={classes.body}>
                          
                          
                          <ListTitle title={list.title} listId={list.id}/>
                          {
                              list.cards.map((card,index)=>(
                                  <Card card={card} key={card.id} index={index}/>
                              ))
                          }
        
                      
          </Paper>
      </div>
        )}
    </Draggable>
          
 
  )
}




const useStyle= makeStyles(theme =>({
    body:{
        background: "#111111",
        height:"100vh"
    },
    add:{
        width: "40px",
        height: "40px",
        
        /* primary.4 */
        
        background: "#DA584B",
        borderRadius: "8px",
        
        /* Inside auto layout */
        
        flex: "none",
        order: 1,
        fleGgrow: 0,
    },
    searchBar:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        gap: "801px",
        
        position: "absolute",
        height: "64px",
        left: "296px",
        right: "36px",
        top: "32px",
        
        /* neutral.4 */
        
        background: "#2C2F33",
        borderRadius: "16px",
    },
    root:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "16px",
        gap: "16px",

        width: "348px",
        height: "208px",
        marginTop:"30px",
        

        /* neutral.4 */

        background: "#2C2F33",
        borderRadius: "8px",

        /* Inside auto layout */

        flex: "none",
        order: 2,
        flexGrow: 0,
    },
    sideBar:{
        position: "absolute",
        width: "232px",
        height: "836px",
        left: "32px",
        top: "32px",

/* neutral.4 */

        background: "#2C2F33",
        borderRadius: "24px",
    }
}))

export default List