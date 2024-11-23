'use client'
import { evaluate } from 'mathjs';
import { useState, useRef, useEffect } from 'react'
export default function Home(){
    const [displayed, setDisplayed] = useState<string>("")
    const buttonValues = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '+', '-', '/', '*', '='
    ];
  return (
      <div className={`w-full h-screen bg-gradient-to-br from-cyan-700 to-emerald-400 flex flex-row pt-14 justify-center`}>
          <div className={`backdrop-blur bg-gray-800  w-1/2 h-auto bg-opacity-20 max-h-fit p-3 justify-center max-w-fit flex flex-col space-y-2 rounded-xl`}>
              <p className={`bg-opacity-50 p-5 bg-gray-900 font-bold tex-3xl rounded-lg  shadow-sm shadow-black`}>
                  {displayed}
              </p>
              <div className={`grid-cols-3 grid gap-2 max-w-fit`}>
                  {buttonValues.map((value) => (
                      <button
                          key={value}
                          onClick={(e) => {
                              if (value === "=") {
                                  setDisplayed(evaluate(displayed)); // Evaluate the expression for the "=" button
                              } else {
                                  setDisplayed((prevDisplayed) => prevDisplayed + value); // Append number or operator
                              }
                          }}
                          className="bg-gray-900 bg-opacity-50 p-2 rounded-md h-20 aspect-square text-white font-bold hover:bg-gray-700 hover:bg-opacity-50 transition-all shadow-sm shadow-black"
                      >
                          {value}
                      </button>
                  ))}
              </div>
          </div>
      </div>
  );
}