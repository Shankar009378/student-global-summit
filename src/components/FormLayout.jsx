"use client";

import { useState, useRef } from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import { getNames } from "country-list";

const countries = getNames();
const dialCodes = CountryList.getAll();

export default function FormLayout() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({});
  const [eventType, setEventType] = useState("");

  // Handle input change
  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventType) {
      alert("Please select an event before submitting.");
      return;
    }

    // Read actual form values (captures autofill too)
    const formValues = new FormData(e.target);

    // Convert to JS object
    const data = Object.fromEntries(formValues.entries());

    // Add event type
    data.eventType = eventType;

    // Required fields
    const baseRequired = [
      "first-name",
      "last-name",
      "email",
      "dial-code",
      "phone",
      "country",
      "age",
      "street-address",
      "city",
      "region",
      "postal-code",
      "field-of-study",
      "institution-name",
      "year-of-passing",
    ];

    const startupRequired = [
      "project-title",
      "project-short",
      "project-detail",
      "role",
      "project-drive-link",
    ];

    // const requiredFields =
    //   eventType === "startup"
    //     ? [...baseRequired, ...startupRequired]
    //     : baseRequired;

    let requiredFields = baseRequired;

    if (eventType === "startup") {
      requiredFields = [
        ...baseRequired,
        ...startupRequired,
        "article-drive-link",
      ];
    }

    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === "") {
        alert(`Please fill the required field: ${field}`);
        return;
      }
    }

    if (!/^\d{10}$/.test(data["phone"])) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    if (!/^\d{6}$/.test(data["postal-code"])) {
      alert("Postal code must be exactly 6 digits.");
      return;
    }

    // Send to backend
    const fd = new FormData();
    fd.append("data", JSON.stringify(data));

    const res = await fetch("/api/register", {
      method: "POST",
      body: fd,
    });

    const response = await res.json();

    if (response.success) {
      // alert("You have successfully submitted the form!");
      setShowSuccess(true);

      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => setShowSuccess(false), 3000);

      e.target.reset();
    } else {
      alert("Something went wrong while submitting.");
    }
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center animate-fadeIn">
            {/* Checkmark Icon */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Success Text */}
            <h2 className="text-2xl font-bold text-green-600">
              Form Successfully Submitted!
            </h2>
            <p className="text-gray-700 mt-2">
              Thank you for registering. Stay connected with our community!
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-6 flex flex-col gap-4">
              {/* WHATSAPP COMMUNITY BUTTON */}
              <a
                href="https://whatsapp.com/channel/0029Vb6jMIq6buMDQ1E1nG1X"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md"
              >
                <img src="/whatsapp-icon.png" className="w-6 h-6" />
                Join WhatsApp Community
              </a>

              {/* INSTAGRAM BUTTON */}
              <a
                href="https://www.instagram.com/studentglobalsummit"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md"
              >
                <img src="/instagram-icon.png" className="w-6 h-6" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          {/* PROFILE HEADER */}
          <div className="border-b border-white pb-12">
            <h2 className="text-base/7 font-bold text-yellow-300 text-center">
              Profile
            </h2>
            <p className="mt-1 text-sm text-pink-600 text-center">
              Fill in your details to register for the event
            </p>
          </div>

          {/* PERSONAL INFORMATION */}
          <div className="border-b border-white pb-12">
            <h2 className="text-base/7 font-semibold text-yellow-300">
              Personal Information
            </h2>
            <p className="mt-1 text-sm/6 text-pink-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First Name */}
              <div className="sm:col-span-3">
                <label className="text-white text-sm">First name *</label>
                <input
                  name="first-name"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("first-name", e.target.value)}
                />
              </div>

              {/* Last Name */}
              <div className="sm:col-span-3">
                <label className="text-white text-sm">Last name *</label>
                <input
                  name="last-name"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("last-name", e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-4">
                <label className="text-white text-sm">Email *</label>
                <input
                  name="email"
                  type="email"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              {/* PHONE + DIAL CODE */}
              <div className="sm:col-span-2">
                <label className="text-white text-sm">Mobile Number *</label>
                <div className="mt-2 flex gap-3">
                  {/* DIAL CODE */}
                  <div className="relative w-48">
                    <select
                      name="dial-code"
                      className="w-full bg-white/5 text-white rounded-md py-1.5 pl-3 pr-8"
                      onChange={(e) => updateField("dial-code", e.target.value)}
                    >
                      {dialCodes.map((c, index) => (
                        <option
                          key={`${c.code}-${c.dial_code}-${index}`}
                          value={c.dial_code}
                        >
                          {c.flag} {c.dial_code} ({c.name})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* PHONE */}
                  <input
                    name="phone"
                    className="w-full bg-white/5 text-white rounded-md px-3 py-1.5"
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
              </div>

              {/* Country */}
              <div className="sm:col-span-3">
                <label className="text-white text-sm">Country *</label>
                <select
                  name="country"
                  className="mt-2 bg-white/5 text-white rounded-md w-full py-1.5 px-3"
                  onChange={(e) => updateField("country", e.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Age */}
              <div className="sm:col-span-1">
                <label className="text-white text-sm">Age *</label>
                <input
                  name="age"
                  type="number"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("age", e.target.value)}
                />
              </div>

              {/* Gender */}
              <div className="sm:col-span-2">
                <label className="text-white text-sm">Gender *</label>
                <select
                  name="gender"
                  className="mt-2 bg-white/5 text-white rounded-md w-full py-1.5 px-3"
                  onChange={(e) => updateField("gender", e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              {/* Street */}
              <div className="col-span-full">
                <label className="text-white text-sm">Street Address *</label>
                <input
                  name="street-address"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) =>
                    updateField("street-address", e.target.value)
                  }
                />
              </div>

              {/* City */}
              <div className="sm:col-span-2">
                <label className="text-white text-sm">City *</label>
                <input
                  name="city"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("city", e.target.value)}
                />
              </div>

              {/* State */}
              <div className="sm:col-span-2">
                <label className="text-white text-sm">State / Province *</label>
                <input
                  name="region"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("region", e.target.value)}
                />
              </div>

              {/* Postal Code */}
              <div className="sm:col-span-2">
                <label className="text-white text-sm">Postal Code *</label>
                <input
                  name="postal-code"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("postal-code", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* SCHOOLING */}
          <div className="border-b border-white pb-12">
            <h2 className="text-yellow-300 font-semibold">
              Schooling Information
            </h2>
            <p className="text-pink-600 text-sm mt-1">
              Provide your academic background.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="text-white text-sm">
                  Highest Qualification *
                </label>
                <select
                  name="highest-qualification"
                  className="mt-2 bg-white/5 text-white rounded-md w-full py-1.5 px-3"
                  onChange={(e) =>
                    updateField("highest-qualification", e.target.value)
                  }
                >
                  <option>High School / Secondary</option>
                  <option>Diploma</option>
                  <option>Bachelor’s Degree</option>
                  <option>Master’s Degree</option>
                  <option>Doctorate (PhD)</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="text-white text-sm">Field of Study *</label>
                <input
                  name="field-of-study"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) =>
                    updateField("field-of-study", e.target.value)
                  }
                />
              </div>

              <div className="col-span-full">
                <label className="text-white text-sm">Institution Name *</label>
                <input
                  name="institution-name"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) =>
                    updateField("institution-name", e.target.value)
                  }
                />
              </div>

              <div className="sm:col-span-3">
                <label className="text-white text-sm">Year of Passing *</label>
                <input
                  name="year-of-passing"
                  type="number"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) =>
                    updateField("year-of-passing", e.target.value)
                  }
                />
              </div>

              <div className="sm:col-span-3">
                <label className="text-white text-sm">Academic Status *</label>
                <select
                  name="academic-status"
                  className="mt-2 bg-white/5 text-white rounded-md w-full py-1.5 px-3"
                  onChange={(e) =>
                    updateField("academic-status", e.target.value)
                  }
                >
                  <option>Currently Studying</option>
                  <option>Graduated</option>
                  <option>Dropped Out</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="text-white text-sm">CGPA (Optional)</label>
                <input
                  name="gpa"
                  type="text"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("gpa", e.target.value)}
                />
              </div>

              <div className="sm:col-span-3">
                <label className="text-white text-sm">
                  Student ID (Optional)
                </label>
                <input
                  name="student-id"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  onChange={(e) => updateField("student-id", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* EVENT SELECTION */}
          <div className="border-b border-white pb-12">
            <h2 className="text-yellow-300 font-semibold">
              Choose Participation Event *
            </h2>
            <p className="text-pink-600 text-sm mt-1">
              Select the event you wish to participate in.
            </p>

            <div className="mt-6 space-y-4">
              <label className="flex items-center gap-3 text-white">
                <input
                  type="radio"
                  name="eventType"
                  value="startup"
                  onChange={() => setEventType("startup")}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Yuva Swadeshi Navachar Pardarshini (Startup & Tech Exhibition)
                </span>
              </label>

              <label className="flex items-center gap-3 text-white">
                <input
                  type="radio"
                  name="eventType"
                  value="policy"
                  onChange={() => setEventType("policy")}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Voices of Future – The Global Policy Nexus (Policy Debate)
                </span>
              </label>

              <label className="flex items-center gap-3 text-white">
                <input
                  type="radio"
                  name="eventType"
                  value="participant"
                  onChange={() => setEventType("participant")}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Delegate Pass – Exclusive Participant Access
                </span>
              </label>
            </div>
          </div>

          {eventType === "participant" && (
            <div className="border-b border-white pb-12 mt-6">
              <h2 className="text-yellow-300 font-semibold">
                Delegate Perks & Benefits
              </h2>

              <p className="text-pink-600 text-sm mt-2">
                Enjoy premium access designed exclusively for registered
                delegates.
              </p>

              <ul className="mt-5 space-y-3 text-white text-sm list-disc list-inside">
                <li>
                  Accommodation arrangements are not included as part of this
                  registration
                </li>
                <li>Access to all keynote sessions & expert talks</li>
                <li>Priority seating at flagship events</li>
                <li>Exclusive interaction lounge with speakers & mentors</li>
                <li>Participation E-certificate with premium badge</li>
                <li>Access to networking & collaboration opportunities</li>
              </ul>
            </div>
          )}

          {/* STALL INFORMATION — Only for Startup Exhibition */}
          {eventType === "startup" && (
            <div className="border-b border-white pb-12">
              <h2 className="text-yellow-300 font-semibold">
                Stall Information
              </h2>
              <p className="text-pink-600 text-sm mt-1">
                Provide details about your startup/product for stall allocation.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="text-white text-sm">
                    Startup / Project Name *
                  </label>
                  <input
                    name="stall-name"
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                    onChange={(e) => updateField("stall-name", e.target.value)}
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="text-white text-sm">
                    Stage of Development *
                  </label>
                  <select
                    name="development-stage"
                    className="mt-2 bg-white/5 text-white rounded-md w-full py-1.5 px-3"
                    onChange={(e) =>
                      updateField("development-stage", e.target.value)
                    }
                  >
                    <option>Prototype</option>
                    <option>MVP</option>
                    <option>Beta Product</option>
                    <option>Market Ready</option>
                    <option>Early Startup</option>
                  </select>
                </div>

                {/* <div className="col-span-full">
                  <label className="text-white text-sm">
                    Stall Requirements *
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-2 resize-none"
                    onChange={(e) =>
                      updateField("stall-requirements", e.target.value)
                    }
                  ></textarea>
                </div> */}

                <div className="sm:col-span-3">
                  <label className="text-white text-sm">
                    Team Members Present *
                  </label>
                  <input
                    name="stall-team"
                    type="number"
                    min="1"
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                    onChange={(e) => updateField("stall-team", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {eventType === "startup" && (
            <div className="border-b border-white pb-12 mt-6">
              <h2 className="text-yellow-300 font-semibold">
                Technical Article Submission (Summit Theme)
              </h2>

              <p className="text-pink-600 text-sm mt-2">
                Submit a technical article based on the theme of the summit –
                UUJCC (Utkal University Journal of Computing & Communications).
                Follow the guidelines provided in the Call for Papers document.
              </p>

              {/* DOWNLOAD BUTTON FOR CALL FOR PAPERS */}
              <a
                href="/callforpaper.pdf"
                download
                className="inline-block mt-4 px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-600 to-pink-700
             hover:from-yellow-300 hover:to-yellow-400 hover:text-black
             hover:shadow-[0_0_18px_rgba(255,230,0,0.6)]
             transition-all duration-300"
              >
                📄 Download Call for Papers
              </a>

              <p className="text-xs text-white mt-3">
                Prepare your article according to the instructions above. Upload
                your final document (PDF/DOCX) to Google Drive, set visibility
                to “Anyone with the link can view”, and paste the link below.
              </p>

              {/* GOOGLE DRIVE ARTICLE LINK */}
              <div className="mt-6">
                <label className="text-white text-sm">
                  Google Drive Link of Your Technical Article *
                </label>

                <input
                  name="article-drive-link"
                  type="url"
                  placeholder="Paste Google Drive link for technical article"
                  className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                  required
                  onChange={(e) =>
                    updateField("article-drive-link", e.target.value)
                  }
                />
              </div>
            </div>
          )}

          {/* PROJECT OVERVIEW */}
          {eventType === "startup" && (
            <div className="border-b border-white pb-12">
              <h2 className="text-yellow-300 font-semibold">
                Project Overview
              </h2>

              <p className="text-pink-600 text-sm">
                Share details about your project.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="text-white text-sm">Project Title *</label>

                  <input
                    name="project-title"
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                    onChange={(e) =>
                      updateField("project-title", e.target.value)
                    }
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="text-white text-sm">Category *</label>

                  <select
                    name="project-category"
                    className="mt-2 bg-white/5 text-white rounded-md w-full py-1.5 px-3"
                    onChange={(e) =>
                      updateField("project-category", e.target.value)
                    }
                  >
                    <option>AI / Machine Learning</option>

                    <option>Robotics</option>

                    <option>Software / Web Development</option>

                    <option>Research Project</option>

                    <option>Social / Community Initiative</option>

                    <option>Startup / Entrepreneurship</option>

                    <option>Other</option>
                  </select>
                </div>

                <div className="col-span-full">
                  <label className="text-white text-sm">
                    Short Description *
                  </label>

                  <input
                    name="project-short"
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                    onChange={(e) =>
                      updateField("project-short", e.target.value)
                    }
                  />
                </div>

                <div className="col-span-full">
                  <label className="text-white text-sm">
                    Detailed Overview *
                  </label>

                  <textarea
                    name="project-detail"
                    rows={5}
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-2 resize-none"
                    onChange={(e) =>
                      updateField("project-detail", e.target.value)
                    }
                  ></textarea>
                </div>

                {/* ROLE */}

                <div className="sm:col-span-4">
                  <label className="text-white text-sm">Your Role *</label>

                  <input
                    name="role"
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                    onChange={(e) => updateField("role", e.target.value)}
                  />
                </div>

                {/* GOOGLE DRIVE LINK UPLOAD */}
                <div className="col-span-full">
                  <label className="text-white text-sm">
                    Google Drive Link of Your Project Document *
                  </label>

                  <input
                    name="project-drive-link"
                    type="url"
                    placeholder="Paste your Google Drive link here"
                    className="mt-2 bg-white/5 text-white rounded-md w-full px-3 py-1.5"
                    onChange={(e) =>
                      updateField("project-drive-link", e.target.value)
                    }
                    required
                  />

                  <p className="text-xs text-white mt-2">
                    Upload your project PDF/DOCX to Google Drive → Right click →
                    Get Link → Set “Anyone with the link can view(Public Link)”
                    → Paste here.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-white font-semibold cursor-pointer px-4 py-2 rounded-md 
             hover:bg-white/10 hover:text-yellow-300 
             hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] 
             transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md text-white font-semibold cursor-pointer
             bg-gradient-to-r from-pink-600 to-pink-700
             hover:from-yellow-300 hover:to-yellow-400 hover:text-black
             hover:shadow-[0_0_18px_rgba(255,230,0,0.6)]
             transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
