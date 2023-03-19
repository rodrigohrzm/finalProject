function Footer() {
    return (
      <footer>
        <section class="footerPic"><img src={require("./assets/restauranfood.jpg")} width="160" /></section>
        <section class="footerLinks">
          <p class="footerTitle">NAVIGATION</p>
          <ul>
          <li><a href={"https://littlelemonrestaurant.com"}>Home</a></li>
          <li><a href={"https://littlelemonrestaurant.com/about"}>About</a></li>
          <li><a href={"https://littlelemonrestaurant.com/menu"}>Menu</a></li>
          <li><a href={"https://littlelemonrestaurant.com/booking"}>Reservations</a></li>
          <li><a href={"https://littlelemonrestaurant.com/orders"}>Order Online</a></li>
          <li><a href={"https://littlelemonrestaurant.com/login"}>Login</a></li>
          </ul>
        </section>
        <section class="footerLinks">
          <p class="footerTitle">CONTACT</p>
          <ul>
          <li><a href={"https://maps.google.com/littlelemon"}>Address</a></li>
          <li><a href={"tel:123456789456123"}>Telephone</a></li>
          <li><a href={"mailto:hello@littlelemonrestaurant.com"}>Email</a></li>
        </ul>
        </section>
        <section class="footerLinks">
          <p class="footerTitle">SOCIAL MEDIA</p>
          <ul>
          <li><a href={"https://facebook.com/littlelemon"}>Facebook</a></li>
          <li><a href={"https://linkedin.com/littlelemon"}>LinkedIn</a></li>
          <li><a href={"https://telegram.com/littlelemon"}>Telegram</a></li>
          </ul>
          </section>
      </footer>
    )};

  export default Footer;