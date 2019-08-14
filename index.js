'use strict';

const express = require('express');
const path = require('path');
const app = express();
const generateReport = require('./generateReport');
const data = require('./data');

const staticFilePath = path.join(__dirname, 'public');
const staticFielMiddleware = express.static(staticFilePath);

app.use('/', staticFielMiddleware);
app.get('/rest/data', (req, res) => {
    const report =  generateReport(data);
    res.json(report);
  });

app.listen(3000, () => {
    console.log('Server is running.');
  });


//console.log('Number of Rows: ' + report.numRows);
//console.log('Number of Columns: ' + report.numColumns);
//console.log('Columns: ' + report.columnName.join(', '));