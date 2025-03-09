import { ExceptionLayout } from "../layouts/exception.layout";

import notFoundImage from "@assets/imgs/browser-sad.png";
import { useNavigate } from "react-router-dom";
export const NotFoundRouteScreen = () => {
  const navigate = useNavigate();
  return (
    <ExceptionLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "calc(100vh - 300px)",
          flexDirection: "column",
        }}
      >
        <div className="text-center pb-3 text-4xl">
          <h1 className="text-4xl font-bold text-white">404</h1>
          <h5 className="text-secondary text-white">Page not found</h5>
        </div>
        <img
          src={notFoundImage}
          alt="not-found"
          style={{
            opacity: 0.8,
            height: "auto",
            maxHeight: "60%",
            width: "70%",
            maxWidth: "500px",
            objectFit: "contain",
            filter: "invert(100%)",
          }}
        />
        <div className="w-120 pt-3">
          <button
            className="bg-gray-800 text-white p-2 rounded-md cursor-pointer hover:bg-blue/80 w-full"
            onClick={() => navigate("/")}
          >
            Go to home
          </button>
        </div>
      </div>
    </ExceptionLayout>
  );
};

export default NotFoundRouteScreen;
