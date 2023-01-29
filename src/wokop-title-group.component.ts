import { Component } from '@angular/core';

import DocumentationButtonComponent from './documentation-button.component';
import GetExtensionButtonComponent from './get-extension-button.component';

@Component({
	selector: 'wp-wokop-title-group',
	standalone: true,
	templateUrl: './wokop-title-group.component.html',
	styleUrls: ['./wokop-title-group.component.scss'],
	imports: [
		DocumentationButtonComponent,
		GetExtensionButtonComponent
	]
})
export default class WokopTitleGroupComponent { }
