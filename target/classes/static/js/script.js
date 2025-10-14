$(document).ready(function() {
    console.log("jQuery loaded and script running");
    
    $('#result').text("Кликните на ячейку, чтобы увидеть результат");
    
    // 1. Логика интерактивной таблицы (Остается прежней)
    $('#myTable td').click(function() {
        console.log("Cell clicked, text:", $(this).text());
        $('tr').removeClass('selected');
        var row = $(this).closest('tr');
        row.addClass('selected');
        var selectedValueText = $(this).text().trim();
        var selectedValue = parseInt(selectedValueText);
        if (isNaN(selectedValue)) {
            console.error("Invalid number in selected cell:", selectedValueText);
            $('#result').text("Ошибка: Выбранная ячейка не содержит число");
            return;
        }
        var count = 0;
        row.find('td').each(function() {
            var cellValueText = $(this).text().trim();
            var cellValue = parseInt(cellValueText);
            if (!isNaN(cellValue) && cellValue > selectedValue) {
                count++;
            }
        });
        $('#result').text('В выбранной строке количество значений, больших ' + selectedValue + ': ' + count);
        console.log("Selected value:", selectedValue, "Count:", count);
    });

    // 2. Логика аккордеона (Коллапса) для FAQ
    $('.faq-question').click(function() {
        var $answer = $(this).next('.faq-answer');
        var $question = $(this);

        // Закрываем все открытые ответы и убираем класс 'active', кроме текущего
        $('.faq-answer').not($answer).css('max-height', 0).removeClass('open');
        $('.faq-question').not($question).removeClass('active');

        // Открываем или закрываем текущую
        if ($answer.hasClass('open')) {
            // Закрыть
            $answer.css('max-height', 0).removeClass('open');
            $question.removeClass('active');
        } else {
            // Открыть
            // Устанавливаем max-height на фактическую высоту для CSS-перехода
            var scrollHeight = $answer.get(0).scrollHeight;
            $answer.css('max-height', scrollHeight + 'px').addClass('open');
            $question.addClass('active');
        }
    });
});