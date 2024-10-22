"use client";

import React from "react";
import {ConfigProvider} from "antd";
import {CColor} from "@/app/ccolor";

const withTheme = (node: JSX.Element) => (
    <>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: CColor.primary,
                },
            }}
        >
            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 16,
                    },
                }}
            >
                {node}
            </ConfigProvider>
        </ConfigProvider>
    </>
)

export default withTheme;
