import { FETCH_BUILD_ENV} from '../constants/buildapp-action-types';

const initialState = {
    buildEnvs: []
}

const buildenvReducer = ( state = initialState, action) => {
    switch (action.type){
        case FETCH_BUILD_ENV:
                return {
                    ...state,
                    buildEnvs: [...state.buildEnvs, ...action.payload]
                };
            break;

        default:
            return initialState;
    }
}

export default buildenvReducer;