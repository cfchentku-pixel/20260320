/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#ff7526] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          x: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.4 }
        }}
        className="box bg-white w-[380px] rounded-3xl shadow-[15px_15px_30px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer"
      >
        {/* Top Section */}
        <div 
          className="top h-[330px] bg-cover bg-center relative"
          style={{ backgroundImage: `url('https://pic.pimg.tw/sidney6811/1529508979-1559019819_n.jpg')` }}
        >
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold tracking-tight">
            浮光書店
            <span className="smalltxt block text-sm font-normal opacity-90 mt-1">
              Illumination Books
            </span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="bottom p-8">
          <ul className="space-y-6 text-gray-700">
            <li className="flex flex-col gap-1">
              <h3 className="font-bold text-[#ff7526] text-sm uppercase tracking-wider">地址</h3>
              <p className="text-lg leading-snug">台北市大同區赤峰街47巷16號2樓</p>
            </li>
            <li className="flex flex-col gap-1">
              <h3 className="font-bold text-[#ff7526] text-sm uppercase tracking-wider">電話</h3>
              <p className="text-lg">02 2550 7288</p>
            </li>
            <li className="flex flex-col gap-1">
              <h3 className="font-bold text-[#ff7526] text-sm uppercase tracking-wider">開放時間</h3>
              <p className="text-lg">今日正常營業 · 14:00–21:30</p>
            </li>
          </ul>

          <div className="buttons flex gap-4 mt-10">
            <a 
              href="#" 
              className="btn1 flex-1 bg-[#ff7526] text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-[#ff7526]/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              前往網站
            </a>
            <a 
              href="#" 
              className="btn2 flex-1 border-2 border-[#ff7526] text-[#ff7526] text-center py-4 rounded-xl font-bold hover:bg-[#ff7526] hover:text-white hover:scale-[1.02] active:scale-95 transition-all"
            >
              更多資訊
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
