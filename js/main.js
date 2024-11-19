class myHeader extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="header-top">
        <div class="logo">
          <a href="../index.html">
            <img src="../images/app.svg" alt="APP logo" style="width:80px; mix-blend-mode: multiply;">
            A.P.P Foundation
          </a>
        </div>
          <a href="../LogIn_page.html" id="login">Personnel Access</a>
      </div>
      <div id="bar">
      <a href="entities.html">Entities</a>&emsp;
        <a href="about.html">About</a>&emsp;
        <a href="community.html">Community</a>&emsp;
        <a href="resources.html">Resources</a>&emsp;
        <a href="sister_sites.html">Sister Sites</a>&emsp;
        <a href="contact.html">Contact Us</a>&emsp;
      </div>
    </header> `
  }
}
class myFooter extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
     <footer>
      <hr> <!--Thematic break-->
      <p>Author: GRP_11 &emsp;
      <small><a href="mailto:email@gmail.com">TheFake@email.com</small> &emsp; 
      &copy; copyrights reserved &emsp; </p>
  </footer>
    `
  }
}

customElements.define('my-header', myHeader)
customElements.define('my-footer', myFooter)

function scrollingHeader() {
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
          // Scrolling down
          header.classList.add('header-hidden');
      } else {
          // Scrolling up
          header.classList.remove('header-hidden');
      }
      lastScrollY = window.scrollY;
  });
}

window.onload = scrollingHeader()