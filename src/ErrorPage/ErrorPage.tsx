import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-white">
      <p>Oooops</p>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected occured"}
      </p>
    </div>
  );
};

export default ErrorPage;
