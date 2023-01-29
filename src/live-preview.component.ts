import { Component } from '@angular/core';

import WorkspaceWithRendererDebugComponent from './workspace-with-renderer-debug.component';

@Component({
	selector: 'wp-live-preview',
	standalone: true,
	templateUrl: './live-preview.component.html',
	styleUrls: ['./live-preview.component.scss'],
	imports: [
		WorkspaceWithRendererDebugComponent
	]
})
export default class LivePreviewComponent { }
