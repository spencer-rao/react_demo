/*
 * @Description:  table
 * @Author: zhang yumei
 * @Date: 2021-02-07 15:15:52
 * @LastEditTime: 2021-02-07 16:20:22
 * @LastEditors: zhang yumei
 */
import React,{useEffect} from "react"
const adOneList = [
    { src: 1, title: "资源雄厚", mean: "阳光永辉，透明供应链", },
    { src: 2, title: "全渠道，多平台", mean: "1000+门店，助力您的销售", },
    { src: 3, title: "便捷服务", mean: "供零在线小助手，在线答疑解惑", },
    { src: 4, title: "实时发布", mean: "随时随地，在线上传", },
    { src: 5, title: "供零协同，一站服务", mean: "为供应零售全流程协同打造，满足供应商运营多元化需求", },
    { src: 6, title: "海量数据，智慧参谋", mean: "利用大数据存储、计算能力提供稳定可靠的数据服务", },
    { src: 7, title: "门店管理，运营助手", mean: "智能定位，轨迹跟踪，远程准确评估门店人员工时效率", },];
function Table(props) {
   useEffect(()=>{
    console.log("s")
   })
    return (
        <>
            <table style={{border:"1px solid black"}}>
                <thead >
                    <tr>
                        {adOneList.map((index,i)=>{
                            return <th key={i}>{index.title}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {adOneList.map((index,i)=>{
                            return <td key={i}>{index.mean}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Table