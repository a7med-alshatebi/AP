function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,

    }
    emailjs.send("service_q2lb6te","template_i03meq7",parms).then(alert('Email Sent Successfully'));
}
