import { CheckCircle2 } from "lucide-react";

function SuggestionList({ suggestions, password }) {
  if (!password) return null;

  return (
    <div className="suggestion-card">
      <h3>Security Recommendations</h3>

      <div className="suggestion-list">
        {suggestions.map((item, index) => (
          <div key={index} className="suggestion-item">
            <CheckCircle2 size={20} color="#22c55e" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestionList;