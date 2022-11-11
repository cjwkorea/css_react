import React from "react";
import HeaderStyle from "styles/HeaderStyle"
import { useStae } from 'react';



const Header = () => {
  return <div style={HeaderStyle}>헤더입니다.
  <Modal></Modal>
 
  </div>;
  
};

const Modal = () => {
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}




export default Header;

