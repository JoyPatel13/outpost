import { checkUser } from "@/actions/check-user";
import { redirect } from "next/navigation";
import React from 'react'

const DashBoardPage = async() => {
    const user  = await checkUser() ;
    if(!user ) redirect("/sign-in");



  return (
    <div>DashBoardPage</div>
  )
}

export default DashBoardPage;