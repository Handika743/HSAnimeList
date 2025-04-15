import Link from "next/link";

const Header = (props) => {
  const { title = "....", linkTitle = "....", linkHref } = props;
  return (
    <div className="p-5 text-center flex justify-between items-center text-color-primary">
      <h1 className="bg-orange-500 p-2 font-bold border-2 border-black rounded-lg hover:scale-105 hover: 0.3s ease-in-out transition-all">
        {title}
      </h1>
      {linkTitle && linkHref ? (
        <Link href={linkHref} className="underline p-2 hover:text-color-accent">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
