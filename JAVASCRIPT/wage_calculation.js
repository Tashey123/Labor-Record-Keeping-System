document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wage-form');
    const resultDisplay = document.getElementById('wage-result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('employee-name').value.trim();
        const workDays = parseInt(document.getElementById('work-days').value, 10);
        const dailyWage = parseFloat(document.getElementById('daily-wage').value);
        const calculationType = document.getElementById('calculation-type').value;

        if (!name || workDays < 0 || dailyWage < 0) {
            resultDisplay.textContent = 'Please enter valid inputs.';
            return;
        }

        let totalWage = 0;
        switch (calculationType) {
            case 'daily':
                totalWage = workDays * dailyWage;
                break;
            case 'weekly':
                totalWage = workDays * dailyWage * 7;
                break;
            case 'monthly':
                totalWage = workDays * dailyWage * 30;
                break;
        }

        resultDisplay.textContent = `Employee ${name}'s ${calculationType} wage: $${totalWage.toFixed(2)}`;
    });
});