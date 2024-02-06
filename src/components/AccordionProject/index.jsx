import React, { useState } from "react";
import accordionData from "./accordionData";
import "./index.css";

export default function AccordionProject() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiple];
    const findIndexOfId = copyMultiple.indexOf(id);

    if (findIndexOfId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfId, 1);
    }
    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <h1 className="header">Accordion Project 1</h1>

      <div>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection ? "View Single" : "View All"}
        </button>
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {enableMultiSelection
                    ? multiple.includes(dataItem.id)
                      ? "-"
                      : "+"
                    : selected === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {(enableMultiSelection && multiple.includes(dataItem.id)) ||
              (!enableMultiSelection && selected === dataItem.id) ? (
                <div className="answer">
                  <p>{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}








////index.jsx

