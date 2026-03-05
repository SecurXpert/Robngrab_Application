import { SIGNUP_STAGES } from '../constants';

export default function ProgressBar({ currentMainStage }) {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="relative flex justify-between items-center">
          {SIGNUP_STAGES.map((label, idx) => {
            const num = idx + 1;
            const active = currentMainStage === num;
            const done = currentMainStage > num;
            const isFirst = idx === 0;
            const isLast = idx === 3;

            return (
              <div
                key={label}
                className="flex-1 flex flex-col items-center relative"
              >
                {/* Left line (from previous) */}
                {!isFirst && (
                  <div
                    className={`absolute top-5 left-0 right-1/2 h-0.5 ${
                      done || active ? "bg-blue-600" : "bg-gray-300"
                    } hidden sm:block`}
                  />
                )}
                {/* Right line (to next) */}
                {!isLast && (
                  <div
                    className={`absolute top-5 left-1/2 right-0 h-0.5 ${
                      done ? "bg-blue-600" : "bg-gray-300"
                    } hidden sm:block`}
                  />
                )}

                {/* Circle */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold border-2 z-10 transition-all ${
                    done
                      ? "bg-blue-600 border-blue-600 text-white"
                      : active
                        ? "bg-white border-blue-600 text-blue-600 ring-2 sm:ring-4 ring-blue-100"
                        : "bg-gray-100 border-gray-300 text-gray-500"
                  }`}
                >
                  {done ? (
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    num
                  )}
                </div>

                <span
                  className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium ${done || active ? "text-blue-700" : "text-gray-500"}`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
