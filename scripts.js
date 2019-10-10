
/*global fetch*/
/*global moment*/

const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=DOBNGR12V9DJ5DIL";
fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = "";
        results += '<h2>' + json.query + "</h2>";
        document.getElementById("dailyStock").innerHTML = results;
    });
        /*results += '<h2>' + json.dailyData + " &deg;F</h2>"
        results += "<p>"
        /*for (let i = 0; i < json.weather.length; i++) {
            results += json.weather[i].description
            if (i !== json.weather.length - 1)
                results += ", "
        }
/*results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        });*/
