import { Button } from '@chakra-ui/react'
import React from 'react'
import { Route } from 'react-router-dom'
import Chatpage from './page/Chatpage'
import Homepage from './page/Homepage'

function App() {
  return (
    <div>
       <Route path='/' exact component={Homepage} />
       <Route path='/chats' component={Chatpage} />
    </div>
  )
}

export default App