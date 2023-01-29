import { Component } from '@angular/core';

import TopBarComponent from './top-bar.component';
import WokopTitleGroupComponent from './wokop-title-group.component';

@Component({
	selector: 'wp-presentation',
	standalone: true,
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss'],
	imports: [
		TopBarComponent,
		WokopTitleGroupComponent
	]
})
export default class PresentationComponent { }
