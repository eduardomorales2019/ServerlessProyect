const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.API_AIR_TABLE_ID })
  .base(process.env.BASE_ID)
  .table("products");

exports.handler = async (event, cb, context) => {
  console.log(event);
  // id id is provided i can  retrive the data.  if not server error.
  const { id } = event.queryStringParameters;
  console.log(id, "Im id ");

  if (id) {
    try {
      const product = await airtable.retrieve(id);
      console.log(product, "IM PRODUCT");
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with this id :${id} `,
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(product),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `server Error `,
      };
    }
  }
  return {
    statusCode: 404,
    body: "Please Provide an ID ",
  };
};
