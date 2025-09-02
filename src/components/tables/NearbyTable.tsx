import React from "react";

export const NearbyTable = () => {
  return (
    <div>
      <div className="overflow-x-auto m-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Branches</th>
              <th>Reservation Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Cy Ganderton</td>
              <td>5 Minutes</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Hart Hagerty</td>
              <td>30 Minutes</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Brice Swyre</td>
              <td>45 Minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
