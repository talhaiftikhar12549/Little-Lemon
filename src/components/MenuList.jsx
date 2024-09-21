import React from "react"
import greakSalad from "../assets/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg"
import brushetta from "../assets/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg"
import grilledFish from "../assets/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg"
import pasta from "../assets/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg"

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
                    {/*Greek Salad start*/}
                    <div className={"border-b-[2px] border-[#F8F8F8] flex justify-between items-center py-4"}>
                        <div className={""}>
                            <p className={"font-bold text-xl py-4"}>Greak Salad</p>
                            <p>the famous greek salad of crispy lettuee, peppers, olives and our chicago...</p>
                            <p className={"font-bold py-2"}>$ 12.99</p>
                        </div>
                        <div>
                            <img className={"h-[170px] rounded w-[200px]"} src={greakSalad}/>
                        </div>
                    </div>
                    {/*    Greek Salad End*/}


                    {/*Bruschetta start*/}
                    <div className={"border-b-[2px] border-[#F8F8F8] flex justify-between items-center py-4"}>
                        <div className={""}>
                            <p className={"font-bold text-xl py-4"}>Bruschetta</p>
                            <p>Our Brushetts is made from grilled      bread that has been smeared with garli...</p>
                            <p className={"font-bold py-2"}>$ 12.99</p>
                        </div>
                        <div>
                            <img className={"h-[170px] rounded w-[200px]"} src={brushetta}/>
                        </div>
                    </div>
                    {/*Bruschetta End*/}

                    {/*Grilled Fish start*/}
                    <div className={"border-b-[2px] border-[#F8F8F8] flex justify-between items-center py-4"}>
                        <div className={""}>
                            <p className={"font-bold text-xl py-4"}>Grilled Fish</p>
                            <p>Our famous grilled fish seasoned with our special 11 herbs </p>
                            <p className={"font-bold py-2"}>$ 12.99</p>
                        </div>
                        <div>
                            <img className={"h-[170px] rounded w-[200px]"} src={grilledFish}/>
                        </div>
                    </div>
                    {/*Grilled Fish End*/}

                    {/*Pasta start*/}
                    <div className={"border-b-[2px] border-[#F8F8F8] flex justify-between items-center py-4"}>
                        <div className={""}>
                            <p className={"font-bold text-xl py-4"}>Pasta</p>
                            <p>Our Brushetts is made from grilled      bread that has been smeared with garli...</p>
                            <p className={"font-bold py-2"}>$ 12.99</p>
                        </div>
                        <div>
                            <img className={"h-[170px] rounded w-[200px]"} src={pasta}/>
                        </div>
                    </div>
                    {/*Pasta End*/}

                </section>

            </div>
        </>
    )
}