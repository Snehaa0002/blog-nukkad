'use client';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ViewCompetition = () => {

  const { id } = useParams();
  const [competitionDetails, setCompetitionDetails] = useState(null);
  const [participantList, setParticipantList] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const fetchCompetition = () => {
    fetch(`http://localhost:5000/competition/getbyid/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCompetitionDetails(data);
      })
  }

  useEffect(() => {
    fetchCompetition();
    fetchParticipants();
  }, []);

  const fetchParticipants = () => {
    fetch(`http://localhost:5000/participation/getbycompetition/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setParticipantList(data);
      })
  }

  const displayCompetitionDetails = () => {
    if (competitionDetails !== null) {
      return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* images - start */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={'http://localhost:5000/'+competitionDetails.cover}
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    Ending : {new Date(competitionDetails.endDate).toDateString()}
                  </span>
                </div>
              </div>
              {/* images - end */}
              {/* content - start */}
              <div className="md:py-8">
                {/* name - start */}
                <div className="mb-2 md:mb-3">
                  <span className="mb-0.5 inline-block text-gray-500"></span>
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {competitionDetails.title}
                  </h2>
                  <p>{competitionDetails.description}</p>
                </div>
                {/* name - end */}
                {/* rating - start */}
                <div className="mb-6 flex items-center md:mb-10">
                  <div className="-ml-1 flex gap-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">4.2</span>
                  <a
                    href="#"
                    className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    view all 47 reviews
                  </a>
                </div>
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                      {competitionDetails.prize}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <a
                    href="#"
                    className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                  >
                    Participate in Competition
                  </a>
                </div>
                {/* buttons - end */}

                {/* description - end */}
              </div>
              {/* content - end */}
            </div>
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }

  const declareWinner = (participantId) => {
    fetch(`http://localhost:5000/competition/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        winner: participantId
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchCompetition();
      })
  }

  const displayParticipants = () => {
    if (participantList.length > 0) {
      return (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Participant name
                </th>
                <th scope="col" className="px-6 py-3">
                  Entry Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Entry Blog
                </th>
                <th scope="col" className="px-6 py-3">
                  Blog Publishing Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Declare Winner
                </th>
              </tr>
            </thead>
            <tbody>
              {
                participantList.map((participant, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {participant.user.name}
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(participant.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {participant.blog.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(participant.blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={
                        () => declareWinner(participant._id)
                      } >Declare Winner</button>
                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      )
    } else {
      return <div>No participants</div>
    }
  }

  return (
    <div>
      {displayCompetitionDetails()}
      {displayParticipants()}
    </div>
  )
}

export default ViewCompetition