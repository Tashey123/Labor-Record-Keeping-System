document.getElementById('attendance-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const laborName = document.getElementById('labor-name').value;
    const attendanceDate = document.getElementById('attendance-date').value;
    const attendanceStatus = document.getElementById('attendance-status').value;

    if (laborName && attendanceDate && attendanceStatus) {
        const attendanceTable = document.getElementById('attendance-records').getElementsByTagName('tbody')[0];

        const newRow = attendanceTable.insertRow();
        newRow.innerHTML = `
            <td>${laborName}</td>
            <td>${attendanceDate}</td>
            <td>${attendanceStatus}</td>
        `;

        // Clear form inputs
        document.getElementById('attendance-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
