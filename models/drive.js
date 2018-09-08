module.exports = function(sequelize, DataTypes) {
  var Drive = sequelize.define("Drive", {
    // driverLicense: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [11]
    //   }
    // },
    // vinNum: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    date: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    odometer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gasPerGallon: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    totalGallons: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Drive.associate = function(models) {
    // We're saying that a Drive should belong to an Drivers and Cars
    // A Drive can't be created without an Drivers and Cars due to the foreign key constraint
    Drive.belongsTo(models.Drivers, {
      foreignKey: {
        allowNull: false
      }
    });
    Drive.belongsTo(models.Cars, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Drive;
};
