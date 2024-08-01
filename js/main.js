/* Chart */

const backgroundColor = ['rgb(119, 42, 207)']
const borderColor = ['rgb(119, 42, 207)']

const ctx = document.getElementById('myChart');
let smooth = true;
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Junior', 'Middle', 'Senior'],
        datasets: [{
            label: '',
            data: [500, 1000, 2000, 2500],
            borderWidth: 3,
            borderColor,
            backgroundColor,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                }
            },
            x: {
                ticks: {
                    font: {
                        weight: 'bold',
                        size: 20
                    }
                }
            },
        },
        plugins: {
            legend: {display: false}
        }
    }
});

/* Accordion */

document.querySelectorAll('.accordion__button').forEach((el) => {
    el.addEventListener('click', () => {
        let accordionContent = el.nextElementSibling;
        if (accordionContent.style.maxHeight) {
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        }
    })
})












