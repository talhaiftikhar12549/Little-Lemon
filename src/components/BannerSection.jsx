import React from "react"
import bannerImage from "../assets/f64e8d485894f9df206830063adbc400d85de711.jpg"

export default function BannerSection() {
    return (
        <>
            <div className={"border h-[50vh] bg-[#495E57] w-[100%] flex vw-[80%] justify-center"}>
                    <div className={" flex-col flex w-[40%] justify-center"}>
                        <h1 className={"text-[#F5CD14] text-5xl bold font-serif"}>Little Lemon</h1>
                        <p className={"text-[#ffffff] text-3xl bold"}>Chicago</p>
                        <p className={"text-lg text-[#ffffff]"}>We are a family owned Mediterranean restaurant, focused
                            on traditional recipes served with a
                            modern twist</p>
                    </div>

                    <div className={"w-[40%] flex justify-center items-center"}>
                        <img src={bannerImage} className={"h-[80%]  rounded-lg "}/>
                    </div>
            </div>
        </>
    )
}