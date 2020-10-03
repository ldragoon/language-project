import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { atom } from 'recoil'
import styled from 'styled-components'
import EditWord from '../../../Components/EditWord'
import axios from 'axios'
const ALERT_ATOM = atom({
  key: 'ALERT_ATOM',
  default: {
    isOpen: false,
    severity: '',
    msg: '',
  },
})
const StyledPaper = styled(Paper)`
  padding: 20px 30px;
`
// Handle submit
export const NewWord = () => {
  const handleSubmit = (payload) => {
    console.log('Sending new word to server', payload)
    axios
      .post('/api/new-word', payload)
      .then((res) => {
        console.log('==============================================')
        console.log('SUCCESS!')
      })
      .catch((e) => {
        console.error(e)
        // setAlert({
        //   isOpen: true,
        //   severity: 'error',
        //   msg: `${e}`,
        // })
      })
  }
  return (
    <StyledPaper>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Typography variant='h5'>New Term</Typography>
        </Grid>
        <Grid item>
          <EditWord onSave={handleSubmit} />
        </Grid>
      </Grid>
    </StyledPaper>
  )
}