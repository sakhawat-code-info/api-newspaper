




const loadNavbarCatagory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const navCat = data.data.news_category;

    const navContainer = document.getElementById('navContainer');



    navCat.forEach(element => {

        const li = document.createElement('li');
        li.innerHTML = `<a><button onclick="loadNews('${element.category_id}')">${element.category_name}</button></a>`;
        // console.log(element.category_id);
        // button.innerText = element.category_name;
        // li.appendChild(button);

        navContainer.appendChild(li);

    });



}





const loadNews = async (category_id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();

    const newsContainer = document.getElementById('newsContainer');

    newsContainer.innerHTML = '';

    data.data.forEach(element => {
        // console.log();
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="${element.image_url}"
                    class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl font-bold">${element.title}</h1>
                    <p class="py-6">${element.details.slice(0, 200)}</p>
                    <button onclick="handleViewMore('${element._id}')" class="btn btn-primary">View Details</button>
                </div>
            </div>
            </div>
        `
        newsContainer.appendChild(div);

    });

}


const handleViewMore = async (detailsId) => {

    // console.log(detailsId);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${detailsId}`);
    const data = await res.json();

    // console.log();

    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = "";
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="font-bold text-lg">${data.data[0].title}</h3>
        <p class="py-4">${data.data[0].details}</p>
    `
    modalContainer.appendChild(div);


    showDetailsByModal.showModal();



}






const handleSearch = () => {
    const searchFieldValue = document.getElementById('searchField').value;

    if (searchFieldValue === "") {
        alert('type something');
    } else {
        loadNews(searchFieldValue);
    }
}





loadNavbarCatagory();
loadNews('01');






































