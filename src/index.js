import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../src/app'
import { Box } from '@radix-ui/react'

const root = document.getElementById('root')
if (root != null) {
  ReactDOM.render(
    <Box>
      <App />
    </Box>,
    root
  )
}
