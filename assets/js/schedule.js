var currentFilter = "filter-0";
var cohorts = ["cohort-1", "cohort-2", "cohort-3"];

function selectFilter(scheduleFilter) {
    // deselect old UI
    document.getElementById(currentFilter).classList.remove("active");

    currentFilter = "filter-" + scheduleFilter;

    // reselect new UI
    document.getElementById(currentFilter).classList.add("active");

    var newCohort = "cohort-" + scheduleFilter;
    // show appropriate schedule based on filter
    for (let i = 0; i < cohorts.length; i ++) {
        if (cohorts[i] === newCohort || newCohort === "cohort-0") {
            document.getElementById(cohorts[i]).classList.remove("hidden");
        } else if (newCohort !== "cohort-0" && cohorts[i] !== newCohort) {
            document.getElementById(cohorts[i]).classList.add("hidden");
        }
    }
}