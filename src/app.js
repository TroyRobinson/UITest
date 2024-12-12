import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'
import { Group } from 'utopia-api'
import { Button, Input, Text, Box } from '@radix-ui/react'

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
      <Box
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
        <Text style={{ fontSize: '32px' }}>Todo App</Text>
        <Box
          style={{
            contain: 'layout',
            width: '100%',
            height: 126,
          }}
        >
          <Input
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
          <Button
            onClick={
              editIndex !== null
                ? handleSaveEdit
                : handleAddTask
            }
            style={{
              height: 58,
              contain: 'layout',
              backgroundColor: 'rgb(255, 164, 164, 1)',
              position: 'absolute',
              top: 68,
            }}
          >
            {editIndex !== null ? 'Save Edit' : 'Add Task'}
          </Button>
        </Box>
        <Box style={{ width: '100%', marginTop: 20 }}>
          {tasks.map((task, index) => (
            <Box
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
              <Text
                style={{
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}
              >
                {task}
              </Text>
              <Box>
                <Button
                  onClick={() => handleEditTask(index)}
                  style={{ marginRight: 10 }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteTask(index)}
                  style={{
                    backgroundColor:
                      'rgb(255, 183, 183, 1)',
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Box style={{ width: '100%', marginTop: 20 }}>
          <Text>Task Statistics</Text>
          {Object.entries(taskCounts).map(
            ([task, count]) => (
              <Box
                key={task}
                style={{ fontSize: '12px', height: 29 }}
              >
                <Text style={{ height: 'max-content' }}>
                  {task}: {count}
                </Text>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </FlexCol>
  )
}
