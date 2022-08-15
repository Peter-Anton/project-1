const navBar = document.querySelector("#navbar__list");
/*navbar is a variable that contain the tag with id ("navbar__list") aka <ul>*/
const sections = document.querySelectorAll('section');

/*sections is an array of variable contain all sections tag */
for (const section of sections) {
    const item = document.createElement('li');
    item.innerHTML = `<a class="menu__link" data-section="${section.id}">
                        ${section.id}
                      </a>`;
    navBar.appendChild(item);
}
/* this for loop create a new list tag with text contenent `<a class="menu__link" data-section="${section.id}" >${section.id}</a>`
* it will crate each time a list tag in ul tag in the HTML file
*/
//
const lists=document.querySelectorAll("#navbar__list a");
for (let i = 0; i <lists.length ; i++) {
lists[i].addEventListener("click", (e) =>
        document
            .querySelector("#" + e.target.dataset.section)
            .scrollIntoView({behavior: "smooth"})
    )
}


/*here we select the tag with id (navbar__list) and then we add an event listnner to it in which we will make
the scroll smooth
 */
document.addEventListener("scroll", () => {
    for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 10 && rect.bottom >= 500) {
            section.classList.add('active_class');
            continue;
        }
        section.classList.remove('active_class');
    }

})

/*
* here we add active class to the section tag when scrolling on it
* it will appear when scroliing into the border of the section
* in the css file it will add a background color when the class is active
*
*/
