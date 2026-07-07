import { useRef, useState } from "react";

export default function Accordion({ items, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const panelRefs = useRef([]);

  return (
    <div className="faq-accordion-container">
      {items.map((item, index) => {
        const isActive = openIndex === index;
        return (
          <div className={`accordion-item${isActive ? " active" : ""}`} key={item.q}>
            <button
              className="accordion-header"
              aria-expanded={isActive}
              onClick={() => setOpenIndex(isActive ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="accordion-icon" aria-hidden="true">
                ▼
              </span>
            </button>
            <div
              className="accordion-panel"
              ref={(el) => (panelRefs.current[index] = el)}
              style={{ maxHeight: isActive ? panelRefs.current[index]?.scrollHeight ?? 1000 : undefined }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
