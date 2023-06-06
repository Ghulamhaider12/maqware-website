import React from "react";

const VacancyModal = ({ onClose }) => {
  return (
      <>
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">MERN Stack Developer</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className=" p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              Maqware Solutions is leading software development company,
              offering top-tier software solutions to enterprises, growing
              businesses, and startups. We help businesses by offering
              cutting-edge software solutions through digital transformation and
              leveraging the latest technologies.
            </p>
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              Our ideal MERN stack developer should have the ability to:
            </p>
            <div className="my-4 text-slate-500 text-lg leading-relaxed">
              <ul className="list-disc ml-8 ">
                <li>
                  Translate wireframes and PSD designs to functional web apps.
                </li>
                <li>Bind UI elements to JavaScript object models</li>
                <li>
                  Create RESTful services with Node.js and have good Knowledge
                  of Node Debugging.
                </li>
                <li>
                  Work in a cross-functional team to deliver a complete user
                  experience.
                </li>
                <li>
                  Have expertise & knowledge of React.js Node.js MongoDB,
                  Express, Node.js, & React.
                </li>
                <li>
                  Create Unit and Integration tests to ensure the quality of
                  code.
                </li>
                <li>Proven experience in front & back-end development.</li>
                <li>Be responsive to change and feature requests.</li>
                <li>Write cross-platform and cross-device compatible code.</li>
                <li>
                  Well-acquainted with REST APIs, Git Repository, and Jira.
                </li>
                <li>
                  Expertise in Integration of data storage solutions [RDBMS,
                  NoSQL DB].
                </li>
              </ul>
            </div>
            <div>
              <h1>Required Qualifications</h1>
              <ul className="list-disc ml-8 ">
                <li>
                  Bachelor or master in Computer science (Regular Program, no
                  part-time or remote/virtual courses).
                </li>
                <li>2 years of experience with React & Node JS.</li>
              </ul>
              <p>We are offering</p>
              <ul className="list-disc ml-8 ">
                <li>Market competitive salary</li>
                <li>An unparalleled work culture</li>
                <li>Mentorship by the Leads </li>
                <li>Learning and growing opportunities</li>
                <li>Annual performance-based Increments</li>
              </ul>
              <p>Employment Type:</p>
              <h1 className="">
                <p>Job Type: Full-time</p>
                <p>Monday to Friday</p>
                <p>Timings: 10 AM to 7 PM </p>
                <p>Location: Ali Tower Mm Alam Road Gulberg 3 Lahore</p>
              </h1>
              <p>If interested, Please share your resume at</p>
              <br />
              <a
                href="jobs@maqware.com"
                className="hover:underline text-primary"
                target="blank"
              >
                jobs@maqware.com
              </a>
            </div>
          </div>
          
        </div>
      </>
  );
};

export default VacancyModal;
