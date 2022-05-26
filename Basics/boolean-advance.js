let isAccountLocked = true;
let userRole = 'Admin';

// If else
if (isAccountLocked) {
    console.log('Account is locked')
} else {
    console.log('Account is not locked')
}

// If elseif else
if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'Admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome user')
}