"use client";

import { redirect } from 'next/navigation'

// set up application and redirect to home
const RootPage = () =>{

    redirect("/home")
}

export default RootPage;