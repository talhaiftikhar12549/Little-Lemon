import React from "react"
import bannerImage from "../assets/Asset 9@4x.png";
import {NavLink} from "react-router-dom";

export default function TableSelect()
{
    return(
        <>
            <section>
                <div className={"border h-[30vh] bg-[#495E57] w-[100%] flex vw-[80%] justify-center"}>
                    <div className={" flex-col flex w-[40%] justify-center"}>
                        <h1 className={"text-[#F5CD14] text-5xl bold py-1 font-serif"}>Little Lemon</h1>
                        <p className={"text-[#ffffff] text-3xl py-1  bold"}>Chicago</p>
                        {/*<button*/}
                        {/*    className={"font-semibold border border-[#F5CD14] my-8 rounded-lg bg-[#F5CD14] px-12 py-2"}>*/}
                        {/*    <NavLink to={"/TableReserve"}> Reserve  a Table</NavLink>*/}
                        {/*</button>*/}
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
                <div className={""}>
                        <div className={"w-[35%]"}>

                            <NavLink
                                to="/ConfirmationMessage"
                                className="font-semibold border border-[#F5CD14] my-10 rounded-xl bg-[#F5CD14] px-24 py-2 text-center inline-block"
                            >
                                Next
                            </NavLink>

                        </div>



                </div>
            </section>
        </>
    )
}