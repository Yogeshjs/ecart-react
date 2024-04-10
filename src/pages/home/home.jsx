// icons
import heartIcon from "../../assets/icons/Wishlist.png";
import cartIcon from "../../assets/icons/cart-icon.png";

function Home() {
  return (
    <div>
      <div className="hero-content">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p>ShopNow</p>
      </div>

      <div>
        <div className="navigation">
          <div>
            <h2>Exclusive</h2>
          </div>
          <div>
            <a>Home</a>
            <a>Contact</a>
            <a>About</a>
            <a>Sign Up</a>
          </div>
          <div className="search">
            <div>
              <input />
            </div>
            <img src={heartIcon} />
            <img src={cartIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
