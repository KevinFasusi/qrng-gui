"use client";

import React, { useRef, useState } from "react";
import {GenerateKeys} from "@/wailsjs/wailsjs/go/control/QrngCli";
import ResultsPanelPageComponent from "@/app/components/results-panel";
import GeneratorQueryPageComponent from "@/app/components/generator-query-form";

let history: string[] = []

const KeysPage = () => {
    const [text, setText] = useState<string[]>([""]);
    const nameRef1 = useRef<HTMLInputElement | null>(null);
    const nameRef2 = useRef<HTMLInputElement | null>(null);

    const handleGenerateKey = () => {
        const size = nameRef1.current?.value ? (nameRef1.current.value).trim() : "128";
        const number = nameRef2.current?.value ? (nameRef2.current.value).trim() : "2";
        GenerateKeys(parseInt(number), parseInt(size)).then((text: string[]) => setText(text));
    }

    text.length != 0 ? history.push(...text) : history;

    return (
        <>
            <GeneratorQueryPageComponent heading={"Key"} handler={handleGenerateKey} numberRef={nameRef2} sizeRef={nameRef1}></GeneratorQueryPageComponent>
            <ResultsPanelPageComponent history={history}></ResultsPanelPageComponent>
        </>
    )
}

export default KeysPage;