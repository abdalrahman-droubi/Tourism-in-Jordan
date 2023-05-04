function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <nav aria-label="breadcrumb" className="justify-content-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#">Data</a>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
}

export default Header;
