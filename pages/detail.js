import React from 'react'
import Layout from '../src/app/layout'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";


export default function detail() {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const [piclist, setpiclist] = useState([
        {
            "url": "../public/image/logo01.webp",
        },
    ]);
    return (
        <Layout withHeader2 withFooter>
            <main className="containner d-flex flex-column flex-fill bg-light p-4">
                <div className="row containner justify-content-center">
                    <div className="col-4 m-4 shadow rounded-3">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item text-center py-5 active">
                                    <Image width={350} height={350} src="/image/logo01.webp" alt="main" />
                                </div>
                                <div className="carousel-item text-center py-5">
                                    <Image width={350} height={350} src="/image/logo02.webp" alt="main" />
                                </div>
                                <div className="carousel-item text-center py-5">
                                    <Image width={350} height={350} src="/image/logo03.webp" alt="main" />
                                </div>
                                <div className="carousel-item text-center py-5">
                                    <Image width={350} height={350} src="/image/logo04.webp" alt="main" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="row py-4">
                            <div className="col text-center" data-bs-target="#carouselExampleControls" data-bs-slide-to="0">
                                <Image width={50} height={50} src="/image/logo01.webp" alt="second" />
                            </div>
                            <div className="col text-center" data-bs-target="#carouselExampleControls" data-bs-slide-to="1">
                                <Image width={50} height={50} src="/image/logo02.webp" alt="second" />
                            </div>
                            <div className="col text-center" data-bs-target="#carouselExampleControls" data-bs-slide-to="2">
                                <Image width={50} height={50} src="/image/logo03.webp" alt="second" />
                            </div>
                            <div className="col text-center" data-bs-target="#carouselExampleControls" data-bs-slide-to="3">
                                <Image width={50} height={50} src="/image/logo04.webp" alt="second" />
                            </div>
                        </div>
                        <ul className="m-5">
                            <li className="mb-2">Remove a list’s bullets and apply some light margin with a combination of two classes, .list-inline and .list-inline-item.</li>
                            <li className="mb-2">Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a .text-truncate className to truncate the text with an ellipsis.</li>
                        </ul>
                    </div>
                    <div className="col-4 m-4 p-5 boder shadow rounded-3">
                        <div className="row mb-3">
                            <div className="col">
                                <h3>Digital Ocean</h3>
                            </div>
                            <div className="col text-end">
                                <button type="button" className="btn btn-light border border-2 col-form-label rounded-circle mx-1"><FaArrowLeft /></button>
                                <button type="button" className="btn btn-light border border-2 col-form-label rounded-circle mx-1"><FiEdit /></button>
                            </div>
                        </div>
                        <p>ประเภทผลงาน: <b>ศิลปะกรรม</b></p>
                        <p>วันที่เริ่มต้น</p>
                        <p>วันที่แสดง</p>
                        <p><b>เจ้าของสิทธิ์</b></p>
                        <div className="border border-2 p-3 rounded-3">

                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
