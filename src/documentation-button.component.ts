import { Component } from '@angular/core';

import MainButtonComponent from './main-button.component';

@Component({
	selector: 'wp-documentation-button',
	standalone: true,
	templateUrl: './documentation-button.component.html',
	styleUrls: ['./documentation-button.component.scss'],
	imports: [
		MainButtonComponent
	]
})
export default class DocumentationButtonComponent { }
