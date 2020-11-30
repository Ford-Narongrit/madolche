import React from 'react'
import '../css/showPage.css'
import dessert from '../images/dessert.jpg'

import HeaderNavBar from '../components/header'
import Step from '../components/step'
import BlockDetail from "../components/blockDetail";
import { Link } from 'react-router-dom'


export default function showPage() {
    return (
        <div>
            <HeaderNavBar />
            <div class="row">
                <div class="column">
                    <h2 style={{ textAlign: "center" ,marginBlockEnd: '30px' }}>ชื่ออาหาร</h2>
                    
                    {/* tag */}
                    <BlockDetail time='20 นาที' diff='ยากมากกก' size='4 คน'/>
                    <Step step="1" detail='faefefgagmklramg' image='https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg'/>
                    <Step step="1" detail='faefefgagmklramg' image='https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg'/>
                    <Step step="1" detail='faefefgagmklramg' image='https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg'/>
                    <Step step="1" detail='faefefgagmklramg' image='https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg'/>
                    <Step step="1" detail='faefefgagmklramg' image='https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg'/>
                </div>

                <div class="column">
                    <img src={dessert} className='showimage' />
                    <div className='ingredientsBorder'>
                        <div style={{ margin: '30px', borderRadius: '15px' }}>
                            <h3 style={{ textAlign: "center" }}>ส่วนผสม</h3>
                            <table className='ingredientsList'>
                                <tr>
                                    <th>รายการ</th>
                                    <th>จำนวน</th>
                                    <th>หน่วย</th>
                                </tr>
                                {/* ตรงนี้ควรเป็น loop */}
                                <tr>
                                    <td>น้ำตาล</td>
                                    <td>2</td>
                                    <td>ช้อนโต๊ะ</td>
                                </tr>
                                <tr>
                                    <td>น้ำ</td>
                                    <td>1</td>
                                    <td>ลิตร</td>
                                </tr>
                                <tr>
                                    <td>แป้งสาลี</td>
                                    <td>500</td>
                                    <td>กรัม</td>
                                </tr>
                                {/* ตรงนี้ควรเป็น loop */}
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{textAlign: 'center' , marginTop: '70px'}}>
                <h1>สูตรอาหารที่น่าสนใจ</h1>
            </div>
            <div style={{ margin: 'auto' , width: '50%' }}>
                <table style={{ width: '100%' }}>
                    <tr>
                        <th>ชื่ออาหาร</th>
                        <th>สร้างโดย</th>
                    </tr>
                    {/* ตรงนี้ควรเป็น loop */}
                    <tr>
                        <td><Link to=''>น้ำตาล</Link></td>
                        <td><Link to=''>น้ำตาล</Link></td>                    
                    </tr>
                    <tr>
                        <td><Link to=''>น้ำตาล</Link></td>    
                        <td><Link to=''>น้ำตาล</Link></td>    
                    </tr>
                    <tr>
                        <td><Link to=''>น้ำตาล</Link></td>    
                        <td><Link to=''>น้ำตาล</Link></td>    
                    </tr>
                    {/* ตรงนี้ควรเป็น loop */}
                </table>
            </div>
        </div>

    )

}
