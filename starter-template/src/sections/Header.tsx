export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About Me</a>
        <a href="#" className="nav-item">Contact</a>
      </nav>
    </div>
  );
};
