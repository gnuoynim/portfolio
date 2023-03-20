
const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     {children}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
};

export default BaseLayout;
