import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnswersPage } from '../AnswersPage'
import FormPage from '../FormPage'

export const FormRouter = () => {
  return (
    <Routes>

        <Route path='/*' element={ <FormPage /> } />
        <Route path='/answers' element={ <AnswersPage /> } />

    </Routes>
  )
}
