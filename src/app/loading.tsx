

// const loading = () => {
//     return (
//         <div>
//             loading..........
//         </div>
//     );
// };

// export default loading;


const Loading = () => {
  return (
    <div className="flex min-h-48 items-center justify-center rounded-2xl bg-green-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-bold tracking-wide text-green-800">
            Loading...
          </h2>
          <p className="mt-1 text-sm text-green-600">
            Please wait a moment
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-green-500 [animation-delay:150ms]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-green-400 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
