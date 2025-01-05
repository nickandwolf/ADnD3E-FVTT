import ADnD3E_items from "./module/sheets/ADnD3E_items.js";

Hook.once("init", function()) {
	console.log("ADnD3E | Initializing AD&D 3E System");
	
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("ADnD3E", ADnD3E_items, {makeDefault:true});
});