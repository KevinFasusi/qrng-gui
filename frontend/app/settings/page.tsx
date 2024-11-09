"use client";

import Image from "next/image";
import pic from "@/assets/images/render-pic.png";

const SettingsPage = () => {

    return (
        <>
            <div className="grid-container">
                <div className="grid-item">
                    <span className="font-bold">Firmware:</span>v1.0.0
                </div>
                <div className="grid-item">
                    <span className="font-bold">CLI:</span>v1.0.0
                </div>
                <div className="grid-item">
                    <span className="font-bold">GUI:</span>v1.0.0
                </div>
                <div className="grid-item">
                    <span className="font-bold">Hardware:</span>v1.0.0
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image src={pic}
                       width={400}
                       height={215}
                       alt="Picture of the author"
                />
            </div>
            <div className="simple-button border-dashed border border-zinc-500 w-full h-64 rounded-lg">
                <div className="grid-container">
                    <div className="grid-item">
                        <form className="max-w-sm mx-auto">
                            <label htmlFor="countries"
                                   className="block mb-2 text-sm font-medium text-gray-900">Usb Devices</label>
                            <select id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900">

                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingsPage;