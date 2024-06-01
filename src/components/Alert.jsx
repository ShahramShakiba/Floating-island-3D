export default function Alert({ type, text }) {
  const success =
    'text-white bg-gradient-to-r from-[#4fd7fd83] to-[#0073fff4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xl';

  return (
    <div className="absolute top-16 left-0 right-0 flex items-center justify-center">
      <div
        className={`${
          type === 'danger' ? 'bg-rose-700' : success
        } px-4 py-2 leading-none rounded-e-full flex lg:inline-flex items-center shadow-xl`}
        role="alert"
      >
        <p
          className={`${
            type === 'danger' ? 'bg-rose-400' : 'bg-blue-500'
          } text-blue-100 px-2 py-1 mr-3 font-medium flex rounded-s-2xl uppercase text-xs mt-0.5`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left bg-">{text}</p>
      </div>
    </div>
  );
}
