import {ReactComponent as Logo} from './assets/Logo.svg';

function Nav() {
    return (
      <div class="navBar">
      <Logo />
      <nav>
        <ul>
          <li><a href={"https://littlelemonrestaurant.com"}>Home</a></li>
          <li><a href={"https://littlelemonrestaurant.com/about"}>About</a></li>
          <li><a href={"https://littlelemonrestaurant.com/menu"}>Menu</a></li>
          <li><a href={"https://littlelemonrestaurant.com/booking"}>Reservations</a></li>
          <li><a href={"https://littlelemonrestaurant.com/orders"}>Order Online</a></li>
          <li><a href={"https://littlelemonrestaurant.com/login"}>Login</a></li>
        </ul>
      </nav>
      </div>
    )};
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
  export default Nav;