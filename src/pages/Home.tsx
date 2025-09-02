import React, { useState, useEffect } from "react";
import AnnounceCaro from "../components/AnnounceCaro";
import { NearbyTable } from "../components/tables/NearbyTable";
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';

export const Home = () => {
  const slides = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  return (
    <div>
      <div className="p-2 sm:p-4 md:p-6">
        <AnnounceCaro
          slides={slides}
          intervalMs={8000} // slower autoplay
          pauseOnHover
          showArrows={false}
          showDots
          className="bg-base-200" // optional wrapper style
        />
      </div>
      <div className="p-4 sm:p-4 md:p-6 lg:p-8 text-center">
        <button className="btn rounded-full btn-xs sm:btn-md md:btn-lg lg:btn-xl">
          <BookOnlineOutlinedIcon/>
          Reservation
        </button>
      </div>
      <div className="space-between">
        <div>
          
        </div>
      </div>
      <NearbyTable/>
      <div className="m-3 text-center">
        ※ Depending on the situation, waiting time may vary
      </div>
    </div>
  );
};
