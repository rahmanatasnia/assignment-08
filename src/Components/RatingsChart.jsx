// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";
// import AppDetails from "../Pages/AppDetails/AppDetails";


// const RatingsChart = ({ ratings }) => {
//   return (
//     <AppDetails>
//       <h2 className="text-2xl font-bold">Rating</h2>
//       <div className=" mt-10 ">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={ratings}
//             layout="vertical"
//             margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//           >
//             <XAxis type="number" />
//             <YAxis dataKey="name" type="category" />
//             <Tooltip />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <Bar
//               dataKey="count"
//               fill="#FFBF46"
//               barSize={25}
//               radius={[5, 5, 5, 5]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </AppDetails>
//   );
// };

// export default RatingsChart;