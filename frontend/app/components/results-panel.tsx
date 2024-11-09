import React, {Suspense} from "react";
import {Col, ListGroup, ListGroupItem, Row} from "reactstrap";
import styles from "@/app/generate/sha/styles.module.css";


const
    ResultsPanelPageComponent = ({history}: { history: string[] }) => {

        const handleResultsPanel = () => {
            history.map((value, index, array) => {
                history.pop()
            })
            const resPanel = document.querySelector(`.${styles.resultsPanel}`);
            if (resPanel != null)
                resPanel.remove();
        }

        return (<>
            <div>
                <button id="key-generator"
                        className={"simple-button bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"}
                        onClick={handleResultsPanel}>
                    Clear
                </button>
                <Suspense fallback={<p>Loading...</p>}>
                    <ListGroup className={styles.noBull + " list-row list my--3"}>
                        {history.map((key, index, array) => {
                            return index >= 1 && array[index] != "" ? <>
                                <ListGroupItem className=" px-0">
                                    <Row>
                                        <Col id="results-column" className="col">
                                            <div
                                                className=" results-panel align-items-center rounded-lg bg-gray-300 shadow-md hover:bg-white text-center t mb-4 pt-8 pb-8 justify-center">
                                                {key}
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </> : <></>;
                        })}
                    </ListGroup>
                </Suspense>
            </div>

        </>)
    }

export default ResultsPanelPageComponent;