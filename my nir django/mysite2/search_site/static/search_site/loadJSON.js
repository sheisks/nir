
function loadJSON(url){

    var http_request = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }catch (e){
        // Internet Explorer Browsers
        try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try{
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function(){

        if (http_request.readyState == 4  ){
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);

            alert("Json file loaded!");
        }
    }

    http_request.open("GET", url, true);
    http_request.send();
}

function loadJSONsync(url){

    var http_request = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }catch (e){
        // Internet Explorer Browsers
        try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try{
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }

    http_request.open("GET", url, false);
    http_request.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (http_request.status != 200) {
        // обработать ошибку
        alert( http_request.status + ': ' + http_request.statusText ); // пример вывода: 404: Not Found
        return null;
    } else {
        // вывести результат
        return JSON.parse(http_request.responseText); // responseText -- текст ответа.
    }
}
