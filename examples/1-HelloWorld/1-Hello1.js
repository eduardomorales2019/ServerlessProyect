const result = document.querySelector(".result");

const fetch = async () => {
  console.log("fetching Data. ");

  // CHANGE THE PATH AS THE NETLIFY.TOML.
  // const url = "/.netlify/functions/1-Hello";  // WITOUT PATH.
  const url = "/api/1-Hello";

  try {
    const { data } = await axios.get(url);

    console.log(data);
    result.textContent = data;
  } catch (error) {
    console.log(error.response);
    const errorr = error.response.data;
    result.textContent = JSON.stringify(errorr);
  }
};

fetch();
