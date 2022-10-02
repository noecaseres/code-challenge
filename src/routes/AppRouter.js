import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { TableComponent } from '../components/TableComponent';

export const AppRouter = () => {
  return (
    <Container className="mt-5">
        <Routes>
          <Route path="/" element={<TableComponent />} />
        </Routes>
    </Container>
  )
}
