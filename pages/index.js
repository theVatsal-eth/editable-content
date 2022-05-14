import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

export default function Home() {
  const [format, setFormat] = useState("");
  const [align, setAlign] = useState("");
  const ref = useRef();

  const makeBold = () => {
    ref.current.classList.toggle("font-bold");
  };
  const makeU = () => {
    ref.current.classList.toggle("underline");
  };
  const makeI = () => {
    ref.current.classList.toggle("italic");
  };
  const makeS = () => {
    ref.current.classList.toggle("line-through");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <Head>
        <title>Editable Content</title>
      </Head>
        <div
          className={`${format} ${align} text-xl outline-none border-2 rounded w-1/2 h-min border-gray-500 `}
          contentEditable="true"
          suppressContentEditableWarning="true"
          ref={ref}
        >
          Write Something
        </div>

      <div className="flex justify-evenly gap-5 w-1/2">

        {/* Text-Alignment */}
        <select
          className="bg-transparent p-2 outline-none border border-gray-400"
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
          className="bg-transparent p-2 outline-none border border-gray-400"
          onChange={(e) => {
            setFormat(e.target.value);
            console.log(format);
          }}
        >
          <option className="text-base text-gray-600" value="" disabled>
            --Select a Text Type--
          </option>
          <option className="text-base text-black" value="text-base">
            Paragraph
          </option>
          <option className="text-lg text-black" value="text-lg font-medium">
            Heading 3
          </option>
          <option className="text-xl text-black" value="text-xl font-semibold">
            Heading 2
          </option>
          <option className="text-2xl text-black" value="text-2xl font-bold">
            Heading 1
          </option>
        </select>

      </div>

      {/* Font Style */}
      <div className="border border-gray-600 p-5 flex justify-evenly gap-5 w-1/2">
        <button onClick={() => makeBold()} className="p-2 border rounded-md">
          Bold
        </button>
        <button onClick={() => makeU()} className="p-2 border rounded-md">
          Underline
        </button>
        <button onClick={() => makeI()} className="p-2 border rounded-md">
          Italic
        </button>
        <button onClick={() => makeS()} className="p-2 border rounded-md">
          Strikethrough
        </button>
      </div>
    </div>
  );
}
