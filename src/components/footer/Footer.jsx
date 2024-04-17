import { IconSendIcon } from 'shared/ui/icons/IconSendIcon.jsx';

export function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-card'>
          <h3>Exclusive</h3>
          <h5 style={{ marginBottom: '24px' }}>Subscribe</h5>
          <p style={{ marginBottom: '16px' }}>Get 10% off your first order</p>
          <div className='footer-email-subscribe-input'>
            <input className='email-input' placeholder='Enter your email' />
            {/* <img src="./assets/icon-send.svg"/> */}
            <IconSendIcon />
          </div>
        </div>

        <div className='footer-card'>
          <h3>Support</h3>
          <p style={{ marginBottom: '16px' }}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p style={{ margiBottom: '16px' }}>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className='footer-card'>
          <h3>Account</h3>
          <ul className='footer-links'>
            <li>
              <p>My Account</p>
            </li>
            <li>
              <p>Login / Register</p>
            </li>
            <li>
              <p>Cart</p>
            </li>
            <li>
              <p>Wishlist</p>
            </li>
            <li>
              <p>Shop</p>
            </li>
          </ul>
        </div>

        <div className='footer-card'>
          <h3>Quick Link</h3>
          <ul className='footer-links'>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Terms Of Use</p>
            </li>
            <li>
              <p>FAQ</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
