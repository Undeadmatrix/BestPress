$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    function deletePost(id) {
        var check = confirm("Are you sure you want to delete this post? (you can never undo this)");
        if(!check) {
            return;
        }
        else {
            $.ajax({
                method: "DELETE",
                url: "/api/posts/" + id
              })
                .then(function() {
                  location.reload;
                });
        }
      }
    
    $.get("/api/user_data").then(function(data) {
      $(".welcUser").text(data.firstName + " " + data.lastName + "'s Posts");
      authID = data.id;

      console.log("data.id: ", data.id);
    $.ajax("/api/myposts/" + data.id, {
      type: "GET",
      url: "/api/myposts/" + data.id,
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
            `<h3 id="authorStyle">This post was created by: ${post[i].Author.firstName} ${post[i].Author.lastName}</h3>
            <br>
            ID: ${post[i].id}
            <h3 style="font-size: 30px;">${post[i].title}</h3>
            ${post[i].body}
            <br>
            <br>
            `
            /* $('button').on("click",function(){
                deletePost(post[i].body);

                DELETE BUTTON
                <button id="delBtn">delete</button>
                
            }) */
          );
          
        }
        // Reload the page to get the updated list
      }
    );
});

/*     var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://joke3.p.rapidapi.com/v1/joke",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "joke3.p.rapidapi.com",
        "x-rapidapi-key": "c25f7acdb8msh212a180954827c8p10a80fjsn3e679b9c013b"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      $("#jokeContent").text(response.content);
    }); */

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
  