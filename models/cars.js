module.exports = function(sequelize, DataTypes) {
  var Cars = sequelize.define("Cars", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    engine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gasType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Cars;
};
