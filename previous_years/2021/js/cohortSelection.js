// function that will allow us to import JS from other files
function include(file) {
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}

// 1. Start at nonexistent number - GREATER than # of cohorts.
var selectedCohort = 5;

// 2. Include times for each cohort (in order).
include('./js/SessionTimes_20212022.js');

// 3. Include all sessions for all cohorts (in order). Each cohort must have the same number of sessions.
include('./js/SessionDates_20212022.js');

var selectedDates = []; // dates to be shown on website

// 4. User clicks a cohort (date/time) - this function decides what dates show and displays them on the page.
function selectCohort(cohortNum) {
    if (selectedCohort === cohortNum) {
        // user has clicked a date/time that is already open - close it
        document.getElementById('cohortDates').innerHTML = '';
        document.getElementById('cohortTime').innerHTML = '';
        var cohortContent = document.getElementById('cohortContent');
        if (cohortContent) {
            cohortContent.classList.remove('cohortContentDisplay');
        }
        var thisCohort = document.getElementById(`cohort${cohortNum}`);
        if (thisCohort) {
            thisCohort.classList.remove('selectedButton');
        }
        selectedCohort = 5;
        selectedDates = [];
    } else {
        // new date/time selection - open it on the page
        // determine the selected dates
        // index % 2 if TWO COHORTS, use % 3 if THREE COHORTS
        selectedDates = sessions.filter((session, index) => (index % 2) === cohortNum );

        // set up HTML for the page
        var innerHTML = '';
        selectedDates.forEach(date => {
            innerHTML += `<div><i class="fas fa-code"></i>${date}${date.includes("Nov") || date.includes("Dec") ? "*" : ""}</div>`;
        });
        
        // inject new HTML into the page based on selection
        document.getElementById('cohortDates').innerHTML = innerHTML;
        document.getElementById('cohortTime').innerHTML = `<div>${times[cohortNum]}</div>`;
        var cohortContent = document.getElementById('cohortContent');
        if (cohortContent) {
            cohortContent.classList.add('cohortContentDisplay');
        }

        // set UI for selected cohort
        var thisCohort = document.getElementById(`cohort${cohortNum}`);
        if (thisCohort) {
            thisCohort.classList.add('selectedButton');
        }

        // unset UI for previously selected cohort
        var previouslySelected = document.getElementById(`cohort${selectedCohort}`);
        if (previouslySelected) {
            previouslySelected.classList.remove('selectedButton');
        } else {
            // all cohorts were previously unselected
        }
        
        selectedCohort = cohortNum;
    }
}