import React from "react";
import Image from 'next/image'
import  Test from './assets/test.jpg';

export default function Home() {


    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: '0px',
                    height: '0px',
                    position: 'absolute',
                    overflow: 'hidden',
                    display: 'none'
                }}
            >
                <symbol id="shape_kABKQcURYY" viewBox="0 0 24 24">
                    <path
                        d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"></path>
                </symbol>
                <symbol id={"shape_dddd"} viewBox={"0 0 52.14 57.53"}>
                    <path xmlns="http://www.w3.org/2000/svg" className="cls-1"
                          d="M41,16.05H51.16a1,1,0,0,0,1-1V13.39a1,1,0,0,0-1-1H41a1,1,0,0,1-1-1V10.16a1,1,0,0,1,1-1H46.9a1,1,0,0,0,1-1V6.5a1,1,0,0,0-1-1H41a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1H36.66a1,1,0,0,0-1,1V4.35a1,1,0,0,1-1,1H28.76a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1h5.85a1,1,0,0,1,1,1v1.26a1,1,0,0,1-1,1H17.54a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1h5.84a1,1,0,0,0,1-1V6.32a1,1,0,0,0-1-1H17.54a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1H13.19a1,1,0,0,0-1,1V4.35a1,1,0,0,1-1,1H5.24a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1h5.89a1,1,0,0,1,1,1v1.26a1,1,0,0,1-1,1H1a1,1,0,0,0-1,1v1.68a1,1,0,0,0,1,1H11.13a1,1,0,0,1,1,1v1.87a1,1,0,0,1-1,1H5.24a1,1,0,0,0-1,1V32.11a1,1,0,0,0,1,1h5.89a1,1,0,0,1,1,1v1.63a1,1,0,0,1-1,1H1a1,1,0,0,0-1,1v1.68a1,1,0,0,0,1,1H11.13a1,1,0,0,1,1,1V43a1,1,0,0,1-1,1H5.24a1,1,0,0,0-1,1V56.54a1,1,0,0,0,1,1H23.38a1,1,0,0,0,1-1V45.12a1,1,0,0,0-1-1H17.49a1,1,0,0,1-1-1V41.52a1,1,0,0,1,1-1H34.61a1,1,0,0,1,1,1v1.64a1,1,0,0,1-1,1h-5.9a1,1,0,0,0-1,1V56.54a1,1,0,0,0,1,1H46.86a1,1,0,0,0,1-1V45.12a1,1,0,0,0-1-1H41a1,1,0,0,1-1-1V41.52a1,1,0,0,1,1-1H51.11a1,1,0,0,0,1-1V37.87a1,1,0,0,0-1-1H41a1,1,0,0,1-1-1V34.26a1,1,0,0,1,1-1H46.9a1,1,0,0,0,1-1V20.73a1,1,0,0,0-1-1H41a1,1,0,0,1-1-1V17.13A1,1,0,0,1,41,16.05ZM19.13,47.88a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H9.54a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1ZM9.54,29.4a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1h9.63a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1Zm25.07,7.39H17.54a1,1,0,0,1-1-1V34.17a1,1,0,0,1,1-1h5.89a1,1,0,0,0,1-1V20.73a1,1,0,0,0-1-1H17.54a1,1,0,0,1-1-1V17.13a1,1,0,0,1,1-1H34.61a1,1,0,0,1,1,1v1.59a1,1,0,0,1-1,1h-5.9a1,1,0,0,0-1,1V32.11a1,1,0,0,0,1,1h5.9a1,1,0,0,1,1,1v1.63A1,1,0,0,1,34.61,36.79Zm8,11.09a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H33a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1Zm0-24.43a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H33a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1Z"/>
                </symbol>
            </svg>
            <div style={{
                width: '100%',
                minHeight: '100%',
                overflow: 'hidden',
            }}>
                <div className={"h-[631.5px] my-0 mx-auto relative"}>
                    <div
                        className={"w-full h-full absolute top-0 left-0 pointer-events-none overflow-hidden bg-white"}/>
                    <div className={"relative container mx-auto"}>
                        <div className={"w-full h-full flex flex-row-reverse"}>
                            <div className={"md:w-[800.956px] md:h-[631.5px]"}>
                                <div className={"w-full h-full relative"}>
                                    <div
                                        className={"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"}>

                                        <Image
                                            src={"https://w.ladicdn.com/5b2dbb689c43c0cf1f2b96c1/bg-do-2-20210817165705.svg"}
                                            alt={"aaa"}
                                            fill
                                            style={{height: "100%", width: "100%"}}
                                        />
                                    </div>
                                    <div className={""}>
                                        <Image
                                            src={Test}
                                            alt={"aaaaaaa"}
                                            fill
                                            style={{height: "100%", width: "100%"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col"}>
                                <div className={"w-[48.6458px] h-[53.6745px]"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                         preserveAspectRatio="none" viewBox="0 0 24 24" className=""
                                         fill="rgba(237, 66, 80, 1)">
                                        <use xlinkHref="#shape_dddd"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
