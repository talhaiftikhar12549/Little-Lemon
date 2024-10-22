import React from "react"
import bannerImage from "../assets/Asset 9@4x.png";
import {NavLink} from "react-router-dom";
import grilledFish from "../assets/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg";

export default function TableSelect() {
    return (
        <>
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


            <section className={"my-10"}>
                <h2 className={"text-4xl font-bold py-1 text-center my-4 "}>
                    Select Table
                </h2>
                <div className={"flex justify-center w-100"}>
                    <div className={"w-[60%]"}>


                        {/*Table grid section*/}
                        <div>
                            <div className="grid grid-cols-4 grid-rows-3 gap-6 py-4">
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#495E57]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center itemser">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#495E57]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#495E57]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#495E57]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className={"h-[75px] rounded w-[75px] bg-[#D9D9D9]"}>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*Table grid section*/}


                        {/*Table Marked*/}
                        <div className={"pt-12"}>
                            <div className={"flex my-1"}>
                                <div className={"h-[20px] rounded-xl w-[20px] bg-[#495E57] "}>
                                </div>
                                <p className={"text-lg font-semibold"}>&nbsp; Occupied</p>
                            </div>
                            <div className={"flex my-1"}>
                                <div className={"h-[20px] rounded-xl w-[20px] bg-[#D9D9D9]"}>
                                </div>
                                <p className={"text-lg font-semibold"}>&nbsp; Available</p>
                            </div>
                        </div>
                        {/*Table Marked*/}
                        <div className={"w-[100%] flex justify-center"}>
                            <NavLink
                                to="/ConfirmationMessage"
                                className="font-semibold border border-[#F5CD14] my-10 rounded-xl bg-[#F5CD14] px-24 py-2 text-center inline-block"
                            >
                                Next
                            </NavLink>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}