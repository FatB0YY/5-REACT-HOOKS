import React, { useRef } from 'react'

import useInput from './hooks/useInput'
import useHover from './hooks/useHover'
import List from './List'

import './App.css'


function App() {
  const username = useInput('')
  const password = useInput('')

  const ref = useRef()
  const isHovering = useHover(ref)

  return (
    <div className='App'>
      <div>
        <input {...username} type='text' placeholder='username' />
        <input {...password} type='text' placeholder='password' />
      </div>
      <div
        ref={ref}
        style={{
          width: '100px',
          height: '200px',
          backgroundColor: isHovering ? '#660099' : '#339933',
        }}
      >
        <button onClick={() => console.log(ref.current)}>ref.current</button>
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}

export default App
