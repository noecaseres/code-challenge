
import { render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { TableComponent } from './TableComponent';

 describe('Pruebas en <TableComponent/>', () => { 
 
     test('debe mostrarse correctamente con valores por default',()=>{
         const {container} =render(
            <MemoryRouter>
                <TableComponent/>
            </MemoryRouter>
         );
         expect (container).toMatchSnapshot();

     });

     test('debe mostrar file2 y el input con el valor del queryString',()=>{
        render(
           <MemoryRouter initialEntries={['/?q=file2']}>
               <TableComponent/>
           </MemoryRouter>
        );  
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('file2')
    })
  })