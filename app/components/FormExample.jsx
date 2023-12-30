"use client";

import { useState } from "react";
import { toast } from "sonner";
import Slider from "rc-slider";
import "./formExample.css";
import { ChevronDown, Loader } from "lucide-react";

const FormExample = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@mail.com",
    department: "Sales",
    askTitle: "Details for new billing",
    askDescription:
      "Need files and brief information about billing occured in last week",
    toDepartment: "Marketing",
    date: new Date().toISOString().split("T")[0],
    priority: "Low",
  });

  const marks = {
    0: <p className="text-[10px]">1</p>,
    1: <p className="text-[10px]">2</p>,
    2: <p className="text-[10px]">3</p>,
  };

  const options = ["Sales", "Marketing", "Research & Development", "Accounts"];

  return (
    <div className="w-full h-full">
      <div className="w-11/12 mx-auto mb-8">
        <Slider
          min={0}
          max={2}
          startPoint={0}
          marks={marks}
          value={step}
          defaultValue={0}
          disabled
        />
      </div>

      <div className="w-full h-full">
        <form className="w-11/12 mx-auto">
          {step === 0 && (
            <div>
              <h2 className="text-lg">
                <span className="font-bold">Section 1</span>: Basic Information
              </h2>

              <div className="my-2">
                <label className="text-sm font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>

              <div className="my-2">
                <label className="text-sm font-semibold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>

              <div className="my-2 relative">
                <label className="text-sm font-semibold">
                  Department <span className="text-red-600">*</span>
                </label>
                <select
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  value={formData.department}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      department: e.target.value,
                    });
                  }}
                >
                  {options.map((option, i) => {
                    return <option key={i}>{option}</option>;
                  })}
                </select>

                <ChevronDown className="absolute text-sm top-1/2 right-3 text-background" />
              </div>

              <div className="w-full flex justify-end my-2">
                <button
                  type="button"
                  className="bg-secondary px-2 py-1 rounded-md"
                  onClick={() => {
                    if (formData.name && formData.email && formData.department)
                      setStep((prevStep) => prevStep + 1);
                    else toast.error("Please fill all required inputs");
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-lg">
                <span className="font-bold">Section 2</span>: Detailed
                Description
              </h2>

              <div className="my-2">
                <label className="text-sm font-semibold">
                  #ask Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Give appropriate title"
                  required
                  value={formData.askTitle}
                  onChange={(e) => {
                    setFormData({ ...formData, askTitle: e.target.value });
                  }}
                />
              </div>

              <div className="my-2">
                <label className="text-sm font-semibold">
                  #ask Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  placeholder="Give appropriate description"
                  required
                  value={formData.askDescription}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      askDescription: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="my-2 relative">
                <label className="text-sm font-semibold">
                  To Department <span className="text-red-600">*</span>
                </label>
                <select
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  value={formData.toDepartment}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      toDepartment: e.target.value,
                    });
                  }}
                >
                  {options
                    .filter((option) => option !== formData.department)
                    .map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                </select>

                <ChevronDown className="absolute text-sm top-1/2 right-3 text-background" />
              </div>

              <div className="w-full flex justify-between my-2">
                <button
                  type="button"
                  className="bg-secondary px-2 py-1 rounded-md"
                  onClick={() => setStep((prevStep) => prevStep - 1)}
                >
                  Prev
                </button>

                <button
                  type="button"
                  className="bg-secondary px-2 py-1 rounded-md"
                  onClick={() => {
                    if (
                      formData.askTitle &&
                      formData.askDescription &&
                      formData.toDepartment
                    )
                      setStep((prevStep) => prevStep + 1);
                    else toast.error("Please fill all required inputs");
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg">
                <span className="font-bold">Section 1</span>: Basic Information
              </h2>

              <div className="my-2">
                <label className="text-sm font-semibold">
                  Deadline <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  defaultValue={Date()}
                  value={formData.date}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      date: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="my-2 relative">
                <label className="text-sm font-semibold">
                  Priority <span className="text-red-600">*</span>
                </label>
                <select
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  value={formData.priority}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      priority: e.target.value,
                    });
                  }}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>

                <ChevronDown className="absolute text-sm top-1/2 right-3 text-background" />
              </div>

              <div className="w-full flex justify-between my-2">
                <button
                  type="button"
                  className="bg-secondary px-2 py-1 rounded-md"
                  onClick={() => setStep((prevStep) => prevStep - 1)}
                >
                  Prev
                </button>

                <button
                  type="button"
                  disabled={loading}
                  className={`px-2 py-1 rounded-md ${
                    loading ? "bg-slate-600" : "bg-secondary "
                  }`}
                  onClick={() => {
                    if (formData.date && formData.priority) {
                      setLoading(true);

                      setTimeout(() => {
                        toast(
                          <div className="text-xs leading-tight">
                            <h4 className="font-bold">
                              Your #ask successfully raised
                            </h4>
                            <div>
                              <table className="border-collapse">
                                <tbody>
                                  {Object.entries(formData).map(
                                    ([key, value]) => {
                                      function capitalizeString(str) {
                                        return str
                                          .replace(/([A-Z])/g, " $1")
                                          .replace(/^./, str[0].toUpperCase())
                                          .trim();
                                      }

                                      return (
                                        <tr key={key}>
                                          <td className="w-1/3">
                                            {capitalizeString(key)}:
                                          </td>
                                          <td className="w-full font-bold">
                                            {value}
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        );

                        setLoading(false);
                        setStep(0);
                      }, 500);
                    } else toast.error("Please fill all required inputs");
                  }}
                >
                  {loading ? <Loader className="animate-spin" /> : "Submit"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormExample;
