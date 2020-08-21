const initialState= {
    items:[]
};

function itemsReducer (state=initialState, action){
   switch (action.type){
       case SET_ITEMS:
           return{
               items: action.payload 
           };
        case ADD_ITEMS:
            return {
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            };
            default:
                return state;
   }

}
export default itemsReducer;