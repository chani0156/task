import { GET_TASKS,ADD } from '../actions/index'


function reducer(state = { tasks : [] }, action) {
    switch (action.type) {
            
            case ADD:   
            debugger      
            let currentTask = state.tasks;
            currentTask.push(action.data);
            return {...state, tasks : currentTask}

            case GET_TASKS:
                    debugger
                    return {
                       
                        tasks:action.data,         
                    };
            default:
            return state;
    }
  }
  
  export default reducer;