Friends = new Mongo.Collection("friends");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    friends: function () {
      return Friends.find({});
    }
  });
}
