import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { task, TaskFormProps } from '../constant/init'

export default function TaskForm(props: TaskFormProps): JSX.Element {
  const { open, handleCloseForm, handleAddTask, editTask, handleUpdateTask, setEditTask } = props

  const validationSchema = yup.object({
    title: yup.string().required('Nhiệm vụ không được để trống'),
    description: yup.string().required('Mô tả không được để trống'),
    deadline: yup.date().required('Ngày hết hạn không được để trống')
  })

  const formik = useFormik({
    initialValues: {
      id: null,
      title: '',
      description: '',
      deadline: '',
      status: 1
    },
    validationSchema: validationSchema,
    onSubmit: (values: task) => {
      if (editTask) {
        handleUpdateTask({ ...values, id: editTask.id })
      } else {
        handleAddTask(values)
      }
      formik.resetForm()
      setEditTask(null)
    }
  })

  React.useEffect(() => {
    if (editTask) {
      formik.setValues(editTask)
    }
  }, [editTask])

  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <DialogTitle>{editTask?'Sửa thông tin': 'Thêm nhiệm vụ'}</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            name='title'
            label='Nhiệm vụ'
            type='text'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            name='description'
            label='Mô tả'
            type='text'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            name='deadline'
            label='Ngày hết hạn'
            type='date'
            value={formik.values.deadline}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.deadline && Boolean(formik.errors.deadline)}
            helperText={formik.touched.deadline && typeof formik.errors.deadline === 'string' ? formik.errors.deadline : undefined}
            sx={{ my: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id='status-label'>Trạng thái</InputLabel>
            <Select
              labelId='status-label'
              id='status'
              name='status'
              value={formik.values.status}
              label='Trạng thái'
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>Chưa thực hiện</MenuItem>
              <MenuItem value={2}>Đang thực hiện</MenuItem>
              <MenuItem value={3}>Đã hoàn thành</MenuItem>
            </Select>
          </FormControl>
          <DialogActions>
            <Button onClick={handleCloseForm}>Hủy</Button>
            <Button variant='contained' type='submit'>
              Thêm
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}
