import gambar from "/gambar.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <title>Landing Page</title>
      <header>
        <Link to="/CreateProduct">
          <button>Create Product</button>
        </Link>
        <h4 style={{ fontFamily: "arial" }}>Simple Header</h4>
        <hr />
      </header>
      <br />
      <br />
      <section style={{ marginLeft: "3%" }}>
        <h1>
          Better Solution For Your
          <br />
          Business
        </h1>
        <p>
          We are team of talented designers making website with
          <br />
          Bootstrap
        </p>
        <br />
        <div>
          <input type="button" defaultValue="Get Started" width="20px" />
          <a:hover style={{ marginLeft: 30 }} href="#">
            Watch Video
          </a:hover>
        </div>
        <img src={gambar} className="gambar" alt="gambar" width="400px" height="400px" />
      </section>
      <section style={{ marginLeft: "3%" }}>
        <h3>Join Our Newsletter</h3>
        <p>Tamen quem nulla legam multos autesint culpa legam noster magna</p>
        <form>
          <input type="text" size={65} />
          <br />
          <br />
          <input type="button" defaultValue="Get Started" />
        </form>
      </section>
      <br />
      <br />
      <hr />
      <footer style={{ marginLeft: "3%" }}>
        <p>
          Copyright <b>Arsha</b>. All Right Reserved
        </p>
        <p>Designer by BootstrapMade</p>
      </footer>
    </>
  );
}

export default LandingPage;
