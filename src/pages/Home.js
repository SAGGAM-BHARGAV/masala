import React, { useState } from "react";
import "./Home.css";

const categories = {
  "Pindi Padarthalu": [
    { id: 1, name: "జీలకర (Cumin Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/PqYquks.jpg" },
    { id: 2, name: "ఆవాలు (Mustard Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/UjW6Fwb.jpg" },
    { id: 3, name: "మెంతులు (Fenugreek Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/sxPmqJ5.jpg" },
    { id: 4, name: "మిరియాలు (Black Pepper)", price: 100, mrp: 150, image: "https://i.imgur.com/2LksM0a.jpg" },
    { id: 5, name: "సొంటి (Dry Ginger)", price: 100, mrp: 150, image: "https://i.imgur.com/i9mcQtl.jpg" },
    { id: 6, name: "నువ్వులు (Sesame Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/bb3lGRh.jpg" },
    { id: 7, name: "సాజీరా (Caraway Seeds)", price: 100, mrp: 120, image: "https://i.imgur.com/a2MYxHP.jpg" },
    { id: 8, name: "దాల్చిన చెక్క (Cinnamon)", price: 100, mrp: 150, image: "https://i.imgur.com/AAKgk2S.jpg" },
    { id: 9, name: "బందపువ్వు (Stone Flower)", price: 100, mrp: 150, image: "https://i.imgur.com/UBTuzIi.jpg" },
    { id: 10, name: "బిర్యానీ ఆకు (Bay Leaf)", price: 100, mrp: 150, image: "https://i.imgur.com/IXaCKAh.jpg" },
    { id: 11, name: "యాలకులు (Cardamom)", price: 100, mrp: 120, image: "https://i.imgur.com/hVr1J71.jpg" },
    { id: 12, name: "లవంగాలు (Cloves)", price: 100, mrp: 150, image: "https://i.imgur.com/agqo4Vd.jpg" },
    { id: 13, name: "తినే సోడా (Baking Soda)", price: 100, mrp: 150, image: "https://i.imgur.com/XytsydP.jpg" },
    { id: 14, name: "టెస్టింగ్ సాల్ట్ (Testing Salt)", price: 100, mrp: 150, image: "https://i.imgur.com/f1NuR4I.jpg" },
    { id: 15, name: "నిమ్మ సాల్ట్ (Lemon Salt)", price: 100, mrp: 150, image: "https://i.imgur.com/b9SzLIu.jpg" },
    { id: 16, name: "కసూరి మెత్తి (Kasoori Methi)", price: 100, mrp: 150, image: "https://i.imgur.com/u8xa1Zj.jpg" },
    { id: 17, name: "స్టార్ అనీస్ (Star Anise)", price: 50, mrp: 60, image: "https://i.imgur.com/VcOV6QL.jpg" },
    { id: 18, name: "ఎండు మిర్చి (Dry Red Chili)", price: 100, mrp: 150, image: "https://i.imgur.com/2GWmfIN.jpg" },
    { id: 19, name: "సోపు (Soap)", price: 50, mrp: 60, image: "https://i.imgur.com/98aC1Yt.jpg" },
    { id: 20, name: "ధనియాలు (Coriander Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/DOr7lAp.jpg" },
    { id: 21, name: "ధనియ పౌడర్ (Coriander Powder)", price: 100, mrp: 150, image: "https://i.imgur.com/F1aQcMn.jpg" },
    { id: 22, name: "కుడుక పౌడర్ (Coconut Powder)", price: 100, mrp: 150, image: "https://i.imgur.com/N9moynW.jpg" },
    { id: 23, name: "కాసు ()", price: 100, mrp: 150, image: "https://i.imgur.com/5IC2o0X.jpg" },
    { id: 24, name: "పసుపు (Turmeric)", price: 50, mrp: 60, image: "https://i.imgur.com/XWFJxx5.jpg" },
    { id: 25, name: "కుంకుమ (Kumkum)", price: 50, mrp: 60, image: "https://i.imgur.com/SagBUp8.jpg" },
    { id: 26, name: "బూక (Brown)", price: 100, mrp: 150, image: "https://i.imgur.com/KCH2Gok.jpg" },
    { id: 27, name: "గులాలు (pink)", price: 100, mrp: 150, image: "https://i.imgur.com/QETNX1K.jpg" },
    { id: 28, name: "వుడూ ()", price: 100, mrp: 150, image: "https://i.imgur.com/q1BC2Ha.jpg" },
    { id: 29, name: "గుగ్గిలం (Frankincense)", price: 100, mrp: 150, image: "https://i.imgur.com/Agn2C69.jpg" },
    { id: 30, name: "మహిషాద్రి ()", price: 100, mrp: 150, image: "https://i.imgur.com/DwrQ0FD.jpg" },
    { id: 31, name: "బ్రష్లు (Brushes)", price: 108, mrp: 252, image: "https://i.imgur.com/KAqYQxw.jpg" },
    { id: 32, name: "సేఫ్టీ పిన్స్ (Safety Pins)", price: 50, mrp: 60, image: "https://i.imgur.com/98Ozm0d.jpg" },
    { id: 33, name: "రబ్బర్స్ (Rubber Bands)", price: 50, mrp: 60, image: "https://i.imgur.com/OOSGlPo.jpg" },
    { id: 34, name: "పుట్టనాలు (Beads)", price: 50, mrp: 60, image: "https://i.imgur.com/9740hUN.jpg" },
    { id: 35, name: "కడ చక్కెర (khadi Sugar)", price: 100, mrp: 150, image: "https://i.imgur.com/Qy476Hf.jpg" },
    { id: 36, name: "గరం మసాలా (Garam Masala)", price: 100, mrp: 150, image: "https://i.imgur.com/4chueiH.jpg" },
    { id: 37, name: "బిర్యాని మసాలా (Biryani Masala)", price: 100, mrp: 150, image: "https://i.imgur.com/ebPl437.jpg" },
    { id: 38, name: "పోక వక్కలు (Areca Nut)", price: 100, mrp: 120, image: "https://i.imgur.com/alF9PAy.jpg" },
    { id: 39, name: "కంకణాల దారం (Sacred Thread)", price: 108, mrp: 180, image: "https://i.imgur.com/R7L7Goa.jpg" },
    { id: 40, name: "సబుదాన (Sago)", price: 80, mrp: 120, image: "https://i.imgur.com/RUd8RW6.jpg" },
    { id: 41, name: "పర్ఫ్యూమర్లు (Perfumes)", price: 80, mrp: 120, image: "https://i.imgur.com/6FFjM3Y.jpg" },
    { id: 42, name: "పర్ఫ్యూమర్లు (Perfumes)", price: 80, mrp: 120, image: "https://i.imgur.com/eJY86UO.jpg" }, 
    { id: 43, name: "ఎండు పళ్ళు (dry fruits)", price: 100, mrp: 120, image: "https://i.imgur.com/Rn7CQ1j.jpg" },
    { id: 44, name: "పసుపు,కుంకుమ (Turmeric,Kumkum)", price: 70, mrp: 100, image: "https://i.imgur.com/7oLuOTV.jpg" },
    { id: 45, name: "హారతి కర్పూరం (swastik karpur)", price: 100, mrp: 120, image: "https://i.imgur.com/9ELNVsm.jpg" },
    { id: 46, name: "వత్తులు (vattulu)", price: 100, mrp: 150, image: "https://i.imgur.com/qeMgNx2.jpg" },
    { id: 47, name: "అగర్బత్తి (agarbatti)", price: 40, mrp: 60, image: "https://i.imgur.com/yGBUqCr.jpg" },
    { id: 48, name: "ఓమ (oma)", price: 100, mrp: 150, image: "https://i.imgur.com/9SVU3qg.jpg" },
      
  ],
  "₹50 rs Items": [
    { id: 49, name: "పీతాంబరి (Pitambari Powder)", price: 45, mrp: 50, image: "https://i.imgur.com/PNJvfDC.jpg" },
  ],
  // Add other categories as neededhttps://imgur.com/gallery/bha-iK7jztp
};

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.price || item.pricePerKg || item.pricePerLitre;
      return total + price * item.quantity;
    }, 0);
  };
  const caa = () => {
    // Scroll to the About section
    document.getElementById("ca").scrollIntoView({
      behavior: "smooth", // Smooth scrolling effect
      block: "start",
    });
  };
  const shareOnWhatsApp = () => {
    const shopOwnerNumber = "917036783962"; // Replace with actual number
    const message = cart
      .map((item) => `${item.name} - ${item.quantity} ${item.unit || "items"}`)
      .join(", ");
    const totalPrice = getTotalPrice();
    const whatsappLink = `https://wa.me/${shopOwnerNumber}?text=Order Details: ${message}. Total: ₹${totalPrice}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      {/* Fixed Header Section */}
      <div> 
      <div className="shop-header">
      {/* Left Section: Logo  Details */}
      <div className="header-left">
        <img
          src="https://i.imgur.com/SQ9wIqh.jpg" // Replace with the actual logo URL
          alt="Shop Logo"
          className="shop-logo"
        />
        <div className="shop-details">
          <h1>Lakshana Spices</h1>
          <h3>Owner: Ramesh Kumar</h3>
          <p>Phone: 7036783962</p>
          <div className="contact-icons">
            <a
              href="bhargavb272@gmail.com"
              className="icon email-icon"
            >
              📧
            </a>
            <a
              href="https://maps.app.goo.gl/rsNNSpmMLQ2j8aAQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="icon map-icon"
            >
              📍
            </a>
            <a
              href="https://wa.me/917036783962"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp-icon"
            >
              💬
            </a>
            <a href="tel:7036783962" className="icon call-icon">
              📞
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Free Door Delivery and Extra Info */}
      <div className="header-right">
        <h5>మీ షాప్‌ను కూడా ఆన్‌లైన్ షాప్‌గా మార్చాలా?
        </h5>
        <p>call : 7036783962 </p> <br/>
        <div className="free-delivery-banner">
          🎉 Free Door Delivery 🎉
        </div>
        <button onClick={caa}>CART</button>
      </div>
    </div>
      </div>

      {/* Product Categories */}
      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            {categories[category].map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price} <s>₹{item.mrp}</s></p>
                <button onClick={() => addToCart(item, 1)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cart Section */}
      <div className="cart">
        <h3 id="ca">Cart</h3>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item, 1)}>+</button>
          </div>
        ))}
        <h4>Total: ₹{getTotalPrice()}</h4>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Address: Vill: Panchagudi, Mo: lokeshwaram, nirmal.</p>
        <p>Pincode: 504104</p>
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
  
      </footer>
    </div>
    
  );
};

export default Home;
