import OrbitImages from "./OrbitImages";
import ifnmu from "../img/ifnmu_logo.png"

const images = [
  ifnmu,
  ifnmu,
  ifnmu,
  ifnmu,
  ifnmu,
  ifnmu,
  ifnmu,
  ifnmu,
  ifnmu,
  
]; 

function OrbitalLogo(){
    return(
        <div className="w-4/4 mx-auto relative" >
            <OrbitImages
            images={images}
            shape="circle"
            radiusX={100}
            radiusY={100}
            rotation={-107}
            duration={30}
            itemSize={50}
            responsive={true}
            radius={170}
            direction="reverse"
            fill
            showPath={false}
            paused={false}
            className=" w-4/4 -translate-y-100"
        />  
        <img className="absolute top-26 w-20 left-135" src={ifnmu} alt="" />
        </div>
    )
}
export default OrbitalLogo