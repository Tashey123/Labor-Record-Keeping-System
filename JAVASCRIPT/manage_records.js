document.getElementById('labor-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const totalPay = (hours * rate).toFixed(2);

    if (name && job && !isNaN(hours) && !isNaN(rate)) {
        const table = document.getElementById('labor-table').getElementsByTagName('tbody')[0];
        const row = table.insertRow();

        row.innerHTML = `
            <td>${name}</td>
            <td>${job}</td>
            <td>${hours}</td>
            <td>${rate}</td>
            <td>${totalPay}</td>
        `;

        // Clear the form
        document.getElementById('labor-form').reset();
    } else {
        alert('Please fill out all fields correctly.');
    }
});
