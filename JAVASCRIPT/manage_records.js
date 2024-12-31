document.getElementById('labor-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const date = document.getElementById('date').value;
    const hours = document.getElementById('hours').value;
    const rate = document.getElementById('rate').value;
    const totalPay = hours * rate;

    // Create a new labor record object
    const newRecord = {
        name: name,
        job: job,
        date: date,
        hours: hours,
        rate: rate,
        totalPay: totalPay
    };

    // Retrieve existing records from localStorage or initialize an empty array
    let records = JSON.parse(localStorage.getItem('laborRecords')) || [];
    records.push(newRecord); // Add new record to the array

    // Save the updated records back to localStorage
    localStorage.setItem('laborRecords', JSON.stringify(records));

    // Optionally, clear the form
    document.getElementById('labor-form').reset();

    // Update the table on the current page
    loadExistingRecords();
});

// Function to load existing records from localStorage and display them in the table
function loadExistingRecords() {
    const records = JSON.parse(localStorage.getItem('laborRecords')) || [];
    const tbody = document.querySelector('#labor-table tbody');

    // Clear the current table content
    tbody.innerHTML = '';

    // Populate the table with the existing records
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.job}</td>
            <td>${record.date}</td>
            <td>${record.hours}</td>
            <td>${record.rate}</td>
            <td>${record.totalPay}</td>
        `;
        tbody.appendChild(row);
    });
}

// Load existing records when the page is loaded
window.onload = loadExistingRecords;
