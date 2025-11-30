export default function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="modal-backdrop">
            <div className="modal-box">
                <h2 className="modal-title">¿Vaciar carrito?</h2>

                <p className="modal-text">
                    Esta acción eliminará todos los productos del carrito.
                </p>

                <div className="modal-buttons">
                    <button className="modal-btn cancel" onClick={onCancel}>
                        Cancelar
                    </button>

                    <button className="modal-btn confirm" onClick={onConfirm}>
                        Vaciar
                    </button>
                </div>
            </div>
        </div>
    );
}

