Friends = new Mongo.Collection("friends");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    friends: function () {
      return Friends.find({});
    }
  });

    Template.body.events({
        "submit .new-friend": function (event) {
            event.preventDefault();

            var name = event.target.name.value;

            Friends.insert({
                name: name,
                createdAt: new Date() // current time
            });

            // Clear form
            event.target.name.value = "";
        }
    });
}
