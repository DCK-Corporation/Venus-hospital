import TopBar from "./TopBar";
import MiddleNav from "./MiddleNav";
import MainNav from "./MainNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <TopBar />
      <MiddleNav />
      <MainNav />
    </header>
  );
}
