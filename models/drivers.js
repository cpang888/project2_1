module.exports = function(sequelize, DataTypes) {
  var Drivers = sequelize.define("Drivers", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [11]
      },
      primaryKey: true
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fullName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Drivers;
};
