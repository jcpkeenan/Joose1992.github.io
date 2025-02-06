function updateMetrics(address, energyStar, eui, wui, ghg, energySavings, waterSavings) {
    document.getElementById('energy-star').innerText = energyStar;
    document.getElementById('eui').innerText = eui + ' kBTU/sqft';
    document.getElementById('wui').innerText = wui + ' gal/sqft';
    document.getElementById('ghg').innerText = ghg + ' tons';
    document.getElementById('energy-savings').innerText = energySavings;
    document.getElementById('water-savings').innerText = waterSavings;
}

function goToDashboard(number) {
    if (number === 1) {
        window.location.href = '/Dashboard/DashboardDetails1';
    }
    if (number === 2) {
        window.location.href = '/Dashboard/DashboardDetails2';
    }
    if (number === 3) {
        window.location.href = '/Dashboard/DashboardDetails3';
    }
}

function toggleValue(elementId, value1, value2) {
    const element = document.getElementById(elementId);
    element.innerText = element.innerText === value1 ? value2 : value1;
}

// Pie Chart for Energy Sources
const ctx = document.getElementById('energyPieChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Natural Gas', 'Oil', 'Electric'],
        datasets: [{
            data: [40, 30, 30], // Mock data for energy sources
            backgroundColor: ['#ff9999', '#66b3ff', '#99ff99'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const termsCheckbox = document.getElementById('terms-accept');
    const proceedButton = document.getElementById('proceed-btn');

    // Add event listener for the terms checkbox 
    if (termsCheckbox && proceedButton) {
        termsCheckbox.addEventListener('change', function () {
            if (termsCheckbox.checked) {
                proceedButton.classList.add('active');
                proceedButton.disabled = false;
                proceedButton.style.cursor = "pointer";
            } else {
                proceedButton.classList.remove('active');
                proceedButton.disabled = true;
                proceedButton.style.cursor = "not-allowed";
            }
        });

        // Redirect to Login page for Energy Star credentials
        proceedButton.addEventListener('click', function () {
            if (termsCheckbox.checked) {
                window.location.href = '/Account/Login'; // Your login route
            }
        });

        // Fade in effect for the terms and conditions content
        document.querySelector('.terms-content').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.terms-content').style.transition = "opacity 1s ease-in";
            document.querySelector('.terms-content').style.opacity = 1;
        }, 100);
    }
});