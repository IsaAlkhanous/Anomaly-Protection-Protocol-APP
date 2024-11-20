class myHeader extends HTMLElement{
  connectedCallback() {
	const path = this.getAttribute('path') || './';
	
    this.innerHTML = `
    <header>
      <div class="header-top">
        <div class="logo">
          <a href="${path}index.html">
			<img src="${path}images/app.svg" alt="APP logo" style="width:80px; mix-blend-mode: multiply;">
            A.P.P Foundation
          </a>
        </div>
          <a href="${path}LogIn_page.html" id="login">Personnel Access</a>
      </div>
      <div id="bar">
      <a href="${path}entities.html">Entities</a>&emsp;
        <a href="${path}about.html">About</a>&emsp;
        <a href="${path}community.html">Community</a>&emsp;
        <a href="${path}resources.html">Resources</a>&emsp;
        <a href="${path}sister_sites.html">Sister Sites</a>&emsp;
        <a href="${path}contact.html">Contact Us</a>&emsp;
      </div>
    </header> `;
  }
}

class myFooter extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <hr> <!--Thematic break-->
      <p>Author: GRP_11 &emsp;
      <small><a href="mailto:email@gmail.com">TheFake@email.com</a></small> &emsp; 
      &copy; copyrights reserved &emsp; </p>
	</footer>
    `
  }
}

customElements.define('my-header', myHeader);
customElements.define('my-footer', myFooter);

function scrollingHeader() {
  let lastScrollY = window.scrollY;
  const header = document.querySelector('my-header');

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

window.onload = scrollingHeader();