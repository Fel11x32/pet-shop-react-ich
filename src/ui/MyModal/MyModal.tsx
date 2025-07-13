import type { FC } from 'react';
import styles from './MyModal.module.scss';

interface MyModalProps {
	onClose: () => void;
}

const MyModal: FC<MyModalProps> = ({ onClose }) => (
	<div className={styles.overlay} onClick={onClose}>
		<div className={styles.modal} onClick={e => e.stopPropagation()}>
			<h3>Congratulations</h3>
			<p>
				Your order has been successfully placed. A manager will contact you
				soon.
			</p>
		</div>
	</div>
);

export default MyModal;
