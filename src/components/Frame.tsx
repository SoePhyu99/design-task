interface Props {
  children: React.ReactNode;
}

const Frame = ({ children }: Props) => {
  return (
    <div className="max-w-[1280px] mx-auto px-[15px] sm:px-0">{children}</div>
  );
};

export default Frame;
