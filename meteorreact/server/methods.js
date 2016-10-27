Meteor.methods({

    // add resolution method
    addResolution(resolution) {

        //check(resolution, String);

        // restrict entering resolution by non logged in user
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        // insert data from textbox into Resolutions collection
        Resolutions.insert({
            text: resolution,
            complete: false,
            createdAt: new Date(),
            user: Meteor.userId(),
        });
    },

    // toggle resolution status true of false
    toggleResolution(resolution) {

        // restrict updating resolution by non logged in user and
        if (Meteor.userId() !== resolution.user) {
            throw new Meteor.Error('not-authorized');
        }
        Resolutions.update(resolution._id, {
            $set: {
                complete: !resolution.complete
            }
        })
    },

    // delete resolution
    deleteResolution(resolution) {

        // restrict remove resolution by non logged in user and
        if (Meteor.userId() !== resolution.user) {
            throw new Meteor.Error('not-authorized');
        }
        Resolutions.remove(resolution._id);
    }
});
