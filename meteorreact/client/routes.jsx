import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolution/ResolutionsWrapper.jsx';
import ResolutionDetail from './resolution/ResolutionDetail.jsx';
import About from './About.jsx';

// route root
// display content from ResolutionsWrapper from ./resolution/ResolutionsWrapper.jsx
FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<ResolutionsWrapper />)
        })

    }
});

// route about
// display content from About from ./resolution/ResolutionsWrapper.jsx
FlowRouter.route('/about', {
    action(){
        mount(MainLayout, {
            content: (<About />)
        })

    }
});

// route resolution by id
FlowRouter.route('/resolutions/:id', {
    action(params){
        mount(MainLayout, {
            content: (<ResolutionDetail id={params.id}/>)
        })

    }
});
