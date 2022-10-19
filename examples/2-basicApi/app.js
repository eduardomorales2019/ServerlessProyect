const result = document.querySelector(".result");

// we are fetchind data so use axios

const url = "/api/2-BasicApi";

const fetchingData = async () => {
  try {
    const { data } = await axios.get(url);
    // console.log(data);
    // just map products!!!

    const products = data.map((products) => {
      const {
        image: { url },
        name,
        price,
      } = products;
      return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">Price: $${price} </h5>
      </div>
    </article> `;
    });

    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h2> There must be an error</h2>`;
    console.log(error.response);
  }
};

fetchingData();
