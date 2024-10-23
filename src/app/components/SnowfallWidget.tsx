import React from "react";
import { motion } from "framer-motion";
import Lotus from "../assets/lotus.png"
import HeartGif from "@/app/assets/heart.gif";
import Image from "next/image";

const Snowflake = ({ size, left, duration, delay }) => {
    return (
        <motion.div
            className="snowflake"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "100vh", opacity: 1 }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
            }}
            style={{
                position: "absolute",
                left: `${left}%`,
                fontSize: `${size}px`,
            }}
        >
            <Image
                src={Lotus}
                alt={"Lotus.gif"}
                height={size}
                width={size}
            />
        </motion.div>
    );
};

const SnowfallWidget = () => {
    const snowflakes = Array.from({ length: 50 });

    return (
        <div className="snowfall">
            {snowflakes.map((_, index) => {
                const size = Math.random() * 20 + 10; // kích thước bông tuyết ngẫu nhiên
                const left = Math.random() * 100; // vị trí trái ngẫu nhiên
                const duration = Math.random() * 5 + 5; // thời gian rơi ngẫu nhiên
                const delay = Math.random() * 5; // độ trễ ngẫu nhiên

                return (
                    <Snowflake
                        key={index}
                        size={size}
                        left={left}
                        duration={duration}
                        delay={delay}
                    />
                );
            })}
        </div>
    );
};

export default SnowfallWidget;
