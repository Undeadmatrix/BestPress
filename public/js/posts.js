$(document).ready(function() {

    var postForm = $("form.form");
    var titleInput = $("input#title-input");
    var bodyInput = $("textarea#body-input");
    var gAuthorId;

    $.get("/api/user_data").then(function(data) {
        gAuthorId = data.id;
        $(".welcUser").text("Welcome " + " " + data.firstName + " " + data.lastName + "!");
    });
    

    postForm.on("submit", function(event) {
        event.preventDefault();
        console.log("clicked submit");
        var postData = {
            title: titleInput.val().trim(),
            body: bodyInput.val().trim()
        };
        if (!postData.title || !postData.body) {
            console.log("nothing here");
            return;
        }
        createPost(postData.title, postData.body);
        titleInput.val("");
        bodyInput.val("");
        //window.location.replace("/members");
    });

    function createPost(title, body)
    {

        console.log("createPost reached");
        console.log(title);
        console.log(body);
        console.log(gAuthorId);
        $.post("/api/posts", {
            title: title,
            body: body,
            AuthorId: gAuthorId
          })
            .then(function() {
                console.log("redirect reached");
              window.location.replace("/members");
              // If there's an error, log the error
            })
            .catch(function(err) {
                console.log("redirect not reached");
              console.log(err);
            });
    }
});