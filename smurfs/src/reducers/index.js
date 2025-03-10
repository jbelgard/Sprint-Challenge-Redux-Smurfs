/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, SUCCESS, FAILURE, ADDING, DELETING } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs       : [],
  fetching     : false,
  addingSmurf  : false, 
  updatingSmurf: false ,
  deletingSmurf: false ,
  error        : null ,
}

export const smurfReducer = ( state = initialState, action) => {
  switch(action.type){
     case FETCHING:
          return {...state,   fetching:true}
     case ADDING:
          return {...state,   fetching:true}
     case DELETING:
          return {...state,   fetching:true}
     case SUCCESS:
          return {...state,   smurfs  :action.payload,  fetching:false}
     case FAILURE:
          return {...state,   error   :action.payload,  fetching:false}
     default:
          return {...state}   ;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
