import styles from './page.module.css'
import Layout from './layout'
import 'bootstrap/dist/css/bootstrap.css';
import { FiHome, FiRefreshCcw } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home() {

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
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      {/* <label className="form-check-label" for="flexCheckDefault">
                          ชื่อผลงาน
                        </label> */}
                    </div>
                  </div>
                  <div className="col">
                    ชื่อผลงาน
                  </div>
                  <div className="col">
                    ประเภทผลงาน
                  </div>
                  <div className="col">
                    วันที่แสดงผลงาน
                  </div>
                  <div className="col">
                    วันที่สิ้นสุดแสดงผลงาน
                  </div>
                  <div className="col">
                    สถานะ
                  </div>
                </div>

                <div className="row border-bottom p-3">
                  <div className="col-1">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      {/* <label className="form-check-label" for="flexCheckDefault">
                          ชื่อผลงาน
                        </label> */}
                    </div>
                  </div>
                  <div className="col">
                    ชื่อผลงาน
                  </div>
                  <div className="col">
                    ประเภทผลงาน
                  </div>
                  <div className="col">
                    วันที่แสดงผลงาน
                  </div>
                  <div className="col">
                    วันที่สิ้นสุดแสดงผลงาน
                  </div>
                  <div className="col">
                    สถานะ
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main >
    </Layout >
  )
}
