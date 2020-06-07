var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Author.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  Author.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Author Model lifecycle
  // In this case, before a Author is created, we will automatically hash their password
  Author.addHook("beforeCreate", function (author) {
    author.password = bcrypt.hashSync(
      author.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Author;
};
