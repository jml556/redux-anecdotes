import { useDispatch } from 'react-redux';
import { changeText } from '../reducers/anecdoteReducer';

const Filter = () => {
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeText(value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
