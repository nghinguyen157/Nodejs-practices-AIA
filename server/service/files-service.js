const xlsxFile = require('read-excel-file/node')

exports.readFiles = async () => {
    let workbook = await xlsxFile('./assets/test.xlsx');
    let workbookArrayJson = convertToJSON(workbook);
    let result = {
        max: workbookArrayJson.reduce((prev,current)=> prev.GPA > current.GPA? prev : current),
        min: workbookArrayJson.reduce((prev,current)=> prev.GPA < current.GPA? prev : current),
    }
    return result
};

function convertToJSON(array) {
    let first = array[0].join()
    let headers = first.split(',');
    console.log(headers)
    let jsonData = [];
    for ( let i = 1, length = array.length; i < length; i++ ) {
      let rowsVal = array[i]
      var data = {};
      for ( let x = 0; x < rowsVal.length; x++ ) {
        data[headers[x]] = rowsVal[x];
    }
      jsonData.push(data);
    }
    return jsonData;
  };