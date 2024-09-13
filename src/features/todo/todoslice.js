// // methods for creating slices (reducers)
// //1
// import {createSlice,nanoid} from '@reduxjs/toolkit' //nano id is used for generating unique ids

// //  defining starting state of store -> an object 
// const initialstate ={
//     todos:[{id:1,text:"HELLO WORLD"}]

// }
// //create slice is the method of creating slices and as it is entry jana chaiye usme jaise neeche create slice k ander likha hai
// export const todoslice=createSlice({
//     name:'todo',
//     initialstate, //each slice has its own initial state
//     //we can add and write reducers here only it contains properties and function
//     reducers:{
//         addtodo:(state,action)=>{ //state and action ka access hamesha apne pass rhega jiski madad se ham current state and change in our store kr skte hai
//             //adding one todo in our store
//             //1 create todo
//             const todo={
//                 id:nanoid(),//genereated an uinique 
//                 text:action.payload.text  //action me se nikalenge text ka material as action.payload.text payload is acting as aobject
//             }
//             //ab current state ko update krna padega
//             state.todos.push(todo); 

//         },        
//         removetodo:(state,action)=>{
//             state.todos=state.todos.filter((todo)=>{ //jiska jiska id action.payload k barabr nhi hoga wo filter out nhi honge


//                 todo.id!==action.payload

//             })

//         }
        
//     }
    
    



// })
// export const {addtodo,removetodo}=todoslice.actions 
// // ab jitne reducers banaye gaye hai unka info store ko dena padega jinki madad se wo in sbka use krega isliy un sbko individuakky export
// export default  todoslice.reducer
// //ab itna kaam krne k bad ham chlte hai store me uski bhi to batana hai kaise kin kin reducer ka use krenege
 
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload; // Get the id and the new text to update
            const todo = state.todos.find((todo) => todo.id === id); // Find the todo with the matching id
            if (todo) {
                todo.text = newText; // Update the text if todo is found
            }
        },
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer