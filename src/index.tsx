import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Hello = (props:any)=> {
  return (
    <div>Hello</div>
  )
}

ReactDOM.render(
  <>
    <Hello/>
  </>,
  document.getElementById('root')
)
