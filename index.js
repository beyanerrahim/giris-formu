var input = document.getElementsByTagName("input");
var btn = document.getElementById("btn");
var span = document.getElementsByTagName("span");

function chekinput() {
    if (input[0].value == "") {
        span[0].innerHTML = "lütfen Bu alani doldurun";
    }
    if (input[1].value == "") {
        span[1].innerHTML = "lütfen Bu alani doldurun";
    }
    if (input[2].value == "") {
        span[2].innerHTML = "lütfen Bu alani doldurun";
    }
    if (!input[3].checked) {
        span[3].innerHTML = " lütfen Bu alani doldurun";
    }
}
//gerilen mail gecerli olup olmadigini kontrol et
function stringchech(str) {
    var flag = false;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "@") {
            flag = true;
            break;
        }
    }
    return flag;
}

input[0].addEventListener("change", function() {
    let value = input[0].value;
    if (value != "") {
        span[0].innerHTML = "";
    }
});
input[1].addEventListener("change", function() {
    let value = input[1].value;
    if (value != "" && value.length < 8) {
        span[1].innerHTML = "lütfen en az 8 karakterlik bir sifre giriniz !";
    } else if (value != "") {
        span[1].innerHTML = "";
    }

});
input[2].addEventListener("change", function() {
    let value = input[2].value;
    if (stringchech(value)) {
        span[2].innerHTML = "";
    } else {
        span[2].innerHTML = "gecersiz bir mail girdiniz !";
    }
});
input[3].addEventListener("change", function() {
    if (input[3].checked) {
        span[3].innerHTML = "";
    }
});

btn.addEventListener("click", chekinput);