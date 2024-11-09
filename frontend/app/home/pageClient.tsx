"use client";

import React, {useState} from "react";
import QubitGridPageComponent from "@/app/components/qubit-grid";
import {GetSpeed} from "@/wailsjs/wailsjs/go/control/QrngCli";

export default function HomeClientPage({ qubitNumber}: { qubitNumber: number}) {

    const [text, setText] = useState<string>("");

    setTimeout(() => {
        GetSpeed().then((text: string) => setText(text));
        }, 1000);

    return (
        <>
            <div className="grid-container">
                <QubitGridPageComponent num={qubitNumber}>
                </QubitGridPageComponent>
            </div>
            <div className="grid-container-alt">
                <div className="grid-item-alt">
                    <div className="flex justify-center flex-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <ul className="no-bull justify-center">
                            <li>Speed (128-bits):{text}</li>
                        </ul>
                    </div>
                </div>

                <div className="grid-item-alt">
                    <div className="flex justify-center flex-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <ul className="no-bull justify-center">
                            <li>Uptime: 12 min 54s</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-center rtl:text-right text-gray-800 dark:text-gray-800">
                    <thead
                        className="text-xs text-gray-800 uppercase bg-gray-50 dark:text-gray-800">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Activity</th>
                        <th scope="col" className="px-6 py-3">Duration</th>
                        <th>Timestamp</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr className="bg-white border-b dark:border-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                            82d1bcb6116c
                        </th>
                        <td className="px-6 py-4">Generating Keys</td>
                        <td className="px-6 py-4">0.02s</td>
                        <td className="px-6 py-4">25/09/2024 14:50:20</td>
                    </tr>
                    <tr className="bg-white border-b dark:border-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                            7086c0dfe2b6
                        </th>
                        <td className="px-6 py-4">Generating Keys</td>
                        <td className="px-6 py-4">0.02s</td>
                        <td className="px-6 py-4">25/10/2024 14:50:23</td>
                    </tr>
                    <tr className="bg-white border-b dark:border-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                            c188cc4dd979
                        </th>
                        <td className="px-6 py-4">Generating Keys</td>
                        <td className="px-6 py-4">0.02s</td>
                        <td className="px-6 py-4">25/10/2024 14:50:25</td>
                    </tr>
                    <tr className="bg-white border-b dark:border-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                            3efc3aac818c
                        </th>
                        <td className="px-6 py-4">Generating Keys</td>
                        <td className="px-6 py-4">0.02s</td>
                        <td className="px-6 py-4">25/10/2024 14:50:30</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>

    )
        ;
};