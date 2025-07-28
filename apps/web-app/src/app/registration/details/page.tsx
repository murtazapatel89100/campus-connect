"use client";
import Stepper, { Step } from "@/components/ui/stepper/stepper";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [club, setClub] = useState("");
  return (
    <div>
      <form action="">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <div className="flex font-albert-sans flex-col">
              <div className="flex flex-col">
                <h2 className="font-bold text-3xl">Personal data</h2>
                <p>Specify exactly as in your identity card.</p>
              </div>

              <div className="flex flex-col gap-5 mt-5">
                <div>
                  <label className="block font-bold text-[#1E1E1E] mb-1">
                    First name
                  </label>
                  <input
                    type="email"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1E1E1E] mb-1">
                    Middle name
                  </label>
                  <input
                    type="text"
                    required
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                    placeholder="Enter your Middle name"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1E1E1E] mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                    placeholder="Enter your Middle name"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1E1E1E] mb-1">
                    Birth date
                  </label>
                  <input
                    type="date"
                    required
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                    placeholder="Enter your Middle name"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1E1E1E] mb-1">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full appearance-none px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm text-[#1E1E1E] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0 pr-10"
                    >
                      <option value="" disabled>
                        Select your gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                    </select>

                    {/* Custom dropdown arrow */}
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]">
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <h2 className="font-bold text-3xl">Personal data</h2>
                <p>Specify exactly as in your identity card.</p>
              </div>

              <div>
                <label className="block font-bold text-[#1E1E1E] mb-1">
                  Branch
                </label>
                <div className="relative">
                  <select
                    required
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full appearance-none px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm text-[#1E1E1E] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0 pr-10"
                  >
                    <option value="" disabled>
                      Select your branch
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1E1E1E] mb-1">
                  Current year
                </label>
                <div className="relative">
                  <select
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full appearance-none px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm text-[#1E1E1E] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0 pr-10"
                  >
                    <option value="" disabled>
                      Eg:- FY/SY/TY/4th Year
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1E1E1E] mb-1">
                  Roll No.
                </label>
                <input
                  type="text"
                  required
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-3xl rounded-xl text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                  placeholder="Eg:- B21016"
                />
              </div>
            </div>
          </Step>

          <Step>
            <h2>How about an input?</h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name?"
            />
          </Step>
          <Step>
            <h2>Final Step</h2>
            <p>You made it!</p>
          </Step>
        </Stepper>
      </form>
    </div>
  );
};

export default page;
