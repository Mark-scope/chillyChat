function Select(){
    return(
        <div className="w-full  font-Poppins mt-[20px]">
            <select name="amount"  className="w-full h-12 text-center border-2 rounded-lg border-bordercolor bg-inputcolor outline-none">
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