$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".welcUser").text("Welcome " + " " + data.firstName + " " + data.lastName + "!");
    });

    $.ajax("/api/posts", {
      type: "GET",
      url: "/api/posts",
    }).then(
      function(post) {
        console.log("reached GET posts");
        console.log("---------POST--------");
        console.log(post);
        console.log("---------POST--------");
        console.log("---------POST LENGTH--------");
        console.log(post.length);
        console.log("---------POST LENGTH--------");
        for(var i = 0; i < post.length; i++)
        {
          $("#posts").prepend(
            `This post was created by: ${post[i].Author.firstName} ${post[i].Author.lastName}
            <br>
            <br>
            ID: ${post[i].id}
            <br>
            ${post[i].title}
            <br>
            ${post[i].body}
            <br>
            <br>
            `
          );
          
        }
        // Reload the page to get the updated list
      }
    );

    /* $.get("/api/posts", function(data){
      $(".postDataId").text(data.id);
      $(".postDataTitle").text(data.title);
      $(".postDataBody").text(data.body); */
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
  });
  