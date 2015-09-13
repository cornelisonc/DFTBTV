Friends = new Mongo.Collection("friends");
Items = new Mongo.Collection("items");

if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        friends: function () {
            return Friends.find({}, {sort: {name: 1}});
        },
        items: function () {
            return Items.find({}, {sort: {name: 1}});
        }
    });

    Template.body.events({
        "submit .new-friend": function (event) {
            event.preventDefault();

            var name = event.target.name.value;
            var phone = event.target.phone.value;

            Friends.insert({
                name: name,
                phone: phone,
                createdAt: new Date(),            // current time
                owner: Meteor.userId(),           // _id of logged in user
                username: Meteor.user().username  // username of logged in user
            });

            // Clear form
            event.target.name.value = "";
            event.target.phone.value = "";
        },
        "submit .new-item": function (event) {
            event.preventDefault();

            var name = event.target.name.value;

            Items.insert({
                name: name,
                createdAt: new Date(),            // current time
                owner: Meteor.userId(),           // _id of logged in user
                username: Meteor.user().username  // username of logged in user
            });

            // Clear form
            event.target.name.value = "";
        }
    });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}
