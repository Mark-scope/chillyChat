
function Profile(props){
    return(
        <div className=" bg-mildviolet w-40  px-4 py-3 absolute left-[80%] top-5">
           <div className="w-36 h-5 m-auto"> <p className="text-violet text-xl">{props.name}</p></div>
        </div>
    )
}

export default Profile