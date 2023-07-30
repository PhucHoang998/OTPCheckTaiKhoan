// đây là main chạy giao diện chính của OTP
// xác định được source cho giao diện của CSS
// thank you for donate
const inputs = document.querySelectorAll('.otp-card-inputs input')
const button = document.querySelector('.otp-card button')
const disabled = document.querySelector('.otp-card button')
inputs.forEach(inputs =>{
    let lastInputStatus = 0
    inputs.onkeyup = (e) =>{
        const currentElement = e.target
        const nextElement = inputs.nextElementSibling
        const prevElement = inputs.previousElementSibling

        if(prevElement && e.keyCode === 8){
            if(lastInputStatus === 1){
                prevElement.value = ''
                prevElement.focus()

            }
            button.setAttribute('disabled', false)
            lastInputStatus = 1
            button.setAttribute('disabled', true)
            lastInputStatus = 1
        } else {
            const reg = /^[0-9]+$/
            if(!reg.test(currentElement.value)){
                currentElement.value = currentElement.value.replace(/D/g, '')
            } else if (currentElement.value){
                nextElement.focus()
            } else {
                button.removeAttribute('disabled')
                lastInputStatus = 0
            }          
        }   
    }
})
//the-end
