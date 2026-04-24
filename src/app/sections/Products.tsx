import styles from '../styles/Products.module.css';

const products = [
  { id: 1, name: 'Wayfarer', brand: 'Ray-Ban', model: 'PO3292V', price: '$339.15', oldPrice: '$399.00', discount: '-15%', image1: '/prod1_1.avif' },
  { id: 2, name: 'Holbrook', brand: 'Oakley', model: 'Oakley Meta HSTN Transitions®', price: '$178', oldPrice: '$210.00', discount: '-15%', image1: '/prod2_1.avif' },
  { id: 3, name: 'Aviator', brand: 'Ray-Ban', model: 'RB3025 Classic', price: '$165', oldPrice: '$195.00', discount: '-15%', image1: '/prod3_1.avif' },
  { id: 4, name: 'Frogskins', brand: 'Oakley', model: 'OO9013 Prizm™', price: '$145', oldPrice: '$170.00', discount: '-15%', image1: '/prod4_1.avif' },
  { id: 5, name: 'Clubmaster', brand: 'Ray-Ban', model: 'RB3016 Polarized', price: '$189', oldPrice: '$222.00', discount: '-15%', image1: '/prod5_1.avif' },
  { id: 6, name: 'Radar EV', brand: 'Oakley', model: 'EV Path Photochromic', price: '$195', oldPrice: '$230.00', discount: '-15%', image1: '/prod6_1.avif' },
  { id: 7, name: 'Round Metal', brand: 'Burberry', model: 'RB2180V Optics', price: '$169', oldPrice: '$199.00', discount: '-15%', image1: '/prod7_1.avif' },
  { id: 8, name: 'Sutro Lite', brand: 'Prada', model: 'OO9406 Lite Matte', price: '$185', oldPrice: '$218.00', discount: '-15%', image1: '/prod8_1.avif' },
];

export default function Products() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <span className={styles.discount}>{product.discount}</span>
              <img src={product.image1} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.content}>
              <p className={styles.brand}>{product.brand}</p>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.model}>{product.model}</p>
              <div className={styles.priceWrapper}>
                <span className={styles.oldPrice}>{product.oldPrice}</span>
                <span className={styles.price}>{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
