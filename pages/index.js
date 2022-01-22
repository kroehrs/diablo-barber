import { Parallax, Background } from "react-parallax";
import Image from "next/image";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <Parallax strength={500}>
          <Background className="vw-100 vh-100">
            <Image
              src="/img/1.jpg"
              alt=""
              layout="fill"
              className="photo"
              loading="eager"
            />
          </Background>
          <div className="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-center">
            <Container>
              <h1
                className="mb-5 display-2 fw-bold text-uppercase"
                style={{ color: "white", fontFamily: "Nunito Sans" }}
              >
                Diablo Barber Co.
              </h1>
              <p>
                <Link href="https://www.vagaro.com/diablobarberco" passHref>
                  <Button
                    variant="outline-light"
                    style={{ fontFamily: "Nunito Sans" }}
                  >
                    Book Now
                  </Button>
                </Link>
              </p>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Parallax strength={500}>
          <Background className="vw">
            <Image
              src="/img/2.jpg"
              alt=""
              layout="fill"
              className="photo"
              loading="eager"
            />
          </Background>
          <div style={{ height: "100vh" }}></div>
        </Parallax>
      </div>
      <div>
        <Parallax strength={500}>
          <Background className="vw">
            <Image
              src="/img/3.jpg"
              alt=""
              layout="fill"
              className="photo"
              loading="eager"
            />
          </Background>
          <div style={{ height: "100vh" }}></div>
        </Parallax>
      </div>
      <div>
        <Parallax strength={500}>
          <Background className="vw">
            <Image
              src="/img/4.jpg"
              alt=""
              layout="fill"
              className="photo"
              loading="eager"
            />
          </Background>
          <div style={{ height: "100vh" }}></div>
        </Parallax>
      </div>
    </div>
  );
};

export default Home;
