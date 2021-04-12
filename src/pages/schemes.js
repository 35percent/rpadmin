import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import rows from "../../content/schemes.json"

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'address', headerName: 'Name', width: 70 },
  { field: 'completion', headerName: 'Borough', width: 130 },
  { field: 'url', headerName: 'Hyperlink', width: 130 },
  {
    field: 'description',
    headerName: 'Summary',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('title') || ''} ${params.getValue('borough') || ''}`,
  }
];


export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
