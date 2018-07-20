$(function () {

    let light = '1';


    $('#lightbox').toggleClass('day-background');

    setInterval(function () {

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-light/view/",
            dataType: "text",
            success: function (response) {
                if (response !== light) {
                    if(response === '1'){

                        $('#cb1').attr("checked",false)
                    }else{
                        $('#cb1').attr("checked",true)
                    }
                }
                light = response
            }
        });

    }, 100)


    $('#cb1').on('click', function () {
        if (light === "1") {
            light = "0";
        } else {
            light = "1";
        }

        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-light/set/",
            data: {
                value: light
            },
            dataType: "json",
            success: function (response) {
                console.log('aaaaaaaa', light)
                if (response === '0') {
                    $('#lightbox').toggleClass('day-background');
                    console.log("on")
                } else {
                    $('#lightbox').toggleClass('night-background');
                    console.log("off")
                }

            }
        });
    });








})