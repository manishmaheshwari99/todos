import React from 'react'


function Table({headers, data, handleDelete, searchTerm}) {
  return (
    <table>
        <thead>
        <tr>
            {headers.map( (header, index) => <TableHeadItem key={index} header={header}/> )}
        </tr>
        </thead>
        <tbody>
            {
                
                data.filter( (val)=>{
                    if (searchTerm == "") {
                        return val
                    }
                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map(item => <TableRow key={item.id} item={item} headers={headers} handleDelete={handleDelete} /> )
            }
        </tbody>
    </table>
  )
}

const TableHeadItem = ({ header }) => <th>{header.heading}</th>
const TableRow = ({ item, headers,handleDelete }) => {
    const handleDeleteHandler = (event) => {
        handleDelete(event.target.value);
    }
    return <tr>
        {
            headers.map(( header) => <td key={header.heading}>{item[`${header.value}`]}</td>)
            
        }
        <td><button type='button' value={item.id} onClick={handleDeleteHandler}>Delete</button></td>
        <td><button type='button' value={item.id}>Edit</button></td>
    </tr>
}

export default Table