import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const store = useSelector(store => store)
  // const loading = useSelector(store => store.authedUser === null)

console.log('>>>',store)
  
  return (
    <div>
      App
    </div>
  );
}

export default App;
