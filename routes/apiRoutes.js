var db = require("../models");

module.exports = function(app) {
  // Get all driver
  // app.get("/api/driver", function(req, res) {
  app.get("/api/drivers", function(req, res) {
    db.Drivers.findAll({})
      .then(function(adminuser) {
        res.json(adminuser);
        // var obj = {
        //   admin123: data,
        //   test: "133432432"
        // };
        // console.log(
        //   ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.. " + JSON.stringify(obj)
        // );
        // res.json();
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Create a new user
  app.post("/api/driver", function(req, res) {
    /*
    { // postman object
      "driverLicense": "22222222222",
      "fullName": "driver 2",
      "phone": "98765432",
      "company": "XYZ"
    }
    */
    // db.Drivers.create(newDriver).then(function(dbExample) {
    console.log("******create user");
    db.Drivers.create({
      id: req.body.driverlicense,
      fullName: req.body.fullname,
      userName: req.body.username,
      password: req.body.password,
      phone: req.body.phone,
      company: req.body.company
    }).then(function(dbExample) {
      // res.json(dbExample);
      res.redirect("/user");
    });
    // db.Drivers.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
  });

  // Delete a user by id
  app.delete("/api/driver/:id", function(req, res) {
    db.Drivers.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.get("/api/cars", function(req, res) {
    db.Cars.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new car
  app.post("/api/car", function(req, res) {
    /* Postman obj
    {
      "vinNum": "01234",
      "year": "2017",
      "model": "LX",
      "make": "Toyota",
      "engine": "4 cycl",
      "gasType": "regular"
    }   
    */
    db.Cars.create({
      vinNum: req.body.vinNum,
      year: req.body.year,
      model: req.body.model,
      make: req.body.make,
      engine: req.body.engine,
      gasType: req.body.gasType
    }).then(function(dbExample) {
      // res.json(dbExample);
      res.redirect("/car");
    });
  });

  // Delete a car by id
  app.delete("/api/car/:id", function(req, res) {
    db.Car.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/drives", function(req, res) {
    db.Drive.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new drive
  app.post("/api/newdrive", function(req, res) {
    /*
    {
      "DriverId": "22222222222",
      "CarId": "01234",
      "date": "8/29/18",
      "odometer": "100",
      "gasPerGallon": "2.99",
      "totalCost": "56"
    } 
    */
    db.Drive.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
