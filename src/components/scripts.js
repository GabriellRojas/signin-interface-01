export function showPassword() {
    let inputPass = document.getElementsByClassName('input_password')
    let btnShowPass = document.getElementsByClassName('open_eye')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        // btnShowPass.classList.replace('open_eye', 'closed_eye')
    }
}