// var a = "Jose"
// console.log(a)

function validateForm() {
    var x = document.forms[name].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}