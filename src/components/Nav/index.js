import React from 'react'
import Tabs from './Tabs'
import Avatar from './Avatar'

const Nav = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <p>Tweeter</p>
      <Tabs />
      <Avatar />
    </div>
  )
}

export default Nav