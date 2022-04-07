import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DownloadButton } from './DownloadButton';
import { ViewButtonIcon } from './ViewButton';
import { MoreButton } from './MoreButton';

interface IDocumentsProps {
  handleFilePreview: any;
}

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
    minWidth: 120,
  },
  {
    field: 'accessLevel',
    headerName: 'Clearance',
    minWidth: 110,
  },
  {
    field: 'btcHash',
    headerName: 'Transaction ID',
    minWidth: 150,
    flex: 1,
    sortable: false,
  },
];

const DocumentsTable: React.FC<IDocumentsProps> = ({ handleFilePreview }) => {

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
        onRowClick={(e) => handleFilePreview(e)}
        getRowId={(row) => row._id}
        disableSelectionOnClick={true}
        />
      )}
    </div>
  );
};

export default DocumentsTable;
