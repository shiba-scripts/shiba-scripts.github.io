document.addEventListener('DOMContentLoaded', () => {
    console.log('Documentation site loaded');
});


function searchDocumentation() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var scripts = document.querySelectorAll(".script-buttons a");

    scripts.forEach(function(script) {
        var scriptName = script.innerText.toLowerCase();
        var scriptSection = script.parentElement.parentElement;

        if (scriptName.indexOf(input) > -1) {
            scriptSection.style.display = "";
        } else {
            scriptSection.style.display = "none";
        }
    });
}
