import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Cherry,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
         Tu thodi confusing hai kabhi full strong “mujhe kisi ki zarurat nahi”,
          aur kabhi bas thoda sa real connection chahiye hota hai. 
          But honestly? That just makes you real.
           Mujhe pata hai kabhi kabhi tera mind hi tere against chala jata hai… tu khud pe doubt karti hai.
          But still tu har din fight krleti h , Aur woh chhoti baat nahi hai while facing the anti feminist enviroment around you.
          Keep carring with flow " maa-chudaye mard jaat wala attitude"
        </p>
        <p className="text-lg text-pink-600 font-semibold">
         What makes u special to me is,
         you can sense when i am sad even on the days i dont speak up.
        So yeah… happy birthday. Sach mein, I’m really glad tu hai.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
