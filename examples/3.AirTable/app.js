// const { default: axios } = require("axios");
const result = document.querySelector(".result");

const fetchingData = async () => {
  const url = "/api/3-AirTable";

  try {
    const { data } = await axios.get(url);
    console.log(data);
    const productos = data
      .map((products) => {
        const { id, url, Name, Price } = products;
        return `<a href="products.html?id=${id}" class="product">
<img src=${url} alt="${Name}"/>
<div class="info">
<h4>${Name}</h4>
<h4>Price: $${Price}</h4>
</div>
</a>`;
      })
      .join("");

    result.innerHTML = productos;
  } catch (error) {
    result.innerHTML = `<h2> There must be an error</h2>`;
  }
};

fetchingData();
