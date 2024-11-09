"use client";

import React, {useRef, useState} from "react";
import {GenerateIntegers} from "@/wailsjs/wailsjs/go/control/QrngCli";

import GeneratorQueryPageComponent from "@/app/components/generator-query-form";
import ResultsPanelPageComponent from "@/app/components/results-panel";


let history: string[] = []

const IntegersPage = () => {
    const [text, setText] = useState<string[]>([""]);
    const nameRef1 = useRef<HTMLInputElement | null>(null);

    const handleGenerateIntegers = () => {
        const number = nameRef1.current?.value ? (nameRef1.current.value).trim() : "2";
        GenerateIntegers(parseInt(number)).then((text: string[]) => setText(text));

    }

    text.length != 0 ? history.push(...text) : history;

    return (
            <>
                <GeneratorQueryPageComponent heading={"Integers"} handler={handleGenerateIntegers} numberRef={nameRef1} sizeRef={null}/>
                <ResultsPanelPageComponent history={history}></ResultsPanelPageComponent>
            </>
    );
}

export default IntegersPage;