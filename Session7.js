function SendEmail(email, name, subj, text) {
    emailjs.init("user_hBsFRb46nBL53r9gBtua0");
    emailjs.send("service_1v4xyvq", "template_send_to_someone", { recipient: email, your_name: name, subject: subj, notes: text })
  	.then(function () {
  	    alert("Sent to inbox!");
  	}, function (err) {
  	    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
  	});
    return false;
}
