import { Component } from '@angular/core';

import SecondaryButtonComponent from './secondary-button.component';

@Component({
	selector: 'wp-get-extension-button',
	standalone: true,
	templateUrl: './get-extension-button.component.html',
	styleUrls: ['./get-extension-button.component.scss'],
	imports: [
		SecondaryButtonComponent
	]
})
export default class GetExtensionButtonComponent { }
