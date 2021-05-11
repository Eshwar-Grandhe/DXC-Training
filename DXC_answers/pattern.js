var i = 0;
var answer = "";
for (i = 0; i < 5; i++) {
    for (var j = 0; j < i; j++) {
        answer += "* ";
    }
    answer += "\n";
}
console.log(answer);
