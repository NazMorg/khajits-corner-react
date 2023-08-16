import Item from '../Item/Item';

function ItemList(props) {
    const { products } = props;
    return (
        <div>
            <h2>Welcome to the Khajit's Corner!</h2>
            {
                products.length > 0
                    ? <div className='productos'>
                        {products.map((item) => (<Item key={item.id} {...item} />))}
                      </div>
                    : <h3>Lo sentimos, no hay nada aquí...</h3>
            }
        </div>
    );
}

export default ItemList;