type ErrorType = {
  message: string;
};

const ErrorMsg = ({ message }: ErrorType) => {
  return (
    <div className="w-[300px] mx-auto mt-12 text-destructive p-6 rounded-md bg-muted text-center">
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMsg;
