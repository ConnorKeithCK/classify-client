import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DownloadButton } from './DownloadButton';
import { ViewButtonIcon } from './ViewButton';
import { MoreButton } from './MoreButton';

interface IDocumentsProps {}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
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
    field: 'clearance',
    headerName: 'Clearance Level',
    minWidth: 200,
  },
  {
    field: 'date',
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
        <div style={{ padding: 5, textAlign: 'right' }}>
          <DownloadButton
            onClick={() => console.log('clicked')}
          ></DownloadButton>
          <ViewButtonIcon onClick={() => console.log('clicked')}></ViewButtonIcon>
          <MoreButton onClick={() => console.log('clicked')}></MoreButton>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, title: 'Report 1', agency: 'FBI', clearance: "SECRET", date: "Today" },
];

const DocumentsTable: React.FC<IDocumentsProps> = () => {
  return (
    // need to set fixed height here to have it display, or set autoHeight to true
    <div>
      <DataGrid autoHeight rows={rows} columns={columns} columnVisibilityModel={{
        id: false
      }} rowHeight={80}></DataGrid>
    </div>
  );
};

export default DocumentsTable;
