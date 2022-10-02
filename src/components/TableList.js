import React from 'react'

export const TableList = ({
    fileName,
    id,
    lines,
    file
}) => {
    
  return (
    <>
              {
            lines.map((line=>(
              <tr key={line.number}>
              <td>{fileName}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
              </tr>
            )
             
            ))
          }

    </>
          
    
  )
}
