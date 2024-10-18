import { useState } from 'react';
import { Box, Button, Grid2 } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "@mui/icons-material";
import { ROOTSTATE } from './redux/store';
import {task, Column} from './constant/init'
import { addTask, updateTask, deleteTask } from './redux/actions.ts';

//Components
import TaskTable from './components/taskList';
import TaskForm from './components/taskForm';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state:ROOTSTATE) => state.taskReducer.tasks);
  const [open, setOpen] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<task | null>(null);

  const columns: Column[] = [
    { field: "id", headerName: "#", width: 70 },
    { field: "title", headerName: "Nhiệm vụ", width: 130 },
    { field: "description", headerName: "Mô tả", width: 130 },
    {
      field: "deadline",
      headerName: "Ngày hết hạn",
      width: 90,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 90,
    },
  ];

  const handleAddTask = (task:task) => {
    const id = tasks.length +1;
    dispatch(addTask({...task, id}));
    setOpen(false);
  };

  const handleUpdateTask = (task:task) => {
    console.log(task);
    dispatch(updateTask(task));
    setOpen(false);
  };

  const handleOpenForm = () => {
    setOpen(true);
  };
  const handleCloseForm = () => {
    setOpen(false);
  };

  const handleDeleleTask = (id:number) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (task:task) => {
    setEditTask(task);
    setOpen(true);
  };

  return (
    <Grid2 container spacing={2}>
      <Box position={'absolute'} right={10} top={70}>
        <Button startIcon={<Add />} variant='contained' onClick={handleOpenForm}>
          Thêm nhiệm vụ
        </Button>
      </Box>
      <TaskTable columns={columns} tasks={tasks} handleDeleleTask={handleDeleleTask} handleEditTask={handleEditTask} />
      <TaskForm
        open={open}
        handleCloseForm={handleCloseForm}
        handleAddTask={handleAddTask}
        editTask={editTask}
        handleUpdateTask={handleUpdateTask}
        setEditTask={setEditTask}
      />
    </Grid2>
  )
}

export default App
