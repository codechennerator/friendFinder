
var friendsData = require("../data/friends.js");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      let newData = req.body;
      let totalDifferences = 0;
      let bestScore = 0;
      let bestMatch = 0;
      
      console.log(newData.scores);
      console.log(newData.scores[0]);
      for(let i = 0; i<friendsData.length; i++){
        for(let j = 0; j<newData.scores.length; j++){
          let a = parseInt(newData.scores[j]);
          let b = parseInt(friendsData[i].scores[j]);
          totalDifferences += Math.abs(a-b);
        }
        if ( i === 0){
          bestScore = totalDifferences;
          bestMatch = 0;
        }
        else if(i !== 0 && totalDifferences < bestScore){
          bestScore = totalDifferences;
          bestMatch = i;
        }
        totalDifferences = 0;
      }
      
      friendsData.push(newData);
      res.json(friendsData[bestMatch]);
  });

};