$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".welcUser").text("Welcome " + " " + data.firstName + " " + data.lastName + "!");
    });

    $.get("/api/posts", function(data){
      $(".postDataId").text(data.id);
      $(".postDataTitle").text(data.title);
      $(".postDataBody").text(data.body);
      /*
      var sql = ("SELECT * FROM Posts");
      console.log(sql);
       connection.query(sql, function(err, result){
        if(err) {
          console.log('Error in the query.');
        } else {
          console.log('Success!\n');
          console.log(result);
          var post = result;
          return post;
        }
      }); */
    })
  });
  