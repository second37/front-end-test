import styles from './page.module.css'
import Layout from './layout'
import 'bootstrap/dist/css/bootstrap.css';
import { FiHome } from "react-icons/fi";

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
              <div className="container-fluid mx-3 my-5">
                <h3><b>รายการผลงาน</b></h3>
              </div>
            </div>
          </section>
        </main>
      </Layout>
  )
}
