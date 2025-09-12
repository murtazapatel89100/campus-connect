"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Buttons";
import {
  Bell,
  User,
  ChevronDown,
  Camera,
  Calendar,
  Clock,
  Users,
  MapPin,
  FileText,
  Settings,
  Home,
  Plus,
  CalendarDays,
  Globe,
  Save,
  Upload,
  GraduationCap,
  Music,
  Trophy,
  UserCheck,
  ThumbsUp,
  Mountain,
} from "lucide-react";

interface FacultyMember {
  name: string;
  tasks: string;
}

interface Participant {
  name: string;
  tasks: string;
}

interface EventType {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EventCreationForm: React.FC = () => {
  const [eventType, setEventType] = useState<string>("Academic");
  const [eventTitle, setEventTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("30-02-2025");
  const [startTime, setStartTime] = useState<string>("14:00");
  const [endDate, setEndDate] = useState<string>("30-02-2025");
  const [endTime, setEndTime] = useState<string>("16:00");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("public");
  const [registrationRequired, setRegistrationRequired] =
    useState<boolean>(true);
  const [approvalRequired, setApprovalRequired] = useState<boolean>(false);
  const [attendanceCapacity, setAttendanceCapacity] = useState<string>("");
  const [sendReminders, setSendReminders] = useState<boolean>(true);

  const [faculty, setFaculty] = useState<FacultyMember[]>([
    { name: "", tasks: "" },
    { name: "", tasks: "" },
    { name: "", tasks: "" },
    { name: "", tasks: "" },
    { name: "", tasks: "" },
  ]);

  const [participants, setParticipants] = useState<Participant[]>([
    { name: "", tasks: "" },
    { name: "", tasks: "" },
    { name: "", tasks: "" },
    { name: "", tasks: "" },
    { name: "", tasks: "" },
  ]);

  const handleFacultyChange = (
    index: number,
    field: keyof FacultyMember,
    value: string,
  ): void => {
    const updated = [...faculty];
    updated[index][field] = value;
    setFaculty(updated);
  };

  const handleParticipantsChange = (
    index: number,
    field: keyof Participant,
    value: string,
  ): void => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const eventTypes: EventType[] = [
    { id: "Academic", label: "Academic", icon: GraduationCap },
    { id: "Cultural", label: "Cultural", icon: Music },
    { id: "Sports", label: "Sports", icon: Trophy },
    { id: "Club", label: "Club", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C4D0DE] via-[#ACB9CA] to-[#94A1B6] p-0 md:p-4 lg:p-12">
      <div className="bg-white rounded-3xl p-4 md:p-6 border-2 border-black max-w-full mx-0 md:mx-4 lg:mx-8 shadow-lg">
        <div className="bg-[#798CAF] rounded-3xl px-4 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-6">
            <div className="flex items-center space-x-2 text-black-600 hover:text-gray-800 cursor-pointer">
              <Home className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Home</span>
            </div>
            <div className="flex items-center space-x-2 bg-black-700 text-black px-3 md:px-4 py-2 rounded-lg">
              <Plus className="w-4 h-4" />
              <span className="font-medium text-sm md:text-base">
                Event Creation
              </span>
            </div>
            <div className="flex items-center space-x-2 text-black-600 hover:text-gray-800 cursor-pointer">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">My Events</span>
            </div>
            <div className="flex items-center space-x-2 text-balck-600 hover:text-gray-800 cursor-pointer">
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">All Events</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-gray-700 text-sm md:text-base">XXXXX</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-black-800">
              Create New Event
            </h1>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
              <Button
                variant="outline"
                className="px-4 md:px-6 py-2 bg-[#DFDFDF] text-gray-700 w-full sm:w-auto"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button className="px-4 md:px-6 py-2 bg-[#263B60] text-white hover:bg-white-900 w-full sm:w-auto">
                Publish Event
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-5 space-y-6">
              <div className="bg-[#263B60] rounded-3xl h-48 md:h-65 flex flex-col items-center justify-center text-white relative cursor-pointer hover:bg-[#263B60]-600 transition-colors">
                <Mountain className="w-12 h-12 md:w-16 md:h-16 mb-4" />
                <span className="text-base md:text-lg font-medium">
                  Upload Event Cover
                </span>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 rounded-full p-2">
                  <Camera className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 md:p-5 border-2 border-black">
                <div className="bg-white rounded-3xl p-4 md:p-6 border-2 border-[#E6E1E1] mb-6 mt-3">
                  <h3 className="text-3xl font-semibold text-black font-albert-sans mb-4">
                    Faculty
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm font-medium text-black font-albert-sans">
                      <span>Name</span>
                      <span>Tasks</span>
                    </div>
                    <div className="max-h-48 md:max-h-64 overflow-y-auto space-y-3">
                      {faculty.map((f, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4"
                        >
                          <Input
                            type="text"
                            value={f.name}
                            onChange={(e) =>
                              handleFacultyChange(i, "name", e.target.value)
                            }
                            className="border-[#263B60] rounded-md text-sm"
                            placeholder="Enter name"
                          />
                          <Input
                            type="text"
                            value={f.tasks}
                            onChange={(e) =>
                              handleFacultyChange(i, "tasks", e.target.value)
                            }
                            className="border-[#263B60] rounded-md text-sm"
                            placeholder="Enter tasks"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-4 md:p-6 border-2 border-[#E6E1E1] mb-3">
                  <h3 className="text-lg font-semibold mb-4 text-black font-albert-sans">
                    Participants
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm font-medium text-black font-albert-sans">
                      <span>Name</span>
                      <span>Tasks</span>
                    </div>
                    <div className="max-h-48 md:max-h-64 overflow-y-auto space-y-3">
                      {participants.map((p, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4"
                        >
                          <Input
                            type="text"
                            value={p.name}
                            onChange={(e) =>
                              handleParticipantsChange(
                                i,
                                "name",
                                e.target.value,
                              )
                            }
                            className="border-[#263B60] rounded-md text-sm"
                            placeholder="Enter name"
                          />
                          <Input
                            type="text"
                            value={p.tasks}
                            onChange={(e) =>
                              handleParticipantsChange(
                                i,
                                "tasks",
                                e.target.value,
                              )
                            }
                            className="border-[#263B60] rounded-md text-sm"
                            placeholder="Enter tasks"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Event Visibility */}
              <div className="bg-white rounded-3xl p-4 md:p-6 border-2 border-black">
                <h3 className="text-3xl font-albert-sans font-semibold mb-4 text-black-800">
                  Event Visibility
                </h3>
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="public"
                      checked={visibility === "public"}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-black-800">Public</div>
                      <div className="text-sm text-gray-600">
                        Visible to All Student and Faculty
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="department"
                      checked={visibility === "department"}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">
                        Department Only
                      </div>
                      <div className="text-sm text-gray-600">
                        Only Visible to your Department
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="invite"
                      checked={visibility === "invite"}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">
                        Invite Only
                      </div>
                      <div className="text-sm text-gray-600">
                        Only Visible to those you invite
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="xl:col-span-7 space-y-6">
              {/* Event Type */}
              <div className="bg-white rounded-3xl p-4 md:p-6 border-2 border-black ">
                <h3 className="text-3xl font-semibold mb-4 text-black-800 font-albert-sans">
                  Event Type
                </h3>
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3">
                  {eventTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setEventType(type.id)}
                        className={`px-3 md:px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm md:text-base ${
                          eventType === type.id
                            ? "bg-[#263B60] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium font-albert-sans">
                          {type.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 mt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-black-800 font-albert-sans">
                    Event Title
                  </h3>
                  <Input
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Enter a descriptive title for your Event"
                    className="w-full h-[48px] border-black border-2 rounded-md bg-gray-300 text-xl font-medium px-4"
                  />
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 mt-6">
                  <h3 className="text-3xl font-semibold mb-4 text-black-800 font-albert-sans">
                    Date And Time
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-2 font-albert-sans">
                        Start
                      </label>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <div className="relative flex-1">
                          <Input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border-[#263B60] border-2 h-[48px] rounded-md pr-10"
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#263B60]" />
                        </div>
                        <div className="relative sm:w-24">
                          <Input
                            type="text"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="border-[#263B60] border-2 h-[48px] rounded-md pr-10"
                          />
                          <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#263B60]" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-md font-albert-sans font-medium text-gray-700 mb-2">
                        End
                      </label>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <div className="relative flex-1">
                          <Input
                            type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border-[#263B60] border-2 h-[48px] rounded-md pr-10"
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#263B60]" />
                        </div>
                        <div className="relative sm:w-24">
                          <Input
                            type="text"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="border-[#263B60] border-2 h-[48px] rounded-md pr-10"
                          />
                          <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#263B60]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 mt-6">
                  <h3 className="text-3xl font-semibold mb-4 text-black-800">
                    Location
                  </h3>
                  <textarea
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Building Name ,Room No."
                    className="w-full bg-gray-300 h-[84px] border-black border-2 rounded-md p-3 resize-none focus:ring-2 focus:ring-[#263B60] focus:border-transparent text-md font-albert-sans font-semibold"
                  />
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 mt-6">
                  <h3 className="text-3xl font-semibold mb-4 text-black font-albert-sans">
                    Description
                  </h3>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your Event, its purpose, what attendees can expect"
                    rows={4}
                    className="w-full bg-gray-300 border-2 h-[240px] border-black rounded-md p-3 resize-none focus:ring-2 focus:ring-[#263B60] focus:border-transparent text-md font-albert-sans font-semibold"
                  />
                </div>
              </div>

              <div className="bg-white  rounded-3xl p-4 md:p-6 border-2 border-black">
                <h3 className="text-3xl font-semibold mb-4 text-black-800 font-albert-sans">
                  Additional Options
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <UserCheck className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800">
                        Registration Required
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={registrationRequired}
                        onChange={(e) =>
                          setRegistrationRequired(e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ThumbsUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800">
                        Approval Required
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={approvalRequired}
                        onChange={(e) => setApprovalRequired(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800">
                        Attendance Capacity
                      </span>
                    </div>
                    <Input
                      type="text"
                      value={attendanceCapacity}
                      onChange={(e) => setAttendanceCapacity(e.target.value)}
                      placeholder="Unlimited"
                      className="w-24 md:w-32 border-gray-300 rounded-md text-center text-sm"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800">
                        Send Reminders
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sendReminders}
                        onChange={(e) => setSendReminders(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <span>Visit our Blog :</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="cursor-pointer hover:text-gray-800">
              Help & Support
            </span>
            <span className="cursor-pointer hover:text-gray-800">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-gray-800">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;
