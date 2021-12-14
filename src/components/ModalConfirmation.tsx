
export interface ModalConfirmationProps {
  onConfirm: () => void,
  onCancel: () => void,
  title: string,
  message: string,
  confirmLabel?: string,
  cancelLabel?: string
}

export const ModalConfirmation = (
  {onCancel, onConfirm, title, message, confirmLabel = 'Confirm', cancelLabel = 'Cancel'} : ModalConfirmationProps
) => (
  <div className='modal active' style={{top: 0, left: 0}}>
      <div className="modal__wrapper">
          <div className="container">
              <div className="modal__window">
                  <div className="modal__window__title">{title}</div>
                  <div className="modal__window__subtitle">{message}</div>
                  <button className="button" onClick={onConfirm}>{confirmLabel}</button>
                  <button className="button button_white" onClick={onCancel}>{cancelLabel}</button>
              </div>
          </div>
      </div>
  </div>
);