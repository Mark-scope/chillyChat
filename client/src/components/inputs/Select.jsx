function Select({ options }){
    return(
        <div className="w-full  font-Poppins mt-[20px]">
            <select name="amount"  className="w-full h-12 text-center border-2 rounded-lg border-bordercolor bg-inputcolor outline-none">
                <option value="">--Choose Amount--</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    )
}
export default Select

// Example usage

