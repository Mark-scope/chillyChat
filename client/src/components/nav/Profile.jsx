import Image from "../../assets/profile-circle.png"
function Profile(props){
    return(
        <div className="flex ml-4 w-[130px] h-12 justify-center items-center bg-mildviolet rounded-md">
           <p className="text-violet pr-4 ">{props.name}</p>
           <img src={Image} />
        </div>
    )
}

export default Profile