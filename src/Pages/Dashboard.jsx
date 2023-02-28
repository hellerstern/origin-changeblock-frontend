import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../Components/Dashboard/DashboardNavbar";
import Heading from "../Components/Dashboard/Heading";
import Main from "../Components/Dashboard/Main";
import Sidebar from "../Components/Dashboard/Sidebar";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AnalysisHistory from "../Components/Dashboard/AnalysisHistory";
import { RotatingLines } from "react-loader-spinner";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [selectedTab, setSelectedTab] = useState("WhatIf");
    const [selectedSidebarTab, setSelectedSidebarTab] = useState("Dashboard");
    const navigate = useNavigate();
    const headingDesc = {
        WhatIf: {
            heading: "Welcome to our What-If analysis data tool",
            desc: "Our analysis tool makes it easy to conduct What-If scenario planning as fast as possible and also forecast the impact of any proposed change to your project and program portfolios across costs, resources, benefits, value, timeline and more.",
        },
        InformationExtraction: {
            heading: "Welcome to our Information Extraction tool",
            desc: "Unlock the Full Potential of Your Projects with InsightX's Advanced Information Extraction Feature.",
        },
        EntityExtraction: {
            heading: "Welcome to our Aspect Based Sentiment tool",
            desc: "Uncover Emotional Landscape of Climate Projects with InsightX's Aspect-Based Sentiment Analysis",
        },
        Summarization: {
            heading: "Welcome to our Summarization tool",
            desc: "Unleash the Power of Project Data: InsightX's Summarization Feature Streamlines Information for Better Decisions",
        },
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                navigate("/login");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    if (!user) {
        return (
            <div
                style={{
                    display: "block",
                    position: "fixed",
                    zIndex: "20",
                    top: "calc(50% - 60px)",
                    right: "calc(50% - 60px)",
                }}
            >
                <RotatingLines
                    strokeColor="#4fa94d"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="60"
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div style={{ background: "#F4F5FB" }}>
            <DashboardNavbar user={user} />
            {(() => {
                if (selectedSidebarTab === "Dashboard") {
                    return (
                        <div className="d-flex">
                            <div className="col-3 ">
                                <Sidebar
                                    selectedSidebarTab={selectedSidebarTab}
                                    setSelectedSidebarTab={
                                        setSelectedSidebarTab
                                    }
                                />
                            </div>

                            <div className="col-9">
                                <div className="container py-3">
                                    <Heading
                                        selectedTab={selectedTab}
                                        headingDesc={headingDesc}
                                    />
                                    <Main
                                        selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                } else if (selectedSidebarTab === "AnalysisHistory") {
                    return (
                        <div className="d-flex">
                            <div className="col-3 ">
                                <Sidebar
                                    selectedSidebarTab={selectedSidebarTab}
                                    setSelectedSidebarTab={
                                        setSelectedSidebarTab
                                    }
                                />
                            </div>

                            <div
                                className="col-9"
                                style={{ minHeight: "100vh" }}
                            >
                                <div className="container py-3">
                                    <AnalysisHistory />
                                </div>
                            </div>
                        </div>
                    );
                } else if (selectedSidebarTab === "Subscription") {
                    return (
                        <div className="d-flex">
                            <div className="col-3 ">
                                <Sidebar
                                    selectedSidebarTab={selectedSidebarTab}
                                    setSelectedSidebarTab={
                                        setSelectedSidebarTab
                                    }
                                />
                            </div>

                            {/* <div className="col-9">
                                <div className="container py-3">
                                    <Heading />
                                    <Main />
                                </div>
                            </div> */}
                        </div>
                    );
                } else if (selectedSidebarTab === "HelpAndSupport") {
                    return (
                        <div className="d-flex">
                            <div className="col-3 ">
                                <Sidebar
                                    selectedSidebarTab={selectedSidebarTab}
                                    setSelectedSidebarTab={
                                        setSelectedSidebarTab
                                    }
                                />
                            </div>

                            {/* <div className="col-9">
                                <div className="container py-3">
                                    <Heading />
                                    <Main />
                                </div>
                            </div> */}
                        </div>
                    );
                }
            })()}
        </div>
    );
};

export default Dashboard;
