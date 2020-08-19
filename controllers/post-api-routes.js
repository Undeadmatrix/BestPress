var db = require("../models");

module.exports = function (app) {
  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function (dbPost) {
      //console.log(dbPost);
      //console.log(dbPost[0].dataValues.id);
      //console.log(dbPost[0].dataValues.title);
      //console.log(dbPost[0].dataValues.body);
      const data = [];
      console.log("-------LENGTH--------");
      console.log(dbPost.length);
      console.log("-------LENGTH--------");
      for(var i = 0; i < dbPost.length; i++)
      {
        data.push(dbPost[i].dataValues);
      }
      console.log("-------ARRAY DATA--------");
      //console.log(data);
      console.log("-------ARRAY DATA--------");
      //res.render("handlebar name file", { dbPost } ) sends to hb file
      res.send(data);
    });
  });

  // GET route for getting all of the posts by whoever is signed in
  app.get("/api/myposts/:id", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    console.log("THIS IS A TEST");
    console.log("route param id: ",req.params.id);
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: {
        //author id = user logged in
        AuthorId: req.params.id
      },
      include: [db.Author]
    }).then(function (dbPost) {
      console.log(dbPost);
      console.log(dbPost[0].dataValues.id);
      console.log(dbPost[0].dataValues.title);
      console.log(dbPost[0].dataValues.body);
      const data = [];
      console.log("-------LENGTH--------");
      console.log(dbPost.length);
      console.log("-------LENGTH--------");
      for(var i = 0; i < dbPost.length; i++)
      {
        data.push(dbPost[i].dataValues);
      }
      console.log("-------ARRAY DATA--------");
      console.log(data);
      console.log("-------ARRAY DATA--------");
      //res.render("handlebar name file", { dbPost } ) sends to hb file
      res.send(data);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function (dbPost) {
      res.render("members", { dbPost });
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    console.log("post working");
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    })
    .then(function() {
      console.log("redirect reached");
      console.log(dbPost);
      res.render("members");
    // If there's an error, log the error
  })
  .catch(function(err) {
      console.log("redirect not reached");
    console.log(err);
  });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};
