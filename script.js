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
  // console.log(phones);
  
  phoneContainer.textContent = "";
  if(phones.length > 12 ){
    document.getElementById("show-all").classList.remove("hidden")
  }else{
    document.getElementById("show-all").classList.add("hidden")
  }
  phones = phones.slice(0, 12);
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
          <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show detail</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  handleLoadingSpinner(false)
};

const handleShowDetail = async (id)=>{
  console.log("show detail" , id);
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  console.log(data);
  
  
  
}

const handleSearch = () => {
  handleLoadingSpinner(true)
  const searchFild = document.getElementById("search-text");
  const searchText = searchFild.value;
  // console.log(searchText);
  loadPhon(searchText);
};

const handleLoadingSpinner = (isLoading)=>{
  const loadingSpinner = document.getElementById("loading-spinner-container")
  if(isLoading){
    loadingSpinner.classList.remove("hidden")
  }else{
    loadingSpinner.classList.add("hidden")
  }
}

loadPhon();
