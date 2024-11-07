'use client';

import React, {useState} from "react";
import Image from 'next/image'
import BgNo2 from './assets/bg_no2.jpg';
import BgNo3 from './assets/bg_no3.jpg';
import HeartGif from './assets/heart.gif';
import {FormProps, Select, Typography} from 'antd';
import {Button, Form, Input, Radio} from 'antd';
import {svnMotherCarmel, svnPRIMARK} from "@/app/fonts";
import withTheme from "@/app/theme_config";
import SnowfallWidget from "@/app/components/SnowfallWidget";
import {FieldData} from "rc-field-form/es/interface";
import Fireworks from "@/app/components/Fireworks";

type FieldType = {
    Name?: string;
    eventId?: string;
    Status?: string;
    Total?: string;
    attendance_status?: string;
    plus_ones?: string;
};

const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [form] = Form.useForm()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);

        setIsLoading(true)

        const formData = new FormData()

        formData.set('Name', values.Name ?? "");
        formData.set('eventId', values.eventId === "tcnt" ? "NHÀ TRAI" : "NHÀ GÁI")
        formData.set('Status', values.attendance_status ?? "");
        formData.set('Total', values.plus_ones ?? "0");

        fetch("https://script.google.com/macros/s/AKfycbyUklq2p7WiYkBNpzqitIZOKOpJwbJLcClU5REPZgAu8sSwD092KPd2YsdNUc1qOtL3/exec", {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data && data.result && data.result == "success") {
                    setIsSuccess(true)
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const _buildSuccess = () => {

        return (
            <div className={"flex flex-col p-2 items-center text-3xl text-center"}>
                <p className={`${svnPRIMARK.className}`}>
                    Cảm ơn Bạn <br/>đã dành thời gian xác nhận tham dự <br/>của chúng tớ!
                </p>
            </div>
        )
    }

    const onFieldsChange = (changedFields: FieldData[], allFields: FieldData[]) => {
        console.log('changedFields:', changedFields,);
        console.log('allFields:', allFields,);

        if (changedFields.length > 0) {
            const changedField = changedFields[0];

            if (changedField.name.length > 0) {
                const name = changedField.name[0];

                switch (name) {
                    case "attendance_status":
                        if (changedField.value === "0") {
                            form.setFieldValue('plus_ones', undefined)
                        }

                        break

                }
            }
        }
    }

    const _buildForm = () => {
        return (
            <div className={"flex flex-col items-center px-4"}>
                <div className={"mt-3"}>
                    <Form
                        form={form}
                        name="basic"
                        style={{maxWidth: 600}}
                        onFinish={onFinish}
                        onFieldsChange={onFieldsChange}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className={"flex flex-col gap-5"}
                    >
                        <Form.Item<FieldType>
                            name="Name"
                            rules={[{required: true, message: 'Please input your username!'}]}
                            style={{
                                marginBottom: "0px !important",
                            }}
                        >
                            <Input
                                placeholder={"Nhập tên của bạn"}
                            />
                        </Form.Item>
                        <div className={"flex flex-col rounded-md border-solid border p-3"}>
                            <Typography.Title level={5}>
                                Chọn sự kiện tham dự
                            </Typography.Title>
                            <Form.Item<FieldType>
                                name="eventId"
                                rules={[{required: true, message: 'Please input your username!'}]}
                                style={{
                                    marginBottom: "0px !important",
                                }}
                            >
                                <Radio.Group
                                    options={[
                                        {label: 'TIỆC CƯỚI NHÀ TRAI', value: 'tcnt'},
                                        {label: 'TIỆC CƯỚI NHÀ GÁI', value: 'tcng'},
                                    ]}
                                />
                            </Form.Item>
                        </div>
                        <Form.Item noStyle shouldUpdate={true} style={{
                            marginBottom: "0px !important",
                        }}>
                            {({getFieldValue}) => {
                                const eventId: string | undefined = getFieldValue('eventId') || undefined;
                                return eventId !== undefined ? (
                                    <>
                                        <div key={eventId}
                                             className={"flex flex-col gap-3 p-3 bg-gray-100 rounded-md"}>
                                            <Typography.Title level={5}>
                                                {`Xác nhận sự kiện: TIỆC CƯỚI NHÀ ${eventId === "tcnt" ? "TRAI" : "GÁI"}`}
                                            </Typography.Title>
                                            <Form.Item
                                                name={`attendance_status`}
                                            >
                                                <Select
                                                    placeholder={"Bạn sẽ tham gia chứ?"}
                                                >
                                                    <Select.Option value="1">Tôi sẽ tham gia</Select.Option>
                                                    <Select.Option value="0">Tôi không Tham gia được</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={true}
                                            >
                                                {
                                                    ({getFieldValue}) => {
                                                        const attendance_status: string | undefined = getFieldValue('attendance_status') || undefined;

                                                        return (
                                                            <Form.Item
                                                                name={`plus_ones`}
                                                            >
                                                                <Select
                                                                    placeholder={"Bạn có người đi cùng không?"}
                                                                    disabled={attendance_status !== "1"}
                                                                >
                                                                    <Select.Option value="0">Đi một mình</Select.Option>
                                                                    <Select.Option value="1">Đi cùng 1
                                                                        người</Select.Option>
                                                                    <Select.Option value="2">Đi cùng 2
                                                                        người</Select.Option>
                                                                    <Select.Option value="3">Đi cùng 3
                                                                        người</Select.Option>
                                                                    <Select.Option value="4">Đi cùng 4
                                                                        người</Select.Option>
                                                                    <Select.Option value="5">Đi cùng 5
                                                                        người</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        )
                                                    }
                                                }
                                            </Form.Item>
                                        </div>
                                    </>
                                ) : undefined;
                            }}
                        </Form.Item>
                        <div className={"flex flex-col items-center italic"}>
                            <div>
                                Sự hiện diện của Bạn
                            </div>
                            <div>
                                là niềm vinh hạnh cho gia đình chúng tôi
                            </div>
                            <div>
                                Rất hân hạnh được đón tiếp!
                            </div>
                        </div>
                        <div className={"mt-2"}>
                            <Form.Item>
                                <Button
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    loading={isLoading}
                                    size={"middle"}
                                >
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </div>
                        <div className={"flex justify-center"}>

                            <Typography.Link href="https://quangminhbazi.my.canva.site/saveourdate/"
                                             className={"flex flex-row justify-center items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path>
                                </svg>
                                &nbsp;<span className={"underline"}>Về website Đám cưới</span>
                            </Typography.Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                isSuccess ? (
                    <SnowfallWidget/>
                ) : undefined
            }
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
            <div className={"flex flex-col"} style={{
                width: '100%',
                minHeight: '100%',
                overflow: 'hidden',
            }}>
                <div className={"rounded-0 flex flex-col"}>
                    <section className={"relative w-screen"}>
                        <div className={"relative flex flex-col items-center p-4"}>
                            <div className={"max-w-48 max-h-48 mx-auto"}>
                                <div
                                    className={`w-48 h-48 rounded-full overflow-hidden p-1 border-2 border-[#52c41a] border-solid`}>
                                    <div className={"relative w-full h-full rounded-full"}>
                                        <Image
                                            className={`rounded-full ${isSuccess ? "hidden" : "block"}`}
                                            src={BgNo2}
                                            alt={"saveourdate-nam-tramanh"}
                                            sizes={"180px"}
                                            priority={true}
                                        />
                                        <Image
                                            className={`rounded-full ${isSuccess ? "block" : "hidden"}`}
                                            src={BgNo3}
                                            alt={"saveourdate-nam-tramanh"}
                                            sizes={"180px"}
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <h2 className={`text-3xl font-medium uppercase mt-6`}>
                                Xác nhận tham dự
                            </h2>
                            <p className={`text-[28px] pt-2 pb-2 ${svnPRIMARK.className}`}>Lễ Thành Hôn</p>
                            <div
                                className={`mt-2.5 flex justify-center items-center text-2xl font-bold ${svnMotherCarmel.className}`}>
                            <span className={"pr-1"}>
                                Đinh Nam
                            </span>
                                <Image
                                    src={HeartGif}
                                    alt={"heart.gif"}
                                    height={40}
                                    width={40}
                                />
                                <span>
                                Trâm Anh
                            </span>
                            </div>
                            <div className={"h-20 w-20 mt-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                     preserveAspectRatio="none"
                                     viewBox="0 0 24 24" className="" fill="rgb(222, 15, 64)">
                                    <use xlinkHref="#shape_dddd"></use>
                                </svg>
                            </div>
                        </div>
                    </section>
                    {/*<div className={"flex flex-col items-center relative"}>*/}
                    {/*    <div className={"max-w-48 max-h-48 mx-auto"}>*/}
                    {/*        <div*/}
                    {/*            className={`w-48 h-48 rounded-full overflow-hidden p-1 border-2 border-[#52c41a] border-solid`}>*/}
                    {/*            <div className={"relative w-full h-full rounded-full"}>*/}
                    {/*                <Image*/}
                    {/*                    className={"rounded-full object-cover object-center"}*/}
                    {/*                    src={BgNo2}*/}
                    {/*                    alt={"aaa"}*/}
                    {/*                    width={180}*/}
                    {/*                    height={180}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h2 className={`text-3xl font-medium uppercase mt-6`}>*/}
                    {/*        Xác nhận tham dự*/}
                    {/*    </h2>*/}
                    {/*    <p className={`text-[28px] pt-2 ${svnPRIMARK.className}`}>Hôn lễ của</p>*/}
                    {/*    <div*/}
                    {/*        className={`mt-2.5 flex justify-center items-center text-2xl font-bold ${svnMotherCarmel.className}`}>*/}
                    {/*        <span className={"pr-1"}>*/}
                    {/*            Đinh Nam*/}
                    {/*        </span>*/}
                    {/*        <Image*/}
                    {/*            src={HeartGif}*/}
                    {/*            alt={"heart.gif"}*/}
                    {/*            height={40}*/}
                    {/*            width={40}*/}
                    {/*        />*/}
                    {/*        <span>*/}
                    {/*            Trâm Anh*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*    <div className={"h-20 w-20 mt-3"}>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"*/}
                    {/*             preserveAspectRatio="none"*/}
                    {/*             viewBox="0 0 24 24" className="" fill="rgb(222, 15, 64)">*/}
                    {/*            <use xlinkHref="#shape_dddd"></use>*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                {
                    isSuccess ? _buildSuccess() : _buildForm()
                }
            </div>
            <Fireworks />
        </div>
    )
}

const HomePage = () => {
    return withTheme(<Home/>);
}

export default HomePage;
