import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'
import { Group } from 'utopia-api'

export var App = () => {
  const [tasks, setTasks] = React.useState([])
  const [taskInput, setTaskInput] = React.useState('')
  const [editIndex, setEditIndex] = React.useState(null)
  const [taskCounts, setTaskCounts] = React.useState({})

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput])
      setTaskInput('')
      setTaskCounts((prevCounts) => ({
        ...prevCounts,
        [taskInput]: (prevCounts[taskInput] || 0) + 1,
      }))
    }
  }

  const handleEditTask = (index) => {
    setTaskInput(tasks[index])
    setEditIndex(index)
  }

  const handleSaveEdit = () => {
    if (taskInput.trim() !== '') {
      const updatedTasks = [...tasks]
      updatedTasks[editIndex] = taskInput
      setTasks(updatedTasks)
      setTaskInput('')
      setEditIndex(null)
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          contain: 'layout',
          width: 371,
          height: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 22,
        }}
      >
        <span style={{ fontSize: '32px' }}>Todo App</span>
        <div
          style={{
            contain: 'layout',
            width: '100%',
            height: 126,
          }}
        >
          <input
            type='text'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder='Enter a task'
            style={{
              width: '100%',
              height: 42,
              position: 'absolute',
              top: 1,
            }}
          />
          <button
            onClick={
              editIndex !== null
                ? handleSaveEdit
                : handleAddTask
            }
            style={{
              width: 127,
              height: 58,
              contain: 'layout',
              backgroundColor: 'rgb(255, 164, 164, 1)',
              position: 'absolute',
              left: 122,
              top: 68,
            }}
          >
            {editIndex !== null ? 'Save Edit' : 'Add Task'}
          </button>
        </div>
        <div style={{ width: '100%', marginTop: 20 }}>
          {tasks.map((task, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                backgroundColor: '#d3d3d3',
                height: 'max-content',
                padding: '12px 11px',
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}
              >
                {task}
              </span>
              <div>
                <button
                  onClick={() => handleEditTask(index)}
                  style={{ marginRight: 10 }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={{
                    backgroundColor:
                      'rgb(255, 183, 183, 1)',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: '100%',
            marginTop: 20,
          }}
        >
          <h3>Task Statistics</h3>
          {Object.entries(taskCounts).map(([task, count]) => (
            <div key={task}>
              <span>{task}: {count}</span>
            </div>
          ))}
        </div>
      </div>
    </FlexCol>
  )
}
