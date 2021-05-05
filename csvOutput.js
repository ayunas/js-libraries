const csv= require('csv-writer').createObjectCsvWriter;

async function csvOutput(dataArr, fileName) {
    const csvWriter = createCSVWriter(fileName);
    try {
        await csvWriter.writeRecords(dataArr);
        console.log("data written to " + fileName + " successfully");
    } catch(e) {
        console.error("there was an error writing to file : " + fileName);
    }
}

const createCSVWriter = (fileName, fields) => csv({
    path : fileName,
    header : [
            {id : 'first', title : 'first_name'},
            {id : 'last', title : 'last_name'},
            {id : 'dob', title : 'date_of_birth'},
            {id : 'age', title : 'age'},
            {id : 'gender', title : 'gender'},
            {id : 'city', title : 'city'},
            {id : 'state', title : 'state'}
    ]
}); 