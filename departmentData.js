const faker = require('faker');

const createCSVWriter = (fileName, fields) => csv({
    path : fileName,
    header : [
            {id : ''}
    ]
}); 

function genData(recordCount) {
    const data = [];
    let d = 0;
    while(r < recordCount) {
        const st = createDept(data.length);
        data.push(st);
        d++;
    }
    return students;
}

const createDept = (len) => (
    {
        id : len + 1,
        name : faker.commerce.department(),
    }
);