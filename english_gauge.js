// English skill level gauge
google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['', elvl],
    ]);
    var options = {
        min: 0,
        max: 250,
        width: 150, height: 150,
        redFrom: 0, redTo: 50,
        redColor: '#ff5454',
        yellowFrom: 50, yellowTo: 150,
        yellowColor: '#fff385',
        greenFrom: 150, greenTo: 250,
        greenColor: '#99ff80',
        minorTicks: 10,
        majorTicks: ['0', 50, 100, 150, 200, 250],
    };
    var chart = new google.visualization.Gauge(document.getElementById('skill_level_english'));
    chart.draw(data, options);
}