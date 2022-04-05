import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DownloadButton } from './DownloadButton';
import { ViewButtonIcon } from './ViewButton';
import { MoreButton } from './MoreButton';

interface IDocumentsProps {}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, },
  {
    field: 'title',
    headerName: 'Document Title',
    minWidth: 350,
  },
  {
    field: 'agency',
    headerName: 'Agency',
    minWidth: 200,
  },
  {
    field: 'accessLevel',
    headerName: 'Clearance Level',
    minWidth: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Uploaded',
    minWidth: 110,
  },
  {
    field: 'buttons',
    headerName: ' ',
    minWidth: 150,
    flex: 1,
    sortable: false,
    renderCell: () => {
      return (
        <div style={{ padding: 50, textAlign: 'right' }}>
          <ViewButtonIcon onClick={() => console.log('clicked')}></ViewButtonIcon>
        </div>
      );
    },
  },
];

const DocumentsTable: React.FC<IDocumentsProps> = () => {

  const [classifyDocuments, setClassifyDocuments] = useState([])

  const getDocuments = async () => {
      fetch("http://localhost:8080/documents")
      .then(res => res.json())
      .then((result) => {
        setClassifyDocuments(result)
      },
      (error) => {
        console.log(error)
      })
  }

  useEffect(() => {
   getDocuments();
  }, [])

  return (
    // need to set fixed height here to have it display, or set autoHeight to true
    <div>
      {classifyDocuments.length > 0 && (
        <DataGrid autoHeight
        rows={classifyDocuments} 
        columns={columns} 
        columnVisibilityModel={{id: false}} 
        rowHeight={80}
        getRowId={(row) => row._id}
        ></DataGrid>
      )}
    </div>
  );
};

export default DocumentsTable;
