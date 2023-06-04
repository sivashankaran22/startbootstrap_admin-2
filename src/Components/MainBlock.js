import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import Main from './Main'


function MainBlock() {
  return (
    <div className='wrapper'>
      <SideBar/>
      <div className='content-wrapper '>
      <div className='content'>
      <TopBar/>
      <Main/>
      </div>
      </div>
    </div>
  )
}

export default MainBlock