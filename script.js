
const btn1 = document.querySelector('.email form .button')


function validation(){
    let inpt = document.querySelector('.email form input[type="text"]').value
    let text = document.querySelector('.text p:nth-child(2)')
    let form = document.querySelector('.email form input[type="text"]')
    let overlay = document.querySelector('.overlay')

    // inpt.style.backgroundColor='salmon'

    if(inpt === '', inpt != arr){
        text.style.display='block'
        form.classList.add('unvalid')
        form.style.transition='.3s'
        
    }
    if(inpt == arr){
        overlay.style.display="block"
    }

}





// menu Sign In

const signIn_input = document.querySelector('.signIn-input')
const btnSignin = document.querySelector('.btnSignIn')
const arr = []


function signIn(){
    arr.push(signIn_input.value)
    const container = document.querySelector('.container')
    const signIn = document.querySelector('.signIn')
    
    signIn.style.display ='none'
    container.style.display = 'flex'

}



