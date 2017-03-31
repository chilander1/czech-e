let tabLinks;
let tabPanels;
const d = document;
window.onload = function () {

    tabLinks = d.querySelectorAll(".filter-tabs")[0].getElementsByTagName("a");
    tabPanels = d.querySelectorAll(".filterTab");
    console.log(tabPanels);
    displayPanel(tabLinks[0]);

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function () {
            displayPanel(this);
            return false;
        };
    }
};



function displayPanel(tabToActivate) {

    for (let i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] === tabToActivate) {
            tabLinks[i].classList.add("active");
            console.log(tabPanels[i].classList);
            tabPanels[i].classList.add('show-filter');
            // tabPanels[i].style.display = "block";
        } else {
            tabLinks[i].classList.remove("active");
            tabPanels[i].classList.remove('show-filter');
        }
    }
}

// Sticky header on scroll

const header = d.querySelectorAll('.header')[0];

window.onscroll = function () {
    if (document.body.scrollTop > 70) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
};



