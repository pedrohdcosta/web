interface Props {
  children: React.ReactNode;
  margin?: string;
}

const Button = ({ children, margin }: Props) => {
  return (
    <a
      className={`cursor-pointer rounded-sm bg-rose-800 px-4 py-1 transition hover:brightness-90 ${
        margin && margin
      }`}
    >
      {children}
    </a>
  );
};

export default Button;
