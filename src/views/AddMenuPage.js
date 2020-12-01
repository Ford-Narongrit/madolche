import React from 'react'
import {Link} from 'react-router-dom'
import "../css/addMenu.css"
import Header from '../components/header'
import Ingredient from '../components/ingredientComponent'

function addRow() {
    console.log("clicked")
    const div = document.createElement('div');
  
    div.className = '';
  
    div.innerHTML = `
    <div class="ingredientForm">
    <div class="ingredientName">
        <input placeholder="ส่วนผสม" tabIndex="1" class="ingredientInput" />
    </div>
</div>
`;
  
    document.getElementById('ingredientContent').appendChild(div);
  }
  
  function removeRow(input) {
      console.log("remove clicked")
    document.getElementById('ingredientContent').removeChild(input.parentNode);
  }

export default function AddMenuPage(props) {


    return(
        <div>
            
            
                <div className="row" style={{height:"100vh"}}>
                    <div className="col-sm-2 left" ></div>
                    <div className="col-sm-8 innermiddle">
                        <form>
                        <div class="form-group">
                            <label for="inputName" >ชื่ออาหาร</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="เช่น เค้กใบเตย"/>
                            
                            <label className="uploadImage" style={{marginTop:"15px"}}>
                                <input type="file" style={{display:"none"}} onChange />
                                <div className="inUpload">
                                    <div style={{marginLeft: "16.66667%",width:"66.66667%"}}>
                                        <div  style={{textAlign:"center"}}>อัพโหลดรูปภาพอาหาร</div>
                                    </div>
                                </div>
                                
                            </label>
                            {/* <div>ส่วนผสม</div> */}
                            <div className="suitFor">
                                <div className="suitForLabel">สูตรนี้สำหรับ</div>
                                <div className="suitInput">
                                    <input class="form-control" style={{textOverflow: "ellipsis"}} placeholder="1 ท่าน , 2 ท่าน , 3 ท่าน"/>
                                </div>
                            </div>
                            <div>ส่วนผสม</div>
                            <div id="ingredientContent" className="ingredientList">
                            <Ingredient/>
                            </div>
                            <div  className="addIngredientDiv" >
                                <button className="addIngredient" onClick={addRow}>+ เพิ่มส่วนผสม</button>
                            </div>


                        </div>
                        </form>
                    </div>
                    <div className="col-sm-2 left"  ></div>
                </div>
            
            <Header/>
        </div>
    )
}