import { useState } from 'react';

const Checkout = () => {
    const [userData, setUserData] = useState({
        nombre: '',
        telefono: '',
        email: ''
    });

    return (
        <div className="detail-container" style={{flexDirection: 'column', maxWidth: '600px'}}>
            <h2>Finalizar Pedido</h2>
            <form className="purchase-section" style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <input type="text" placeholder="Nombre completo" className="qty-number" style={{width: '100%', textAlign: 'left', padding: '10px'}} />
                <input type="email" placeholder="Email" className="qty-number" style={{width: '100%', textAlign: 'left', padding: '10px'}} />
                <input type="tel" placeholder="Teléfono" className="qty-number" style={{width: '100%', textAlign: 'left', padding: '10px'}} />
                <button className="btn-add-to-cart" type="submit">Generar Orden</button>
            </form>
        </div>
    );
};

export default Checkout;