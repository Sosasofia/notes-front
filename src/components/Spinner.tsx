export default function Spinner() {
  return (
    <div className="flex space-x-2">
      <div aria-label="Loading..." role="status">
        <svg className="h-12 w-12 animate-spin stroke-gray-500" viewBox="0 0 256 256">
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="128"
            x2="128"
            y1="32"
            y2="64"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="195.9"
            x2="173.3"
            y1="60.1"
            y2="82.7"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="224"
            x2="192"
            y1="128"
            y2="128"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="195.9"
            x2="173.3"
            y1="195.9"
            y2="173.3"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="128"
            x2="128"
            y1="224"
            y2="192"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="60.1"
            x2="82.7"
            y1="195.9"
            y2="173.3"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="32"
            x2="64"
            y1="128"
            y2="128"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            x1="60.1"
            x2="82.7"
            y1="60.1"
            y2="82.7"
          />
        </svg>
      </div>
    </div>
  );
}