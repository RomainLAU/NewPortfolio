export default function Input({
  value,
  setValue,
  min,
  max,
}: {
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
}) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      onChange={(e) => setValue(parseFloat(e.target.value))}
    />
  );
}
