// writing Component in bracket gives permission to extends Component without React.Component
import React, {Component} from 'react';

export default class ResolutionsForm extends Component{

    // add resolution function
    // adde new resolution
    addResolution(event){
        event.preventDefault();
        var text = this.refs.resolution.value.trim();

        // prevent adding blank resolution / data 
        if (text) {
            // call addResolution method from server/methods.js
            Meteor.call('addResolution', text, (error, data)=> {
                if (error) {
                    Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
                } else {
                    // clear textbox
                    this.refs.resolution.value ="";
                }
            });
        }
    }

    render(){
        return(
            <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                <input
                    type="text"
                    ref="resolution"
                    placeholder="Finish React Meteor Series"
                />
            </form>
        )
    }
}
