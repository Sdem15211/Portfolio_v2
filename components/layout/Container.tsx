export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-20 px-6 overflow-x-hidden max-w-[1440px] mx-auto">
      {children}
    </div>
  );
};
