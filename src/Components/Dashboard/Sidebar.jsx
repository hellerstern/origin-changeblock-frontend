import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Dashboard/Sidebar.module.css";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setSelectedSidebarTab, selectedSidebarTab }) => {
    return (
        <div className="">
            <div className={`text-center pe-4 py-3 bg-white ${styles.list}`}>
                <ul>
                    <li
                        className={
                            selectedSidebarTab === "Dashboard"
                                ? `${styles.listitemSelected}`
                                : `${styles.listitemUnselected}`
                        }
                        onClick={(e) => setSelectedSidebarTab("Dashboard")}
                    >
                        <img
                            src="images/sidebar-dashboard-icon.png"
                            className="me-3"
                            alt="dashboard"
                        />
                        Dashboard
                    </li>
                    <li
                        className={
                            selectedSidebarTab === "AnalysisHistory"
                                ? `${styles.listitemSelected}`
                                : `${styles.listitemUnselected}`
                        }
                        onClick={(e) =>
                            setSelectedSidebarTab("AnalysisHistory")
                        }
                    >
                        <img
                            src="images/sidebar-dashboard-icon.png"
                            className="me-3"
                            alt="dashboard"
                        />
                        Analysis History
                    </li>
                    <li
                        className={
                            selectedSidebarTab === "Subscription"
                                ? `${styles.listitemSelected}`
                                : `${styles.listitemUnselected}`
                        }
                        onClick={(e) => setSelectedSidebarTab("Subscription")}
                    >
                        <img
                            src="images/sidebar-dashboard-icon.png"
                            className="me-3"
                            alt="dashboard"
                        />
                        My Subscription
                    </li>
                    <li
                        className={
                            selectedSidebarTab === "HelpAndSupport"
                                ? `${styles.listitemSelected}`
                                : `${styles.listitemUnselected}`
                        }
                        onClick={(e) => setSelectedSidebarTab("HelpAndSupport")}
                    >
                        <img
                            src="images/sidebar-dashboard-icon.png"
                            className="me-3"
                            alt="dashboard"
                        />
                        Help & Support
                    </li>
                </ul>
                <span>
                    <FontAwesomeIcon icon={faCircleLeft} className="me-1" />
                    Close
                </span>
            </div>
        </div>
    );
};

export default Sidebar;
