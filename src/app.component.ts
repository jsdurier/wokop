import { Component } from '@angular/core';

import HomePageComponent from './home-page.component';

// import WorkspaceWithRendererDebugComponent from './workspace-with-renderer-debug.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		HomePageComponent
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export default class AppComponent {

}
