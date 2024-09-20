import React from "react"

export default function MenuList() {
    return (
        <>
            <div className={"vw-[80%]"}>
                <div>
                    <p className={"font-bold text-2xl"}>Order for Delivery!</p>
                    <div className={"flex justify-around"}>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Lunch</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Main</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Desert</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>A La Carte</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Special</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Dinner</button>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}