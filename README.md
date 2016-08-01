# freecodecamp_api_project
<html>
<head>
    <title>Timestamp Microservice</title>
</head>
<body>
    <h1>API Basejump: Timestamp microservice</h1>
    <div>
        <h3>User Stories:</h3>
        <div>
            <ol>
                <li>
                    I can pass a string as a parameter, 
                    and it will check to see whether 
                    that string contains either a unix 
                    timestamp or a natural language date (example: January 1, 2016)
                </li>
                <li>
                    If it does, it returns both the Unix 
                    timestamp and the natural language form of that date.
                </li>
                <li>
                    If it does not contain a date or Unix timestamp, 
                    it returns null for those properties.
                </li>
            </ol>
        </div>
        <h3>Example Usage:</h3>
        <div>
            <ol>
                <li style="color: blue">
                    https://timestamp-microservices.herokuapp.com/December%2015,%202015
                </li>
                <li style="color: blue">
                    https://timestamp-microservices.herokuapp.com/1450137600
                </li>
            </ol>
        </div>
        <h3>Example Output:</h3>
        <span style="color: blue">
            { "unix": 1450137600, "natural": "December 15, 2015" }
        </span>
    </div>
</body>
</html>
