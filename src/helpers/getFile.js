import { files } from '../db'


export const getFile = ( name ='') => {
  name = name.toLocaleLowerCase().trim();

  if(name.length === 0 ) return files;

  return files.filter(
    file => file.fileName.toLocaleLowerCase().includes( name ) 
);

}
