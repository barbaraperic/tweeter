import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { handleSetInitialData } from '../actions/shared'
import Nav from './Nav/index'

const App = () => {
  const store = useSelector(store => store)
  const loading = useSelector(store => store.authedUser === null)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(handleSetInitialData())
  }, [])

  const classes = useStyles()

  if (loading) {
    return <p>Loading</p>
  }
  
  return (
    <div className={classes.container}>
      <Nav />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    width: '90%',
    margin: '0 auto',
    marginTop: '32px'
  }
}))

export default App;
