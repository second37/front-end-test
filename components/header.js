
const Header = () => {
  return (
    <header>
      <nav className="navbar border-bottom text-white p-4" style={{ fontFamily: 'Inter',backgroundColor: "#1f3a8b" }}>
        <div className="container-fluid">
        <h1 className="px-5">Logo</h1>
          <div className="row flex-fill px-3">
            <div className="col border-start">Test Front-end (Amethyst Solutions)</div>
            <div className="col text-end">Phoomin boonanan</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;