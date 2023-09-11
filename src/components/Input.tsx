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
        className="w-full h-2 bg-mainPurple rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-purple-800 [&::-webkit-slider-thumb]:rounded-full"
      />
    </div>
  );
}
