const object = [
  { nombre: "Edu", edad: 41 },
  { nombre: "Luis", edad: 38 },
];

// as act of EC6, we use other archive, from the aasets,

const item = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    //body: "Basic Apic from The course  ",
    body: JSON.stringify(item),
  };
};
