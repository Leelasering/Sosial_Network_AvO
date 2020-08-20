
let initialState = {
    friends: [
        {id: '13', name: 'Maxim', text: 'How r u?', time: '13:00', mess: '2'},
        {id: '14', name: 'Artem', text: 'What r u doing?', time: '15:20', mess: '3'},
        {id: '15', name: 'Nikolay', text: 'sdgsgsdg', time: '16:30', mess: '9'},
        {id: '28', name: 'Vlad', text: 'Hdgfdfhhfg', time: '13:08', mess: '6'},
        {id: '29', name: 'Vladimir', text: 'Hfghhfghfgh', time: '10:23', mess: '8'},
        {id: '30', name: 'Sasha', text: 'Hfgfghfhfgh', time: '11:04', mess: '24'},
    ]
}

const SiteBarReduser = (state = initialState,action) =>
{
    return state;
}

export default SiteBarReduser;