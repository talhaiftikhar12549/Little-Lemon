import React from "react"
import footerImage from "../assets/Asset 20@4x.png"
export default function FooterBar()
{
    return (
        <footer className={"relative py-2"}>
            <div className={"border-t-[2px] border-[#495E57] py-8 flex items-center justify-center"}>
                    <p className={"text-[#495E57]"}>
                        © 2023 Little Lemon Resturant. All Rights Reserved
                    </p>
            </div>

            <img className={"w-[50px] h-[70px] absolute top-5 right-10"} src={footerImage}/>
        </footer>
    )
}