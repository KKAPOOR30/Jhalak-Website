import Image from "next/image";
import Link from "next/link";
import RootLayout from "./layout";
import "./style.css";

export default function Home() {
  return (
    <main>
      <div id="navdecoration">
          <ul id="navbar">
              <li><Link href="\">Home Page</Link></li>
              <li><Link href="\AboutUs">About Us</Link></li>
              <li><a>Get Involved</a></li>
              <li><a>Gallery</a></li>
              <li><Link href="/Events">Events</Link></li>
          </ul>
          <div id="navvideo">
            <video autoPlay loop muted playsInline>
              <source src="Frosh_Video.mp4" type="video/mp4"></source>
            </video>
          </div>
      </div>
      <div id="homeaboutus">About Us
        <p>This is jhalak bhal blah jbfkdbjbejcnjecb cdkc w cw cw djh c wjewkje
          cwijc wThis is jhalak bhal blah jbfkdbjbejcnjecb cdkc w cw cw djh c 
          wjewkje cwijc wThis is jhalak bhal blah jbfkdbjbejcnjecb cdkc w cw cw
          djh c wjewkje cwijc wThis is jhalak bhal blah jbfkdbjbejcnjecb cdkc 
          w cw cw djh c wjewkje cwijc wThis is jhalak bhal blah 
          jbfkdbjbejcnjecb cdkc w cw cw djh c wjewkje cwijc w</p>
      </div>
      <div id="homeupcoming">Upcoming
        <p>Will be a list of objects eventually</p>
      </div>
    </main>
  );
}
