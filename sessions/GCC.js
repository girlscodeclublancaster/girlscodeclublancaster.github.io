function SendEmail(name, subj, text) {
    emailjs.init("user_hBsFRb46nBL53r9gBtua0");
    emailjs.send("gmail", "template_hdrKzGi0", { your_name: name, subject: subj, notes: text })
  	.then(function () {
  	    alert("Sent to inbox!");
  	}, function (err) {
  	    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
  	});
    return false;
}

﻿function GCCSendEmailToSomeone(email, name, subj, text) {
    emailjs.init("user_hBsFRb46nBL53r9gBtua0");
    emailjs.send("gmail_gcc", "template_send_to_someone", { recipient: email, your_name: name, subject: subj, notes: text })
  	.then(function () {
  	    alert("Sent to inbox!");
  	}, function (err) {
  	    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
  	});
    return false;
}

﻿function SendEmailToSomeone(email, name, subj, text) {
    emailjs.init("user_hBsFRb46nBL53r9gBtua0");
    emailjs.send("gmail", "template_send_to_someone", { recipient: email, your_name: name, subject: subj, notes: text })
  	.then(function () {
  	    alert("Sent to inbox!");
  	}, function (err) {
  	    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
  	});
    return false;
}

function PostForm(question, answer, name) {
    var xhr = new XMLHttpRequest();
    var url = "https://api.airtable.com/v0/applpntegyfIfrQWt/Session8?api_key=keyrbWVwQpct0XV6i";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //var json = JSON.parse(xhr.responseText);
            //console.log(json);
        }
    };
    var data = '{ "fields": { "Question": "' + question + '", "Answer": "' + answer + '", "SubmittedBy": "' + name + '" } }';
    xhr.send(data);
    alert("Sent to database!");
}
