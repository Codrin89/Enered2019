console.log(document);
const getId = document.getElementById("idName");
console.log(getId);
const getClass = document.getElementsByClassName("className");
console.log(getClass);
const getTag = document.getElementsByTagName("div");
console.log(getTag);

// element.innerHTML
console.log(getId.innerHTML);
getId.innerHTML = "<div>3</div>";
for( let i =0; i < getClass.length ; i++) {
	getClass[i].innerHTML =i + 1;
}
//  attribute
const idAttr = getId.getAttribute("id");
console.log(idAttr);

const idAttr2 = getId.getAttribute("data-id");
console.log(idAttr2);

getId.setAttribute(" data-attr", "something");

getId.style.backround =" red"
