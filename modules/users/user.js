const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/database.js");

const User = sequelize.define("User",
	{
		id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false 
    },
		email: { 
      type: DataTypes.STRING(255), 
      primaryKey: false, 
      autoIncrement: false, 
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
	},
	{
    timestamps: true,
    tableName: "users"
	}
);

module.exports = User;