"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const CAT_STORAGE_KEY = "portfolio.randomCatImageUrl";

const RandomCat = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [imageUrl, setImageUrl] = useState<string>("");
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
    setImageUrl(window.localStorage.getItem(CAT_STORAGE_KEY) ?? "");
  }, []);

  useEffect(() => {
    if (imageUrl || !hasMounted) {
      return;
    }

    const getImage = async () => {
      setLoadingImage(true);
      const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
      const data = await response.json();
      const nextImageUrl = data[0].url;
      setImageUrl(nextImageUrl);
      window.localStorage.setItem(CAT_STORAGE_KEY, nextImageUrl);
      setTimeout(() => {
        setLoadingImage(false);
      }, 1000);
    };

    getImage();
  }, [imageUrl, hasMounted, refresh, apiKey, apiUrl]);

  useEffect(() => {
    if (imageUrl) {
      window.localStorage.setItem(CAT_STORAGE_KEY, imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    setImageLoaded(Boolean(imageUrl));
    setIsRefreshing(false);
  }, [imageUrl]);

  return (
    <div className="relative flex justify-center items-center border border-neutral-900 rounded-lg w-[250px] h-[250px] shrink-0">
      {imageUrl ? (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="relative z-10"
            >
              <Image
                loading="eager"
                src={imageUrl}
                alt="Image of cat"
                onLoad={() => setImageLoaded(true)}
                width={300}
                height={300}
                preload={true}
                unoptimized
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {loadingImage && (
              <motion.div
                key="loading-spinner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-0 flex items-center justify-center"
              >
                <div className="rounded-full w-10 h-10 border-2 border-transparent border-t-neutral-700 border-r-neutral-700 border-b-neutral-700 animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {imageLoaded && !isRefreshing && (
              <motion.button
                key="refresh-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
                className="cursor-pointer flex items-center gap-2 absolute -bottom-6 right-0 z-10"
                type="button"
                onClick={() => {
                  setImageLoaded(false);
                  setIsRefreshing(true);
                  window.localStorage.removeItem(CAT_STORAGE_KEY);
                  setTimeout(() => {
                    setImageUrl("");
                    setRefresh(!refresh);
                  }, 300);
                }}
              >
                click me
              </motion.button>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="h-[250px] w-[250px]" />
      )}
    </div>
  );
};
export default RandomCat;
