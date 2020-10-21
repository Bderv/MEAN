function cb(){
    $.get("https://api.github.com/users/bderv", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
    console.log(data);
    $.get("https://api.github.com/users/bderv", displayName)
}
$('#displayBub').click(displayName);

}
$(document).ready(cb)
