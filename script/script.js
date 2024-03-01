




const loadNavbarCatagory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const navCat = data.data.news_category;

    const navContainer = document.getElementById('navContainer');

    navCat.forEach(element => {

        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = element.category_name;
        li.appendChild(button);

        navContainer.appendChild(li);

    });
}



const newsContainer = document.getElementById('newsContainer');



const loadNews = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01');



}









loadNavbarCatagory();






































