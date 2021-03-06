function GetSnappleFact() {
  var xhr = new XMLHttpRequest();
    var index = randomIntFromInterval(1,868);
    var url = "https://api.airtable.com/v0/appvIZ5SeraGObXEd/Facts?api_key=keyJriVHHy2wZ44B9&maxRecords=1&filterByFormula=({ID}=%22" + index + "%22)";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('random').innerHTML = json.records[0].fields.Fact;
        }
    };
    xhr.send();
}

function GetMagicAnswer() {
  var xhr = new XMLHttpRequest();
    var index = randomIntFromInterval(1,20);
    var url = "https://api.airtable.com/v0/appvIZ5SeraGObXEd/Magic?api_key=keyJriVHHy2wZ44B9&maxRecords=1&filterByFormula=({ID}=%22" + index + "%22)";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('random').innerHTML = json.records[0].fields.Answer;
        }
    };
    xhr.send();
}
 
// use the built-in Javascript math library to calculate a random number between two values
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function AddJoke(joke, name) {
    var xhr = new XMLHttpRequest();
    var url = "https://api.airtable.com/v0/appvIZ5SeraGObXEd/Jokes?api_key=keyJriVHHy2wZ44B9";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //var json = JSON.parse(xhr.responseText);
            //console.log(json);
        }
    };
    var data = '{ "fields": { "Joke": "' + joke + '", "SubmittedBy": "' + name + '" } }';
    xhr.send(data);
    alert("Sent to database!");
}

