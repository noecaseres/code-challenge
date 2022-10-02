import React, { useEffect } from 'react';
import queryString from 'query-string';
import {useNavigate, useLocation} from 'react-router-dom';
import {Table, Form} from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { getFile } from '../helpers/getFile';
import { TableList } from './TableList';


export const TableComponent = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search); //Parseo "q"
  const files = getFile(q);


  const { searchText, onInputChange } = useForm({
    searchText:q
  });


  const onSearchSubmit = () => {
    navigate(`?q=${searchText}`) //envio el queryparam
  }

  useEffect(() => {
    onSearchSubmit()
  }, [searchText])
  


  return (
    <>
      <Form onSubmit={ onSearchSubmit }>
          <input 
            type="text"
            placeholder='e.g: file1'
            className="w-100"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
      </Form>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {
          files.map(file=>(
            <TableList
            key={file.id} 
            {...file}
            />
          ))
          }
      </tbody>
    </Table>
    </>
  )
}
