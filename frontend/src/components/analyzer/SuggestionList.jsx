import { CheckCircle2 } from "lucide-react";

import SectionCard from "../common/SectionCard";

function SuggestionList({ suggestions, password }) {

  if (!password) return null;

  return (

    <SectionCard title="Security Recommendations">

      <div className="suggestion-list">

        {suggestions.map((item, index) => (

          <div
            key={index}
            className="suggestion-item"
          >

            <CheckCircle2
              size={20}
              color="#22c55e"
            />

            <span>{item}</span>

          </div>

        ))}

      </div>

    </SectionCard>

  );
}

export default SuggestionList;