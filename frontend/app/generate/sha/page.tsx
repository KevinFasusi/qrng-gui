"use client";

import React, {Suspense, useRef, useState} from "react";
import {GenerateSha256} from "@/wailsjs/wailsjs/go/control/QrngCli";
import styles from './styles.module.css'
// reactstrap components
import {Col, ListGroup, ListGroupItem, Row} from "reactstrap";
import ResultsPanelPageComponent from "@/app/components/results-panel";
import GeneratorQueryPageComponent from "@/app/components/generator-query-form";

let history: string[] = []

const ShaPage = () => {
    const [text, setText] = useState<string[]>([""]);
    const nameRef1 = useRef<HTMLInputElement | null>(null);
    const nameRef2 = useRef<HTMLInputElement | null>(null);

    const handleGenerateSha256 = () => {
        const size = nameRef1.current?.value ? (nameRef1.current.value).trim() : "128";
        const number = nameRef2.current?.value ? (nameRef2.current.value).trim() : "2";
        GenerateSha256(parseInt(number), parseInt(size)).then((text: string[]) => setText(text));
    }

    text.length != 0 ? history.push(...text) : history;

    return (
        <>
            <GeneratorQueryPageComponent heading={"SHA256"} handler={handleGenerateSha256} numberRef={nameRef2} sizeRef={nameRef1}></GeneratorQueryPageComponent>
            <ResultsPanelPageComponent history={history}></ResultsPanelPageComponent>
        </>

    );
}

export default ShaPage;