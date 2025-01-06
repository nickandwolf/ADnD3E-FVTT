export default class ADnD3E_items extends ItemSheet {
	get template() {
		return 'systems/ADnD3E/templates/sheets/${this.item.data.type}-sheet.html';
	}

	getData() {
		const data = super.getData();

		data.config = CONFIG.ADnD3E;

		return data;
	}
}