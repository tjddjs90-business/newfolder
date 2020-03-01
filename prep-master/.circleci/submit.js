const { exec } = require("child_process");
const https = require("https");

let studentInfo = require("../student.json");
let { theClass, student, sprint } = studentInfo;

const results = require("./results.json");
const { numFailedTests, numPassedTests } = results;

exec('echo "$airtable_api_key"', (err, apikey) => {
  if (err) {
    console.log(err);
    throw new Error("echo command did not work right");
  }

  if (apikey === "\n") {
    throw new Error("There is not the airtable_api_key");
  }

  const options = {
    hostname: "api.airtable.com",
    path: "/v0/app8kEq9wXlsuffDy/Sprint",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: " Bearer " + apikey.trim()
    }
  };

  console.log(JSON.stringify(options.headers));

  const req = https.request(options, res => {
    let data;

    res.on("data", chunk => {
      data += chunk;
      // callback(null, result);
    });

    res.on("end", () => {
      console.log(data);
      if (data.includes("error")) {
        throw new Error("There is an error on response from airtable.");
      }
    });
  });

  req.on("error", e => {
    console.log(e);
    throw new Error("data did not send to airtable correctlu");
    // callback(new Error('failure'));
  });
  // send the request
  req.write(
    JSON.stringify({
      fields: {
        class: theClass,
        name: student,
        sprint: sprint,
        passed: numPassedTests,
        failed: numFailedTests
      }
    })
  );
  req.end();
});
