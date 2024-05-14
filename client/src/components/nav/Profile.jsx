import Image from "../../assets/profile-circle.png"
function Profile(props){
    return(
        <div className=" bg-mildviolet w-40  p-3 absolute left-[80%] top-5">
           <div className="w-36 h-5  flex space-x-5"> <p className="text-violet text-xl pl-4">{props.name}</p><img src={Image} /></div>
        </div>
    )
}

export default Profile