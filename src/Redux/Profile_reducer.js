const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id : '0', name : 'Anatoly Marginal', text : 'Hfdsf', l_count : "121", date : '23.07.2020'},
      // {id : '1', name : 'Andrey Mohortov', text : 'Hello!', l_count : "121", date : '23.07.2020'},
      // {id : '2', name : 'Igor Chebotar', text : 'Good bye', l_count : "11", date : '23.07.2020'},
        // {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', l_count: "11", date: '23.07.2020'},
        // {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', l_count: "131", date: '23.07.2020'},
        // {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', l_count: "13", date: '23.07.2020'},
        // {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', l_count: "121", date: '23.07.2020'},
        // {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', l_count: "123", date: '23.07.2020'},
        // {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', l_count: "123", date: '23.07.2020'},
        // {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', l_count: "12", date: '23.07.2020'}

    ],
    NewPostText: ''
}

const ProfileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: //____________________________________ADD_POST
        {
            let stateCopy = {
                ...state,
                posts : [...state.posts],
            };
            
            if(state.NewPostText.length != 0) {
                let newPost = {
                    id: 505,
                    text: state.NewPostText,
                    name: 'FirstName LastName',
                    l_count: 0,
                    date: '27.07.2020'
                };

                stateCopy.posts.push(newPost);
                stateCopy.NewPostText = '';
            }
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: //________________________UPDATE_NEW_POST_TEXT
        {
            let stateCopy = {
                ...state,
            };
            stateCopy.NewPostText = action.text;
            return stateCopy;
        }
        default:
        {
            return  {
                ...state,
            };

        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT,
    text: text});

export default ProfileReducer;