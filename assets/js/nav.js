var currentNav = "home";
// "home", "schedule", or "lessons"

function selectNav(navItem) {
    // deselect old UI
    document.getElementById(currentNav).classList.add("hidden");
    var nav = currentNav + "-nav";
    document.getElementById(nav).classList.remove("navUnderline");

    currentNav = navItem;
    nav = currentNav + "-nav";

    // reselect new UI
    document.getElementById(currentNav).classList.remove("hidden");
    document.getElementById(nav).classList.add("navUnderline");
}