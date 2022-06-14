let inputsContact = document.getElementsByClassName('formInput');
let logosContact = document.getElementsByClassName('fa-solid');
for (let i = 0; i < inputsContact.length; i++) {
    inputsContact[i].onfocus = () => {
        inputsContact[i].style.borderColor = 'cyan';
        logosContact[i].style.color = 'cyan';
    }
    inputsContact[i].onblur = () => {
        inputsContact[i].style.borderColor = 'white';
        logosContact[i].style.color = 'white';
    }
}


// Problem Section
// this works but only on disabled options
if ($('#selectContact option:selected').val() == 'none') {
    document.getElementById('selectContact').style.color = 'gray';
} else {
    document.getElementById('selectContact').style.color = 'red';
}