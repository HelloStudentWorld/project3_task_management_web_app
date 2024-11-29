const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newStateAdd = [...state, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem('todos', JSON.stringify(newStateAdd));
      return newStateAdd;
    case 'TOGGLE_COMPLETE':
      const newStateToggle = state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(newStateToggle));
      return newStateToggle;
    case 'DELETE_TODO':
      const newStateDelete = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newStateDelete));
      return newStateDelete;
    default:
      return state;
  }
};

export default todoReducer;
