const Select = ({ options }) => (
  <div className="w-full font-Poppins mt-[20px]">
    <select
      name="amount"
      className="w-full h-12 text-left border-2 rounded-lg border-bordercolor bg-inputcolor px-4 outline-none"
    >
      <option value="">{options[0].choose}</option>
      {options.slice(1).map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
);

export default Select;

// Example usage:
const MySelect = () => (
  <Select
    options={[
      { value: '', text: 'Choose an option' },
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3' },
    ]}
  />
);

