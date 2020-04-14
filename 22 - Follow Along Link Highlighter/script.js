const triggers = document.querySelectorAll('a'); //selecting all links
const highlight = document.createElement('span'); // create <span> for highlight
highlight.classList.add('highlight'); //adding class of highlight
document.body.appendChild(highlight); //putting it into the DOM

//listen for someone enters into a link
function highlightLink() {
  //how big is the element that we hovered and how and where on the page is that actual element function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.table(linkCoords);
  const coords = {
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  //applying the style
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

//listen for mouse enter event on each of our triggers -> when that happens we're gonna run highlightLink function
triggers.forEach((a) => a.addEventListener('mouseenter', highlightLink));
