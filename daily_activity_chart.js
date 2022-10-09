// Daily activity line chart
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Day", "$", { role: "style" }],
        ["Sun", sun, "#c3ff00"],
        ["Mon", mon, "#cdff2b"],
        ["Tue", tue, "#d6ff52"],
        ["Wed", wed, "#ddff70"],
        ["Thu", thu, "#e4ff8f"],
        ["Fri", fri, "#ebffab"],
        ["Sat", sat, "#f2ffc9"]
    ]);
    var options = {
        title: "Daily Activity",
        width: 650,
        height: 350,
        hAxis: {
            title: "Day"
        },
        vAxis: {
            title: "Funds ($)",
            maxValue: 5,
            minValue: 1
        },
        bar: { groupWidth: "75%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("daily_activity"));
    chart.draw(data, options);
}