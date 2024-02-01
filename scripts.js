const passwordsMatchError = document.querySelector('span')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submitButton = document.querySelector('button')
let passwordsEqual = false;

function updateErrorMessageVisibility() {
    if (password.value === confirmPassword.value) {
        passwordsMatchError.style.visibility = 'hidden';
        confirmPassword.style.backgroundColor = 'var(--ternary-color)';
        passwordsEqual = true;
        
    } else {
        passwordsMatchError.style.visibility = 'visible';
        confirmPassword.style.backgroundColor = 'red';
        passwordsEqual = false;
    }
}

confirmPassword.addEventListener('input', updateErrorMessageVisibility);

password.addEventListener('input', () => {
    if (confirmPassword.value !== '') {
        updateErrorMessageVisibility();
    }
});

submitButton.addEventListener('click', (e)=>{
    if (confirmPassword.value.length < 8 || password.value.length < 8) {
        return;
    }else if (!passwordsEqual){
            e.preventDefault();
        }
    }
)


