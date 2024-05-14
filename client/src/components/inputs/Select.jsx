function Select(){
    return(
        <div className="w-72 h-10 font-Poppins m-auto mt-6">
            <select name="amount"  className="w-full h-full text-center border-2 rounded-lg border-bordercolor bg-inputcolor outline-none">
                <option value="">--Choose Amount--</option>
                <option value="5.00">5.00</option>
                <option value="10.00">10.00</option>
                <option value="10.00">15.00</option>
                <option value="10.00">20.00</option>
                <option value="10.00">25.00</option>
                <option value="10.00">30.00</option>
                
            </select>
        </div>
    )
}
export default Select