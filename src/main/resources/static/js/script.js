$(document).ready(function() {
    console.log("jQuery loaded and script running");
    
    function applyTableLogic() {
        console.log("Applying table logic...");
        
        $('#result').text("Кликните на ячейку, чтобы увидеть результат");
        $('#myTable td').off('click').on('click', function() { 
            console.log("Cell clicked, text:", $(this).text());
            
            $('#myTable tr').removeClass('selected');
            
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

            row.find('td').each(function() {
                var cellValue = parseInt($(this).text());
                if (!isNaN(cellValue) && cellValue > selectedValue) {
                    $(this).css('background-color', '#c8e6c9');
                } else {
                    $(this).css('background-color', '');
                }
            });
            
            $('#result').text('В выбранной строке количество значений, больших ' + selectedValue + ': ' + count);
            console.log("Selected value:", selectedValue, "Count:", count);
        });
    }

    // --- ЛОГИКА AJAX ГЕНЕРАЦИИ ТАБЛИЦЫ (без сервера) ---
    $('#generateBtn').click(function() {
        var rows = $('#rows').val();
        var cols = $('#cols').val();
        
        rows = Math.max(1, Math.min(parseInt(rows) || 5, 10));
        cols = Math.max(1, Math.min(parseInt(cols) || 5, 10));

        $('#rows').val(rows);
        $('#cols').val(cols);
        
        $('#tableContainer').html('<p style="text-align: center; color: #849fff;">Генерация таблицы...</p>');

        var tableHtml = '<table id="myTable">';
        for (var i = 0; i < rows; i++) {
            tableHtml += '<tr>';
            for (var j = 0; j < cols; j++) {
                var val = Math.floor(Math.random() * 101) - 50; 
                tableHtml += '<td>' + val + '</td>';
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</table>';

        $('#tableContainer').html(tableHtml);
        applyTableLogic();
    });

    applyTableLogic();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var header = $('.main-header');
        if (scroll >= 50) {
            header.addClass("scrolled-header"); 
        } else {
            header.removeClass("scrolled-header");
        }
    });

    // Логика аккордеона для FAQ
    $('.faq-question').click(function() {
        var $answer = $(this).next('.faq-answer');
        var $question = $(this);
        $('.faq-answer').not($answer).css('max-height', 0).removeClass('open');
        $('.faq-question').not($question).removeClass('active');
        
        if ($answer.hasClass('open')) {
            $answer.css('max-height', 0).removeClass('open');
            $question.removeClass('active');
        } else {
            var scrollHeight = $answer.get(0).scrollHeight;
            $answer.css('max-height', scrollHeight + 'px').addClass('open');
            $question.addClass('active');
        }
    });
});
