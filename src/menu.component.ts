import { Component } from '@angular/core';

import MenuItemComponent from './menu-item.component';

@Component({
	selector: 'wp-menu',
	standalone: true,
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	imports: [
		MenuItemComponent
	]
})
export default class MenuComponent { }
