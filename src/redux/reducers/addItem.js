 const addItem = [];

 const addItems = (state = addItem, action) => {
     switch (action.type) {
         case "ADDITEM" : 
         if(state.some(item => item.id == action.payload.id)){

             return state.map(item =>{if(item.id == action.payload.id){
                 item.quantity = item.quantity+1;
             }
             return item;
            });
         }
        //  action.payload.quantity=1;
         return [
             ...state,
             {...action.payload, quantity:1}
         ]
         

         case "DELITEM" : 
         
         return state.filter((x) => {
             return x.id !== action.payload.id
         })
        

         default: return state;
         

     }
 }
export default addItems;