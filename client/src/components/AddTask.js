import {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import {AddNewTask} from '../actions/index'
import axios from 'axios'
function AddTask(props)   {

const [taskName, setTaskName] = useState('');
const [taskImage, setImage] = useState('');
const [imagePreview, setImagePreview] = useState('');

const dispatch = useDispatch();
useEffect(async()=>{
    
   
},[])





const addTask=()=>{
  const reader = new FileReader();
  if (reader !== undefined && taskImage !== undefined) {
    reader.onloadend = () => {
      setImagePreview(reader.result)
      const formData=new FormData();
      formData.append("taskImage", taskImage)
      formData.append("taskName", taskName)
        var newTask={taskName:taskName,taskImage:reader.result}
    
    
        axios.post("http://localhost:39651/api/Tasks/addTask",newTask)
           .then(({ data }) => {
            });
        dispatch(AddNewTask(newTask))
    }
    if (reader !== undefined )
    reader.readAsDataURL(taskImage);
  }

  setTaskName("");
}

    return(
       
<div>
  

<div className="row"  style={{marginTop: '20%' }}>
<div className="col-md-12">
 text: <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)}/><br/><br/>
 </div>
 <div className="col-md-12">
 image: <input type="file"  onChange={e => setImage(e.target.files[0])} /><br/><br/>
 </div>
 <div className="col-md-12">
 <button onClick={addTask}> Add </button>
 </div>
</div>
</div>


    )
}

export default AddTask