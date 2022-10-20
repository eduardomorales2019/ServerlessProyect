// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

const result = document.querySelector(".result");

const fetchingProduct = async () => {
  result.innerHTML = `<h2>Loading </h2>`;

  // OBJECT WINDOW==
  // const id = "?=22";
  const id = window.location.search;
  try {
    const {
      data: { fields },
    } = await axios(`/api/3-Product${id}`);
    console.log(fields);
    const { Image, Price, description, Name } = fields;
    result.innerHTML = `
	<h1 class="title">${Name}</h1>
<article class="product">
         <img class="product-img"
         src="${Image[0].url}"
         alt="${Name}"
         />
         <div class="product-info">
           <h5 class="title">${Name}</h5>
           <h5 class="price">Price: ${Price}</h5>
           <p class="desc">${description}</p>
         </div>
`;
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchingProduct();
