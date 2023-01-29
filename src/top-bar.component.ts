import { Component } from '@angular/core';

import MenuComponent from './menu.component';

@Component({
	selector: 'wp-top-bar',
	standalone: true,
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
	imports: [
		MenuComponent
	]
})
export default class TopBarComponent { }
