import { useEffect, useState } from "react";
import feather from "feather-icons";
import "./RandImg.css";

const API_KEY =
  "live_5KTdnuXxmukJo7KjjHAOmxltfVKURURsJDF4CXa3FAAGgRaxCjT5hOm57o786vUt";

const RandImg = () => {
  const [imgUrl, setImgUrl] = useState("");

  const getData = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`
    );
    const data = await response.json();
    setImgUrl(data[0].url);
  };

  useEffect(() => {
    feather.replace();
  }, [imgUrl]);

  useEffect(() => {
    getData(); // load first image
  }, []);

  return (
    <section className="random-image">
      <div className="image-container">
        <button className="image-button" onClick={getData}>
          <i data-feather="refresh-cw"></i>
        </button>
        {imgUrl && (
          <img className="image" loading="lazy" src={imgUrl} alt="Random Cat" />
        )}
      </div>
    </section>
  );
};

export default RandImg;
