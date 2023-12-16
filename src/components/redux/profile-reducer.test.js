import profileReducer, { addPostActionCreator } from './profile-reducer';


let state = {
  posts: [
    { message: 'Hi, how are you?', id: 1, likesCount: 11 },
    { message: 'It is my first post', id: 2, likesCount: 23 }
  ]
};

test('length of posts should be incremented', () => {
  // 1. test start data
  let action = addPostActionCreator('it- kamasutra'); 
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(5)
});

test('text of new post should be correct', () => {
  // 1. test start data
  let action = addPostActionCreator('it- kamasutra');
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe('it- kamasutra')
});

