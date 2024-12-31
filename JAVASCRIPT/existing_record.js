// Function to load existing records from localStorage and display them in the table
window.onload = function() {
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
};
