import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        `md:px-20 px-6 overflow-x-hidden max-w-[1440px] mx-auto`,
        className
      )}
    >
      {children}
    </div>
  );
};
