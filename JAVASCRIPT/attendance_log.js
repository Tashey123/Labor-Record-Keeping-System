// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const logTableBody = document.querySelector('#attendance-log-table tbody');

    // Retrieve attendance records from localStorage
    const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    // Populate the table with records
    if (attendanceRecords.length > 0) {
        attendanceRecords.forEach(record => {
            const row = logTableBody.insertRow();
            row.innerHTML = `
                <td>${record.name}</td>
                <td>${record.date}</td>
                <td>${record.status}</td>
            `;
        });
    } else {
        logTableBody.innerHTML = `<tr><td colspan="3">No attendance records found.</td></tr>`;
    }
});
