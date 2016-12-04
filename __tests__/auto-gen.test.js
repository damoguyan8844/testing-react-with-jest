import reducers from '../app/reducers';
import initialState from '../app/test-helper.js';

test('reducers', () => {
    let state;
    state = reducers(initialState, {});
    expect(state).toEqual({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:false},{id:'r1ZjOQU-me',name:'Walk the dog',done:false}]},routing:{locationBeforeTransitions:null}});
    state = reducers({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:false},{id:'r1ZjOQU-me',name:'Walk the dog',done:false}]},routing:{locationBeforeTransitions:null}}, {type:'@@router/LOCATION_CHANGE',payload:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}});
    expect(state).toEqual({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:false},{id:'r1ZjOQU-me',name:'Walk the dog',done:false}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}});
    state = reducers({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:false},{id:'r1ZjOQU-me',name:'Walk the dog',done:false}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}}, {type:'TOGGLE_DONE',id:'r1ZjOQU-me'});
    expect(state).toEqual({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:false},{id:'r1ZjOQU-me',name:'Walk the dog',done:true}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}});
    state = reducers({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:false},{id:'r1ZjOQU-me',name:'Walk the dog',done:true}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}}, {type:'TOGGLE_DONE',id:'Syxs_X8-Qx'});
    expect(state).toEqual({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:true},{id:'r1ZjOQU-me',name:'Walk the dog',done:true}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}});
    state = reducers({client:{todos:[{id:'SksOQUWQx',name:'Write a blog post for Sitepoint',done:false},{id:'Syxs_X8-Qx',name:'Blog about Jest',done:true},{id:'r1ZjOQU-me',name:'Walk the dog',done:true}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}}, {type:'DELETE_TODO',id:'SksOQUWQx'});
    expect(state).toEqual({client:{todos:[{id:'Syxs_X8-Qx',name:'Blog about Jest',done:true},{id:'r1ZjOQU-me',name:'Walk the dog',done:true}]},routing:{locationBeforeTransitions:{pathname:'/',search:'',hash:'',state:null,action:'POP',key:'zvru9c',query:{},$searchBase:{search:'',searchBase:''}}}});
});