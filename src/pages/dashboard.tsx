import { CircleChevronRight } from "lucide-react";
import { LayoutContainer } from "../components/layout";
import { events } from "../utils/data";
import EventsTable from "../components/events-table";

export default function Dashboard() {
  return (
    <LayoutContainer>
      <div className="dashboard-container">
        <h2 className="greetings">Welcome back, Odetola!</h2>
        <span>Track the current event updates</span>
        <section className="main-section">
          <div className="body">
            <div className="tiles">
              <div className="tile">
                <div className="tile-header">
                  <h3>
                    <span>4,449</span>
                    <span>Completed Events</span>
                  </h3>
                </div>
                <button>
                  <span>Explore</span>
                  <CircleChevronRight size={36} />
                </button>
              </div>
              <div className="tile">
                <div className="tile-header">
                  <h3>
                    <span>23,495</span>
                    <span>Premium Subscribers</span>
                  </h3>
                </div>
                <button>
                  <span>Explore</span>
                  <CircleChevronRight size={36} />
                </button>
              </div>
              <div className="tile">
                <div className="tile-header">
                  <h3>
                    <span>24</span>
                    <span>Upcoming Events</span>
                  </h3>
                </div>
                <button>
                  <span>Explore</span>
                  <CircleChevronRight size={36} />
                </button>
              </div>
            </div>
            <section className="events">
              <h2>Latest Events</h2>
              <div className="events-latest">
                <EventsTable events={events} />
              </div>
            </section>
          </div>
          <aside className="data-aside">
            <div className="top">
              <h3>Events Overview</h3>
              <span className="subtitle">Last 60 days</span>
            </div>
            <div className="stat">
              <div className="stat-1">
                12.324 <span>+12.5%</span>
              </div>
              <div className="stat-2">
                +250% <span>vs prev. 60 days</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-1">
                9.230 <span className="error">-4.4%</span>
              </div>
              <div className="stat-2 error">
                +250% <span>vs prev. 60 days</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-1">
                12.324 <span>+12.5%</span>
              </div>
              <div className="stat-2">
                +250% <span>vs prev. 60 days</span>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </LayoutContainer>
  );
}
