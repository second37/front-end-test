import React from 'react'
import Layout from '../src/app/layout'
import Image from 'next/image';
import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";
import { FiEdit, FiSave } from "react-icons/fi";

export default function Edit() {
    return (
        <Layout withHeader2 withFooter>
            <div className="bg-light flex-fill flex-column">
                <form>
                    <section className="container">
                        <div className="row my-5">
                            <div className="col">
                                <h3>แก้ไขการแสดงผลงาน</h3>
                            </div>
                            <div className="col text-end">
                                <Link href="/">
                                    <button type="button" className="btn btn-light border border-2 col-form-label rounded-circle mx-1"><FaArrowLeft /></button>
                                </Link>
                                {/* <Link href="/"> */}
                                <button type="submit" className="btn btn-light border border-2 col-form-label rounded-circle mx-1"><FiSave /></button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </section>

                    <section className="container bg-white border p-4 mb-4 rounded-3">
                        <h3>Digital Ocean</h3>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-2 col-form-label">ประเภทงาน</label>
                            <div className="col-4">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <h3 className="my-3"><b>เจ้าของสิทธิ์</b></h3>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <label for="inputCity" className="form-label">ชื่อ<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="inputCity" required />
                            </div>
                            <div className="col-4">
                                <label for="inputCity" className="form-label">เบอร์โทรศัพท์<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="inputCity" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <label for="inputCity" className="form-label">อีเมล<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="inputCity" required />
                            </div>
                        </div>
                    </section>

                    <section className="container bg-white border p-4 mb-4 rounded-3">
                        <div className="row border-bottom p-3 border-2">
                            <h2><b>ข้อมูลผลงาน</b></h2>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">
                                <p for="inputCity" className="form-label">ระยะเวลาการแสดงผลให้ผู้อื่นเห็น</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">ไม่แสดง</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">แสดง</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <label for="inputCity" className="form-label">วันที่เริ่มต้น<span className="text-danger">*</span></label>
                                <input type="date" className="form-control" id="inputCity" required />
                                <label for="inputCity" className="form-label text-muted">ตัวอย่าง : 01/01/2556</label>
                            </div>
                            <div className="col-2 justify-content-center">
                                <div className="form-check form-switch">
                                    <p for="inputCity" className="form-label">วันที่สิ้นสุด<span className="text-danger">*</span></p>
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                </div>
                            </div>
                            <div className="col-3">
                                <p for="inputCity" className="form-label"></p>
                                <input type="date" className="form-control" id="inputCity" required />
                                <label for="inputCity" className="form-label text-muted">ตัวอย่าง : 01/01/2556</label>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <label for="inputCity" className="form-label">รายละเอียด</label>
                                <div className="form-floating w-100">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">รายละเอียด</label>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </Layout>
    )
}
