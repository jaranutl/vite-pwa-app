import React from "react";
import AnnounceCaro from "../components/AnnounceCaro";
import { NearbyTable } from "../components/tables/NearbyTable";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";

export const Home: React.FC = () => {
  const slides = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  return (
    <main className="min-h-screen bg-base-300">
      {/* Top content */}
      <section className="container mx-auto max-w-screen-lg px-3 sm:px-4 md:px-6 pt-2 sm:pt-4 md:pt-6">
        <AnnounceCaro
          slides={slides}
          intervalMs={8000}
          pauseOnHover
          showArrows={false}
          showDots
          className="bg-base-200 rounded-2xl overflow-hidden"
        />
      </section>

      {/* Desktop / tablet CTA */}
      <section className="container mx-auto max-w-screen-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 hidden md:block">
        <div className="text-center">
          <button
            className="btn btn-primary rounded-full gap-2 btn-lg"
            aria-label="Make a reservation"
          >
            <BookOnlineOutlinedIcon fontSize="small" />
            Reservation
          </button>
        </div>
      </section>

      {/* Content / Table */}
      <section className="container mx-auto max-w-screen-lg px-3 sm:px-4 md:px-6 pb-24 md:pb-10">
        {/* Make tables scrollable on small screens */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-2 sm:p-4">
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <NearbyTable />
            </div>
          </div>
        </div>

        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-base-content/60">
          ※ Depending on the situation, waiting time may vary
        </p>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-20 inset-x-0 z-40 flex justify-center md:hidden">
        <button
          className="btn btn-primary rounded-full gap-2 btn-lg shadow-lg"
          aria-label="Make a reservation"
        >
          <BookOnlineOutlinedIcon fontSize="small" />
          Reservation
        </button>
      </div>
    </main>
  );
};
