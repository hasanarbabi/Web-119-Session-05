var html = [];
var items = [];
var count = prompt('How many items do you want?');
while(count > 0 && (item != "exit")) {
    var item = prompt('What do you want?');
    items.push(item);
    count--;
}
if (items.includes("exit")) {
    items.pop()
}
html += "<ol>";
for(var i = 0; i < items.length; i++) {
    html += "<li>" + items[i] + "</li>";
}
html += "</ol>";
document.getElementById('output').innerHTML = "<h1>your shoping list:</h1>" + html;