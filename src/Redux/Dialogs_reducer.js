

const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const SEND_MESS = 'SEND-MESS';

let initialState = {
    messages: [
        {id: '0', name: 'Anatoly Marginal', text: 'Hfdsf', time: '10:23', date: '23.07.2020'},
        {id: '1', name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', date: '23.07.2020'},
        {id: '2', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', date: '23.07.2020'},
        {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', date: '23.07.2020'},
        {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', time: '15:20', date: '23.07.2020'},
        {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', date: '23.07.2020'},
        {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', date: '23.07.2020'},
        {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', date: '23.07.2020'},
        {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', date: '23.07.2020'},
        {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', date: '23.07.2020'}
    ],
    dial_names: [
        {id: "1", name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', mess: '4'},
        {id: '2', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', mess: '1'},
        {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', mess: '2'},
        {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', time: '15:20', mess: '3'},
        {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', mess: '9'},
        {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', mess: '45'},
        {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', mess: '3'},
        {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', mess: '6'},
        {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', mess: '8'},
        {id: '10', name: 'Sasha Volk', text: 'Hfgfghfhfgh', time: '11:04', mess: '24'},
    ],
    NewMessText: ''
}

export const DialogsReducer = (state = initialState,action) =>
{
    let stateCopy = {
        ...state,
        messages : [...state.messages],
    };


    switch(action.type){
        case SEND_MESS://____________________________________SEND_MESS
        {
            if(state.NewMessText.length != 0)
            {
                let newMess = {
                    id: 505,
                    text: state.NewMessText,
                    name: 'FirstName LastName',
                    time: '19:30',
                    date: '27.07.2020'
                };

                stateCopy.messages.push(newMess);
                stateCopy.NewMessText = '';
            }
            return stateCopy;
        }
        case UPDATE_NEW_MESS_TEXT://_________________________UPDATE_NEW_MESS_TEXT
        {
            stateCopy.NewMessText = action.text;
            return stateCopy;
        }
        default:
        {
            return stateCopy;
        }
    }

}

export const sendMessActionCreator = () => ({type: SEND_MESS});
export const updateNewMessTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESS_TEXT,
    text: text});
export default DialogsReducer;