// Are both guests vegan ? : only offer up vegan dishes 
// Atleast one vegan ? : make sure to offer up some vegan dishes
// Else, offer up anything in the menu

let isGuestOneVegan = true 
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log(`Only offer up vegan dishes`)
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log(`Make sure to offer up some vegan dishes`)
} else {
    console.log(`Offer up anything in the menu`)
}