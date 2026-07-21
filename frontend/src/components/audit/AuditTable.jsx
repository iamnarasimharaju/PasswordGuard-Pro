import { useMemo, useState } from "react";
import ScoreBar from "../common/ScoreBar";

function AuditTable({ results }) {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("score");

  const filteredResults = useMemo(() => {

    let data = [...results];

    if (search.trim()) {
      data = data.filter((item) =>
        item.password
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    switch (sortBy) {

      case "score":
        data.sort((a, b) => b.score - a.score);
        break;

      case "entropy":
        data.sort((a, b) => b.entropy - a.entropy);
        break;

      case "risk":

        const order = {
          Critical: 4,
          High: 3,
          Medium: 2,
          Strong: 1,
        };

        data.sort(
          (a, b) => order[b.risk] - order[a.risk]
        );

        break;

      default:
        break;

    }

    return data;

  }, [results, search, sortBy]);

  if (!results.length) return null;

  return (

    <div className="audit-table-card">

      <div className="audit-toolbar">

        <input
          className="audit-search"
          placeholder="Search password..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="audit-sort"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="score">Sort by Score</option>
          <option value="entropy">Sort by Entropy</option>
          <option value="risk">Sort by Risk</option>
        </select>

      </div>

      <table className="audit-table">

        <thead>

          <tr>

            <th>Password</th>
            <th>Score</th>
            <th>Entropy</th>
            <th>GPU Crack Time</th>
            <th>Risk</th>
            <th>Duplicate</th>

          </tr>

        </thead>

        <tbody>

          {filteredResults.map((item, index) => (

            <tr key={index}>

              <td>{item.password}</td>

              <td>

              <ScoreBar
               score={item.score}
               />

              </td>

              <td>{item.entropy} bits</td>

              <td>{item.crackTime}</td>

              <td>

                <span
                  className={`risk ${item.risk.toLowerCase()}`}
                >
                  {item.risk}
                </span>

              </td>

              <td>

                {item.duplicate ? "Yes" : "No"}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AuditTable;