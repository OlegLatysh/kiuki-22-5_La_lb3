$(document).ready(function () {
    let intervalId;
    let rowIndex = 1;

    // Генерація випадкових даних
    function generateRandomRow() {
        const randomData1 = Math.floor(Math.random() * 100);
        const randomData2 = Math.floor(Math.random() * 100);
        const randomData3 = Math.floor(Math.random() * 100);

        const row = `
            <tr>
                <td>${rowIndex++}</td>
                <td>${randomData1}</td>
                <td>${randomData2}</td>
                <td>${randomData3}</td>
            </tr>
        `;
        $('#data-table tbody').append(row);
    }

    // Запуск генерації
    $('#start').click(function () {
        const interval = parseInt($('#interval').val());
        if (isNaN(interval) || interval <= 0) {
            alert('Введіть коректний інтервал!');
            return;
        }
        $(this).prop('disabled', true);
        $('#stop').prop('disabled', false);

        intervalId = setInterval(generateRandomRow, interval);
    });

    // Зупинка генерації
    $('#stop').click(function () {
        clearInterval(intervalId);
        $(this).prop('disabled', true);
        $('#start').prop('disabled', false);
    });
});
