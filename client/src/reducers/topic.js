export default function topic(state = '', action) {
  
  if (action.type === 'SELECT_TOPIC') {
    return {
    	...state,
    	selectedTopic: action.topic
    };
  }

  return state;
}