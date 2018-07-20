$(function () {
    $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Switch_status/set/",
        data: "data",
        dataType: "text",
        success: function (response) {

        }
    });

    $('#lightbox').toggleClass('day-background');

    $('#cb1').on('click', function () { $('#lightbox').toggleClass('day-background'); });
})