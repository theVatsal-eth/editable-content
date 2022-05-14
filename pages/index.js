import Head from "next/head";
import { useRef } from "react";
import { useState } from "react";

export default function Home() {
  const [format, setFormat] = useState("text-base");
  const [align, setAlign] = useState("text-center");
  const ref = useRef();

  const makeBold = (e) => {
    e.target.classList.toggle("highlight");
    ref.current.classList.toggle("font-bold");
  };
  const makeU = (e) => {
    e.target.classList.toggle("highlight");
    ref.current.classList.toggle("underline");
  };
  const makeI = (e) => {
    e.target.classList.toggle("highlight");
    ref.current.classList.toggle("italic");
  };
  const makeS = (e) => {
    e.target.classList.toggle("highlight");
    ref.current.classList.toggle("line-through");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <Head>
        <title>Text Editor</title>
      </Head>

    <div className="flex flex-col items-center absolute top-20 ">
      <h1 className="text-6xl font-bold">Text Editor</h1>
      <span className="text-2xl font-semibold mt-3">Edit your text here 👇</span>
    </div>
    
      <div
        className={`${format} ${align} text-white px-10 py-5 text-base outline-none border-2 rounded lg:w-1/3 w-1/2 mb-10 h-min border-blue-300 focus:shadow-inner focus:shadow-gray-300`}
        contentEditable="true"
        suppressContentEditableWarning="true"
        ref={ref}
      >
        Edit Text Here...
      </div>

      {/* Formatting Options */}
      <span className="text-xl font-extrabold">Formatting Options ✅</span>
      <div className="flex flex-col justify-evenly gap-5 w-1/2 lg:flex-row lg:w-1/4">
        {/* Text-Alignment */}
        <select
          className="bg-transparent p-2 outline-none border border-blue-300"
          onChange={(e) => {
            console.log(e.target.value);
            setAlign(e.target.value);
          }}
        >
          <option className="text-base text-gray-600" value="" disabled>
            --Select an Alignment--
          </option>
          <option className="text-base text-black" value="text-center">
            Center
          </option>
          <option className="text-base text-black" value="text-left">
            Left
          </option>
          <option className="text-base text-black" value="text-right">
            Right
          </option>
          <option className="text-base text-black" value="text-justify">
            Justify
          </option>
        </select>

        {/* Text Size */}
        <select
          className="bg-transparent p-2 outline-none border border-blue-300"
          onChange={(e) => {
            setFormat(e.target.value);
          }}
        >
          <option className="text-base text-gray-600" value="" disabled>
            --Select a Text Type--
          </option>
          <option className="text-base text-black" value="text-base">
            Paragraph
          </option>
          <option className="text-lg text-black" value="text-lg">
            Heading 3
          </option>
          <option className="text-xl text-black" value="text-2xl">
            Heading 2
          </option>
          <option className="text-2xl text-black" value="text-4xl">
            Heading 1
          </option>
        </select>
      </div>

      {/* Font Style */}
      <div className=" flex flex-col items-center justify-evenly gap-5 w-1/2 lg:flex-row lg:w-1/4">
        <button
          onClick={(e) => makeBold(e)}
          className={`p-2 border border-blue-300 rounded-md sm:w-1/2`}
        >
          Bold
        </button>
        <button
          onClick={(e) => makeU(e)}
          className={`p-2 border border-blue-300 rounded-md sm:w-1/2`}
        >
          Underline
        </button>
        <button
          onClick={(e) => makeI(e)}
          className={`p-2 border border-blue-300 rounded-md sm:w-1/2`}
        >
          Italic
        </button>
        <button
          onClick={(e) => makeS(e)}
          className={`p-2 border border-blue-300 rounded-md sm:w-1/2`}
        >
          Strikethrough
        </button>
      </div>
    </div>
  );
}
// ${ref.current.classList.contains("italic") ? "bg-white text-black" : ""}
