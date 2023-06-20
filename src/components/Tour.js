import React from "react";
import Card from "./Card";
import data from "./Data"

function Tour() {
  
  
  return (
   <div className=" bg-slate-400 ">
     <div className="flex  justify-center ">
      <h1 className=" p-4 border border-dashed border-black justify-center flex rounded-lg w-[20rem] bg-orange-200 font-mono text-2xl m-6">Tour Plan</h1>
     </div>
     <div className="flex flex-wrap w-[920px] gap-6 justify-center mx-auto">
      {
        data.map((tour)=>{
          return <Card key={tour.id} tour={tour} />
        })
      }
     </div>
   </div>
  );
}

export default Tour;
