
// Login redirect and match
document.getElementById('login_btn').addEventListener('click',function(){
    const email = document.getElementById('email');
    const pass = document.getElementById('password');

    if(email.value == 'bankhisab@gmail.com' && pass.value == 'bankhisab'){
        window.location.href='account_details.html';
    }
});