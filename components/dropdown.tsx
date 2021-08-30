import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ moves }) => {
  return (
    <main className="shadow row">
      <section className="shadow row">
        <div className="tabs">
          <div className="border-b tab">
            <div className="border-l-2 border-transparent relative">
              <input
                className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                type="checkbox"
                id="chck1"
              />
              <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label">
                <p className="text-2xl mt-2 mb-2 capitalize font-bold">
                  Moves:
                </p>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                  <FiChevronDown />
                </div>
              </header>
              <div className="tab-content">
                <ol className="pl-8 pr-8 pb-5 grid grid-cols-3 text-white">
                  {moves.map((move) => (
                    <li className="capitalize" key={move.name}>
                      {move.name}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dropdown;
