import React from "react";
import Programme from "../Programme/Programme";
import StudentReview from "../StudentReview/StudentReview";
import review2 from "../../assets/WhatsApp Image 2024-05-10 at 4.52.52 AM.jpeg"
import review1 from "../../assets/Screensho.jpg"
import review3 from "../../assets/Reviews 5.jpg"
import { descriptionPrograms } from "../../utils/data";

function DFB({ cardOneTitle, cardTwoTitle, cardThreeTitle }) {
  return (
    <>
    <h1 className="text-center midSmall:text-[40px] text-[30px] font-bold py-5"> Specially Crafted for beginners</h1>
      <div className="grid midWide:grid-cols-3 midSmall:grid-cols-2 gap-3">
        <div className="h-[50vh] w-full bg-[#000066] text-[white] rounded-[10px] flex flex-col justify-between py-4 px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="white" d="m8.076 7.26l.095.083l8.486 8.485a1 1 0 0 1-.246 1.595l-.116.05L5.91 21.3c-1.952.72-3.853-1.115-3.26-3.064l.05-.146L6.526 7.705a1 1 0 0 1 1.447-.516zm9.031 4.344c.911.048 2.16.24 3.246.892a1 1 0 0 1-.925 1.77l-.104-.055c-.682-.41-1.554-.57-2.322-.61a7.666 7.666 0 0 0-.95.004l-.316.031a1 1 0 0 1-.281-1.98a8.587 8.587 0 0 1 1.652-.053m2.025-2.786a1 1 0 0 1 .116 1.993l-.116.007h-.708a1 1 0 0 1-.116-1.993l.116-.007zM15.95 8.05a1 1 0 0 1 .083 1.32l-.083.094l-1.061 1.061a1 1 0 0 1-1.497-1.32l.083-.094l1.06-1.06a1 1 0 0 1 1.415 0m-2.587-5.266c.448 1.346.208 2.82-.072 3.85a10.11 10.11 0 0 1-.69 1.863a1 1 0 0 1-1.79-.893a8.13 8.13 0 0 0 .55-1.496c.227-.832.341-1.735.166-2.475l-.061-.216a1 1 0 1 1 1.897-.633m5.415 2.438a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0"/></g></svg>
          <h2 className="font-bold text-[28px]">{cardOneTitle} No prior knowledge needed</h2>
          <p className="text-[13px]">
          We teach you from scratch, like an actual novice until you become a coding rockstar, learn from zero to hero with expert instructors
          </p>
        </div>
        <div className="h-[50vh] w-full bg-[#555B62] text-[white] rounded-[10px] flex flex-col justify-between py-4 px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M10.218 3.216a.75.75 0 1 0-1.436-.431l-3 10a.75.75 0 0 0 1.436.43l3-10ZM4.53 4.97a.75.75 0 0 1 0 1.06L2.56 8l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.94 6.06a.75.75 0 0 1 0-1.06L13.44 8l-1.97-1.97a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0" clip-rule="evenodd"/></svg>
        <h2 className="font-bold text-[28px]"> {cardTwoTitle} Project-based Learning</h2>
        <p className="text-[13px]">Learn by Doing, build real-world projects, not theory. Hands-on Learning, solve problems and create solutions..</p>
        </div>
        <div className="h-[50vh] w-full bg-[#000066] text-[white] rounded-[10px] flex flex-col justify-between py-4 px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="white" d="M256 89.61L22.486 177.18L256 293.937l111.22-55.61l-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16a16 16 0 0 1 16-16l-2.646 8.602l18.537 5.703l.008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21a16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0c0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627c16.37 10.232 31.703 21.463 44.156 32.36c7.612 6.66 13.977 13.05 19.074 19.337c5.097-6.288 11.462-12.677 19.074-19.337c12.453-10.897 27.785-22.128 44.156-32.36c28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063L125.873 249z"/></svg>
        <h2 className="font-bold text-[28px]">{cardThreeTitle} Post Learning Mentorship </h2>
          <p className="text-[13px]">
          Post training support from experts, we guide you beyond the classroom. Learn & Grow: Master skills with expert mentorship after training.
          </p>
        </div>
      </div>
      <Programme 
      Title={'Programs'} 
      courseKey={1} 
      courseLabel={"POSTGRESQL"} 
      courseDes={ "Embark on your PostgreSQL journey, a robust database adventure. Explore tables, queries, and transactions for efficient data management and retrieval."}

      courseKey2={2} 
      courseLabel2={"KAFKA"} 
      courseDes2={  "Embark on your Kafka journey, a distributed streaming platform adventure. Explore topics, producers, consumers, and stream processing for real-time data handling."}

      courseKey3={3} 
      courseLabel3={"AWS REDSHIFT"} 
      courseDes3={  "Embark on your AWS Redshift journey, a cloud data warehousing adventure. Explore clusters, databases, and querying for scalable analytics and insights."}

      courseKey4={4} 
      courseLabel4={"SNOWFLAKES"} 
      courseDes4={ "Snowflake is a modern data platform offering scalability. Discover warehouses, tables, and querying for efficient data analytics."}
      
      
      />

   

<StudentReview reviewImg={review1} reviewImg2={review3} reviewImg3={review2}/>
      
    </>
  );
}

export default DFB;
