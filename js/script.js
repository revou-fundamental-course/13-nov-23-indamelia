
const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const nameOutput = document.getElementById('username')

submitButton[0].addEventListener("click", function(event){ 
    if(nameInput.value.length === 0 || emailInput.value.length === 0){ 
        alert("Nama atau email tidak boleh kosong")
    } else { 
        nameOutput.value = nameInput.value
    }
 })

 