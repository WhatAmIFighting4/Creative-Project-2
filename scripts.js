/*global fetch*/
/*global moment*/
document.getElementById("daySubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("theDay").value;
    if (value === "")
        return;
        console.log(value);
const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=DOBNGR12V9DJ5DIL";
fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = "";
        if (json["Time Series (Daily)"][value] === undefined) {
            results += "Invalid date: Please enter another date."
        }
        else {results += '<h2>'+ json["Meta Data"]["1. Information"] + ' (# Stock Owners)<br>' + json["Meta Data"]["2. Symbol"] + ' - Microsoft Corporation<br>Viewed On: ' 
        + json["Meta Data"]["3. Last Refreshed"] + '<br>'+ json["Meta Data"]["5. Time Zone"] + "<br></h2>";
       
       
        results += "<table><tr><th>OPEN</th><th>HIGH</th><th>LOW</th><th>CLOSE</th><th>VOLUME</th></tr>"
        + "<tr><td>$" + json["Time Series (Daily)"][value]["1. open"] + '<td>$' + json["Time Series (Daily)"][value]["2. high"]
        + '<td>$' + json["Time Series (Daily)"][value]["3. low"] + '<td>$' + json["Time Series (Daily)"][value]["4. close"] +
        '<td>' + json["Time Series (Daily)"][value]["5. volume"] + "</tr></table>";
        }
        if (json["Time Series (Daily)"][value]["4. close"] > json["Time Series (Daily)"][value]["1. open"]) {
            results += '<p>Stock value has risen on ' + value + '.</p>'
        }
        if (json["Time Series (Daily)"][value]["4. close"] < json["Time Series (Daily)"][value]["1. open"]) {
            results += '<p>Stock value has fallen on ' + value + '.</p>'
        }
        
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
});
