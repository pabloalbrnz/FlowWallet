interface ButtonProps {
  placeholder: string;
}

export function Button(props: ButtonProps) {
  return (
    <button className="text-flow-green-dark-50 font-poppins text-md px-4 h-8 border-[1px] border-opacity-25 border-flow-green-dark-50 rounded-sm bg-flow-green-dark-500 bg-opacity-25 transition-all ease-linear hover:rounded-lg hover:border-opacity-100 hover:bg-opacity-100 hover:bg-flow-green-dark-700 hover:text-flow-green-dark-night focus:border-flow-green-dark-500 box-border">
      {props.placeholder}
    </button>
  );
}
