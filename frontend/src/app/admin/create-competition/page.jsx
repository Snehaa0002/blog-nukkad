'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const CreateCompetition = () => {

  const competitionForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      cover: '',
      prize: '',
      endDate: ''
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch('http://localhost:5000/competition/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status)

      if (res.status === 200) {
        resetForm();
        toast.success('Competition Created Successfully');
      } else {
        toast.error('Competition creation failed');
      }
    }
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        competitionForm.setFieldValue('cover', file.name);
      }
    });
  };

  return (
    <div>
      <>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                Create New Competition
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Provide all the details to create new blog writing competition
              </p>
            </div>
            <form onSubmit={competitionForm.handleSubmit}>
              {/* Grid */}
              <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                <div className="sm:col-span-3">
                  <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                    Profile photo
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <label
                    htmlFor='cover-img'
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1={12} x2={12} y1={3} y2={15} />
                    </svg>
                    Cover photo
                  </label>
                  <input hidden id='cover-img' type="file" onChange={uploadFile} />
                </div>



                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Title
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="title"
                    onChange={competitionForm.handleChange}
                    value={competitionForm.values.title}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder=""
                  />
                </div>


                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >

                    EndDate
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="space-y-2">
                    <input
                      id="endDate"
                      onChange={competitionForm.handleChange}
                      value={competitionForm.values.endDate}
                      type="date"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder=""
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-account-phone"
                      className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Prize
                    </label>
                    <span className="text-sm text-gray-400 dark:text-neutral-600">

                    </span>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="prize"
                      onChange={competitionForm.handleChange}
                      value={competitionForm.values.prize}
                      type="string"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder=""
                    />

                  </div>
                  <p className="mt-3">
                    <a
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                      href="../docs/index.html"
                    >


                    </a>
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-bio"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Description
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <textarea
                    id="description"
                    type="text"
                    onChange={competitionForm.handleChange}
                    value={competitionForm.values.description}
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    rows={6}
                    placeholder="Type your message..."
                    defaultValue={""}
                  />
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
              <div className="mt-5 flex justify-end gap-x-2">
                <button
                  type="submit"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>

    </div>
  )
}

export default CreateCompetition;