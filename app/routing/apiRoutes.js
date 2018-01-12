
var friendsData = require("../data/friends.js");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      console.log(req.body);
      friendsData.push(req.body);
      res.json(friendsData);
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

};