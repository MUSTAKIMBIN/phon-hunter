const loadPhon = async (searchPhone) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = ""
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("card", "bg-base-100", "shadow-xl");
    phoneDiv.innerHTML = `
      <figure class="px-10 pt-10">
        <img
          src="${phone.image}"
          alt="Shoes"
          class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.brand}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};

const handleSearch = () => {
  const searchFild = document.getElementById("search-text");
  const searchText = searchFild.value;
  console.log(searchText);
  loadPhon(searchText)
};

loadPhon();
