"use client";

import {useState} from "react";
import {GetSummary} from "@/wailsjs/wailsjs/go/control/QrngCli";
import styles from "@/app/generate/keys/styles.module.css";

const StatisticsPage = () => {
    const [text, setText] = useState<string>("");

    const handleStatisticsSummary = () => {
        GetSummary().then((text: string) => setText(text));
    }

    return (
        <div>
            <div className="flex flex-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="col-end-3">
                    <h1>Generator Summary</h1>
                    <button id="key-generator"
                            className={"simple-button bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"}
                            onClick={handleStatisticsSummary}>
                        Generate
                    </button>
                </div>
            </div>
            <div className="flex flex-row bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <p>{text}</p>
            </div>
        </div>
    );
}
export default StatisticsPage;