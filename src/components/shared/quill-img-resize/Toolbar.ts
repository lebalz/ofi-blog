import { BaseModule } from './BaseModule';

let Parchment: any = {};
let FloatStyle: any = {};
let MarginStyle: any = {};
let DisplayStyle: any = {};

export default class Toolbar extends BaseModule {
    toolbar: HTMLDivElement;
    alignments: {
        icon: string,
        apply: () => void,
        isApplied: () => boolean
    }[]
    onCreate = () => {
        // Initilize styles
        if ((window as any).Quill) {
            Parchment = (window as any).Quill.import('parchment');
            FloatStyle = new Parchment.Attributor.Style('float', 'float');
            MarginStyle = new Parchment.Attributor.Style('margin', 'margin');
            DisplayStyle = new Parchment.Attributor.Style('display', 'display');
        }

        // Setup Toolbar
        this.toolbar = document.createElement('div');
        Object.assign(this.toolbar.style, this.options.toolbarStyles);
        this.overlay.appendChild(this.toolbar);

        // Setup Buttons
        this._defineAlignments();
        this._addToolbarButtons();
    };

	// The toolbar and its children will be destroyed when the overlay is removed
    onDestroy = () => {};

	// Nothing to update on drag because we are are positioned relative to the overlay
    onUpdate = () => {};

    _defineAlignments = () => {
        this.alignments = [
            {
                icon: 'format-align-left',
                apply: () => {
                    DisplayStyle.add(this.img, 'inline');
                    FloatStyle.add(this.img, 'left');
                    MarginStyle.add(this.img, '0 1em 1em 0');
                },
                isApplied: () => FloatStyle.value(this.img) == 'left',
            },
            {
                icon: 'format-align-center',
                apply: () => {
                    DisplayStyle.add(this.img, 'block');
                    FloatStyle.remove(this.img);
                    MarginStyle.add(this.img, 'auto');
                },
                isApplied: () => MarginStyle.value(this.img) == 'auto',
            },
            {
                icon: 'format-align-right',
                apply: () => {
                    DisplayStyle.add(this.img, 'inline');
                    FloatStyle.add(this.img, 'right');
                    MarginStyle.add(this.img, '0 0 1em 1em');
                },
                isApplied: () => FloatStyle.value(this.img) == 'right',
            },
        ];
    };

    _addToolbarButtons = () => {
		const buttons = [];
		this.alignments.forEach((alignment, idx) => {
			const button = document.createElement('span');
			buttons.push(button);
            console.log(alignment.icon);
			button.innerHTML = `<i class="mdi mdi-${alignment.icon}" style="font-size: 20px"/>`;
			button.addEventListener('click', () => {
					// deselect all buttons
				buttons.forEach(button => button.style.filter = '');
				if (alignment.isApplied()) {
						// If applied, unapply
					FloatStyle.remove(this.img);
					MarginStyle.remove(this.img);
					DisplayStyle.remove(this.img);
				}				else {
						// otherwise, select button and apply
					this._selectButton(button);
					alignment.apply();
				}
					// image may change position; redraw drag handles
				this.requestUpdate();
			});
			Object.assign(button.style, this.options.toolbarButtonStyles);
			if (idx > 0) {
				button.style.borderLeftWidth = '0';
			}
			// Object.assign((button.children[0]).style, this.options.toolbarButtonSvgStyles);
			if (alignment.isApplied()) {
					// select button if previously applied
				this._selectButton(button);
			}
			this.toolbar.appendChild(button);
		});
    };

    _selectButton = (button) => {
		button.style.filter = 'invert(20%)';
    };

}