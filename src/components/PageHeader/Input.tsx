import { MagnifyingGlass } from "@phosphor-icons/react";

export function Input() {
  return (
    <div className="flex items-center h-8 border-[1px] border-flow-green-dark-50 border-opacity-50 rounded-sm overflow-hidden bg-flow-green-dark-500 bg-opacity-25 focus-within:border-flow-green-dark-500">
      <input
        type="search"
        placeholder="Gasto..."
        className="h-full bg-transparent px-2 text-flow-green-dark-50 placeholder-flow-green-dark-200"
      />
      <button className="h-full aspect-square flex items-center justify-center bg-flow-green-dark-500">
        <MagnifyingGlass
          size={16}
          weight="bold"
          className="text-flow-green-dark-950 rotate-90"
        />
      </button>
    </div>
  );
}
