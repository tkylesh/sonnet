//javascript

var sonnetContent = document.getElementById("sonnet").innerHTML;
console.log(sonnetContent);

var orphanPos = sonnetContent.indexOf("orphans");
console.log(orphanPos);

var length = sonnetContent.length;
console.log(length);

var replacedString = sonnetContent.replace(/winter/g, "yuletide");


replacedString = sonnetContent.replace(/the/g, "a large ");




document.getElementById('sonnet').innerHTML = replacedString;