// year Girls Code Club starts
var beginYear = 2022;
// "home", "schedule", or "lessons"
var currentNav = "home";
var href = window.location.href;
var setCollapsible = false;

window.addEventListener('load', function () {
    // based on url, set initial tab
    setInitialTab();
})

function selectNav(navItem) {
    parent.location.hash = navItem;

    // deselect old UI
    document.getElementById(currentNav).classList.add("hidden");
    var nav = currentNav + "-nav";
    document.getElementById(nav).classList.remove("navUnderline");

    currentNav = navItem;
    nav = currentNav + "-nav";

    // reselect new UI
    document.getElementById(currentNav).classList.remove("hidden");
    document.getElementById(nav).classList.add("navUnderline");
    if (navItem === "lessons" && !setCollapsible) {
        collapsibleLessons();
    }
}

function setInitialTab() {
    if (href.includes("lessons")) {
        selectNav("lessons");
    } else if (href.includes("schedule")) {
        selectNav("schedule");
    } else {
        selectNav("home")
    }
}

// set up collapsible UI for lessons
function collapsibleLessons() {
    setCollapsible = true;
    var coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    autoOpenLesson(coll);
}

// auto-open the lesson tab for this month
// months go from 0 - 11
function autoOpenLesson(coll) {
    var today = new Date;
    var month = today.getMonth();
    var year = month >= 8 && month <= 11 ? beginYear : beginYear + 1;
    var dateCompare = month + "-" + year;
    console.log(dateCompare)
    
    switch(dateCompare) {
        case "8-2022":
            // September - Session 1
            coll[0].click();
            break;
        case "9-2022":
            // October - Session 2
            coll[1].click();
            break
        case "10-2022":
            // November - Session 3
            coll[2].click();
            break;
        case "11-2022":
            // December - Session 4
            coll[3].click();
            break;
        case "0-2023":
            // January - Session 5
            coll[4].click();
            break;
        case "1-2023":
            // February - Session 6
            coll[5].click();
            break;
        case "2-2023":
            // March - Session 7
            coll[6].click();
            break;
        case "3-2023":
            // April - Session 8
            coll[7].click();
            break;
        case "4-2023":
            // May - Session 9
            coll[8].click();
            break;
        default:
            break;
    }

}