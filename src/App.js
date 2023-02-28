import { useState } from 'react';
import './App.css';
import Add from './component/Add';
import List from './component/List';
import MenuItems from './component/MenuItems';
import SearchBar from './component/SearchBar';
import SideBar from './component/SideBar';
import mockData from './mockData.js';
import ContextAPI from './ContextAPI';

import{DragDropContext,Droppable}from "react-beautiful-dnd";




function App() {
  const onDragEnd=()=>{

  }
  const [data,setData]=useState(mockData);
  console.log(data)
  const updateListTitle=(updatedTitle,listId)=>{
      const list=data.list[listId]
      list.title=updatedTitle;
      setData({
        ...data,
        lists:{
          ...data.lists,
          [listId]:list
        }
      })
  }
  return (
    <ContextAPI.Provider value={{updateListTitle}}>
      <div className='container'>
     <div className='searchBar'>
      <SearchBar/>
     </div>
     <div className='menuItems'>
      <MenuItems/>
     </div>
     <div className='add'>
      <Add/>
     </div>
     <div className='sideBar'>
      <SideBar/>
     </div>
     <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='12345' type="list" direction='horizontal'>
        {
          (provided)=>(
            <div className="list" ref={provided.innerRef}
            {...provided.droppableProps}
            >
            {
              data.listIds.map(listID=>{
                const list=data.lists[listID] 
                return  <List list={list} key={listID}/>
              })
            }
            {provided.placeholder}
          </div>
          )
        }

      </Droppable>
    
      

     </DragDropContext>

</div>

    </ContextAPI.Provider>

  );
}

export default App;
