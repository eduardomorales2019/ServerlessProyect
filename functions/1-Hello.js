// domain :  domain/.netlify/functions/1-.Hello

// const { json } = require("stream/consumers");

// using strinfy with an object or arrya.------------

const person = {
  name: "Eduardo",
  profesion: { abogado: { tipo: "penal", tipo2: "mercantil" } },
};

// .-------------------------------------------------
// !! always string
//  1.---------HERE QE USE A ASYNC FUNCTION .----------------------
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Esta es mi primer funcion en Netlify ",

    // ERROR IN CASE

    //statusCode: 404,
    //body: "Data not available",

    // JSON.stringlify
    // body: JSON.stringify(person),
  };
};

// 2.--------USING A CALL BACK.-----------------------

// exports.handler = (event, context, callback) => {
//   callback(null, {
//     statusCode: 200,
//     body: "using a callback as second form of communication. ",
//   });
// };
// -------------------------------------------------
