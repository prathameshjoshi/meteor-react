import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionForm.jsx';
import ResolutionsSingle from './ResolutionSingle.jsx';

// create new collection Resolutions in mongodb
Resolutions = new Mongo.Collection("resolutions");

// TrackerReact extended in order to pull data
export default class ResolutionsWrapper extends TrackerReact(React.Component) {

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
    resolutions(){
        return Resolutions.find().fetch();
    }

    render(){

        let res = this.resolutions();

        return(
            <div>
                <h1>My Resolutions - {Session.get('test') /* Sesion var test set in About.jsx*/}</h1>
                <ResolutionsForm />

                <ul className="resolutions">
                    <ReactCSSTransitionGroup 
                        transitionName="resolutionLoad"
                        transitionEnterTimeOut={600}
                        transitionLeaveTimeOut={400}>
                        {this.resolutions().map( (resolution)=> {
                            return <ResolutionsSingle key={resolution._id} resolution={resolution}/>
                        } )}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}
