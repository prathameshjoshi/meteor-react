import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends TrackerReact(Component){

    constructor(){
        super();

        this.state = {

            // subscribe to allResolutions
            // publich from server/publish.jsx
            subscription: {
                resolutions: Meteor.subscribe("userResolutions")
            }
        }
    }

    // componentWillUnmount method stop subscription of resolutions collection
    // basically it will stop fetching data from resolutions collection
    componentWillUnmount(){
        this.state.subscription.resolutions.stop();
    }

    // resolutions method fetch all the data from resolutions collection
    resolution(){
        return Resolutions.findOne(this.props.id) ;
    }


    render(){
        let res = this.resolution();

        if(!res){
            return (
                <div> Loading .... </div>
            )
        }

        return (
            <div>
                <h1>{res.text}</h1>
            </div>
        )
    }
}
