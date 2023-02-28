import styles from "../../styles/Dashboard/InformationExtraction.module.css";
import ChartBox from "./ChartBox";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import { RotatingLines } from "react-loader-spinner";

const InformationExtraction = ({
    informationFile,
    setInformationFile,
    handleInformationFile,
    informationText,
}) => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h3 className={`${styles.heading}`}>Information Extraction</h3>

                {/* <select>
                    <option value={"Download"}>Download</option>
                </select> */}
            </div>
            <p>Upload a document to get a information extracted </p>

            {!informationFile ? (
                <div className="row">
                    <div className="col-5 text-center">
                        <div className={styles.grey}>
                            <div className={styles.upload_wrapper}>
                                <img
                                    src="images/upload-button.png"
                                    alt="upload button icon"
                                />
                                <br />
                                <input
                                    type="file"
                                    multiple={false}
                                    accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    className="ps-3 mt-1"
                                    onChange={handleInformationFile}
                                />
                                {/* <button
                            className={`${styles.upload_btn}`}
                            onClick={() =>
                                setEntityFile("1")
                            }
                        >
                            Upload Document
                        </button> */}
                                {/* <br />
                        <label>or</label>
                        <br />
                        <label
                            className={styles.browse}
                        >
                            Browse Files
                        </label> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-7 text-center">
                        <div className={styles.info_box}>
                            <img
                                src="images/upload-doc.png"
                                alt="upload doc"
                                className="img-fluid"
                            />
                            <p>Upload document to get information text</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-5 text-center mt-4">
                        <div className={styles.cv_template}>
                            <img
                                alt="cv template"
                                src="images/cv-template.png"
                                className="img-fluid pt-5"
                            />
                        </div>
                    </div>
                    <div className="col-7 text-center">
                        <ChartBox
                            heading={"Information Extraction"}
                            children={
                                informationText ? (
                                    <div>
                                        <p className="p-3">{informationText}</p>
                                        <PDFDownloadLink
                                            className={`${styles.btn}`}
                                            document={
                                                <MyDocument
                                                    data={[informationText]}
                                                />
                                            }
                                            fileName="information-extraction.pdf"
                                        >
                                            Download PDF
                                        </PDFDownloadLink>
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            justifyContent: "center",
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
                                )
                            }
                        />
                    </div>
                    <div className="d-flex">
                        <button
                            className={styles.btn}
                            onClick={() => setInformationFile("")}
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InformationExtraction;
