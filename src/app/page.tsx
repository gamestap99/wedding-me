'use client';

import React, {FormEvent} from "react";
import Image from 'next/image'
import BgNo2 from './assets/bg_no2.jpg';
import HeartGif from './assets/heart.gif';
import {FormProps} from 'antd';
import {Button, Form, Input, Radio} from 'antd';

type FieldType = {
    Name?: string;
    Type?: string;
    Status?: string;
    Message?: string;
};

export default function Home() {

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);

        const formData = new FormData()

        formData.set('Name', values.Name!);
        formData.set('Type', values.Type!);
        formData.set('Status', values.Status!);
        formData.set('Message', values.Message!);

        fetch("https://script.google.com/macros/s/AKfycbyUklq2p7WiYkBNpzqitIZOKOpJwbJLcClU5REPZgAu8sSwD092KPd2YsdNUc1qOtL3/exec", {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert(data.msg);
            })
            .catch(err => console.log(err));
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        fetch("https://script.google.com/macros/s/AKfycbyUklq2p7WiYkBNpzqitIZOKOpJwbJLcClU5REPZgAu8sSwD092KPd2YsdNUc1qOtL3/exec", {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert(data.msg);
            })
            .catch(err => console.log(err));
    }

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
                <div className={"rounded-0 bg-gray-200 border-b px-3 py-4"}>
                    <div className={"flex flex-col items-center"}>
                        <div className={"max-w-40 max-h-40 mx-auto"}>
                            <div
                                className={"w-40 h-40 rounded-full overflow-hidden p-1 border-2 border-red-500 border-solid"}>
                                <div className={"relative w-full h-full rounded-full"}>
                                    <Image
                                        className={"rounded-full object-cover object-center"}
                                        src={BgNo2}
                                        alt={"aaa"}
                                        fill
                                        objectFit={"cover"}
                                    />
                                </div>
                            </div>
                        </div>
                        <h2 className={"text-3xl font-medium uppercase mt-3"}>
                            Xác nhận tham dự
                        </h2>
                        <p className={"text-[22px] pt-2"}>Hôn lễ của</p>
                        <div className={"flex justify-center items-center text-2xl font-bold"}>
                            <span>
                                Đinh Nam
                            </span>
                            <Image
                                src={HeartGif}
                                alt={"heart.gif"}
                                height={50}
                                width={50}
                            />
                            <span>
                                Trâm Anh
                            </span>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col items-center mt-6"}>
                    <Form
                        name="basic"
                        style={{maxWidth: 600}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item<FieldType>
                            name="Name"
                            rules={[{required: true, message: 'Please input your username!'}]}
                            label="Họ và Tên"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="Type"
                            label="Bạn là..."
                        >
                            <Radio.Group>
                                <Radio value="1">Khách nhà Trai</Radio>
                                <Radio value="0">Khách nhà Gái</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item<FieldType>
                            name="Status"
                            label="Bạn tham dự hôn lễ cùng chúng tớ nhé!!!"
                        >
                            <Radio.Group>
                                <Radio value="1">Oke!!!</Radio>
                                <Radio value="0">Bận mất rồi {"=<<"}</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item<FieldType>
                            name="Message"
                            label="Ghi chú/ Nhắn nhủ/ Góp ý"
                        >
                            <Input.TextArea rows={4}/>
                        </Form.Item>

                        <div className={"flex flex-col items-center italic"}>
                            <div>
                                Sự hiện diện của Quý vị
                            </div>
                            <div>
                                là niềm vinh hạnh cho gia đình chúng tôi
                            </div>
                            <div>
                                Rất hân hạnh được đón tiếp!
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                <Button type="primary" htmlType="submit">
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
