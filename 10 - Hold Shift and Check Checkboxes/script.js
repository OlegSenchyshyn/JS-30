//getting inputs
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // 1.Check if they had the shift key down
  // 2.AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // 3.go ahead and do what we please
    // 4.loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); //when user clicks it, it's gonna run function handleCheck
console.log(checkboxes);
