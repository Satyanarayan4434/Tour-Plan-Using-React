import React, { useState } from "react";

function Card(tour) {
  
  const [readMore, setReadMore] = useState(false);

  const description = readMore? tour.tour.info: `${tour.tour.info.substring(0, 200)}....`;
  function readMoreHandler() {
    setReadMore(!readMore);
  }


 const[newData, setNewData] = useState(tour.tour);
 let newDataHandlerBtn=()=>{
  let newId= newData.id;
  console.log(newId);
 }


  return (
    <div className="w-[18rem]  flex flex-col gap-3 border p-4 rounded-lg bg-slate-100">
      <img className="rounded-lg" src={tour.tour.image} alt="tour_Img" />
      <h1 className="text-xl font-bold text-blue-800">${tour.tour.price}</h1>
      <h1 className="font-mono text-xl font-bold">{tour.tour.name}</h1>
      <h1 className="text-sm text-gray-900">
        {description}
        <span
          className="text-blue-700 cursor-pointer"
          onClick={readMoreHandler}
        >
          {readMore ? `  Show Less` : `Read More`}
        </span>
      </h1>
      <button className="rounded-lg bg-orange-300 h-[3rem] text-lg font-mono font-bold text-orange-800" onClick={newDataHandlerBtn}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
