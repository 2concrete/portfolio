import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <header>
          <nav>
            <ul className="flex">
              <li>
                <a>home</a>
              </li>
              <li>
                <a>projects</a>
              </li>
              <li>
                <a>contact</a>
              </li>
            </ul>
            <div className="flex">
              <li>
                <a
                  href="https://github.com/2concrete"
                  data-feather="github"
                ></a>
              </li>
              <li>
                <a href data-feather="linkedin"></a>
              </li>
            </div>
          </nav>
        </header>
        <section className="about">
          <div className="text">
            <h1>hi, im daniel. 👋</h1>
            <p>
              learning web development in year 12
              <br /> <strong>perth</strong>, western australia
            </p>
            <p>
              proficient in <strong>html</strong> and <strong>css</strong>
              <br />
              and learning <strong>react</strong>
            </p>
          </div>
          <div className="animation"></div>
        </section>
      </div>
      <script>feather.replace();</script>
    </>
  );
}

export default App;
