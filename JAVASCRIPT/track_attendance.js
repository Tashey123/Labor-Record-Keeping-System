// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('attendance-form');
    const logTableBody = document.querySelector('#attendance-log-table tbody');

    // Load existing records from localStorage
    const loadAttendanceRecords = () => {
        const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
        logTableBody.innerHTML = '';
        attendanceRecords.forEach(record => {
            const row = logTableBody.insertRow();
            row.innerHTML = `
                <td>${record.name}</td>
                <td>${record.date}</td>
                <td>${record.status}</td>
            `;
        });
    };

    // Save a new attendance record
    const saveAttendanceRecord = (name, date, status) => {
        const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
        attendanceRecords.push({ name, date, status });
        localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
    };

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('employee-name').value.trim();
        const date = document.getElementById('attendance-date').value;
        const status = document.getElementById('attendance-status').value;

        if (name && date && status) {
            saveAttendanceRecord(name, date, status);

            // Add the new record to the table
            const row = logTableBody.insertRow();
            row.innerHTML = `
                <td>${name}</td>
                <td>${date}</td>
                <td>${status}</td>
            `;

            // Clear the form fields
            form.reset();

            alert('Attendance recorded successfully!');
        } else {
            alert('Please fill in all the fields.');
        }
    });

    // Initial load of records
    loadAttendanceRecords();
});
