import Image from "../../assets/profile-circle.png"
function Profile(props){
    return(
        <div className="flex ml-4 w-40 h-12 justify-center items-center bg-mildviolet ">
           <p className="text-violet pr-4 ">{props.name}</p>
           <img src={Image} />
        </div>
    )
}

export default Profile