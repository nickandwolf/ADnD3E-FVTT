expore default class ADnD3E_items extends ItemSheet {
	get template() {
		return 'systems/ADnD3E/templates/sheets/${this.item.data.type}-sheet.html';
	}
}