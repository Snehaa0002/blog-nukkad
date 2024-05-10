'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Browsecompetition = () => {
  const [competitionList, setCompetitionList] = useState([]);

  const fetchCompetitionData = () => {
    fetch('http://localhost:5000/competition/getall')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCompetitionList(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchCompetitionData();
  }, []);

  const sliceString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    } else {
      return str;
    }
  }

  const displayCompetitionData = () => {
    if (competitionList.length === 0) {
      return <h2>No Competitions Yet</h2>
    } else {
      return competitionList.map(competition => (
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <img src={"http://localhost:5000/"+competition.cover} alt="" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-red-600 dark:text-red-500">
              {new Date(competition.endDate).toLocaleDateString()}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              {competition.title}
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              {competition.description}
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              href={"/competition-details/"+competition._id}
            >
              View Details
            </Link>
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              href="#"
            >
              View API
            </a>
          </div>
        </div>
      ))
    }
  }

  return (
    <div>
      <>
        {/* Card Competition */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {displayCompetitionData()}

          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>

    </div>
  )
}

export default Browsecompetition;