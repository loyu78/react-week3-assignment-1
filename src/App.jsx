import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';


const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// action creator
function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: { 
      taskTitle, 
    },
  };
}

function addTask() {
  return{
    type: 'addTask'
  };
}

function deleteTask(id){
  return{
    type: 'deleteTask',
    payload: {
      id
    }
  };
}

export default function App() {
  const dispatch = useDispatch();

  const {taskTitle, tasks} = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());

  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}