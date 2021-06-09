import {useState, useEffect} from 'react'
import { useSelector ,useDispatch} from "react-redux";
import {getData} from '../actions/index'
import Task from './Task'
import axios from 'axios'


function AllTasks(props)   {
    const dispatch = useDispatch();

    const divStyle={
        overflowY: 'scroll',
        width:'100%',
        float: 'left',
        height:'100%',
        position:'relative'
      };
      
const tasks = useSelector(state => state);
useEffect(async()=>{
      
},[])

const loadAll=()=>{
      axios.get("http://localhost:39651/api/Tasks")
      .catch(e=>alert(e))
          .then(({ data }) => {
            dispatch(getData(data));
           });
       };


    return(
        <div style={divStyle}>
            {
tasks.tasks.map((item,index)=>{
    return <Task task={item}key={index}/> 
                })
            } 
             <button onClick={loadAll}  style={{marginTop: '90%' }}>Load All</button>        
        </div>
    )
}

export default AllTasks