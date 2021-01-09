import Product from '../components/product/Product';

function Products(props) {

    const productList = [
        {
            image: 'https://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg',
            title: 'Product 002392',
            description: 'An awesome product',
        },
        {
            image: 'https://elcopcbonline.com/var/photo/product/2000x4000/4/176/4.jpg',
            title: 'Product 123123123',
            description: 'Another awesome product',
        }
    ]

    const getProducts = () => {
        const products = productList.map((product, index) => {
            return <Product 
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
            />
        })
        return products
    }
    return <>
        <div className="container">
            <div className="row">
                {getProducts()}
            </div>
        </div>
    </>
}
export default Products;