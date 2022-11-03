/** @jsxImportSource @emotion/react */
// ข้างบนต้องไว้บรรทัดแรกเท่านั้น เป็นตัว import แบบพิเศษเพิ่อใช้ emotion

/**
 * อ่าน beta doc!!!!! https://beta.reactjs.org/learn
 * อธิบาย 90%!!
 */

import { css } from "@emotion/react"

/**
 * ส่วน import component อื่น
// import ชื่อcomponent from '/components/ตำแหน่งไฟล์'
// import ชื่อcomponent2 from 'ตำแหน่งไฟล์2'
 * ส่วน import constants 
// import fonts from '/constant/fonts.js'
 */

/** 
 * การสร้าง component
 *  เหมือนการสร้างฟังก์ชั่นปกติเลย
 * 
 *  
 * ในวงเล็บจะเป็น ค่าที่รับมาจากภายนอก(การส่งค่าจากcomponentแม่สู้componentลูก ไม่ก็จาก getServerSideProps)
 * ทำได้สองแบบ:
 *   function ComponentName({ ชื่อprop1, ชื่อprop2, ชื่อprop3 }): กำหนดรับโดยตรง, ตัวนอกเหนือจะไม่ถูกนำเข้าด้วย หรือ
 *   function ComponentName(props): กำหนดรับทุกตัว เวลาจะ get ค่า ใช้ props.ชื่อprop1, props.ชื่อprop2
 */
function ExampleComponent(props) {
  /**
   *  PROPS จะมี prop ตัวที่พิเศษชื่อ children หมายถึงตัวที่เรายัดให้เป็นลูกของ component นี้
   *  แบบ สมมุติมีตัวที่เรียกใช้ component ที่เราสร้างไว้ชื่อ MyComponent ก็จะประมาณว่า
   *  <MyComponent>
   *    <div>
   *      ข้อความใส้ใน
   *    </div>
   *  </MyComponent>
   *  children ก็จะเป็น : <div>ข้อความใส้ใน</div>
   */

  return (
    /**
     * ส่วนใน return เขียนแบบเดียวกับ html ปกติเลย
     */

    /**
     * ส่วน css={css``} ถ้างง syntax:
     * css={} คือส่วนยัดค่าcssให้ component เป็นตัวที่ react จะไปประมวณผลเพิ่มข้างหลัง
     * css`` คือส่วนที่เรา import มาจาก emotion ข้างในเขียนเหมือน css ปกติเลย
     * 
     * เพิ่มเติม CSS:
     * สมมุติเราอยากจะให้มันมีซัมติงเกิดขึ้นตอน hover เราใช้ & แทนปกติที่เราจะใส่ชื่อ class ได้เลย
     * หรือว่าจะให้ลูกทุกตัวขยาย
     * example:
     * css`
     *   color: black;
     *   &:hover {
     *     color: red;
     *   }
     *   & > * {
     *      transform: scale(1.05);
     *   }
     * `
     * 
     * เวลาใส่ค่าให้ attribute: ถ้าเป็น string: name='pinepine' อย่างอื่น: name={props.userName} 
     */
    <div>
      <h1 css={css`
        font-size: 2rem;
        height: 4rem;
        width: 20rem;
        background-color: red;
      `}>
        this is ExampleComponent
      </h1>
      {props.children}
    </div>
  )
}