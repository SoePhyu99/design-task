interface Props {
  children: React.ReactNode;
}

const Frame = ({ children }: Props) => {
  return <div className="max-w-[1280px] mx-auto">{children}</div>;
};

export default Frame;
