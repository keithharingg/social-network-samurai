let state = {
  profilePage: {
    posts: [
      { message: 'Hi, how are you?', id: 1, likesCount: 11 },
      { message: 'It is my first post', id: 2, likesCount: 23 }
    ]
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
};

export let addPost = (postMessage) => {
    let newPost = 
    { message: postMessage, id: 5, likesCount: 0 }

    state.profilePage.posts.push(newPost)
}

export default state;
