"use client";
import React from "react"
import './globals.css'
import Layout from './layout'
import 'bootstrap/dist/css/bootstrap.css';
import { FiHome, FiRefreshCcw } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt, FaRegEye } from "react-icons/fa";
import { useState, useMemo } from "react";
import { LuCheckSquare, LuXSquare } from "react-icons/lu";
import Pagination from 'rc-pagination';
import { Router, useRouter } from 'next/router';
import Link from "next/link";


export default function Home() {

  const dataTable =
    [{
      name: 'name',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "1"
    },
    {
      name: 'name2',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "1"
    },
    {
      name: 'name3',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "2"
    },
    {
      name: 'name4',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "1"
    },
    {
      name: 'name5',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "2"
    },
    {
      name: 'name6',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "1"
    },
    {
      name: 'name7',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "2"
    },
    {
      name: 'name8',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "1"
    },
    {
      name: 'name9',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "1"
    },
    {
      name: 'name10',
      type: 'type',
      dateShow: "19/05/2023",
      dateOut: "20/05/2023",
      status: "2"
    },
    ]

  // const router = useRouter();

  function checkAll(o) {
    var boxes = document.getElementsByTagName("input");
    for (var x = 0; x < boxes.length; x++) {
      var obj = boxes[x];
      if (obj.type == "checkbox") {
        if (obj.name != "check")
          obj.checked = o.checked;
      }
    }
  }

  // -----------------------Paginate-----------------------------
  const [perPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(dataTable?.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }

  const getData = (current, pageSize) => {
    return dataTable?.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize)
  }

  const PrevNextArrow = (current, type, originalElement, pScollTop = true) => {
    if (type === 'prev') {
      return <button className="button-paginate border border-2 bg-white shadow-none mt-1 px-5 py-2 mx-5" style={{ borderRadius: "1px" }} title="Previous">Previous</button>;
    }
    if (type === 'next') {
      return <button className="button-paginate border border-2 bg-white shadow-none mt-1 px-5 py-2 mx-5" style={{ borderRadius: "1px" }} title="Next">Next</button>;
    }
    return originalElement;
  }
  // -----------------------Paginate-----------------------------

  return (
    <Layout withHeader>
      <main className="containner-fluid d-flex flex-column flex-fill" style={{ backgroundColor: "#1f3a8b" }}>
        <section className="containner-fluid d-flex flex-fill flex-column mx-4 my-5">
          <ul className="nav nav-tabs border-0 mx-5 ps-4">
            <li className="nav-item">
              <a className="nav-link rounded-bottom-0 rounded-3 bg-light active" aria-current="page">
                <b className="px-2"><FiHome /></b> <b className="pe-2">หน้าหลัก</b>
              </a>
            </li>
          </ul>
          <div className="d-flex flex-fill flex-column bg-light rounded-3 mx-5" >
            <div className="mx-3 my-5">
              <h3 className="mx-3 my-5"><b>รายการผลงาน</b></h3>
              <div className="containner-fluid d-flex flex-fill flex-column bg-white rounded-3 p-4 m-3 shadow">
                <div className="row mb-3">
                  <div className="col-6">
                    <form className="row">
                      <div className="col-auto">
                        <p type="text" readonly className="form-control-plaintext">ค้นหา</p>
                      </div>
                      <div className="col-9">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="ชื่อผลงาน" />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary shadow col-form mb-3"><CiSearch size={22} /></button>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-secondary shadow col-form mb-3"><FiRefreshCcw size={22} /></button>
                      </div>
                    </form>
                  </div>
                  <div className="col-6">
                    <form>
                      <div className="row justify-content-end">
                        <div className="col-auto">
                          <button type="submit" className="btn btn-light shadow col-form mb-3"><FaRegTrashAlt size={25} /></button>
                        </div>
                        <div className="col-auto">
                          <button type="submit" className="btn btn-light shadow col-form mb-3"><FaRegTrashAlt size={25} /> Delete All</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row border-bottom border-top p-3">
                  <div className="col-1">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" onClick={() => { checkAll() }} id="checkAll" />
                    </div>
                  </div>
                  <div className="col">
                    <b>ชื่อผลงาน</b>
                  </div>
                  <div className="col">
                    <b>ประเภทผลงาน</b>
                  </div>
                  <div className="col">
                    <b>วันที่แสดงผลงาน</b>
                  </div>
                  <div className="col">
                    <b>วันที่สิ้นสุดแสดงผลงาน</b>
                  </div>
                  <div className="col">
                    <b>สถานะ</b>
                  </div>
                  <div className="col">
                    {/* null */}
                  </div>
                </div>

                <>
                  {
                    dataTable?.length > 0 ? (
                      <Link href="/detail" style={{ textDecoration: "none" }}>
                        {getData(current, size)?.map((item, index) => (
                          <div className="row border-bottom table-hover pointer p-3" key={index}>
                            <div className="col-1">
                              <div className="form-check">
                                <input className="form-check-input checkOption" type="checkbox" name="checkOption" id="checkOption" />
                              </div>
                            </div>
                            <div className="col">
                              {item.name}
                            </div>
                            <div className="col">
                              {item.type}
                            </div>
                            <div className="col">
                              {item.dateShow}
                            </div>
                            <div className="col">
                              {item.dateOut}
                            </div>
                            <div className="col">
                              <>
                                {
                                  item.status == 1 ? (
                                    <span className="text-success"><LuCheckSquare /> แสดง</span>
                                  ) : (
                                    <span className="text-danger"><LuXSquare /> ไม่แสดง</span>
                                  )
                                }
                              </>
                            </div>
                            <div className="col">
                              <span><FaRegEye /> รายละเอียด</span>
                            </div>
                          </div>
                        ))}
                      </Link>
                    ) : (
                      <>
                        <div className="row border-bottom text-center p-3">
                          <span><b>ไม่มีข้อมูล</b></span>
                        </div>
                      </>
                    )
                  }
                </>

                <section className="container-fluid flex-fill d-flex justify-content-between mt-3">
                  <div className="row flex-fill ">
                    <div className="col">
                      <div className="row">
                        <label for="inputPassword" className="col-sm-2 col-form-label"><b>Page size</b></label>
                        <div className="col">
                          <select className="form-select w-30">
                            <option value="5" selected>5</option>
                            <option value="10" >10</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      {dataTable?.length > 0 ? (
                        <div className="text-center">
                          <Pagination
                            className="button-paginate"
                            onShowSizeChange={PerPageChange}
                            onChange={PaginationChange}
                            itemRender={PrevNextArrow}
                            total={dataTable?.length}
                            current={current}
                            pageSize={size}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>
      </main >
    </Layout >
  )
}
