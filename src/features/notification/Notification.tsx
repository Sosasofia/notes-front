import Alert from "./Alert";
import { useAppSelector } from "@/app/hooks";

export default function Notification() {
  const notification = useAppSelector((state) => state.notification);

  return (
    <div>
      {notification.show ? (
        <div className="absolute top-0 w-full flex justify-center mt-12 z-10">
          <Alert notification={notification} />
        </div>
      ) : null}
    </div>
  );
}
