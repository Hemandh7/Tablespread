import React, { useState } from 'react';
import './App.css';
import { MaterialReactTable } from 'material-react-table';
import Papa from 'papaparse';

function App() {
  const [colDefs, setColDefs] = useState([]);
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState('');

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };

  const importCSV = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const fileData = result.data;
          const headers = fileData[0];
          const heads = headers.map((head) => ({
            id: head, // Add id property here
            header: head,
            accessorKey: head,
          }));
          setColDefs(heads);

          // Removing header
          fileData.splice(0, 1);

          setData(convertToJson(headers, fileData));
        },
        header: false,
      });
    } else {
      setData([]);
      setColDefs([]);
    }
  };

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Import Data from CSV in Material Table</h4>

      <div className="file-input-container">
        <label htmlFor="file-upload" className="file-input-label">
          Choose File
        </label>
        <input
          id="file-upload"
          type="file"
          className="file-input"
          onChange={importCSV}
          accept=".csv"
        />
        {fileName && <span className="file-name">{fileName}</span>}
      </div>

      <MaterialReactTable columns={colDefs} data={data} />
    </div>
  );
}

export default App;
