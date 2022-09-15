const form=document.getElementById('form');

const firstName=document.getElementById('firstName');

const lastName=document.getElementById('lastName');

const emailAddress=document.getElementById('emailAddress');

const password=document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();

});

function checkInput(){

const firstNameValue= firstName.value;
const lastNameValue= lastName.value;
const emailAddressValue= emailAddress.value;
const passwordValue= password.value;

if (firstNameValue=="") {
    setErrorFor(firstName,"First name cannot be empty");
} else {
    setSuccessFor(firstName);
}

if (lastNameValue=="") {
    setErrorFor(lastName,"Last Name cannot be empty");
}else{
    setSuccessFor(lastName);
}

if (emailAddressValue=="") {
    setErrorFor(emailAddress,"Email Address cannot be empty");
} else if (!checkEmail(emailAddressValue)){
    setErrorFor(emailAddress,"Looks like this is not an email");
} else {
    setSuccessFor(emailAddress);
}

if (passwordValue=="") {
    setErrorFor(password,"Password cannot be empty");
} else if (passwordValue.length < 6){
    setErrorFor(password,"The password must be at least 6 characters long")
} else{
    setSuccessFor(password)
}
}

function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");

    //message error//
    small.innerText=message;

    //class error//
    formControl.className="form-control error ";
}

function setSuccessFor(input){
    const formControl=input.parentElement;
/*--success--*/

    formControl.className="form-control success ";

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }