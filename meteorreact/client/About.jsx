    import React, {Component} from 'react';

    export default class About extends Component{

        setVar(){
            Session.set('Meteor.loginButtons.dropdownVisible', true);
        }

        render(){
            return (
                <div>
                    <h1>About Us</h1>
                    <p>Carefully Designed Client Side Router for Meteor. FlowRouter is a very simple router for Meteor. It does routing for client-side apps and does not handle rendering itself. It exposes a great API for changing the URL and reactively getting data from the URL. However, inside the router, it's not reactive. Most importantly, FlowRouter is designed with performance in mind and it focuses on what it does best: routing.</p>
                    <button onClick={this.setVar}>Sign up</button>
                </div>
            )
        }
    }
