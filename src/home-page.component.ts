import { Component } from '@angular/core';

import LivePreviewComponent from './live-preview.component';
import PresentationComponent from './presentation.component';

@Component({
	selector: 'wp-home-page',
	standalone: true,
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	imports: [
		LivePreviewComponent,
		PresentationComponent
	]
})
export default class HomePageComponent { }
