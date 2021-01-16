function validate(){
    // alert('correct till here')
    var userID = document.getElementById('userID').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    // var country = document.forms['RegForm'][country].selectedIndex;
    var zip = document.getElementById('zip').value;
    var email = document.getElementById('email').value;
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var english = document.getElementById('english');
    var non_english = document.getElementById('non-english');
    if(userID == '' || userID.length < 5 || userID.length > 12){
        document.getElementById('user').innerHTML = 'must be greater than 5 and less than 12'
    }
    if(password == '' || password.length < 7 || password.length > 12){
        document.getElementById('pass').innerHTML = 'must be greater than 7 and less than 12'

    }
    if(!isletter(name)){
        document.getElementById('name').innerHTML = 'alphabet only'
    }
    // if(county < 1){
    //     document.getElementById('country').innerHTML = 'must select a country'

    // }
    if(zip == ''){
        document.getElementById('zi').innerHTML = 'cannot be blank'

    }
    if(!validateEmail(email)){
        document.getElementById('mail').innerHTML = 'not a valid email'
    }
    if(!(male.checked || female.checked)){
        document.getElementById('gender').innerHTML = 'must select gender'
    }
    if((english.checked || non_english.checked) && (english.checked || non_english.checked)){
        document.getElementById('lang').innerHTML = 'must select one'
    }
}
//email validation copied from stakoverflow
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}