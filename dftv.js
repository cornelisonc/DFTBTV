Friends = new Mongo.Collection("friends");

if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        friends: function () {
            return Friends.find({}, {sort: {name: 1}});
        }
    });

    Template.body.events({
        "submit .new-friend": function (event) {
            console.log('event!');
            event.preventDefault();

            var name = event.target.name.value;
            var phone = event.target.phone.value;

            Friends.insert({
                name: name,
                phone: phone,
                createdAt: new Date() // current time
            });

            // Clear form
            event.target.name.value = "";
            event.target.phone.value = "";
        }
    });
}
