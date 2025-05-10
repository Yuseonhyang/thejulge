interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

export default function ImageUploader({ className, ...props }: Props) {
  return (
    <div>
      <input
        type="file"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        {...props}
      />
      <img />
    </div>
  );
}
