var unirest = require("unirest");

var req = unirest("POST", "https://financialtimesmikilior1v1.p.rapidapi.com/searchContent");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"x-rapidapi-key": "fcd909127cmshcc18c39cfcadbddp1855d8jsn551dad20c40e",
	"x-rapidapi-host": "FinancialTimesmikilior1V1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"queryString": "<REQUIRED>",
	"apiKey": "<REQUIRED>"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});