import React from 'react'
import { task, TaskTableProps, Column } from '../constant/init'
import { Table, TableHead, TableBody, TableCell, TableRow, Button } from '@mui/material'

export default function TaskTable(props: TaskTableProps): JSX.Element {
  const { columns, tasks, handleDeleleTask, handleEditTask } = props
  return (
    <Table sx={{ minWidth: 650, width: '60vw', ml: 30, position: 'absolute', top: 120 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          {columns.map((column:Column) => (
            <TableCell key={column.field} align='right'>
              {column.headerName}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow key={index}>
            {columns.map((column:Column) => (
              <TableCell key={column.field} align='right'>
                {column.field === 'status'
                  ? task[column.field] === 3
                    ? 'Hoàn thành'
                    : task[column.field] === 2
                      ? 'Đang thực hiện'
                      : 'Chưa thực hiện'
                  : task[column.field]}
              </TableCell>
            ))}
            <TableCell align='right'>
              <Button variant='contained' color='primary' sx={{ mr: 1 }} onClick={() => handleEditTask(task)}>
                Sửa
              </Button>
              <Button variant='contained' color='secondary' onClick={() => handleDeleleTask(index)}>
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
