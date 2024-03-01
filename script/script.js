




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

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="${element.image_url}"
                    class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl font-bold">${element.title}</h1>
                    <p class="py-6">${element.details.slice(0, 200)}</p>
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
            </div>
        `
        newsContainer.appendChild(div);

    });

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






































