$(function () {

    let light = '0';
    let air = '0';
    let buzzer = '1';
    let door = '0';

    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-light/view/",
            dataType: "text",
            success: function (response) {

                if (response === '0') {
                    console.log("Light off")
                } else {
                    console.log("Light on")
                }

                light = response
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Air/view/",
            dataType: "text",
            success: function (response) {

                if (response === '1') {
                    console.log("Air on")
                } else {
                    console.log("Air off")
                }

                air = response
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Servo/view/",
            dataType: "text",
            success: function (response) {

                if (response === '1') {
                    console.log("Door on")
                } else {
                    console.log("Door off")
                }

                door = response
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Switch_web_status/view/",
            dataType: "text",
            success: function (response) {

                if (response === '1') {
                    console.log("Buzzer off")
                } else {
                    console.log("Buzzer on")
                }

                buzzer = response
            }
        });

        if (light === "1" && door === "1") {
            $("#lightText").val("ON")
            $("#doorText").val("OPEN")
            $("#house").html('<img src="./lightdooropen.png" width="1125px" height="740px">')
        } else if (light === "1" && door === "0") {
            $("#lightText").val("ON")
            $("#doorText").val("CLOSE")
            $("#house").html('<img src="./lightdoorclose.png" width="1125px" height="740px">')
        } else if (light === "0" && door === "0") {
            $("#lightText").val("OFF")
            $("#doorText").val("CLOSE")
            $("#house").html('<img src="./lightoffdoorclose.png" width="1125px" height="740px">')
        } else if (light === "0" && door === "1") {
            $("#lightText").val("OFF")
            $("#doorText").val("OPEN")
            $("#house").html('<img src="./lightoffdooropen.png" width="1125px" height="740px">')
        }
        if(air==="0"){
            $("#airText").val("OFF")
        }else{
            $("#airText").val("ON")
        }

    }, 1000)


    $('#light-button').on('click', function () {
        if(light==="0"){
            light = "1"
        }else{
            light = "0"
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-light/set/",
            data: {
                value: light
            },
            dataType: "json",
        });
    });
    $('#air-button').on('click', function () {
        if(air==="0"){
            air = "1"
        }else{
            air = "0"
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Air/set/",
            data: {
                value: air
            },
            dataType: "json",

        });
    });
    $('#door-button').on('click', function () {
        if(door==="0"){
            door = "1"
        }else{
            door = "0"
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Servo/set/",
            data: {
                value: door
            },
            dataType: "json",

        });
    });
    $('#buzzer-button').on('click', function () {
        if(buzzer==="1"){
            buzzer = "0"
        }else{
            buzzer = "1"
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/wongpalm-Switch_web_status/set/",
            data: {
                value: buzzer
            },
            dataType: "json",

        });
    });



})