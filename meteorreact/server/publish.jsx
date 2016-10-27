// create new collection resolutions in mongodb
Resolutions = new Mongo.Collection("resolutions");

// publish all the data from resolutions collection
Meteor.publish("allResolutions", function(){
    return Resolutions.find();
});


// publish resolutions by userid
// publish all the data from resolutions collection
Meteor.publish("userResolutions", function(){
    return Resolutions.find({user: this.userId});
});
