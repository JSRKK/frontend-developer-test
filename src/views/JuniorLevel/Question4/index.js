import React, { Component } from "react"
import { Container, Card, Section } from 'react-bulma-components'
class Question4 extends Component {

    render() {
        return (
            <Container>
                <Card>
                    <Section>
                        <h1>Spread syntax : คือ การเป็นการแยกข้อมูลในรูปแบบ array ออกมาเป็นข้อมูลเดี่ยว ซึ่งสามารถนำไปใช้กับการนำข้อมูล array ตั้งแต่ 2 ชุดขึ้นไปมาต่อกัน โดยเครื่องหมายจุด 3 ชุด นำหน้าตัวแปร array เช่น arr3 = [...arr1, ...arr2] </h1>
                        <h1>Rest syntax: คือ วิธีการที่ทำให้ฟังก์ชั่นสามารถรับค่าตัวแปรได้แบบไม่จำกัดจำนวน โดยใส่เครื่องหมายจุด 3 ชุด นำหน้าตัวแปรที่รับเข้ามา เช่น let result = count(a, b, c); function count(...arg){`{ console.log(arg.length) }`}</h1>
                    </Section>
                </Card>
            </Container>
        )
    }
}

export default Question4