import { useSelector } from "react-redux";
import Alert from "./Alert";

export default function Notification() {
  const notification = useSelector((state) => state.notification);

  return (
    <div>
      {notification.status ? (
        <div className="absolute top-0 w-full flex justify-center mt-12 z-10">
          <Alert notification={notification} />
        </div>
      ) : null}
    </div>
  );
}
