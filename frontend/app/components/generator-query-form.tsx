import {MutableRefObject} from "react";

const GeneratorQueryPageComponent = ({heading, sizeRef, numberRef, handler}: {
    heading: string
    sizeRef: MutableRefObject<HTMLInputElement | null> | null,
    numberRef: MutableRefObject<HTMLInputElement | null> | null,
    handler: () => void
}) => {
    return (<>
        <div className="flex flex-row bg-white shadow-md justify-center rounded px-8 pt-6 pb-8 mb-4">
            <div className="col-end-3">
                <form className="">
                    <h1 className="text-lg font-bold">{heading}</h1>
                    {sizeRef === null ? <></> :
                        <>
                            <div className="flex flex-col">
                                <label>Size:</label>
                            </div>
                            <div className="flex col-end-3">
                                <input
                                    type="number"
                                    className="text-slate-800 text-center"
                                    ref={sizeRef}
                                    defaultValue="128"
                                />
                            </div>
                        </>
                    }
                    <div className="flex col-end-3">
                        <label>Number:</label>
                    </div>
                    <div className="flex col-end-3">
                        <input
                            type="number"
                            className="text-slate-800 text-center"
                            ref={numberRef}
                            defaultValue="2"
                        />
                    </div>
                    <div className="flex col-end-3">
                        <button id="key-generator"
                                className={"simple-button bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"}
                                onClick={handler}>
                            Generate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>);

}
export default GeneratorQueryPageComponent;
