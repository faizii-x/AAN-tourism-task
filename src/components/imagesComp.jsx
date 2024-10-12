
import One from "../../public/images/oneimg.jpg"
import Two from "../../public/images/twoimg.jpg"
import Three from "../../public/images/three.jpg"
import Big from "../../public/images/big.jpg"
const ImagesComp = () => {
  return (
    <>
    
    <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
            <div className="flex-col flex justify-between h-[100%]">
            <img src={One} alt="" className=""/>
            <img src={Two} alt=""  className=""/>
            <img src={Three} alt="" />
            </div>
        </div>
        <div className="col-span-10">
        <img src={Big} alt="" className="h-[410px] w-full"/>

        </div>
    </div>
    
    
    </>
  )
}

export default ImagesComp