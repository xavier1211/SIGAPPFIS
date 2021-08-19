
function nivel(){

    var ctx= document.getElementById("myChart").getContext("2d");
    console.log("probando");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2017','2018','2019','2020','2021'],
            datasets: [{
                label: 'Nivel',
                data: [1.52, 1.36, 0.88, 0.58, 0.74],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}