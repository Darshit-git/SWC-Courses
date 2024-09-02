import React from "react";

import Calendaritem from './calendaritem';

export default function Calendar() {

    const days = ['S','M','T','W','T','F','S']

    return (
        <div className="h-96 flex  py-8 px-4 mr-12 md:mr-1">
        <div className=" w-full  md:p-8 p-5 bg-white dark:bg-gray-800">
            <div className="px-4 flex items-center justify-between leading-8">
                <a tabIndex="0" role="link"
                   className="cursor-pointer focus:text-gray-400 hover:text-gray-400 text-base font-medium text-gray-800 dark:text-gray-100">June
                    2021</a>
                <div className="flex items-center ">
                    <button className="text-gray-800 dark:text-gray-100 focus:text-gray-400 hover:text-gray-400" aria-label="calender backward" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </button>
                    <button aria-label="calender forward" className="ml-3 text-gray-800 dark:text-gray-100 focus:text-gray-400 hover:text-gray-400" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </button>
                </div>
            </div>


        

        <div className="flex items-center justify-between pt-8 overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        
                        {days.map(day=>{
                            return (
                                <th>
                                    <Calendaritem text={day} />
                                </th>)
                        })}
                        
                        
                    </tr>
                </thead>
            </table>
        </div>

          


            </div>
            
        </div>
    );
    
};