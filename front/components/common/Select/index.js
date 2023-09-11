import Form from 'react-bootstrap/Form';

export default function Select({
  options = [],
  customSelectClass = '',
  onChange,
}) {
  return (
    <Form.Select
      aria-label="Default select example"
      className={customSelectClass}
      onChange={onChange}
    >
      {options.map((option, i) => {
        return (
          <option key={option} value={i + 1}>
            {option}
          </option>
        );
      })}
    </Form.Select>
  );
}
