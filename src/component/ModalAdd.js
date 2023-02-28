import { Collapse, fade, InputBase, makeStyles,Paper,Typography } from '@material-ui/core';
import React, { Component, useState } from 'react'
import EditAssignee from './modalsAdd/EditAssignee';
import EditDueDate from './modalsAdd/EditDueDate';
import EditEstimated from './modalsAdd/EditEstimated';
import EditLabel from './modalsAdd/EditLabel';
import InputAdd from './modalsAdd/InputAdd';
import PortalAdd from './PortalAdd'



export default class ModalAdd extends Component {
  render() {
    const{children, toggle, active }= this.props;

    
    return (
      <PortalAdd>
        {active&&(
        <div style={styles.wrapper}>
            <InputAdd/>
            <div style={styles.buttons} >
                <EditEstimated/>
                <EditAssignee/>
                <EditLabel/>
                <EditDueDate/>
            </div>
            <div style={styles.containerBtn}>
                <button style={styles.closeBtn} onClick={toggle}>Cancel</button>
                <button style={styles.createBtn} >Create</button>
            </div>
            
                
           
        </div>
            
            )}
      </PortalAdd>
    )
  }
}
const styles={
   wrapper:{
    position:'absolute',
    top:200,
    left:"100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "16px",
    gap: "24px",
  
    
    width: "572px",
    height: "184px",
    /* neutral.3 */
    background: "#393D41",
    borderRadius: "8px",
 
   },
   input:{
    position:'relative',
    border:0,
    borderRadius:4,
    padding:15,
    color:"#fff",
    background: "#393D41",
    width:"568px",
    left:14,
    top:5
   },
   center:{
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-around",
    padding: "4px 16px",
    gap: "8px",
    marginRight:"20px",

    width: "128px",
    height: "32px",

    background: "rgba(148, 151, 154, 0.1)",
    borderRadius: "4px",
    border:"none",

    /* Inside auto layout */
    color:"#fff",
    flex: "none",
    order: 0,
    flexGrow: 0,
   },
   buttons:{
    display: "flex",
    width:"100%",
    background: "#393D41",
   },
   closeBtn:{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px",
    gap: "10px",
    
    width: "62px",
    height: "40px",
    
    /* primary.2 */
    
    background: "#393D41",
    borderRadius: "8px",
    
    /* Inside auto layout */
    
    flex: "none",
    order: 1,
    flexGrow: 0,
    border:0,
   },
   createBtn:{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px",
    gap: "10px",
    
    width: "62px",
    height: "40px",
    
    /* primary.2 */
    
    background: "#EBA59E",
    borderRadius: "8px",
    
    /* Inside auto layout */
    
    flex: "none",
    order: 1,
    flexGrow: 0,
    border:0,
   },
   containerBtn:{
    display:"flex",
   background: "#393D41",
   marginTop:"10px",
   },
   text:{
    background: "#393D41",
   },
}