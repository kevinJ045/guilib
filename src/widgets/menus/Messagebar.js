
/* <div class="messagebar-area">
<!-- messagebar attachments -->
<div class="messagebar-attachments">...</div>
<!-- messagebar resizable textarea -->
<textarea class="resizable" placeholder="Message"></textarea>
</div>
<a href="#" class="link">Send</a>
</div> */

import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Toolbar from "../containers/Toolbar.js";

const defaultMessagebar = () => getDefaults({
	element: { name: 'div', html: `<div class="toolbar-inner">
	<div class="messagebar-area">
		<textarea class="resizable" placeholder="Message"></textarea>
	</div>
</div>` },
	class: 'toolbar messagebar',
	_setters: ['placeholder', 'button', 'prefix']
});

class MessageBar extends Toolbar {

	constructor(selectedOptions){
		const options = {...defaultMessagebar(), ...selectedOptions};
		super(options);
	}

	set placeholder(text){
		findEl(this.id).find('textarea').attr('placeholder', text);
	}

	set button(button){
		super.add(button, '.messagebar-area');
	}

	set prefix(button){
		super.addBefore(button, '.messagebar-area');
	}

}


export default MessageBar;