import React, { useState } from "react";
import { motion } from "framer-motion";

interface IProps{
    setOpen: (v: any) => void;
}
const ToggleButton = (props: IProps) => {
    const { setOpen } = props;
    return ( 
        <button onClick={() => setOpen((prev) => !prev)}>
            <img src="/menu.svg" style={{width: 40}} alt="" />
        </button>
     );
}
 
export default ToggleButton;