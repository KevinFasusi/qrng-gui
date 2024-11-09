"use client";

import React, { useRef, useState } from 'react'
import HomeClientPage from "@/app/home/pageClient";
import {GetSpeed} from "@/wailsjs/wailsjs/go/control/QrngCli";
export default function Homepage() {


     //get the number of qubit generators from a function call to the generator and set the qubitGenerator
     const qubitGenerator = 4;
     return (
         <HomeClientPage qubitNumber={qubitGenerator} />
     )
}