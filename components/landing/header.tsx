import Link from "next/link";
import { ThemeSwitcher } from "@/components/landing/theme-switcher";
import { LanguageSwitcher } from "@/components/landing/language-switcher";

type HeaderProps = {
  translation: {
    header: {
      title: string;
    };
  };
};

const Header = ({ translation }: HeaderProps) => {
  const { title } = translation.header;

  // If you expect more fields, you can use a config object or map over an array of items
  // Example for future extensibility:
  // const headerItems = [
  //   { label: 'name', value: name },
  //   { label: 'copyright', value: copyright },
  //   // Add more items here as needed
  // ];

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>{title}</Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export { Header }