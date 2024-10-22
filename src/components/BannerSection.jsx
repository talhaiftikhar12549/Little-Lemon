import React from "react"
import bannerImage from "../assets/f64e8d485894f9df206830063adbc400d85de711.jpg"
import MenuList from "./MenuList";
export default function BannerSection() {
    return (
        <>
            <div className={"border h-[50vh] bg-[#495E57] w-[100%] flex vw-[80%] justify-center"}>
                <div className={" flex-col flex w-[40%] justify-center"}>
                    <h1 className={"text-[#F5CD14] text-5xl bold py-1 font-serif"}>Little Lemon</h1>
                    <p className={"text-[#ffffff] text-3xl py-1  bold"}>Chicago</p>
                    <p className={"text-lg text-[#ffffff] py-1 "}>We are a family owned Mediterranean restaurant,
                        focused
                        on traditional recipes served with a
                        modern twist</p>
                    <div>
                        <button
                            className={"font-semibold border border-[#F5CD14] my-8 rounded-lg bg-[#F5CD14] px-12 py-2"}>Reserve
                            a Table
                        </button>
                    </div>

                </div>

                <div className={"w-[40%] flex justify-center items-center"}>
                    <img src={bannerImage} className={"h-[80%]  rounded-lg "}/>
                </div>
            </div>
            <MenuList/>
        </>
    )
}