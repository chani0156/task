export const GET_TASKS = 'GET_TASKS'
export const ADD = 'ADD'

export const getData = (allTaks) => {
  return {
    type: GET_TASKS,
    data:allTaks
  }
}

export const AddNewTask = (task) => {
  return {
    type: ADD,
    data: task
  }
}

