import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.css'

const Loading = () => (
  <div className='loading'>
    <ReactLoading
      type='bars'
    />
  </div>
)
export default Loading
