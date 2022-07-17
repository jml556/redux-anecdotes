import { useSelector } from 'react-redux';

const Notification = () => {
  const message = useSelector((state) => state.notifications.notifications);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{message[0].message}</div>;
};

export default Notification;
