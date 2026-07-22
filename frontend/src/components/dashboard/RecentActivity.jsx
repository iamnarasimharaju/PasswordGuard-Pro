import { useDashboard } from "../../hooks/useDashboard";

function RecentActivity() {

  const { stats } = useDashboard();

  return (

    <div className="chart-card">

      <h2>Recent Activity</h2>

      {

        stats.recentActivity.length === 0 ?

        (

          <p className="empty-text">

            No recent activity.

          </p>

        )

        :

        (

          <div className="activity-list">

            {

              stats.recentActivity.map((item,index)=>(

                <div
                  key={index}
                  className="activity-item"
                >

                  <div>

                    <strong>{item.type}</strong>

                    <p>Score : {item.score}</p>

                  </div>

                  <span>{item.time}</span>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default RecentActivity;