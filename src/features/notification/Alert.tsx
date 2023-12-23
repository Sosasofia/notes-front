import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

import { Notification } from "@/types";

type Props = {
  notification: Notification;
};

export default function Alert({ notification }: Props) {
  const { message, type } = notification;

  const styles = () => {
    switch (type) {
      case "success":
        return "border-green-400";
      case "error":
        return "border-red-400";
      case "warning":
        return "border-yellow-400";
      default:
        return "border-blue-400";
    }
  };

  const icon = () => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="h-10 w-10 text-green-500" />;
      case "error":
        return <ExclamationCircleIcon className="h-10 w-10 text-red-500" />;
      case "warning":
        return <ExclamationCircleIcon className="h-8 w-8 text-yellow-500" />;
      default:
        return <ExclamationCircleIcon className="h-8 w-8 text-blue-500" />;
    }
  };

  const toUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      className={`flex justify-center h-24  bg-white dark:bg-gray-700 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm  ${styles()}`}>
      {icon()}
      <div className="ml-3">
        <div className="font-bold text-left text-black dark:text-gray-50">
          {toUpperCase(type || "")}!
        </div>
        <div className="w-full text-gray-900 dark:text-gray-300 mt-1">
          {toUpperCase(message || "")}
        </div>
      </div>
    </div>
  );
}
