export default function Input({
  value,
  setValue,
  min = -200,
  max = 200,
}: {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
    </div>
  );
}
