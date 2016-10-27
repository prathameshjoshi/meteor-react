// writing Component in bracket gives permission to extends Component without React.Component
import React, {Component} from 'react';

export default class ResolutionsSingle extends Component{

    // toggle checkbox and change value of complete
    toggleChecked(){
        Meteor.call('toggleResolution', this.props.resolution);
    }

    // delete resolution from collection
    deleteResolution(){
        Meteor.call('deleteResolution', this.props.resolution);
    }

    render(){
        const resolutionClass = this.props.resolution.complete ? "checked" : "";
        const status = this.props.resolution.complete ? <span className="completed">Completed</span> : "";
        return(
            <li className={resolutionClass}>
                <input
                    type="checkbox"
                    readOnly={true}
                    checked={this.props.resolution.complete}
                    onClick={this.toggleChecked.bind(this)}/>
                <a href={`/resolutions/${this.props.resolution._id}` }>{this.props.resolution.text}</a>
                {status}
                <button
                    className="btn-cancel"
                    onClick={this.deleteResolution.bind(this)}>
                    &times;
                </button>

            </li>
        )
    }
}
