var form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false);

function contact_submit(e) {
    // Stop form from submitting
    e.preventDefault();

    // Set initial variables
    var target = e.target || e.srcElement;
    var to = 'jensr2019@gmail.com';
    var uri = 'mailto:' + to;
    var body = '';

    // Set form values to variables
    var name = target.elements['name'].value;
    var phone = target.elements['phone'].value;
    var subject = "Contact form submission: " + name + " " + phone;
    var message = target.elements['message'].value;

    // Build body / message with all input fields
    body += "Hi Jens!\n\n";
    body += message + "\r\n\r\n";
    body += name;

    // Build final Mailto URI
    uri += '?subject=' + encodeURIComponent(subject)
    uri += '&body=' + encodeURIComponent(body);

    // Open Mailto in a new window / tab
    window.open(uri,'_blank');
}