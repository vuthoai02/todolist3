export interface task {
  id: number | null
  title: string
  description: string
  status: 1| 2 | 3
  deadline: string
  [key: string]: any;
}

export interface taskState {
  tasks: task[]
}

export const INIT_TASKS: taskState = {
  tasks: []
}

export interface TaskTableProps {
  columns: any
  tasks: task[]
  handleDeleleTask: (id: number) => void
  handleEditTask: (task: task) => void
}

export interface TaskFormProps {
    open: boolean
    handleCloseForm: () => void
    handleAddTask: (task: task) => void
    editTask: task | null
    handleUpdateTask: (task: task) => void
    setEditTask: (task: task | null) => void
}

export interface Column {
  field: string
  headerName: string
  width: number
}
