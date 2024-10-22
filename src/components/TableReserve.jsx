import React from "react"
import {NavLink} from "react-router-dom";
import bannerImage from "../assets/Asset 9@4x.png";

export default function TableReserve() {
    return (
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
                    Reserve Your Table
                </h2>
                <div className={""}>
                <form className={"flex justify-center w-100"}>
                    <div className={"w-[35%]"}>

                        <label className={"text-lg font-semibold"}> First Name</label><br/>
                        <input type={"text"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <br/><br/>

                        <label className={"text-lg font-semibold"}> Last Name</label><br/>
                        <input type={"text"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <br/><br/>

                        <label className={"text-lg font-semibold"}> Date</label><br/>
                        <input type={"date"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <br/><br/>

                        <label className={"text-lg font-semibold"}> Time</label><br/>
                        <input type={"time"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <br/><br/>

                        <label className={"text-lg font-semibold"}> Email</label><br/>
                        <input type={"email"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <br/><br/>

                        <label className={"text-lg font-semibold"}> Contact Number</label><br/>
                        <input type={"number"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <br/><br/>

                        <label className={"text-lg font-semibold"}> Number of Dinner</label><br/>
                        <input type={"number"} className={"bg-[#EBEDEC] w-[100%] py-1 rounded-md"}/>
                        <NavLink
                            to="/TableSelect"
                            className="font-semibold border border-[#F5CD14] my-10 rounded-xl bg-[#F5CD14] px-24 py-2 text-center inline-block"
                        >
                            Next
                        </NavLink>

                    </div>

                </form>

                </div>
            </section>
        </>
    )

}