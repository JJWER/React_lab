import React, { Component } from "react";
import Counter from "./counter";

//import รูปภาพสินค้า
import Phone from "./Phone.jpg";
import Tablet from "./Tablet.jpg";
import Computer from "./Computer.jpg";
import Labtop from "./Labtop.jpg";

//จัดการกับสินค้า
class CounterList extends Component {
  state = {
    //กำหนดชื่อ-ราคาสินค้า
    itemlist: [
      { id: 1, value: 0, itemname: "Phone", price: 2899, image: Phone },
      { id: 2, value: 0, itemname: "Tablet", price: 3545, image: Tablet },
      { id: 3, value: 0, itemname: "Computer", price: 15080, image: Computer },
      { id: 4, value: 0, itemname: "Labtop", price: 11999, image: Labtop },
    ],
    total: 0, // เพิ่ม state total เพื่อเก็บราคารวม
  };

  // คำนวณรารคาสินค้าทั้งหมด
  calculateTotalPrice = () => {
    return this.state.itemlist.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
  };

  // เมธอด Render สำหรับคอมโพเนนต์ CounterList
  render() {
    return (
      
      <div className="container">
        <div className="text-right">
          <div className="d-inline mx-2 t">Total Price: {this.state.total} THB</div>
          
          <button onClick={this.resetButton} className="btn-warning btn-sm "> Reset </button>
        </div>      
        <div className="row mt-4">
          {this.state.itemlist.map((item) => {
            return (
              <div className="col-md-3" key={item.id}>
                <div className="text-center">
                  <Counter
                    item={item}
                    onIncrement={this.Increment}
                    onDecrement={this.Decrement}
                  />                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }


  // เมธอดบวกราคาสำหรับสินค้าแต่ละชิ้น
  Increment = (item) => {
    var _itemList = [...this.state.itemlist];
    const indexItem = _itemList.indexOf(item);
    _itemList[indexItem] = { ...item };
    _itemList[indexItem].value++;

    // คำนวณราคารวมใหม่
    const newTotal = _itemList.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.price;
    }, 0);

    this.setState({ itemlist: _itemList, total: newTotal }); // อัพเดต state ราคารวม
  };

  Decrement = (item) => {
    var _itemList = [...this.state.itemlist];
    const indexItem = _itemList.indexOf(item);
    _itemList[indexItem] = { ...item };
    if (_itemList[indexItem].value > 0) {
      _itemList[indexItem].value--; // ลบเฉพาะถ้าค่าปัจจุบันมากกว่า 0
    }

    // คำนวณราคารวมใหม่
    const newTotal = _itemList.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.price;
    }, 0);

    this.setState({ itemlist: _itemList, total: newTotal }); // อัพเดต state ราคารวม
  };

  // ตัวจัดการคลิกปุ่มรีเซ็ตเพื่อกำหนดค่าของสินค้าทั้งหมดเป็น 0
  resetButton = () => {
    var resetItem = this.state.itemlist.map((item) => {
      item.value = 0;
      return item;
    });

    // รีเซ็ตราคารวมเป็น 0
    this.setState({ itemlist: resetItem, total: 0 });
  };
}

export default CounterList;