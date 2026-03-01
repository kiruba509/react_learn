function Header() {
  return (
    <header style={styles.header}>
      <h1>My React Learning</h1>
      <nav>
        <a href="#">Home</a> | 
        <a href="#"> About</a> | 
        <a href="#"> Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center"
  }
};

export default Header;