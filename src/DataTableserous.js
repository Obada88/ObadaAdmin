 export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'Status', headerName: 'Status', width: 130 },
 
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
       cellRender:(params) =>{
          return (
            <div className={`cellWithStatus ${params.row.Status}`}>
                {params.row.Status}
            </div>
          )
        },
       
    },
  ];
  

  export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,Status:"Active",action:"view",action:"view",actiondel:"Delete"  },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,Status:"Active",action:"view",actiondel:"Delete"   },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,Status:"Active",action:"view",actiondel:"Delete"   },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,Status:"Active" ,action:"view",actiondel:"Delete"  },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 28,Status:"Active",action:"view",actiondel:"Delete"   },
    { id: 6, lastName: 'Melisandre', firstName: "Obada", age: 66 ,Status:"Active",action:"view",actiondel:"Delete"  },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,Status:"Active",action:"view",actiondel:"Delete"   },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,Status:"Active",action:"view",actiondel:"Delete"   },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,Status:"Active",action:"view" ,actiondel:"Delete" },
  ];