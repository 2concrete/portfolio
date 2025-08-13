import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

const RandomCat = () => {
  const [catImg, setCatImg] = useState([]);

  const getImg = async () => {
    const responce = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await responce.json();
    console.log(data);
    setCatImg(data);
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="mt-10">
      <button
        onClick={() => getImg()}
        className="absolute p-2 hover:opacity-80 transition-all rounded-sm m-1 cursor-pointer bg-white opacity-50 backdrop-blur-lg"
      >
        <RefreshCcw className="stroke-2 hover:animate-spin" />
      </button>
      <img
        className="w-60 h-60 rounded-sm bg-black object-cover"
        src={catImg[0]?.url}
      />
    </div>
  );
};

export default RandomCat;
