function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ahmedalshatibi22@gmail.com",
        Password : "Ahmed123456",
        To : 'name@website.com',
        From : "document.getElementById('email').value",
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}