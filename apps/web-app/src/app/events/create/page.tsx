"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Buttons";
const page = () => {
  const [faculty, setFaculty] = useState([{ name: "", designation: "" }]);
  const [participants, setParticipants] = useState([{ name: "", task: "" }]);

  const handleFacultyChange = (
    index: number,
    field: "name" | "designation",
    value: string
  ) => {
    const updated = [...faculty];
    updated[index][field] = value;
    setFaculty(updated);
  };

  const handleParticipantsChange = (
    index: number,
    field: "name" | "task",
    value: string
  ) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };
  return (
    <>
      <div className="w-full flex justify-between">
        <p>Create New Event</p>
        <button>ajuhfwhyfseu</button>
      </div>
      <div className="p-10 flex flex-col gap-y-5">
        <div className="w-full flex flex-col items-center justify-center p-10">
          <div className="w-full h-52 items-center justify-center flex bg-slate-700">
            No Image
          </div>
          <div>
            <p>Upload Image</p>
            <Input type="file" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          <div className="border-2 flex flex-col gap-y-2 border-black p-5">
            <div className="flex flex-col gap-y-3">
              <p className="w-full text-center">Faculty</p>
              <div className="border-2 max-h-64 overflow-y-auto border-black mb-4">
                {faculty.map((f, i) => (
                  <div key={i} className="grid grid-cols-2">
                    <div className="flex items-center justify-center pt-1 pb-3 px-5 flex-col">
                      <p>Name</p>
                      <Input
                        type="text"
                        value={f.name}
                        onChange={(e) =>
                          handleFacultyChange(i, "name", e.target.value)
                        }
                        className="border-black rounded-sm"
                      />
                    </div>
                    <div className="flex items-center justify-center pt-1 pb-3 px-5 flex-col">
                      <p>Designation</p>
                      <Input
                        type="text"
                        value={f.designation}
                        onChange={(e) =>
                          handleFacultyChange(i, "designation", e.target.value)
                        }
                        className="border-black rounded-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-1/2 mx-auto mb-4 col-span-2 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl w-full text-center"
                  onClick={() =>
                    setFaculty([...faculty, { name: "", designation: "" }])
                  }
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <p className="w-full text-center">Participants</p>
              <div className="border-2 max-h-64 overflow-y-auto border-black mb-4">
                {participants.map((p, i) => (
                  <div key={i} className="grid grid-cols-2">
                    <div className="flex items-center justify-center pt-1 pb-3 px-5 flex-col">
                      <p>Name</p>
                      <Input
                        type="text"
                        value={p.name}
                        onChange={(e) =>
                          handleParticipantsChange(i, "name", e.target.value)
                        }
                        className="border-black rounded-sm"
                      />
                    </div>
                    <div className="flex items-center justify-center pt-1 pb-3 px-5 flex-col">
                      <p>Task</p>
                      <Input
                        type="text"
                        value={p.task}
                        onChange={(e) =>
                          handleParticipantsChange(i, "task", e.target.value)
                        }
                        className="border-black rounded-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-1/2 mx-auto mb-4 col-span-2 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl w-full text-center"
                  onClick={() =>
                    setParticipants([...participants, { name: "", task: "" }])
                  }
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="border-2 flex flex-col gap-y-2 border-black p-5">
            <div className="flex flex-col gap-y-3">
              <p>Event Type</p>
              <div className="flex gap-x-3">
                <Button variant={"primary"} size={"lg"}>
                  Academic
                </Button>

                <Button variant={"primary"} size={"lg"}>
                  Academic
                </Button>

                <Button variant={"primary"} size={"lg"}>
                  Academic
                </Button>

                <Button variant={"primary"} size={"lg"}>
                  Academic
                </Button>
              </div>
            </div>

            <div>
              <p>Event Title</p>
              <Input
                type="text"
                placeholder="Enter a descriptive title for your Event"
                className="bg-pink-200"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <p>Date And Time</p>

              <div className="flex justify-around">
                <div className="flex flex-col">
                  <p>Start</p>
                  <div>
                    <Input type="datetime-local" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <p>End</p>
                  <div>
                    <Input type="datetime-local" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p>Location</p>
              <Input
                type="text"
                placeholder="Building Name ,Room No."
                className="bg-pink-400"
              />
            </div>

            <div>
              <p>Description</p>
              <Input
                type="text"
                placeholder="Describe your Event, its purpose, what attendees can expect."
                className="bg-pink-400"
              />
            </div>

            <div>
              <p>Blog</p>
              <Input
                type="text"
                placeholder="Enter URL of blog"
                className="bg-pink-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
