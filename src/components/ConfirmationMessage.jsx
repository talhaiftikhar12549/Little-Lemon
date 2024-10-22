import React from "react"
import bannerImage from "../assets/Asset 9@4x.png";
import {NavLink} from "react-router-dom";

export default function ConfirmationMessage()
{
    return (
        <>
            <div className={"h-[80vh]"}>
            <section>
                <div className={"border h-[30vh] bg-[#495E57] w-[100%] flex vw-[80%] justify-center"}>
                    <div className={" flex-col flex w-[40%] justify-center"}>
                        <h1 className={"text-[#F5CD14] text-5xl bold py-1 font-serif"}>Little Lemon</h1>
                        <p className={"text-[#ffffff] text-3xl py-1  bold"}>Chicago</p>
                    </div>
                    <div className={"w-[40%] flex justify-center items-center"}>
                        <img src={bannerImage} className={"h-[70%]  rounded-lg "}/>
                    </div>
                </div>
            </section>


            <section className={"my-10 px-24"}>
                <h2 className={"text-4xl font-bold py-1 my-4 "}>
                    Congratulation
                </h2>


                <p className={"text-lg"}>Your booking has been confiremd you will shortly recieved an conformation email</p>

                {/*<div className={"flex justify-center w-100"}>*/}
                {/*    <div className={"w-[60%]"}>*/}





                {/*</div>*/}
                {/*    </div>*/}
            </section>
            </div>
        </>
    )
}