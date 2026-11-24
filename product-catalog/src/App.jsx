import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'
import products from './data/products.js'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [lastAdded, setLastAdded] = useState('')

  function handleAddToCart(productTitle) {
    setCartCount((currentCount) => currentCount + 1)
    setLastAdded(productTitle)
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>CvSU <strong>Mini Store</strong></span>
        </div>
        <span className="header-tagline">Simple finds. Smart choices.</span>
      </header>

      <section className="hero">
        <p className="eyebrow">WELCOME TO OUR STORE</p>
        <h1>Find what you need.</h1>
        <p className="hero__description">
          Browse our collection of everyday essentials, school supplies, and tech accessories.
        </p>
      </section>

      <section className="cart-summary" aria-live="polite">
        <div className="cart-summary__icon" aria-hidden="true">🛒</div>
        <div>
          {cartCount === 0 ? (
            <>
              <p className="cart-summary__title">Your cart is empty.</p>
              <p className="cart-summary__detail">Add an in-stock item to get started.</p>
            </>
          ) : (
            <>
              <p className="cart-summary__title">Items added to cart: {cartCount}</p>
              <p className="cart-summary__detail">Last added: {lastAdded}</p>
            </>
          )}
        </div>
        <span className="cart-count">{cartCount}</span>
      </section>

      <section className="catalog-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>
          <span className="product-count">{products.length} products</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span>Best Seller</span>}
              {product.id === 5 && <span>New</span>}
            </ProductCard>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} CvSU Mini Store</p>
        <p>Built with reusable React components and props.</p>
      </footer>
    </main>
  )
}

export default App
