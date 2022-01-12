import React, { useEffect, useState, useRef } from 'react'
import useInfinitePagination from './hooks/useInfinitePagination'

const List = () => {
  const [todos, setTodos] = useState([])
  const limit = 10
  const [page, setPage] = useState(1)

  const parentRef = useRef()
  const childRef = useRef()

  const intersected = useInfinitePagination(parentRef, childRef, () => fetchTodos(limit, page))

  function fetchTodos(limit, page){
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos(prev => [...prev, ...json])
        setPage(prev => prev + 1)
      })
  }

  return (
    <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{ padding: '15px', border: '2px solid black' }}
          >
            <span>{item.id}.</span> {item.title}
          </div>
        )
      })}
      <div ref={childRef} style={{height: '20px', backgroundColor: 'green'}}></div>
    </div>
  )
}

export default List
