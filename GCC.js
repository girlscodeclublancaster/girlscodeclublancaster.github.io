function SendEmail(name, subj, text) {
    emailjs.init("user_hBsFRb46nBL53r9gBtua0");
    emailjs.send("gmail", "template_hdrKzGi0", { your_name: name, subject: subj, notes: text })
  	.then(function () {
  	    alert("Sent!");
  	}, function (err) {
  	    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
  	});
    return false;
}