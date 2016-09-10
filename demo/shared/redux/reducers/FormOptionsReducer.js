import presets from '../../../client/presets/presets';
import FormActions from '../actions/FormOptionsActions';

const defaultSchema = presets.find(p => p.name == 'default');

const initialState = {
    componentFactory: 'edit',
    fieldLayout: 'stacked',
    schema: defaultSchema.schema
};

const formOptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FormActions.UPDATE_FORM:
            return {
                ...state,
                schema: action.schema
            };
    
	    case FormActions.SET_STACKED_FIELD_LAYOUT:
            return {
	            ...state,
	            fieldLayout: 'stacked'
            };
    
	    case FormActions.SET_INLINE_FIELD_LAYOUT:
            return {
	            ...state,
	            fieldLayout: 'inline'
            };
       
	    case FormActions.SET_EDIT_COMPONENT_FACTORY:
            return {
	            ...state,
	            componentFactory: 'edit'
            };
       
	    case FormActions.SET_DETAILS_COMPONENT_FACTORY:
            return {
	            ...state,
	            componentFactory: 'details'
            };
        
        default:
            return state;
    }
};

export default formOptionsReducer;