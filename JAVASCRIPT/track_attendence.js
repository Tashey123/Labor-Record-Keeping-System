// Initialize an empty array to store attendance records
let attendanceRecords = [];

// Function to update the attendance log table
function updateAttendanceLog() {
    const tableBody = document.getElementById('attendance-log-table').getElementsByTagName('tbody')[0];
    
    // Clear the existing records in the table body
    tableBody.innerHTML = '';

    // Loop through the attendance records and add them to the table
    attendanceRecords.forEach(record => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = record.name;
        cell2.textContent = record.date;
        cell3.textContent = record.status;
    });
}

// Handle the form submission
document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form values
    const employeeName = document.getElementById('employee-name').value;
    const attendanceDate = document.getElementById('attendance-date').value;
    const attendanceStatus = document.getElementById('attendance-status').value;

    // Create a new attendance record
    const newRecord = {
        name: employeeName,
        date: attendanceDate,
        status: attendanceStatus
    };

    // Add the new record to the attendance records array
    attendanceRecords.push(newRecord);

    // Update the attendance log table
    updateAttendanceLog();

    // Optionally, reset the form after submission
    document.getElementById('attendance-form').reset();
});
