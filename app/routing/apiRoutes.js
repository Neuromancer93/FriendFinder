// const surveyData = require("../data/surveydata");


// ===============================================================================
// ROUTING
// ===============================================================================

// module.exports = (app) => {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
 
//   app.get("/api/survey", (req, res) => {
//     res.json(surveyData);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

//   app.post("/api/survey", (req, res) => {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (surveyData.length < 5) {
//       surveyData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

 
// };
