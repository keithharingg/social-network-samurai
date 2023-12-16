let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'Hi, how are you?', id: 1, likesCount: 11 },
        { message: 'It is my first post', id: 2, likesCount: 23 }
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
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
    }
  },

  getState() {
    
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    console.log('state changed');
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        message: this._state.profilePage.newPostText,
        id: 5,
        likesCount: 0
      };
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
