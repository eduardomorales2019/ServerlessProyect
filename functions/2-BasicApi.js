const object = [
  { nombre: "Edu", edad: 41 },
  { nombre: "Luis", edad: 38 },
];

// as act of EC6, we use other archive, from the aasets,

const item = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    // to access data to oher path or other appications if its the same data we ass headers.
    //  CORS --PROBLEMS
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    //body: "Basic Apic from The course  ",
    body: JSON.stringify(item),
  };
};

//
