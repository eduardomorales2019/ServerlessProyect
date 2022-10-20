// require ("dotenv").config() // here we must npm the Library
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.API_AIR_TABLE_ID })
  .base(process.env.BASE_ID)
  .table("products");

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    console.log(records);

    const productos = records.map((product) => {
      const { id } = product;
      const { Name, Image, Price } = product.fields;
      console.log(Image, "soy image ");

      const url = Image[0].url;
      return { id, Name, url, Price };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(productos),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "problem with the server. ",
    };
  }
};
