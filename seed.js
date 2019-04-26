//this allow us to seed our data

const db = require('./models');

const users_list = [
    {
        firstName: "Zach",
        lastName: "Suess",
        email: "zach@gmail.com",
        weekly: true,
        monthly: false,
    },
    {
        firstName: "John",
        lastName: "Smith",
        email: "jsmith@gmail.com",
        weekly: true,
        monthly: false,
    },
    {
        firstName: "Steve",
        lastName: "Tyler",
        email: "styler@gmail.com",
        weekly: false,
        monthly: true,
    },
    {
        firstName: "James",
        lastName: "Dean",
        email: "zach@gmail.com",
        weekly: false,
        monthly: true,
    }
];

//remove duplicates
db.User.deleteMany({}, function(err, users){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all users');
  
      // create new records based on the array user_list
      db.User.create(users_list, function(err, users){
        if (err) { return console.log('err', err); }
        console.log("created", users.length, "users");
        process.exit();
      });
    }
  });