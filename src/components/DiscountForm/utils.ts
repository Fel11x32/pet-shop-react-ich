export const formatPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	let value = e.target.value.replace(/\D/g, '');

	if (value.length > 0 && !value.startsWith('+')) {
		if (value.startsWith('38') || value.startsWith('49')) {
			value = `+${value}`;
		} else if (value.startsWith('0')) {
			// Добавить логику
		}
	}

	if (value.startsWith('+38') && value.length > 13) return;
	if (value.startsWith('+49') && value.length > 14) return;

	e.target.value = value;
};
