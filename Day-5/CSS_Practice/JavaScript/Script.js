function drawTable()
{
    var row = prompt("Enter the row");
    var column = prompt("Enter the column");
    var html = "<h1> Row: " + row + "</h1>";
    html += "<h1> Column: " + column + "</h1>";
    html += "<table border=1>";
    // document.write(row);
    // document.write(column);
    row=parseInt(row);
    for(var i=1; i<=row; i++){
        html += "<tr>";
        for (var j=1; j<=10; j++)
        {
            html += "<td> Row: " +i+ "; Column:" + j + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.write(html);
    console.log(row);
    console.log(column);
    // document.getElementById("span_row").innerHTML=row;
    // document.getElementById("span_col").innerHTML=column;
}