const faker = require('faker');
const fs = require('fs');
const csv= require('csv-writer').createObjectCsvWriter;

function genStudentData(recordCount) {
    const students = [];
    let r = 0;
    while(r < recordCount) {
        const st = createStudent();
        students.push(st);
        r++;
    }
    return students;
}

const getRandomGender = () => {
    const genders = ['M','F'];
    const r = Math.floor(Math.random()*genders.length);
    return genders[r];
}

const createStudent = () => (
    {
        first : faker.name.firstName(), 
        last : faker.name.lastName(), 
        dob : faker.date.between("01/01/1928","12/12/2000"), 
        gender : getRandomGender(),
        city : faker.address.city(),
        state : faker.address.stateAbbr(),
        education : educate(),
        gpa : gpa(),
    }
);

const gpa = () => (.5 + Math.random()*4).toFixed(2);


const educate = () => {
    const education = ['high school','college','masters','PHD','N/A'];
    const e = Math.floor(Math.random()*education.length);
    console.log(education[e]);
    return education[e];
}


function jsonOutput(arr, fileName) {
    fs.writeFile(fileName,JSON.stringify(arr,null,"\t"), e => e ? console.log(`error writing to file ${fileName}`) : console.log(`successfully wrote to file ${fileName}`));
}

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
                {id : 'gender', title : 'gender'},
                {id : 'city', title : 'city'},
                {id : 'state', title : 'state'},
                {id : 'education', title : 'education'},
                {id : 'gpa', title : 'gpa'}
        ]
    }); 



const students = genStudentData(1000);

// jsonOutput(studentData,"student_data.json");
csvOutput(students,"../student.csv");

// console.log(studentData);


module.exports = {students , fileName : "students.json", genStudentData};