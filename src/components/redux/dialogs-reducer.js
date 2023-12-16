const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { name: 'Dimych', id: 1 },
    { name: 'Andrey', id: 2 },
    { name: 'Vadym', id: 3 },
    { name: 'Alisa', id: 4 },
    { name: 'Serhii', id: 5 }
  ],
  messages: [
    { message: 'Hi', id: 1 },
    { message: 'How are you?', id: 2 },
    { message: 'Hello!', id: 3 },
    { message: 'Where are you disappear?', id: 4 },
    { message: 'Yo', id: 5 }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE, newMessageBody
});

export default dialogsReducer;
