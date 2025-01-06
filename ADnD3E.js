import { ADnD3E } from "./module/config.js";
import ADnD3E_items from "./module/sheets/ADnD3E_items.js";

Hook.once("init", function() {
	console.log("ADnD3E | Initializing AD&D 3E System");
	
	CONFIG.ADnD3E = ADnD3E;

	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("ADnD3E", ADnD3E_items, {makeDefault:true});
});