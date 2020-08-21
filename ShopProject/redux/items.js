const initialState= {
    items:[{
        id:0,
        title: 'Кольцо'
    }]
};

function itemsReducer (state=initialState, action){
   switch (action.type){
       case 'SET_ITEMS':
           return{
               ...state,
               items: action.payload 
           };
        case 'ADD_ITEMS':
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