import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  // set the title of the page
  useEffect(() => {
    document.title = "Home";
  }, []);

  // make a ref to the element that will be used to scroll to the top of the page
  const refVar = useRef<HTMLDivElement>(null);

  // scroll to the top of the page
  useEffect(() => {
    if (refVar.current) {
      refVar.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary mt-5">
        Welcome to the Acme Panel
        <div className="text-center">
          <h2 className="text-center text-info">
            <a href="https://acme.com">Acme</a>
          </h2>
        </div>

        <div className="text-center">
          <h2 className="text-center text-info">
            <a href="https://acme.com">Acme</a>
          </h2>
        </div>

        <div ref={refVar} />
      </h1>
    </div>
  );
};

export default Home;
