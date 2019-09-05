function contactForm() {
    var name = document.form ["contactForm"] ["first_name"];
     var name = document.form ["contactForm"] ["last_name"];
      var name = document.form ["contactForm"] ["email"];
       var name = document.form ["contactForm"] ["textArea"];
}

if (first_name.value == "", > 4) {
    window.alert ("Please enter your first name.");
    first_name.focus ();
    return false;
}

if (last_name.value == "", > 4) {
    window.alert ("Please enter your last name.");
    first_name.focus ();
    return false;
}

if (email.value == "") {
    window.alert ("Please enter a valid email adress.");
    email.focus ();
    return false;
}

if (email.value.indexOf("@", 0) < 0)
{
    window.alert ("Please enter a valid email address.");
    email.focus ();
    return false;

}

if (email.value.indexOf(".", 0) < 0)
{
    window.alert ("Please enter a valid email address.");
    email.focus ();
    return false;
}

if (message.length > 20) {
    window.alert ("Please enter at least 20 characters in the textfield.");
    first_name.focus ();
    return false;
}