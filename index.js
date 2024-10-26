const colapsProduct = document.querySelector(".colapsProdu");
const colapsCompany = document.querySelector(".colapsComp");
const colapsContact = document.querySelector(".colapsCont");
const Product = document.querySelector(".product-list");
const Company = document.querySelector(".company-list");
const Contact = document.querySelector(".contact-list");
const ColabIcons = document.querySelectorAll(".co-icon");

const hideOthers = (currentList) => {
    if (currentList !== Product) Product.style.display = "none";
    if (currentList !== Company) Company.style.display = "none";
    if (currentList !== Contact) Contact.style.display = "none";

    ColabIcons.forEach(icon => icon.style.transform = "rotate(0deg)");  // Reset all icons
};

colapsProduct.addEventListener("click", () => {
    hideOthers(Product);
    if (Product.style.display === "block") {
        Product.style.display = "none";
        colapsProduct.querySelector(".co-icon").style.transform = "rotate(0deg)";
    } else {
        Product.style.display = "block";
        colapsProduct.querySelector(".co-icon").style.transform = "rotate(180deg)";
    }
});

colapsCompany.addEventListener("click", () => {
    hideOthers(Company);
    if (Company.style.display === "block") {
        Company.style.display = "none";
        colapsCompany.querySelector(".co-icon").style.transform = "rotate(0deg)";
    } else {
        Company.style.display = "block";
        colapsCompany.querySelector(".co-icon").style.transform = "rotate(180deg)";
    }
});

colapsContact.addEventListener("click", () => {
    hideOthers(Contact);
    if (Contact.style.display === "block") {
        Contact.style.display = "none";
        colapsContact.querySelector(".co-icon").style.transform = "rotate(0deg)";
    } else {
        Contact.style.display = "block";
        colapsContact.querySelector(".co-icon").style.transform = "rotate(180deg)";
    }
});
