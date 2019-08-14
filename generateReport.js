'use strict';

function generateReport(data) {
  const columns = Object.keys(data[0]);
  return {
      numRows: data.length,
      numColumns: columns.length,
      columnName: columns
    };
}

module.exports = generateReport;