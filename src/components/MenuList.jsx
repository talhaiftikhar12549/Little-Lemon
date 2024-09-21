import React from "react"
import greakSalad from "../assets/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg"
export default function MenuList() {
    return (
        <>
            <div className={" py-4 px-[10%]"}>
                <div className={""}>
                    <p className={"font-bold text-2xl"}>Order for Delivery!</p>
                    <div className={"flex justify-around py-4"}>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Lunch</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Main</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Desert</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>A La Carte</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Special</button>
                        <button className={"bg-[#EBEDEC] font-semibold py-2 px-5 rounded-xl "}>Dinner</button>

                    </div>
                </div>
                {/*Menu Item Section*/}
                <section>
                    <div className={"border-b-[2px] border-[#F8F8F8] flex justify-between items-center py-4"}>
                        <div className={""}>
                            <p className={"font-bold text-xl py-4"}>Greak Salad</p>
                            <p>the famous greek salad of crispy lettuee, peppers, olives and our chicago...</p>
                            <p className={"font-bold py-2"}>$ 12.99</p>
                        </div>
                        <div>
                            <img className={"h-[170px] rounded w-[200px]"} src={greakSalad} />
                        </div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </section>

            </div>
        </>
    )
}