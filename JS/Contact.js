function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yannangelicio@gmail.com",
        Password : "81E61E0BA2B53570307A651FE7EDE34F517E",
        To : 'slawleung@gmail.com',
        From : "yannangelicio@gmail.com",
        Subject : "",
        Body : ""
    }).then(
      message => alert(message)
    );


}