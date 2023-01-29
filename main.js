(self["webpackChunkwokop"] = self["webpackChunkwokop"] || []).push([["main"],{

/***/ 3184:
/*!*******************************!*\
  !*** ./src/add-new-import.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewImport)
/* harmony export */ });
const LOCAL_IMPORT_PREFIX = './';
function addNewImport(newImport, importerFileContent) {
    const lines = importerFileContent.split('\n');
    const allImports = getImports(lines);
    let row = 0;
    let spaceBefore = false;
    for (const e of allImports) {
        if (!e.name.startsWith(LOCAL_IMPORT_PREFIX)) {
            row = e.row + 1;
            spaceBefore = true;
            continue;
        }
        const existingImportName = e.name.slice(LOCAL_IMPORT_PREFIX.length);
        spaceBefore = false;
        if (newImport.name < existingImportName) {
            row = e.row;
            break;
        }
        row = e.row + 1;
    }
    const newLine = `import ${newImport.alias} from './${newImport.name}';`;
    lines.splice(row, 0, newLine);
    if (spaceBefore) {
        lines.splice(row, 0, '');
    }
    return lines.join('\n');
}
const REGEXP = /from '([^']+)';?\s*$/;
function getImports(lines) {
    return lines.map(processLine).filter(e => e !== undefined);
}
function processLine(lineText, row) {
    const match = lineText.match(REGEXP);
    if (match === null) {
        return undefined;
    }
    return {
        name: match[1],
        row
    };
}


/***/ }),

/***/ 1825:
/*!**********************************!*\
  !*** ./src/angular-core-file.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANGULAR_CORE_FILE": () => (/* binding */ ANGULAR_CORE_FILE)
/* harmony export */ });
const ANGULAR_CORE_FILE = `import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Subscribable } from 'rxjs';
import { Subscription } from 'rxjs';

/**
 * @description
 *
 * Represents an abstract class \`T\`, if applied to a concrete class it would stop being
 * instantiable.
 *
 * @publicApi
 */
export declare interface AbstractType<T> extends Function {
	prototype: T;
}

/**
 * @description
 * A lifecycle hook that is called after the default change detector has
 * completed checking all content of a directive.
 *
 * @see \`AfterViewChecked\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface to
 * define its own after-check functionality.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentChecked'}
 *
 * @publicApi
 */
export declare interface AfterContentChecked {
	/**
	 * A callback method that is invoked immediately after the
	 * default change detector has completed checking all of the directive's
	 * content.
	 */
	ngAfterContentChecked(): void;
}

/**
 * @description
 * A lifecycle hook that is called after Angular has fully initialized
 * all content of a directive.
 * Define an \`ngAfterContentInit()\` method to handle any additional initialization tasks.
 *
 * @see \`OnInit\`
 * @see \`AfterViewInit\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface to
 * define its own content initialization method.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentInit'}
 *
 * @publicApi
 */
export declare interface AfterContentInit {
	/**
	 * A callback method that is invoked immediately after
	 * Angular has completed initialization of all of the directive's
	 * content.
	 * It is invoked only once when the directive is instantiated.
	 */
	ngAfterContentInit(): void;
}

/**
 * @description
 * A lifecycle hook that is called after the default change detector has
 * completed checking a component's view for changes.
 *
 * @see \`AfterContentChecked\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface to
 * define its own after-check functionality.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewChecked'}
 *
 * @publicApi
 */
export declare interface AfterViewChecked {
	/**
	 * A callback method that is invoked immediately after the
	 * default change detector has completed one change-check cycle
	 * for a component's view.
	 */
	ngAfterViewChecked(): void;
}

/**
 * @description
 * A lifecycle hook that is called after Angular has fully initialized
 * a component's view.
 * Define an \`ngAfterViewInit()\` method to handle any additional initialization tasks.
 *
 * @see \`OnInit\`
 * @see \`AfterContentInit\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface to
 * define its own view initialization method.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewInit'}
 *
 * @publicApi
 */
export declare interface AfterViewInit {
	/**
	 * A callback method that is invoked immediately after
	 * Angular has completed initialization of a component's view.
	 * It is invoked only once when the view is instantiated.
	 *
	 */
	ngAfterViewInit(): void;
}

/**
 * A DI token that you can use to create a virtual [provider](guide/glossary#provider)
 * that will populate the \`entryComponents\` field of components and NgModules
 * based on its \`useValue\` property value.
 * All components that are referenced in the \`useValue\` value (either directly
 * or in a nested array or map) are added to the \`entryComponents\` property.
 *
 * @usageNotes
 *
 * The following example shows how the router can populate the \`entryComponents\`
 * field of an NgModule based on a router configuration that refers
 * to components.
 *
 * \`\`\`typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * @NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * \`\`\`
 *
 * @publicApi
 * @deprecated Since 9.0.0. With Ivy, this property is no longer necessary.
 */
export declare const ANALYZE_FOR_ENTRY_COMPONENTS: InjectionToken<any>;

/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates which animations
 * module has been loaded.
 * @publicApi
 */
export declare const ANIMATION_MODULE_TYPE: InjectionToken<"NoopAnimations" | "BrowserAnimations">;

/**
 * A [DI token](guide/glossary#di-token "DI token definition") that provides a set of callbacks to
 * be called for every component that is bootstrapped.
 *
 * Each callback must take a \`ComponentRef\` instance and return nothing.
 *
 * \`(componentRef: ComponentRef) => void\`
 *
 * @publicApi
 */
export declare const APP_BOOTSTRAP_LISTENER: InjectionToken<((compRef: ComponentRef<any>) => void)[]>;

/**
 * A [DI token](guide/glossary#di-token "DI token definition") representing a unique string ID, used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated ViewEncapsulation.Emulated} is being used.
 *
 * BY default, the value is randomly generated and assigned to the application by Angular.
 * To provide a custom ID value, use a DI provider <!-- TODO: provider --> to configure
 * the root {@link Injector} that uses this token.
 *
 * @publicApi
 */
export declare const APP_ID: InjectionToken<string>;

/**
 * A [DI token](guide/glossary#di-token "DI token definition") that you can use to provide
 * one or more initialization functions.
 *
 * The provided functions are injected at application startup and executed during
 * app initialization. If any of these functions returns a Promise or an Observable, initialization
 * does not complete until the Promise is resolved or the Observable is completed.
 *
 * You can, for example, create a factory function that loads language data
 * or an external configuration, and provide that function to the \`APP_INITIALIZER\` token.
 * The function is executed during the application bootstrap process,
 * and the needed data is available on startup.
 *
 * @see \`ApplicationInitStatus\`
 *
 * @usageNotes
 *
 * The following example illustrates how to configure a multi-provider using \`APP_INITIALIZER\` token
 * and a function returning a promise.
 *
 * \`\`\`
 *  function initializeApp(): Promise<any> {
 *    return new Promise((resolve, reject) => {
 *      // Do some asynchronous stuff
 *      resolve();
 *    });
 *  }
 *
 *  @NgModule({
 *   imports: [BrowserModule],
 *   declarations: [AppComponent],
 *   bootstrap: [AppComponent],
 *   providers: [{
 *     provide: APP_INITIALIZER,
 *     useFactory: () => initializeApp,
 *     multi: true
 *    }]
 *   })
 *  export class AppModule {}
 * \`\`\`
 *
 * It's also possible to configure a multi-provider using \`APP_INITIALIZER\` token and a function
 * returning an observable, see an example below. Note: the \`HttpClient\` in this example is used for
 * demo purposes to illustrate how the factory function can work with other providers available
 * through DI.
 *
 * \`\`\`
 *  function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
 *   return () => httpClient.get("https://someUrl.com/api/user")
 *     .pipe(
 *        tap(user => { ... })
 *     );
 *  }
 *
 *  @NgModule({
 *    imports: [BrowserModule, HttpClientModule],
 *    declarations: [AppComponent],
 *    bootstrap: [AppComponent],
 *    providers: [{
 *      provide: APP_INITIALIZER,
 *      useFactory: initializeAppFactory,
 *      deps: [HttpClient],
 *      multi: true
 *    }]
 *  })
 *  export class AppModule {}
 * \`\`\`
 *
 * @publicApi
 */
export declare const APP_INITIALIZER: InjectionToken<readonly (() => Observable<unknown> | Promise<unknown> | void)[]>;

declare function _appIdRandomProviderFactory(): string;

/**
 * A class that reflects the state of running {@link APP_INITIALIZER} functions.
 *
 * @publicApi
 */
export declare class ApplicationInitStatus {
	private readonly appInits;
	private resolve;
	private reject;
	private initialized;
	readonly donePromise: Promise<any>;
	readonly done = false;
	constructor(appInits: ReadonlyArray<() => Observable<unknown> | Promise<unknown> | void>);
	static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationInitStatus, [{ optional: true; }]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<ApplicationInitStatus>;
}

/**
 * Re-exported by \`BrowserModule\`, which is included automatically in the root
 * \`AppModule\` when you create a new app with the CLI \`new\` command. Eagerly injects
 * \`ApplicationRef\` to instantiate it.
 *
 * @publicApi
 */
export declare class ApplicationModule {
	constructor(appRef: ApplicationRef);
	static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationModule, never>;
	static ɵmod: i0.ɵɵNgModuleDeclaration<ApplicationModule, never, never, never>;
	static ɵinj: i0.ɵɵInjectorDeclaration<ApplicationModule>;
}

/**
 * A reference to an Angular application running on a page.
 *
 * @usageNotes
 *
 * {@a is-stable-examples}
 * ### isStable examples and caveats
 *
 * Note two important points about \`isStable\`, demonstrated in the examples below:
 * - the application will never be stable if you start any kind
 * of recurrent asynchronous task when the application starts
 * (for example for a polling process, started with a \`setInterval\`, a \`setTimeout\`
 * or using RxJS operators like \`interval\`);
 * - the \`isStable\` Observable runs outside of the Angular zone.
 *
 * Let's imagine that you start a recurrent task
 * (here incrementing a counter, using RxJS \`interval\`),
 * and at the same time subscribe to \`isStable\`.
 *
 * \`\`\`
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *      filter(stable => stable)
 *   ).subscribe(() => console.log('App is stable now');
 *   interval(1000).subscribe(counter => console.log(counter));
 * }
 * \`\`\`
 * In this example, \`isStable\` will never emit \`true\`,
 * and the trace "App is stable now" will never get logged.
 *
 * If you want to execute something when the app is stable,
 * you have to wait for the application to be stable
 * before starting your polling process.
 *
 * \`\`\`
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     tap(stable => console.log('App is stable now')),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => console.log(counter));
 * }
 * \`\`\`
 * In this example, the trace "App is stable now" will be logged
 * and then the counter starts incrementing every second.
 *
 * Note also that this Observable runs outside of the Angular zone,
 * which means that the code in the subscription
 * to this Observable will not trigger the change detection.
 *
 * Let's imagine that instead of logging the counter value,
 * you update a field of your component
 * and display it in its template.
 *
 * \`\`\`
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => this.value = counter);
 * }
 * \`\`\`
 * As the \`isStable\` Observable runs outside the zone,
 * the \`value\` field will be updated properly,
 * but the template will not be refreshed!
 *
 * You'll have to manually trigger the change detection to update the template.
 *
 * \`\`\`
 * constructor(appRef: ApplicationRef, cd: ChangeDetectorRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => {
 *     this.value = counter;
 *     cd.detectChanges();
 *   });
 * }
 * \`\`\`
 *
 * Or make the subscription callback run inside the zone.
 *
 * \`\`\`
 * constructor(appRef: ApplicationRef, zone: NgZone) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => zone.run(() => this.value = counter));
 * }
 * \`\`\`
 *
 * @publicApi
 */
export declare class ApplicationRef {
	private _zone;
	private _injector;
	private _exceptionHandler;
	private _views;
	private _runningTick;
	private _stable;
	private _onMicrotaskEmptySubscription;
	private _destroyed;
	private _destroyListeners;
	/**
	 * Indicates whether this instance was destroyed.
	 */
	get destroyed(): boolean;
	/**
	 * Get a list of component types registered to this application.
	 * This list is populated even before the component is created.
	 */
	readonly componentTypes: Type<any>[];
	/**
	 * Get a list of components registered to this application.
	 */
	readonly components: ComponentRef<any>[];
	/**
	 * Returns an Observable that indicates when the application is stable or unstable.
	 *
	 * @see  [Usage notes](#is-stable-examples) for examples and caveats when using this API.
	 */
	readonly isStable: Observable<boolean>;
	/**
	 * The \`EnvironmentInjector\` used to create this application.
	 */
	get injector(): EnvironmentInjector;
	/**
	 * Bootstrap a component onto the element identified by its selector or, optionally, to a
	 * specified element.
	 *
	 * @usageNotes
	 * ### Bootstrap process
	 *
	 * When bootstrapping a component, Angular mounts it onto a target DOM element
	 * and kicks off automatic change detection. The target DOM element can be
	 * provided using the \`rootSelectorOrNode\` argument.
	 *
	 * If the target DOM element is not provided, Angular tries to find one on a page
	 * using the \`selector\` of the component that is being bootstrapped
	 * (first matched element is used).
	 *
	 * ### Example
	 *
	 * Generally, we define the component to bootstrap in the \`bootstrap\` array of \`NgModule\`,
	 * but it requires us to know the component while writing the application code.
	 *
	 * Imagine a situation where we have to wait for an API call to decide about the component to
	 * bootstrap. We can use the \`ngDoBootstrap\` hook of the \`NgModule\` and call this method to
	 * dynamically bootstrap a component.
	 *
	 * {@example core/ts/platform/platform.ts region='componentSelector'}
	 *
	 * Optionally, a component can be mounted onto a DOM element that does not match the
	 * selector of the bootstrapped component.
	 *
	 * In the following example, we are providing a CSS selector to match the target element.
	 *
	 * {@example core/ts/platform/platform.ts region='cssSelector'}
	 *
	 * While in this example, we are providing reference to a DOM node.
	 *
	 * {@example core/ts/platform/platform.ts region='domNode'}
	 */
	bootstrap<C>(component: Type<C>, rootSelectorOrNode?: string | any): ComponentRef<C>;
	/**
	 * Bootstrap a component onto the element identified by its selector or, optionally, to a
	 * specified element.
	 *
	 * @usageNotes
	 * ### Bootstrap process
	 *
	 * When bootstrapping a component, Angular mounts it onto a target DOM element
	 * and kicks off automatic change detection. The target DOM element can be
	 * provided using the \`rootSelectorOrNode\` argument.
	 *
	 * If the target DOM element is not provided, Angular tries to find one on a page
	 * using the \`selector\` of the component that is being bootstrapped
	 * (first matched element is used).
	 *
	 * ### Example
	 *
	 * Generally, we define the component to bootstrap in the \`bootstrap\` array of \`NgModule\`,
	 * but it requires us to know the component while writing the application code.
	 *
	 * Imagine a situation where we have to wait for an API call to decide about the component to
	 * bootstrap. We can use the \`ngDoBootstrap\` hook of the \`NgModule\` and call this method to
	 * dynamically bootstrap a component.
	 *
	 * {@example core/ts/platform/platform.ts region='componentSelector'}
	 *
	 * Optionally, a component can be mounted onto a DOM element that does not match the
	 * selector of the bootstrapped component.
	 *
	 * In the following example, we are providing a CSS selector to match the target element.
	 *
	 * {@example core/ts/platform/platform.ts region='cssSelector'}
	 *
	 * While in this example, we are providing reference to a DOM node.
	 *
	 * {@example core/ts/platform/platform.ts region='domNode'}
	 *
	 * @deprecated Passing Component factories as the \`Application.bootstrap\` function argument is
	 *     deprecated. Pass Component Types instead.
	 */
	bootstrap<C>(componentFactory: ComponentFactory<C>, rootSelectorOrNode?: string | any): ComponentRef<C>;
	/**
	 * Invoke this method to explicitly process change detection and its side-effects.
	 *
	 * In development mode, \`tick()\` also performs a second change detection cycle to ensure that no
	 * further changes are detected. If additional changes are picked up during this second cycle,
	 * bindings in the app have side-effects that cannot be resolved in a single change detection
	 * pass.
	 * In this case, Angular throws an error, since an Angular application can only have one change
	 * detection pass during which all change detection must complete.
	 */
	tick(): void;
	/**
	 * Attaches a view so that it will be dirty checked.
	 * The view will be automatically detached when it is destroyed.
	 * This will throw if the view is already attached to a ViewContainer.
	 */
	attachView(viewRef: ViewRef): void;
	/**
	 * Detaches a view from dirty checking again.
	 */
	detachView(viewRef: ViewRef): void;
	private _loadComponent;
	/**
	 * Destroys an Angular application represented by this \`ApplicationRef\`. Calling this function
	 * will destroy the associated environment injectors as well as all the bootstrapped components
	 * with their views.
	 */
	destroy(): void;
	/**
	 * Returns the number of attached views.
	 */
	get viewCount(): number;
	private warnIfDestroyed;
	static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationRef, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<ApplicationRef>;
}

/**
 * @publicApi
 */
export declare function asNativeElements(debugEls: DebugElement[]): any;

/**
 * Checks that there is currently a platform that contains the given token as a provider.
 *
 * @publicApi
 */
export declare function assertPlatform(requiredToken: any): PlatformRef;

/**
 * Type of the Attribute metadata.
 *
 * @publicApi
 */
export declare interface Attribute {
	/**
	 * The name of the attribute whose value can be injected.
	 */
	attributeName: string;
}

/**
 * Attribute decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Attribute: AttributeDecorator;


/**
 * Type of the Attribute decorator / constructor function.
 *
 * @publicApi
 */
export declare interface AttributeDecorator {
	/**
	 * Parameter decorator for a directive constructor that designates
	 * a host-element attribute whose value is injected as a constant string literal.
	 *
	 * @usageNotes
	 *
	 * Suppose we have an \`<input>\` element and want to know its \`type\`.
	 *
	 * \`\`\`html
	 * <input type="text">
	 * \`\`\`
	 *
	 * The following example uses the decorator to inject the string literal \`text\` in a directive.
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 *
	 * The following example uses the decorator in a component constructor.
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeFactory'}
	 *
	 */
	(name: string): any;
	new(name: string): Attribute;
}

/**
 * Provides additional options to the bootstrapping process.
 *
 * @publicApi
 */
export declare interface BootstrapOptions {
	/**
	 * Optionally specify which \`NgZone\` should be used.
	 *
	 * - Provide your own \`NgZone\` instance.
	 * - \`zone.js\` - Use default \`NgZone\` which requires \`Zone.js\`.
	 * - \`noop\` - Use \`NoopNgZone\` which does nothing.
	 */
	ngZone?: NgZone | 'zone.js' | 'noop';
	/**
	 * Optionally specify coalescing event change detections or not.
	 * Consider the following case.
	 *
	 * <div (click)="doSomething()">
	 *   <button (click)="doSomethingElse()"></button>
	 * </div>
	 *
	 * When button is clicked, because of the event bubbling, both
	 * event handlers will be called and 2 change detections will be
	 * triggered. We can coalesce such kind of events to only trigger
	 * change detection only once.
	 *
	 * By default, this option will be false. So the events will not be
	 * coalesced and the change detection will be triggered multiple times.
	 * And if this option be set to true, the change detection will be
	 * triggered async by scheduling a animation frame. So in the case above,
	 * the change detection will only be triggered once.
	 */
	ngZoneEventCoalescing?: boolean;
	/**
	 * Optionally specify if \`NgZone#run()\` method invocations should be coalesced
	 * into a single change detection.
	 *
	 * Consider the following case.
	 *
	 * for (let i = 0; i < 10; i ++) {
	 *   ngZone.run(() => {
	 *     // do something
	 *   });
	 * }
	 *
	 * This case triggers the change detection multiple times.
	 * With ngZoneRunCoalescing options, all change detections in an event loop trigger only once.
	 * In addition, the change detection executes in requestAnimation.
	 *
	 */
	ngZoneRunCoalescing?: boolean;
}


/**
 * The strategy that the default change detector uses to detect changes.
 * When set, takes effect the next time change detection is triggered.
 *
 * @see {@link ChangeDetectorRef#usage-notes Change detection usage}
 *
 * @publicApi
 */
export declare enum ChangeDetectionStrategy {
	/**
	 * Use the \`CheckOnce\` strategy, meaning that automatic change detection is deactivated
	 * until reactivated by setting the strategy to \`Default\` (\`CheckAlways\`).
	 * Change detection can still be explicitly invoked.
	 * This strategy applies to all child directives and cannot be overridden.
	 */
	OnPush = 0,
	/**
	 * Use the default \`CheckAlways\` strategy, in which change detection is automatic until
	 * explicitly deactivated.
	 */
	Default = 1
}

declare type ChangeDetectionStrategy_2 = number;

/**
 * Base class that provides change detection functionality.
 * A change-detection tree collects all views that are to be checked for changes.
 * Use the methods to add and remove views from the tree, initiate change-detection,
 * and explicitly mark views as _dirty_, meaning that they have changed and need to be re-rendered.
 *
 * @see [Using change detection hooks](guide/lifecycle-hooks#using-change-detection-hooks)
 * @see [Defining custom change detection](guide/lifecycle-hooks#defining-custom-change-detection)
 *
 * @usageNotes
 *
 * The following examples demonstrate how to modify default change-detection behavior
 * to perform explicit detection when needed.
 *
 * ### Use \`markForCheck()\` with \`CheckOnce\` strategy
 *
 * The following example sets the \`OnPush\` change-detection strategy for a component
 * (\`CheckOnce\`, rather than the default \`CheckAlways\`), then forces a second check
 * after an interval. See [live demo](https://plnkr.co/edit/GC512b?p=preview).
 *
 * <code-example path="core/ts/change_detect/change-detection.ts"
 * region="mark-for-check"></code-example>
 *
 * ### Detach change detector to limit how often check occurs
 *
 * The following example defines a component with a large list of read-only data
 * that is expected to change constantly, many times per second.
 * To improve performance, we want to check and update the list
 * less often than the changes actually occur. To do that, we detach
 * the component's change detector and perform an explicit local check every five seconds.
 *
 * <code-example path="core/ts/change_detect/change-detection.ts" region="detach"></code-example>
 *
 *
 * ### Reattaching a detached component
 *
 * The following example creates a component displaying live data.
 * The component detaches its change detector from the main change detector tree
 * when the \`live\` property is set to false, and reattaches it when the property
 * becomes true.
 *
 * <code-example path="core/ts/change_detect/change-detection.ts" region="reattach"></code-example>
 *
 * @publicApi
 */
export declare abstract class ChangeDetectorRef {
	/**
	 * When a view uses the {@link ChangeDetectionStrategy#OnPush OnPush} (checkOnce)
	 * change detection strategy, explicitly marks the view as changed so that
	 * it can be checked again.
	 *
	 * Components are normally marked as dirty (in need of rerendering) when inputs
	 * have changed or events have fired in the view. Call this method to ensure that
	 * a component is checked even if these triggers have not occurred.
	 *
	 * <!-- TODO: Add a link to a chapter on OnPush components -->
	 *
	 */
	abstract markForCheck(): void;
	/**
	 * Detaches this view from the change-detection tree.
	 * A detached view is  not checked until it is reattached.
	 * Use in combination with \`detectChanges()\` to implement local change detection checks.
	 *
	 * Detached views are not checked during change detection runs until they are
	 * re-attached, even if they are marked as dirty.
	 *
	 * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
	 * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
	 *
	 */
	abstract detach(): void;
	/**
	 * Checks this view and its children. Use in combination with {@link ChangeDetectorRef#detach
	 * detach}
	 * to implement local change detection checks.
	 *
	 * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
	 * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
	 *
	 */
	abstract detectChanges(): void;
	/**
	 * Checks the change detector and its children, and throws if any changes are detected.
	 *
	 * Use in development mode to verify that running change detection doesn't introduce
	 * other changes. Calling it in production mode is a noop.
	 */
	abstract checkNoChanges(): void;
	/**
	 * Re-attaches the previously detached view to the change detection tree.
	 * Views are attached to the tree by default.
	 *
	 * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
	 *
	 */
	abstract reattach(): void;
}

declare const CHILD_HEAD = 13;

declare const CHILD_TAIL = 14;

/**
 * Configures the \`Injector\` to return an instance of \`useClass\` for a token.
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * {@example core/di/ts/provider_spec.ts region='ClassProvider'}
 *
 * Note that following two providers are not equal:
 *
 * {@example core/di/ts/provider_spec.ts region='ClassProviderDifference'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 *
 * @publicApi
 */
export declare interface ClassProvider extends ClassSansProvider {
	/**
	 * An injection token. (Typically an instance of \`Type\` or \`InjectionToken\`, but can be \`any\`).
	 */
	provide: any;
	/**
	 * When true, injector returns an array of instances. This is useful to allow multiple
	 * providers spread across many files to provide configuration information to a common token.
	 */
	multi?: boolean;
}

/**
 * Configures the \`Injector\` to return a value by invoking a \`useClass\` function.
 * Base for \`ClassProvider\` decorator.
 *
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @publicApi
 */
export declare interface ClassSansProvider {
	/**
	 * Class to instantiate for the \`token\`.
	 */
	useClass: Type<any>;
}

declare const CLEANUP = 7;

/**
 * Low-level service for running the angular compiler during runtime
 * to create {@link ComponentFactory}s, which
 * can later be used to create and render a Component instance.
 *
 * Each \`@NgModule\` provides an own \`Compiler\` to its injector,
 * that will use the directives/pipes of the ng module for compilation
 * of components.
 *
 * @publicApi
 *
 * @deprecated
 * Ivy JIT mode doesn't require accessing this symbol.
 * See [JIT API changes due to ViewEngine deprecation](guide/deprecations#jit-api-changes) for
 * additional context.
 */
export declare class Compiler {
	/**
	 * Compiles the given NgModule and all of its components. All templates of the components listed
	 * in \`entryComponents\` have to be inlined.
	 */
	compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T>;
	/**
	 * Compiles the given NgModule and all of its components
	 */
	compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>>;
	/**
	 * Same as {@link #compileModuleSync} but also creates ComponentFactories for all components.
	 */
	compileModuleAndAllComponentsSync<T>(moduleType: Type<T>): ModuleWithComponentFactories<T>;
	/**
	 * Same as {@link #compileModuleAsync} but also creates ComponentFactories for all components.
	 */
	compileModuleAndAllComponentsAsync<T>(moduleType: Type<T>): Promise<ModuleWithComponentFactories<T>>;
	/**
	 * Clears all caches.
	 */
	clearCache(): void;
	/**
	 * Clears the cache for the given component/ngModule.
	 */
	clearCacheFor(type: Type<any>): void;
	/**
	 * Returns the id for a given NgModule, if one is defined and known to the compiler.
	 */
	getModuleId(moduleType: Type<any>): string | undefined;
	static ɵfac: i0.ɵɵFactoryDeclaration<Compiler, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<Compiler>;
}

/**
 * Token to provide CompilerOptions in the platform injector.
 *
 * @publicApi
 */
export declare const COMPILER_OPTIONS: InjectionToken<CompilerOptions[]>;

/**
 * A factory for creating a Compiler
 *
 * @publicApi
 *
 * @deprecated
 * Ivy JIT mode doesn't require accessing this symbol.
 * See [JIT API changes due to ViewEngine deprecation](guide/deprecations#jit-api-changes) for
 * additional context.
 */
export declare abstract class CompilerFactory {
	abstract createCompiler(options?: CompilerOptions[]): Compiler;
}

/**
 * Options for creating a compiler.
 *
 * Note: the \`useJit\` and \`missingTranslation\` config options are not used in Ivy, passing them has
 * no effect. Those config options are deprecated since v13.
 *
 * @publicApi
 */
export declare type CompilerOptions = {
	/**
	 * @deprecated not used at all in Ivy, providing this config option has no effect.
	 */
	useJit?: boolean;
	defaultEncapsulation?: ViewEncapsulation;
	providers?: StaticProvider[];
	/**
	 * @deprecated not used at all in Ivy, providing this config option has no effect.
	 */
	missingTranslation?: MissingTranslationStrategy;
	preserveWhitespaces?: boolean;
};

/**
 * Supplies configuration metadata for an Angular component.
 *
 * @publicApi
 */
export declare interface Component extends Directive {
	/**
	 * The change-detection strategy to use for this component.
	 *
	 * When a component is instantiated, Angular creates a change detector,
	 * which is responsible for propagating the component's bindings.
	 * The strategy is one of:
	 * - \`ChangeDetectionStrategy#OnPush\` sets the strategy to \`CheckOnce\` (on demand).
	 * - \`ChangeDetectionStrategy#Default\` sets the strategy to \`CheckAlways\`.
	 */
	changeDetection?: ChangeDetectionStrategy;
	/**
	 * Defines the set of injectable objects that are visible to its view DOM children.
	 * See [example](#injecting-a-class-with-a-view-provider).
	 *
	 */
	viewProviders?: Provider[];
	/**
	 * The module ID of the module that contains the component.
	 * The component must be able to resolve relative URLs for templates and styles.
	 * SystemJS exposes the \`__moduleName\` variable within each module.
	 * In CommonJS, this can  be set to \`module.id\`.
	 *
	 */
	moduleId?: string;
	/**
	 * The relative path or absolute URL of a template file for an Angular component.
	 * If provided, do not supply an inline template using \`template\`.
	 *
	 */
	templateUrl?: string;
	/**
	 * An inline template for an Angular component. If provided,
	 * do not supply a template file using \`templateUrl\`.
	 *
	 */
	template?: string;
	/**
	 * One or more relative paths or absolute URLs for files containing CSS stylesheets to use
	 * in this component.
	 */
	styleUrls?: string[];
	/**
	 * One or more inline CSS stylesheets to use
	 * in this component.
	 */
	styles?: string[];
	/**
	 * One or more animation \`trigger()\` calls, containing
	 * [\`state()\`](api/animations/state) and \`transition()\` definitions.
	 * See the [Animations guide](/guide/animations) and animations API documentation.
	 *
	 */
	animations?: any[];
	/**
	 * An encapsulation policy for the component's styling.
	 * Possible values:
	 * - \`ViewEncapsulation.Emulated\`: Apply modified component styles in order to emulate
	 *                                 a native Shadow DOM CSS encapsulation behavior.
	 * - \`ViewEncapsulation.None\`: Apply component styles globally without any sort of encapsulation.
	 * - \`ViewEncapsulation.ShadowDom\`: Use the browser's native Shadow DOM API to encapsulate styles.
	 *
	 * If not supplied, the value is taken from the \`CompilerOptions\`
	 * which defaults to \`ViewEncapsulation.Emulated\`.
	 *
	 * If the policy is \`ViewEncapsulation.Emulated\` and the component has no
	 * {@link Component#styles styles} nor {@link Component#styleUrls styleUrls},
	 * the policy is automatically switched to \`ViewEncapsulation.None\`.
	 */
	encapsulation?: ViewEncapsulation;
	/**
	 * Overrides the default interpolation start and end delimiters (\`{{\` and \`}}\`).
	 */
	interpolation?: [string, string];
	/**
	 * A set of components that should be compiled along with
	 * this component. For each component listed here,
	 * Angular creates a {@link ComponentFactory} and stores it in the
	 * {@link ComponentFactoryResolver}.
	 * @deprecated Since 9.0.0. With Ivy, this property is no longer necessary.
	 */
	entryComponents?: Array<Type<any> | any[]>;
	/**
	 * True to preserve or false to remove potentially superfluous whitespace characters
	 * from the compiled template. Whitespace characters are those matching the \`\s\`
	 * character class in JavaScript regular expressions. Default is false, unless
	 * overridden in compiler options.
	 */
	preserveWhitespaces?: boolean;
	/**
	 * Angular components marked as \`standalone\` do not need to be declared in an NgModule. Such
	 * components directly manage their own template dependencies (components, directives, and pipes
	 * used in a template) via the imports property.
	 *
	 * More information about standalone components, directives, and pipes can be found in [this
	 * guide](guide/standalone-components).
	 *
	 * @developerPreview
	 */
	standalone?: boolean;
	/**
	 * The imports property specifies the standalone component's template dependencies — those
	 * directives, components, and pipes that can be used within its template. Standalone components
	 * can import other standalone components, directives, and pipes as well as existing NgModules.
	 *
	 * This property is only available for standalone components - specifying it for components
	 * declared in an NgModule generates a compilation error.
	 *
	 * More information about standalone components, directives, and pipes can be found in [this
	 * guide](guide/standalone-components).
	 *
	 * @developerPreview
	 */
	imports?: (Type<any> | any[])[];
	/**
	 * The set of schemas that declare elements to be allowed in a standalone component. Elements and
	 * properties that are neither Angular components nor directives must be declared in a schema.
	 *
	 * This property is only available for standalone components - specifying it for components
	 * declared in an NgModule generates a compilation error.
	 *
	 * More information about standalone components, directives, and pipes can be found in [this
	 * guide](guide/standalone-components).
	 */
	schemas?: SchemaMetadata[];
}

/**
 * Component decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Component: ComponentDecorator;

/**
 * Component decorator interface
 *
 * @publicApi
 */
export declare interface ComponentDecorator {
	/**
	 * Decorator that marks a class as an Angular component and provides configuration
	 * metadata that determines how the component should be processed,
	 * instantiated, and used at runtime.
	 *
	 * Components are the most basic UI building block of an Angular app.
	 * An Angular app contains a tree of Angular components.
	 *
	 * Angular components are a subset of directives, always associated with a template.
	 * Unlike other directives, only one component can be instantiated for a given element in a
	 * template.
	 *
	 * A component must belong to an NgModule in order for it to be available
	 * to another component or application. To make it a member of an NgModule,
	 * list it in the \`declarations\` field of the \`NgModule\` metadata.
	 *
	 * Note that, in addition to these options for configuring a directive,
	 * you can control a component's runtime behavior by implementing
	 * life-cycle hooks. For more information, see the
	 * [Lifecycle Hooks](guide/lifecycle-hooks) guide.
	 *
	 * @usageNotes
	 *
	 * ### Setting component inputs
	 *
	 * The following example creates a component with two data-bound properties,
	 * specified by the \`inputs\` value.
	 *
	 * <code-example path="core/ts/metadata/directives.ts" region="component-input"></code-example>
	 *
	 *
	 * ### Setting component outputs
	 *
	 * The following example shows two event emitters that emit on an interval. One
	 * emits an output every second, while the other emits every five seconds.
	 *
	 * {@example core/ts/metadata/directives.ts region='component-output-interval'}
	 *
	 * ### Injecting a class with a view provider
	 *
	 * The following simple example injects a class into a component
	 * using the view provider specified in component metadata:
	 *
	 * \`\`\`ts
	 * class Greeter {
	 *    greet(name:string) {
	 *      return 'Hello ' + name + '!';
	 *    }
	 * }
	 *
	 * @Directive({
	 *   selector: 'needs-greeter'
	 * })
	 * class NeedsGreeter {
	 *   greeter:Greeter;
	 *
	 *   constructor(greeter:Greeter) {
	 *     this.greeter = greeter;
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'greet',
	 *   viewProviders: [
	 *     Greeter
	 *   ],
	 *   template: \`<needs-greeter></needs-greeter>\`
	 * })
	 * class HelloWorld {
	 * }
	 *
	 * \`\`\`
	 *
	 * ### Preserving whitespace
	 *
	 * Removing whitespace can greatly reduce AOT-generated code size and speed up view creation.
	 * As of Angular 6, the default for \`preserveWhitespaces\` is false (whitespace is removed).
	 * To change the default setting for all components in your application, set
	 * the \`preserveWhitespaces\` option of the AOT compiler.
	 *
	 * By default, the AOT compiler removes whitespace characters as follows:
	 * * Trims all whitespaces at the beginning and the end of a template.
	 * * Removes whitespace-only text nodes. For example,
	 *
	 * \`\`\`html
	 * <button>Action 1</button>  <button>Action 2</button>
	 * \`\`\`
	 *
	 * becomes:
	 *
	 * \`\`\`html
	 * <button>Action 1</button><button>Action 2</button>
	 * \`\`\`
	 *
	 * * Replaces a series of whitespace characters in text nodes with a single space.
	 * For example, \`<span>\n some text\n</span>\` becomes \`<span> some text </span>\`.
	 * * Does NOT alter text nodes inside HTML tags such as \`<pre>\` or \`<textarea>\`,
	 * where whitespace characters are significant.
	 *
	 * Note that these transformations can influence DOM nodes layout, although impact
	 * should be minimal.
	 *
	 * You can override the default behavior to preserve whitespace characters
	 * in certain fragments of a template. For example, you can exclude an entire
	 * DOM sub-tree by using the \`ngPreserveWhitespaces\` attribute:
	 *
	 * \`\`\`html
	 * <div ngPreserveWhitespaces>
	 *     whitespaces are preserved here
	 *     <span>    and here </span>
	 * </div>
	 * \`\`\`
	 *
	 * You can force a single space to be preserved in a text node by using \`&ngsp;\`,
	 * which is replaced with a space character by Angular's template
	 * compiler:
	 *
	 * \`\`\`html
	 * <a>Spaces</a>&ngsp;<a>between</a>&ngsp;<a>links.</a>
	 * <!-- compiled to be equivalent to:
	 *  <a>Spaces</a> <a>between</a> <a>links.</a>  -->
	 * \`\`\`
	 *
	 * Note that sequences of \`&ngsp;\` are still collapsed to just one space character when
	 * the \`preserveWhitespaces\` option is set to \`false\`.
	 *
	 * \`\`\`html
	 * <a>before</a>&ngsp;&ngsp;&ngsp;<a>after</a>
	 * <!-- compiled to be equivalent to:
	 *  <a>before</a> <a>after</a> -->
	 * \`\`\`
	 *
	 * To preserve sequences of whitespace characters, use the
	 * \`ngPreserveWhitespaces\` attribute.
	 *
	 * @Annotation
	 */
	(obj: Component): TypeDecorator;
	/**
	 * See the \`Component\` decorator.
	 */
	new(obj: Component): Component;
}

declare interface ComponentDefFeature {
	<T>(componentDef: ɵComponentDef<T>): void;
	/**
	 * Marks a feature as something that {@link InheritDefinitionFeature} will execute
	 * during inheritance.
	 *
	 * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
	 * identifying the change as a side effect, and the feature will be included in
	 * every bundle.
	 */
	ngInherit?: true;
}

/**
 * Base class for a factory that can create a component dynamically.
 * Instantiate a factory for a given type of component with \`resolveComponentFactory()\`.
 * Use the resulting \`ComponentFactory.create()\` method to create a component of that type.
 *
 * @see [Dynamic Components](guide/dynamic-component-loader)
 *
 * @publicApi
 *
 * @deprecated Angular no longer requires Component factories. Please use other APIs where
 *     Component class can be used directly.
 */
declare abstract class ComponentFactory<C> {
	/**
	 * The component's HTML selector.
	 */
	abstract get selector(): string;
	/**
	 * The type of component the factory will create.
	 */
	abstract get componentType(): Type<any>;
	/**
	 * Selector for all <ng-content> elements in the component.
	 */
	abstract get ngContentSelectors(): string[];
	/**
	 * The inputs of the component.
	 */
	abstract get inputs(): {
		propName: string;
		templateName: string;
	}[];
	/**
	 * The outputs of the component.
	 */
	abstract get outputs(): {
		propName: string;
		templateName: string;
	}[];
	/**
	 * Creates a new component.
	 */
	abstract create(injector: Injector, projectableNodes?: any[][], rootSelectorOrNode?: string | any, environmentInjector?: EnvironmentInjector | NgModuleRef<any>): ComponentRef<C>;
}
export { ComponentFactory }
export { ComponentFactory as ɵComponentFactory }

/**
 * A simple registry that maps \`Components\` to generated \`ComponentFactory\` classes
 * that can be used to create instances of components.
 * Use to obtain the factory for a given component type,
 * then use the factory's \`create()\` method to create a component of that type.
 *
 * Note: since v13, dynamic component creation via
 * [\`ViewContainerRef.createComponent\`](api/core/ViewContainerRef#createComponent)
 * does **not** require resolving component factory: component class can be used directly.
 *
 * @publicApi
 *
 * @deprecated Angular no longer requires Component factories. Please use other APIs where
 *     Component class can be used directly.
 */
export declare abstract class ComponentFactoryResolver {
	static NULL: ComponentFactoryResolver;
	/**
	 * Retrieves the factory object that creates a component of the given type.
	 * @param component The component type.
	 */
	abstract resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
}

declare class ComponentFactoryResolver_2 extends ComponentFactoryResolver {
	private ngModule?;
	/**
	 * @param ngModule The NgModuleRef to which all resolved factories are bound.
	 */
	constructor(ngModule?: NgModuleRef<any> | undefined);
	resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
}

/**
 * An interface that describes the subset of component metadata
 * that can be retrieved using the \`reflectComponentType\` function.
 *
 * @publicApi
 */
export declare interface ComponentMirror<C> {
	/**
	 * The component's HTML selector.
	 */
	get selector(): string;
	/**
	 * The type of component the factory will create.
	 */
	get type(): Type<C>;
	/**
	 * The inputs of the component.
	 */
	get inputs(): ReadonlyArray<{
		readonly propName: string;
		readonly templateName: string;
	}>;
	/**
	 * The outputs of the component.
	 */
	get outputs(): ReadonlyArray<{
		readonly propName: string;
		readonly templateName: string;
	}>;
	/**
	 * Selector for all <ng-content> elements in the component.
	 */
	get ngContentSelectors(): ReadonlyArray<string>;
	/**
	 * Whether this component is marked as standalone.
	 * Note: an extra flag, not present in \`ComponentFactory\`.
	 */
	get isStandalone(): boolean;
}

/**
 * Represents a component created by a \`ComponentFactory\`.
 * Provides access to the component instance and related objects,
 * and provides the means of destroying the instance.
 *
 * @publicApi
 */
export declare abstract class ComponentRef<C> {
	/**
	 * Updates a specified input name to a new value. Using this method will properly mark for check
	 * component using the \`OnPush\` change detection strategy. It will also assure that the
	 * \`OnChanges\` lifecycle hook runs when a dynamically created component is change-detected.
	 *
	 * @param name The name of an input.
	 * @param value The new value of an input.
	 */
	abstract setInput(name: string, value: unknown): void;
	/**
	 * The host or anchor [element](guide/glossary#element) for this component instance.
	 */
	abstract get location(): ElementRef;
	/**
	 * The [dependency injector](guide/glossary#injector) for this component instance.
	 */
	abstract get injector(): Injector;
	/**
	 * This component instance.
	 */
	abstract get instance(): C;
	/**
	 * The [host view](guide/glossary#view-tree) defined by the template
	 * for this component instance.
	 */
	abstract get hostView(): ViewRef;
	/**
	 * The change detector for this component instance.
	 */
	abstract get changeDetectorRef(): ChangeDetectorRef;
	/**
	 * The type of this component (as created by a \`ComponentFactory\` class).
	 */
	abstract get componentType(): Type<any>;
	/**
	 * Destroys the component instance and all of the data structures associated with it.
	 */
	abstract destroy(): void;
	/**
	 * A lifecycle hook that provides additional developer-defined cleanup
	 * functionality for the component.
	 * @param callback A handler function that cleans up developer-defined data
	 * associated with this component. Called when the \`destroy()\` method is invoked.
	 */
	abstract onDestroy(callback: Function): void;
}

/**
 * Definition of what a template rendering function should look like for a component.
 */
declare type ComponentTemplate<T> = {
	<U extends T>(rf: ɵRenderFlags, ctx: T | U): void;
};

/**
 * Configures the \`Injector\` to return an instance of a token.
 *
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * {@example core/di/ts/provider_spec.ts region='ConstructorProvider'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 *
 * @publicApi
 */
export declare interface ConstructorProvider extends ConstructorSansProvider {
	/**
	 * An injection token. Typically an instance of \`Type\` or \`InjectionToken\`, but can be \`any\`.
	 */
	provide: Type<any>;
	/**
	 * When true, injector returns an array of instances. This is useful to allow multiple
	 * providers spread across many files to provide configuration information to a common token.
	 */
	multi?: boolean;
}

/**
 * Configures the \`Injector\` to return an instance of a token.
 *
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * \`\`\`ts
 * @Injectable(SomeModule, {deps: []})
 * class MyService {}
 * \`\`\`
 *
 * @publicApi
 */
export declare interface ConstructorSansProvider {
	/**
	 * A list of \`token\`s to be resolved by the injector.
	 */
	deps?: any[];
}

/**
 * Type of the ContentChild metadata.
 *
 * @publicApi
 */
export declare type ContentChild = Query;

/**
 * ContentChild decorator and metadata.
 *
 *
 * @Annotation
 *
 * @publicApi
 */
export declare const ContentChild: ContentChildDecorator;

/**
 * Type of the ContentChild decorator / constructor function.
 *
 * @publicApi
 */
export declare interface ContentChildDecorator {
	/**
	 * @description
	 * Property decorator that configures a content query.
	 *
	 * Use to get the first element or the directive matching the selector from the content DOM.
	 * If the content DOM changes, and a new child matches the selector,
	 * the property will be updated.
	 *
	 * Content queries are set before the \`ngAfterContentInit\` callback is called.
	 *
	 * Does not retrieve elements or directives that are in other components' templates,
	 * since a component's template is always a black box to its ancestors.
	 *
	 * **Metadata Properties**:
	 *
	 * * **selector** - The directive type or the name used for querying.
	 * * **descendants** - If \`true\` (default) include all descendants of the element. If \`false\` then
	 * only query direct children of the element.
	 * * **read** - Used to read a different token from the queried element.
	 * * **static** - True to resolve query results before change detection runs,
	 * false to resolve after change detection. Defaults to false.
	 *
	 * The following selectors are supported.
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * A template reference variable as a string (e.g. query \`<my-component #cmp></my-component>\`
	 * with \`@ContentChild('cmp')\`)
	 *   * Any provider defined in the child component tree of the current component (e.g.
	 * \`@ContentChild(SomeService) someService: SomeService\`)
	 *   * Any provider defined through a string token (e.g. \`@ContentChild('someToken') someTokenVal:
	 * any\`)
	 *   * A \`TemplateRef\` (e.g. query \`<ng-template></ng-template>\` with \`@ContentChild(TemplateRef)
	 * template;\`)
	 *
	 * The following values are supported by \`read\`:
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * Any provider defined on the injector of the component that is matched by the \`selector\` of
	 * this query
	 *   * Any provider defined through a string token (e.g. \`{provide: 'token', useValue: 'val'}\`)
	 *   * \`TemplateRef\`, \`ElementRef\`, and \`ViewContainerRef\`
	 *
	 * @usageNotes
	 *
	 * {@example core/di/ts/contentChild/content_child_howto.ts region='HowTo'}
	 *
	 * ### Example
	 *
	 * {@example core/di/ts/contentChild/content_child_example.ts region='Component'}
	 *
	 * @Annotation
	 */
	(selector: ProviderToken<unknown> | Function | string, opts?: {
		descendants?: boolean;
		read?: any;
		static?: boolean;
	}): any;
	new(selector: ProviderToken<unknown> | Function | string, opts?: {
		descendants?: boolean;
		read?: any;
		static?: boolean;
	}): ContentChild;
}

/**
 * Type of the ContentChildren metadata.
 *
 *
 * @Annotation
 * @publicApi
 */
export declare type ContentChildren = Query;

/**
 * ContentChildren decorator and metadata.
 *
 *
 * @Annotation
 * @publicApi
 */
export declare const ContentChildren: ContentChildrenDecorator;

/**
 * Type of the ContentChildren decorator / constructor function.
 *
 * @see \`ContentChildren\`.
 * @publicApi
 */
export declare interface ContentChildrenDecorator {
	/**
	 * @description
	 * Property decorator that configures a content query.
	 *
	 * Use to get the \`QueryList\` of elements or directives from the content DOM.
	 * Any time a child element is added, removed, or moved, the query list will be
	 * updated, and the changes observable of the query list will emit a new value.
	 *
	 * Content queries are set before the \`ngAfterContentInit\` callback is called.
	 *
	 * Does not retrieve elements or directives that are in other components' templates,
	 * since a component's template is always a black box to its ancestors.
	 *
	 * **Metadata Properties**:
	 *
	 * * **selector** - The directive type or the name used for querying.
	 * * **descendants** - If \`true\` include all descendants of the element. If \`false\` then only
	 * query direct children of the element.
	 * * **emitDistinctChangesOnly** - The \` QueryList#changes\` observable will emit new values only
	 *   if the QueryList result has changed. When \`false\` the \`changes\` observable might emit even
	 *   if the QueryList has not changed.
	 *   ** Note: *** This config option is **deprecated**, it will be permanently set to \`true\` and
	 *   removed in future versions of Angular.
	 * * **read** - Used to read a different token from the queried elements.
	 *
	 * The following selectors are supported.
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * A template reference variable as a string (e.g. query \`<my-component #cmp></my-component>\`
	 * with \`@ContentChildren('cmp')\`)
	 *   * Any provider defined in the child component tree of the current component (e.g.
	 * \`@ContentChildren(SomeService) someService: SomeService\`)
	 *   * Any provider defined through a string token (e.g. \`@ContentChildren('someToken')
	 * someTokenVal: any\`)
	 *   * A \`TemplateRef\` (e.g. query \`<ng-template></ng-template>\` with
	 * \`@ContentChildren(TemplateRef) template;\`)
	 *
	 * In addition, multiple string selectors can be separated with a comma (e.g.
	 * \`@ContentChildren('cmp1,cmp2')\`)
	 *
	 * The following values are supported by \`read\`:
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * Any provider defined on the injector of the component that is matched by the \`selector\` of
	 * this query
	 *   * Any provider defined through a string token (e.g. \`{provide: 'token', useValue: 'val'}\`)
	 *   * \`TemplateRef\`, \`ElementRef\`, and \`ViewContainerRef\`
	 *
	 * @usageNotes
	 *
	 * Here is a simple demonstration of how the \`ContentChildren\` decorator can be used.
	 *
	 * {@example core/di/ts/contentChildren/content_children_howto.ts region='HowTo'}
	 *
	 * ### Tab-pane example
	 *
	 * Here is a slightly more realistic example that shows how \`ContentChildren\` decorators
	 * can be used to implement a tab pane component.
	 *
	 * {@example core/di/ts/contentChildren/content_children_example.ts region='Component'}
	 *
	 * @Annotation
	 */
	(selector: ProviderToken<unknown> | Function | string, opts?: {
		descendants?: boolean;
		emitDistinctChangesOnly?: boolean;
		read?: any;
	}): any;
	new(selector: ProviderToken<unknown> | Function | string, opts?: {
		descendants?: boolean;
		emitDistinctChangesOnly?: boolean;
		read?: any;
	}): Query;
}

/**
 * Definition of what a content queries function should look like.
 */
declare type ContentQueriesFunction<T> = <U extends T>(rf: ɵRenderFlags, ctx: U, directiveIndex: number) => void;

declare const CONTEXT = 8;

/**
 * Creates a \`ComponentRef\` instance based on provided component type and a set of options.
 *
 * @usageNotes
 *
 * The example below demonstrates how the \`createComponent\` function can be used
 * to create an instance of a ComponentRef dynamically and attach it to an ApplicationRef,
 * so that it gets included into change detection cycles.
 *
 * Note: the example uses standalone components, but the function can also be used for
 * non-standalone components (declared in an NgModule) as well.
 *
 * \`\`\`typescript
 * @Component({
 *   standalone: true,
 *   template: \`Hello {{ name }}!\`
 * })
 * class HelloComponent {
 *   name = 'Angular';
 * }
 *
 * @Component({
 *   standalone: true,
 *   template: \`<div id="hello-component-host"></div>\`
 * })
 * class RootComponent {}
 *
 * // Bootstrap an application.
 * const applicationRef = await bootstrapApplication(RootComponent);
 *
 * // Locate a DOM node that would be used as a host.
 * const host = document.getElementById('hello-component-host');
 *
 * // Get an \`EnvironmentInjector\` instance from the \`ApplicationRef\`.
 * const environmentInjector = applicationRef.injector;
 *
 * // We can now create a \`ComponentRef\` instance.
 * const componentRef = createComponent(HelloComponent, {host, environmentInjector});
 *
 * // Last step is to register the newly created ref using the \`ApplicationRef\` instance
 * // to include the component view into change detection cycles.
 * applicationRef.attachView(componentRef.hostView);
 * \`\`\`
 *
 * @param component Component class reference.
 * @param options Set of options to use:
 *  * \`environmentInjector\`: An \`EnvironmentInjector\` instance to be used for the component, see
 * additional info about it at https://angular.io/guide/standalone-components#environment-injectors.
 *  * \`hostElement\` (optional): A DOM node that should act as a host node for the component. If not
 * provided, Angular creates one based on the tag name used in the component selector (and falls
 * back to using \`div\` if selector doesn't have tag name info).
 *  * \`elementInjector\` (optional): An \`ElementInjector\` instance, see additional info about it at
 * https://angular.io/guide/hierarchical-dependency-injection#elementinjector.
 *  * \`projectableNodes\` (optional): A list of DOM nodes that should be projected through
 *                      [\`<ng-content>\`](api/core/ng-content) of the new component instance.
 * @returns ComponentRef instance that represents a given Component.
 *
 * @publicApi
 */
export declare function createComponent<C>(component: Type<C>, options: {
	environmentInjector: EnvironmentInjector;
	hostElement?: Element;
	elementInjector?: Injector;
	projectableNodes?: Node[][];
}): ComponentRef<C>;

/**
 * Create a new environment injector.
 *
 * Learn more about environment injectors in
 * [this guide](guide/standalone-components#environment-injectors).
 *
 * @param providers An array of providers.
 * @param parent A parent environment injector.
 * @param debugName An optional name for this injector instance, which will be used in error
 *     messages.
 *
 * @publicApi
 * @developerPreview
 */
export declare function createEnvironmentInjector(providers: Array<Provider | ImportedNgModuleProviders>, parent: EnvironmentInjector, debugName?: string | null): EnvironmentInjector;

/**
 * Returns a new NgModuleRef instance based on the NgModule class and parent injector provided.
 *
 * @param ngModule NgModule class.
 * @param parentInjector Optional injector instance to use as a parent for the module injector. If
 *     not provided, \`NullInjector\` will be used instead.
 * @returns NgModuleRef that represents an NgModule instance.
 *
 * @publicApi
 */
export declare function createNgModule<T>(ngModule: Type<T>, parentInjector?: Injector): NgModuleRef<T>;

/**
 * The \`createNgModule\` function alias for backwards-compatibility.
 * Please avoid using it directly and use \`createNgModule\` instead.
 *
 * @deprecated Use \`createNgModule\` instead.
 */
export declare const createNgModuleRef: typeof createNgModule;

/**
 * Creates a platform.
 * Platforms must be created on launch using this function.
 *
 * @publicApi
 */
export declare function createPlatform(injector: Injector): PlatformRef;

/**
 * Creates a factory for a platform. Can be used to provide or override \`Providers\` specific to
 * your application's runtime needs, such as \`PLATFORM_INITIALIZER\` and \`PLATFORM_ID\`.
 * @param parentPlatformFactory Another platform factory to modify. Allows you to compose factories
 * to build up configurations that might be required by different libraries or parts of the
 * application.
 * @param name Identifies the new platform factory.
 * @param providers A set of dependency providers for platforms created with the new factory.
 *
 * @publicApi
 */
export declare function createPlatformFactory(parentPlatformFactory: ((extraProviders?: StaticProvider[]) => PlatformRef) | null, name: string, providers?: StaticProvider[]): (extraProviders?: StaticProvider[]) => PlatformRef;


/**
 * Expresses a single CSS Selector.
 *
 * Beginning of array
 * - First index: element name
 * - Subsequent odd indices: attr keys
 * - Subsequent even indices: attr values
 *
 * After SelectorFlags.CLASS flag
 * - Class name values
 *
 * SelectorFlags.NOT flag
 * - Changes the mode to NOT
 * - Can be combined with other flags to set the element / attr / class mode
 *
 * e.g. SelectorFlags.NOT | SelectorFlags.ELEMENT
 *
 * Example:
 * Original: \`div.foo.bar[attr1=val1][attr2]\`
 * Parsed: ['div', 'attr1', 'val1', 'attr2', '', SelectorFlags.CLASS, 'foo', 'bar']
 *
 * Original: 'div[attr1]:not(.foo[attr2])
 * Parsed: [
 *  'div', 'attr1', '',
 *  SelectorFlags.NOT | SelectorFlags.ATTRIBUTE 'attr2', '', SelectorFlags.CLASS, 'foo'
 * ]
 *
 * See more examples in node_selector_matcher_spec.ts
 */
declare type CssSelector = (string | SelectorFlags)[];

/**
 * An object literal of this type is used to represent the metadata of a constructor dependency.
 * The type itself is never referred to from generated code.
 *
 * @publicApi
 */
declare type CtorDependency = {
	/**
	 * If an \`@Attribute\` decorator is used, this represents the injected attribute's name. If the
	 * attribute name is a dynamic expression instead of a string literal, this will be the unknown
	 * type.
	 */
	attribute?: string | unknown;
	/**
	 * If \`@Optional()\` is used, this key is set to true.
	 */
	optional?: true;
	/**
	 * If \`@Host\` is used, this key is set to true.
	 */
	host?: true;
	/**
	 * If \`@Self\` is used, this key is set to true.
	 */
	self?: true;
	/**
	 * If \`@SkipSelf\` is used, this key is set to true.
	 */
	skipSelf?: true;
} | null;

/**
 * Defines a schema that allows an NgModule to contain the following:
 * - Non-Angular elements named with dash case (\`-\`).
 * - Element properties named with dash case (\`-\`).
 * Dash case is the naming convention for custom elements.
 *
 * @publicApi
 */
export declare const CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata;

/**
 * @publicApi
 *
 * @see [Component testing scenarios](guide/testing-components-scenarios)
 * @see [Basics of testing components](guide/testing-components-basics)
 * @see [Testing utility APIs](guide/testing-utility-apis)
 */
export declare class DebugElement extends DebugNode {
	constructor(nativeNode: Element);
	/**
	 * The underlying DOM element at the root of the component.
	 */
	get nativeElement(): any;
	/**
	 * The element tag name, if it is an element.
	 */
	get name(): string;
	/**
	 *  Gets a map of property names to property values for an element.
	 *
	 *  This map includes:
	 *  - Regular property bindings (e.g. \`[id]="id"\`)
	 *  - Host property bindings (e.g. \`host: { '[id]': "id" }\`)
	 *  - Interpolated property bindings (e.g. \`id="{{ value }}")
	 *
	 *  It does not include:
	 *  - input property bindings (e.g. \`[myCustomInput]="value"\`)
	 *  - attribute bindings (e.g. \`[attr.role]="menu"\`)
	 */
	get properties(): {
		[key: string]: any;
	};
	/**
	 *  A map of attribute names to attribute values for an element.
	 */
	get attributes(): {
		[key: string]: string | null;
	};
	/**
	 * The inline styles of the DOM element.
	 *
	 * Will be \`null\` if there is no \`style\` property on the underlying DOM element.
	 *
	 * @see [ElementCSSInlineStyle](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style)
	 */
	get styles(): {
		[key: string]: string | null;
	};
	/**
	 * A map containing the class names on the element as keys.
	 *
	 * This map is derived from the \`className\` property of the DOM element.
	 *
	 * Note: The values of this object will always be \`true\`. The class key will not appear in the KV
	 * object if it does not exist on the element.
	 *
	 * @see [Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
	 */
	get classes(): {
		[key: string]: boolean;
	};
	/**
	 * The \`childNodes\` of the DOM element as a \`DebugNode\` array.
	 *
	 * @see [Node.childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
	 */
	get childNodes(): DebugNode[];
	/**
	 * The immediate \`DebugElement\` children. Walk the tree by descending through \`children\`.
	 */
	get children(): DebugElement[];
	/**
	 * @returns the first \`DebugElement\` that matches the predicate at any depth in the subtree.
	 */
	query(predicate: Predicate<DebugElement>): DebugElement;
	/**
	 * @returns All \`DebugElement\` matches for the predicate at any depth in the subtree.
	 */
	queryAll(predicate: Predicate<DebugElement>): DebugElement[];
	/**
	 * @returns All \`DebugNode\` matches for the predicate at any depth in the subtree.
	 */
	queryAllNodes(predicate: Predicate<DebugNode>): DebugNode[];
	/**
	 * Triggers the event by its name if there is a corresponding listener in the element's
	 * \`listeners\` collection.
	 *
	 * If the event lacks a listener or there's some other problem, consider
	 * calling \`nativeElement.dispatchEvent(eventObject)\`.
	 *
	 * @param eventName The name of the event to trigger
	 * @param eventObj The _event object_ expected by the handler
	 *
	 * @see [Testing components scenarios](guide/testing-components-scenarios#trigger-event-handler)
	 */
	triggerEventHandler(eventName: string, eventObj?: any): void;
}

/**
 * @publicApi
 */
export declare class DebugEventListener {
	name: string;
	callback: Function;
	constructor(name: string, callback: Function);
}

/**
 * @publicApi
 */
export declare class DebugNode {
	/**
	 * The underlying DOM node.
	 */
	readonly nativeNode: any;
	constructor(nativeNode: Node);
	/**
	 * The \`DebugElement\` parent. Will be \`null\` if this is the root element.
	 */
	get parent(): DebugElement | null;
	/**
	 * The host dependency injector. For example, the root element's component instance injector.
	 */
	get injector(): Injector;
	/**
	 * The element's own component instance, if it has one.
	 */
	get componentInstance(): any;
	/**
	 * An object that provides parent context for this element. Often an ancestor component instance
	 * that governs this element.
	 *
	 * When an element is repeated within *ngFor, the context is an \`NgForOf\` whose \`$implicit\`
	 * property is the value of the row instance value. For example, the \`hero\` in \`*ngFor="let hero
	 * of heroes"\`.
	 */
	get context(): any;
	/**
	 * The callbacks attached to the component's @Output properties and/or the element's event
	 * properties.
	 */
	get listeners(): DebugEventListener[];
	/**
	 * Dictionary of objects associated with template local variables (e.g. #foo), keyed by the local
	 * variable name.
	 */
	get references(): {
		[key: string]: any;
	};
	/**
	 * This component's injector lookup tokens. Includes the component itself plus the tokens that the
	 * component lists in its providers metadata.
	 */
	get providerTokens(): any[];
}

/**
 * A logical node which comprise into \`LView\`s.
 *
 */
declare interface DebugNode_2 {
	/**
	 * HTML representation of the node.
	 */
	html: string | null;
	/**
	 * Associated \`TNode\`
	 */
	tNode: TNode;
	/**
	 * Human readable node type.
	 */
	type: string;
	/**
	 * DOM native node.
	 */
	native: Node;
	/**
	 * Child nodes
	 */
	children: DebugNode_2[];
	/**
	 * A list of Component/Directive types which need to be instantiated an this location.
	 */
	factories: Type<unknown>[];
	/**
	 * A list of Component/Directive instances which were instantiated an this location.
	 */
	instances: unknown[];
	/**
	 * NodeInjector information.
	 */
	injector: NodeInjectorDebug;
	/**
	 * Injector resolution path.
	 */
	injectorResolutionPath: any;
}

declare const DECLARATION_COMPONENT_VIEW = 16;

declare const DECLARATION_LCONTAINER = 17;

declare const DECLARATION_VIEW = 15;

/**
 * Provide this token to set the default currency code your application uses for
 * CurrencyPipe when there is no currency code passed into it. This is only used by
 * CurrencyPipe and has no relation to locale currency. Defaults to USD if not configured.
 *
 * See the [i18n guide](guide/i18n-common-locale-id) for more information.
 *
 * <div class="alert is-helpful">
 *
 * **Deprecation notice:**
 *
 * The default currency code is currently always \`USD\` but this is deprecated from v9.
 *
 * **In v10 the default currency code will be taken from the current locale.**
 *
 * If you need the previous behavior then set it by creating a \`DEFAULT_CURRENCY_CODE\` provider in
 * your application \`NgModule\`:
 *
 * \`\`\`ts
 * {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
 * \`\`\`
 *
 * </div>
 *
 * @usageNotes
 * ### Example
 *
 * \`\`\`typescript
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }]
 * });
 * \`\`\`
 *
 * @publicApi
 */
export declare const DEFAULT_CURRENCY_CODE: InjectionToken<string>;

/**
 * @deprecated v4.0.0 - Should not be part of public API.
 * @publicApi
 */
export declare class DefaultIterableDiffer<V> implements IterableDiffer<V>, IterableChanges<V> {
	readonly length: number;
	readonly collection: V[] | Iterable<V> | null;
	private _linkedRecords;
	private _unlinkedRecords;
	private _previousItHead;
	private _itHead;
	private _itTail;
	private _additionsHead;
	private _additionsTail;
	private _movesHead;
	private _movesTail;
	private _removalsHead;
	private _removalsTail;
	private _identityChangesHead;
	private _identityChangesTail;
	private _trackByFn;
	constructor(trackByFn?: TrackByFunction<V>);
	forEachItem(fn: (record: IterableChangeRecord_<V>) => void): void;
	forEachOperation(fn: (item: IterableChangeRecord<V>, previousIndex: number | null, currentIndex: number | null) => void): void;
	forEachPreviousItem(fn: (record: IterableChangeRecord_<V>) => void): void;
	forEachAddedItem(fn: (record: IterableChangeRecord_<V>) => void): void;
	forEachMovedItem(fn: (record: IterableChangeRecord_<V>) => void): void;
	forEachRemovedItem(fn: (record: IterableChangeRecord_<V>) => void): void;
	forEachIdentityChange(fn: (record: IterableChangeRecord_<V>) => void): void;
	diff(collection: NgIterable<V> | null | undefined): DefaultIterableDiffer<V> | null;
	onDestroy(): void;
	check(collection: NgIterable<V>): boolean;
	get isDirty(): boolean;
	private _addToRemovals;
}

/**
 * @deprecated in v8, delete after v10. This API should be used only by generated code, and that
 * code should now use ɵɵdefineInjectable instead.
 * @publicApi
 */
export declare const defineInjectable: typeof ɵɵdefineInjectable;

declare type DependencyTypeList = (ɵDirectiveType<any> | ɵComponentType<any> | PipeType<any> | Type<any>)[];

/**
 * Array of destroy hooks that should be executed for a view and their directive indices.
 *
 * The array is set up as a series of number/function or number/(number|function)[]:
 * - Even indices represent the context with which hooks should be called.
 * - Odd indices are the hook functions themselves. If a value at an odd index is an array,
 *   it represents the destroy hooks of a \`multi\` provider where:
 *     - Even indices represent the index of the provider for which we've registered a destroy hook,
 *       inside of the \`multi\` provider array.
 *     - Odd indices are the destroy hook functions.
 * For example:
 * LView: \`[0, 1, 2, AService, 4, [BService, CService, DService]]\`
 * destroyHooks: \`[3, AService.ngOnDestroy, 5, [0, BService.ngOnDestroy, 2, DService.ngOnDestroy]]\`
 *
 * In the example above \`AService\` is a type provider with an \`ngOnDestroy\`, whereas \`BService\`,
 * \`CService\` and \`DService\` are part of a \`multi\` provider where only \`BService\` and \`DService\`
 * have an \`ngOnDestroy\` hook.
 */
declare type DestroyHookData = (HookEntry | HookData)[];

/**
 * Destroys the current Angular platform and all Angular applications on the page.
 * Destroys all modules and listeners registered with the platform.
 *
 * @publicApi
 */
export declare function destroyPlatform(): void;

/**
 * Directive decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare interface Directive {
	/**
	 * The CSS selector that identifies this directive in a template
	 * and triggers instantiation of the directive.
	 *
	 * Declare as one of the following:
	 *
	 * - \`element-name\`: Select by element name.
	 * - \`.class\`: Select by class name.
	 * - \`[attribute]\`: Select by attribute name.
	 * - \`[attribute=value]\`: Select by attribute name and value.
	 * - \`:not(sub_selector)\`: Select only if the element does not match the \`sub_selector\`.
	 * - \`selector1, selector2\`: Select if either \`selector1\` or \`selector2\` matches.
	 *
	 * Angular only allows directives to apply on CSS selectors that do not cross
	 * element boundaries.
	 *
	 * For the following template HTML, a directive with an \`input[type=text]\` selector,
	 * would be instantiated only on the \`<input type="text">\` element.
	 *
	 * \`\`\`html
	 * <form>
	 *   <input type="text">
	 *   <input type="radio">
	 * <form>
	 * \`\`\`
	 *
	 */
	selector?: string;
	/**
	 * Enumerates the set of data-bound input properties for a directive
	 *
	 * Angular automatically updates input properties during change detection.
	 * The \`inputs\` property defines a set of \`directiveProperty\` to \`bindingProperty\`
	 * configuration:
	 *
	 * - \`directiveProperty\` specifies the component property where the value is written.
	 * - \`bindingProperty\` specifies the DOM property where the value is read from.
	 *
	 * When \`bindingProperty\` is not provided, it is assumed to be equal to \`directiveProperty\`.
	 *
	 * @usageNotes
	 *
	 * The following example creates a component with two data-bound properties.
	 *
	 * \`\`\`typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   inputs: ['bankName', 'id: account-id'],
	 *   template: \`
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   \`
	 * })
	 * class BankAccount {
	 *   bankName: string;
	 *   id: string;
	 * }
	 * \`\`\`
	 *
	 */
	inputs?: string[];
	/**
	 * Enumerates the set of event-bound output properties.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * in the template is invoked.
	 *
	 * The \`outputs\` property defines a set of \`directiveProperty\` to \`bindingProperty\`
	 * configuration:
	 *
	 * - \`directiveProperty\` specifies the component property that emits events.
	 * - \`bindingProperty\` specifies the DOM property the event handler is attached to.
	 *
	 * @usageNotes
	 *
	 * \`\`\`typescript
	 * @Component({
	 *   selector: 'child-dir',
	 *   outputs: [ 'bankNameChange' ]
	 *   template: \`<input (input)="bankNameChange.emit($event.target.value)" />\`
	 * })
	 * class ChildDir {
	 *  bankNameChange: EventEmitter<string> = new EventEmitter<string>();
	 * }
	 *
	 * @Component({
	 *   selector: 'main',
	 *   template: \`
	 *     {{ bankName }} <child-dir (bankNameChange)="onBankNameChange($event)"></child-dir>
	 *   \`
	 * })
	 * class MainComponent {
	 *  bankName: string;
	 *
	 *   onBankNameChange(bankName: string) {
	 *     this.bankName = bankName;
	 *   }
	 * }
	 * \`\`\`
	 *
	 */
	outputs?: string[];
	/**
	 * Configures the [injector](guide/glossary#injector) of this
	 * directive or component with a [token](guide/glossary#di-token)
	 * that maps to a [provider](guide/glossary#provider) of a dependency.
	 */
	providers?: Provider[];
	/**
	 * Defines the name that can be used in the template to assign this directive to a variable.
	 *
	 * @usageNotes
	 *
	 * \`\`\`ts
	 * @Directive({
	 *   selector: 'child-dir',
	 *   exportAs: 'child'
	 * })
	 * class ChildDir {
	 * }
	 *
	 * @Component({
	 *   selector: 'main',
	 *   template: \`<child-dir #c="child"></child-dir>\`
	 * })
	 * class MainComponent {
	 * }
	 * \`\`\`
	 *
	 */
	exportAs?: string;
	/**
	 * Configures the queries that will be injected into the directive.
	 *
	 * Content queries are set before the \`ngAfterContentInit\` callback is called.
	 * View queries are set before the \`ngAfterViewInit\` callback is called.
	 *
	 * @usageNotes
	 *
	 * The following example shows how queries are defined
	 * and when their results are available in lifecycle hooks:
	 *
	 * \`\`\`ts
	 * @Component({
	 *   selector: 'someDir',
	 *   queries: {
	 *     contentChildren: new ContentChildren(ChildDirective),
	 *     viewChildren: new ViewChildren(ChildDirective)
	 *   },
	 *   template: '<child-directive></child-directive>'
	 * })
	 * class SomeDir {
	 *   contentChildren: QueryList<ChildDirective>,
	 *   viewChildren: QueryList<ChildDirective>
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 *
	 *   ngAfterViewInit() {
	 *     // viewChildren is set
	 *   }
	 * }
	 * \`\`\`
	 *
	 * @Annotation
	 */
	queries?: {
		[key: string]: any;
	};
	/**
	 * Maps class properties to host element bindings for properties,
	 * attributes, and events, using a set of key-value pairs.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, Angular updates the directive's host element.
	 *
	 * When the key is a property of the host element, the property value is
	 * the propagated to the specified DOM property.
	 *
	 * When the key is a static attribute in the DOM, the attribute value
	 * is propagated to the specified property in the host element.
	 *
	 * For event handling:
	 * - The key is the DOM event that the directive listens to.
	 * To listen to global events, add the target to the event name.
	 * The target can be \`window\`, \`document\` or \`body\`.
	 * - The value is the statement to execute when the event occurs. If the
	 * statement evaluates to \`false\`, then \`preventDefault\` is applied on the DOM
	 * event. A handler method can refer to the \`$event\` local variable.
	 *
	 */
	host?: {
		[key: string]: string;
	};
	/**
	 * When present, this directive/component is ignored by the AOT compiler.
	 * It remains in distributed code, and the JIT compiler attempts to compile it
	 * at run time, in the browser.
	 * To ensure the correct behavior, the app must import \`@angular/compiler\`.
	 */
	jit?: true;
	/**
	 * Angular directives marked as \`standalone\` do not need to be declared in an NgModule. Such
	 * directives don't depend on any "intermediate context" of an NgModule (ex. configured
	 * providers).
	 *
	 * More information about standalone components, directives, and pipes can be found in [this
	 * guide](guide/standalone-components).
	 *
	 * @developerPreview
	 */
	standalone?: boolean;
}

/**
 * Type of the Directive metadata.
 *
 * @publicApi
 */
export declare const Directive: DirectiveDecorator;

/**
 * Type of the Directive decorator / constructor function.
 * @publicApi
 */
export declare interface DirectiveDecorator {
	/**
	 * Decorator that marks a class as an Angular directive.
	 * You can define your own directives to attach custom behavior to elements in the DOM.
	 *
	 * The options provide configuration metadata that determines
	 * how the directive should be processed, instantiated and used at
	 * runtime.
	 *
	 * Directive classes, like component classes, can implement
	 * [life-cycle hooks](guide/lifecycle-hooks) to influence their configuration and behavior.
	 *
	 *
	 * @usageNotes
	 * To define a directive, mark the class with the decorator and provide metadata.
	 *
	 * \`\`\`ts
	 * import {Directive} from '@angular/core';
	 *
	 * @Directive({
	 *   selector: 'my-directive',
	 * })
	 * export class MyDirective {
	 * ...
	 * }
	 * \`\`\`
	 *
	 * ### Declaring directives
	 *
	 * In order to make a directive available to other components in your application, you should do
	 * one of the following:
	 *  - either mark the directive as [standalone](guide/standalone-components),
	 *  - or declare it in an NgModule by adding it to the \`declarations\` and \`exports\` fields.
	 *
	 * ** Marking a directive as standalone **
	 *
	 * You can add the \`standalone: true\` flag to the Directive decorator metadata to declare it as
	 * [standalone](guide/standalone-components):
	 *
	 * \`\`\`ts
	 * @Directive({
	 *   standalone: true,
	 *   selector: 'my-directive',
	 * })
	 * class MyDirective {}
	 * \`\`\`
	 *
	 * When marking a directive as standalone, please make sure that the directive is not already
	 * declared in an NgModule.
	 *
	 *
	 * ** Declaring a directive in an NgModule **
	 *
	 * Another approach is to declare a directive in an NgModule:
	 *
	 * \`\`\`ts
	 * @Directive({
	 *   selector: 'my-directive',
	 * })
	 * class MyDirective {}
	 *
	 * @NgModule({
	 *   declarations: [MyDirective, SomeComponent],
	 *   exports: [MyDirective], // making it available outside of this module
	 * })
	 * class SomeNgModule {}
	 * \`\`\`
	 *
	 * When declaring a directive in an NgModule, please make sure that:
	 *  - the directive is declared in exactly one NgModule.
	 *  - the directive is not standalone.
	 *  - you do not re-declare a directive imported from another module.
	 *  - the directive is included into the \`exports\` field as well if you want this directive to be
	 *    accessible for components outside of the NgModule.
	 *
	 *
	 * @Annotation
	 */
	(obj?: Directive): TypeDecorator;
	/**
	 * See the \`Directive\` decorator.
	 */
	new(obj?: Directive): Directive;
}

declare interface DirectiveDefFeature {
	<T>(directiveDef: ɵDirectiveDef<T>): void;
	/**
	 * Marks a feature as something that {@link InheritDefinitionFeature} will execute
	 * during inheritance.
	 *
	 * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
	 * identifying the change as a side effect, and the feature will be included in
	 * every bundle.
	 */
	ngInherit?: true;
}

declare type DirectiveDefList = (ɵDirectiveDef<any> | ɵComponentDef<any>)[];

/**
 * Type used for directiveDefs on component definition.
 *
 * The function is necessary to be able to support forward declarations.
 */
declare type DirectiveDefListOrFactory = (() => DirectiveDefList) | DirectiveDefList;

/**
 * @description
 * Hook for manual bootstrapping of the application instead of using \`bootstrap\` array in @NgModule
 * annotation. This hook is invoked only when the \`bootstrap\` array is empty or not provided.
 *
 * Reference to the current application is provided as a parameter.
 *
 * See ["Bootstrapping"](guide/bootstrapping) and ["Entry components"](guide/entry-components).
 *
 * @usageNotes
 * The example below uses \`ApplicationRef.bootstrap()\` to render the
 * \`AppComponent\` on the page.
 *
 * \`\`\`typescript
 * class AppModule implements DoBootstrap {
 *   ngDoBootstrap(appRef: ApplicationRef) {
 *     appRef.bootstrap(AppComponent); // Or some other component
 *   }
 * }
 * \`\`\`
 *
 * @publicApi
 */
export declare interface DoBootstrap {
	ngDoBootstrap(appRef: ApplicationRef): void;
}

/**
 * A lifecycle hook that invokes a custom change-detection function for a directive,
 * in addition to the check performed by the default change-detector.
 *
 * The default change-detection algorithm looks for differences by comparing
 * bound-property values by reference across change detection runs. You can use this
 * hook to check for and respond to changes by some other means.
 *
 * When the default change detector detects changes, it invokes \`ngOnChanges()\` if supplied,
 * regardless of whether you perform additional change detection.
 * Typically, you should not use both \`DoCheck\` and \`OnChanges\` to respond to
 * changes on the same input.
 *
 * @see \`OnChanges\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface
 * to invoke it own change-detection cycle.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='DoCheck'}
 *
 * For a more complete example and discussion, see
 * [Defining custom change detection](guide/lifecycle-hooks#defining-custom-change-detection).
 *
 * @publicApi
 */
export declare interface DoCheck {
	/**
	 * A callback method that performs change-detection, invoked
	 * after the default change-detector runs.
	 * See \`KeyValueDiffers\` and \`IterableDiffers\` for implementing
	 * custom change checking for collections.
	 *
	 */
	ngDoCheck(): void;
}

/**
 * Marks that the next string is an element name.
 *
 * See \`I18nMutateOpCodes\` documentation.
 */
declare const ELEMENT_MARKER: ELEMENT_MARKER;

declare interface ELEMENT_MARKER {
	marker: 'element';
}

/**
 * A wrapper around a native element inside of a View.
 *
 * An \`ElementRef\` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 *
 * @security Permitting direct access to the DOM can make your application more vulnerable to
 * XSS attacks. Carefully review any use of \`ElementRef\` in your code. For more detail, see the
 * [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
export declare class ElementRef<T = any> {
	/**
	 * The underlying native element or \`null\` if direct access to native elements is not supported
	 * (e.g. when the application runs in a web worker).
	 *
	 * <div class="callout is-critical">
	 *   <header>Use with caution</header>
	 *   <p>
	 *    Use this API as the last resort when direct access to DOM is needed. Use templating and
	 *    data-binding provided by Angular instead. Alternatively you can take a look at {@link
	 * Renderer2}
	 *    which provides API that can safely be used even when direct access to native elements is not
	 *    supported.
	 *   </p>
	 *   <p>
	 *    Relying on direct DOM access creates tight coupling between your application and rendering
	 *    layers which will make it impossible to separate the two and deploy your application into a
	 *    web worker.
	 *   </p>
	 * </div>
	 *
	 */
	nativeElement: T;
	constructor(nativeElement: T);
}

declare const EMBEDDED_VIEW_INJECTOR = 21;

/**
 * Represents an Angular [view](guide/glossary#view) in a view container.
 * An [embedded view](guide/glossary#view-tree) can be referenced from a component
 * other than the hosting component whose template defines it, or it can be defined
 * independently by a \`TemplateRef\`.
 *
 * Properties of elements in a view can change, but the structure (number and order) of elements in
 * a view cannot. Change the structure of elements by inserting, moving, or
 * removing nested views in a view container.
 *
 * @see \`ViewContainerRef\`
 *
 * @usageNotes
 *
 * The following template breaks down into two separate \`TemplateRef\` instances,
 * an outer one and an inner one.
 *
 * \`\`\`
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="let  item of items">{{item}}</li>
 * </ul>
 * \`\`\`
 *
 * This is the outer \`TemplateRef\`:
 *
 * \`\`\`
 * Count: {{items.length}}
 * <ul>
 *   <ng-template ngFor let-item [ngForOf]="items"></ng-template>
 * </ul>
 * \`\`\`
 *
 * This is the inner \`TemplateRef\`:
 *
 * \`\`\`
 *   <li>{{item}}</li>
 * \`\`\`
 *
 * The outer and inner \`TemplateRef\` instances are assembled into views as follows:
 *
 * \`\`\`
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <ng-template view-container-ref></ng-template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * \`\`\`
 * @publicApi
 */
export declare abstract class EmbeddedViewRef<C> extends ViewRef {
	/**
	 * The context for this view, inherited from the anchor element.
	 */
	abstract context: C;
	/**
	 * The root nodes for this embedded view.
	 */
	abstract get rootNodes(): any[];
}

/**
 * Disable Angular's development mode, which turns off assertions and other
 * checks within the framework.
 *
 * One important assertion this disables verifies that a change detection pass
 * does not result in additional changes to any bindings (also known as
 * unidirectional data flow).
 *
 * @publicApi
 */
export declare function enableProdMode(): void;

/**
 * A multi-provider token for initialization functions that will run upon construction of an
 * environment injector.
 *
 * @publicApi
 */
export declare const ENVIRONMENT_INITIALIZER: InjectionToken<() => void>;

/**
 * An \`Injector\` that's part of the environment injector hierarchy, which exists outside of the
 * component tree.
 *
 * @developerPreview
 */
export declare abstract class EnvironmentInjector implements Injector {
	/**
	 * Retrieves an instance from the injector based on the provided token.
	 * @returns The instance from the injector if defined, otherwise the \`notFoundValue\`.
	 * @throws When the \`notFoundValue\` is \`undefined\` or \`Injector.THROW_IF_NOT_FOUND\`.
	 */
	abstract get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
	/**
	 * @deprecated from v4.0.0 use ProviderToken<T>
	 * @suppress {duplicate}
	 */
	abstract get(token: any, notFoundValue?: any): any;
	/**
	 * Runs the given function in the context of this \`EnvironmentInjector\`.
	 *
	 * Within the function's stack frame, \`inject\` can be used to inject dependencies from this
	 * injector. Note that \`inject\` is only usable synchronously, and cannot be used in any
	 * asynchronous callbacks or after any \`await\` points.
	 *
	 * @param fn the closure to be run in the context of this injector
	 * @returns the return value of the function, if any
	 */
	abstract runInContext<ReturnT>(fn: () => ReturnT): ReturnT;
	abstract destroy(): void;
}


/**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of \`ErrorHandler\` prints error messages to the \`console\`. To
 * intercept error handling, write a custom exception handler that replaces this default as
 * appropriate for your app.
 *
 * @usageNotes
 * ### Example
 *
 * \`\`\`
 * class MyErrorHandler implements ErrorHandler {
 *   handleError(error) {
 *     // do something with the exception
 *   }
 * }
 *
 * @NgModule({
 *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
 * })
 * class MyModule {}
 * \`\`\`
 *
 * @publicApi
 */
export declare class ErrorHandler {
	handleError(error: any): void;
}

/**
 * Use in components with the \`@Output\` directive to emit custom events
 * synchronously or asynchronously, and register handlers for those events
 * by subscribing to an instance.
 *
 * @usageNotes
 *
 * Extends
 * [RxJS \`Subject\`](https://rxjs.dev/api/index/class/Subject)
 * for Angular by adding the \`emit()\` method.
 *
 * In the following example, a component defines two output properties
 * that create event emitters. When the title is clicked, the emitter
 * emits an open or close event to toggle the current visibility state.
 *
 * \`\`\`html
 * @Component({
 *   selector: 'zippy',
 *   template: \`
 *   <div class="zippy">
 *     <div (click)="toggle()">Toggle</div>
 *     <div [hidden]="!visible">
 *       <ng-content></ng-content>
 *     </div>
 *  </div>\`})
 * export class Zippy {
 *   visible: boolean = true;
 *   @Output() open: EventEmitter<any> = new EventEmitter();
 *   @Output() close: EventEmitter<any> = new EventEmitter();
 *
 *   toggle() {
 *     this.visible = !this.visible;
 *     if (this.visible) {
 *       this.open.emit(null);
 *     } else {
 *       this.close.emit(null);
 *     }
 *   }
 * }
 * \`\`\`
 *
 * Access the event object with the \`$event\` argument passed to the output event
 * handler:
 *
 * \`\`\`html
 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
 * \`\`\`
 *
 * @see [Observables in Angular](guide/observables-in-angular)
 * @publicApi
 */
export declare interface EventEmitter<T> extends Subject<T> {
	/**
	 * Creates an instance of this class that can
	 * deliver events synchronously or asynchronously.
	 *
	 * @param [isAsync=false] When true, deliver events asynchronously.
	 *
	 */
	new(isAsync?: boolean): EventEmitter<T>;
	/**
	 * Emits an event containing a given value.
	 * @param value The value to emit.
	 */
	emit(value?: T): void;
	/**
	 * Registers handlers for events emitted by this instance.
	 * @param next When supplied, a custom handler for emitted events.
	 * @param error When supplied, a custom handler for an error notification from this emitter.
	 * @param complete When supplied, a custom handler for a completion notification from this
	 *     emitter.
	 */
	subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
	/**
	 * Registers handlers for events emitted by this instance.
	 * @param observerOrNext When supplied, a custom handler for emitted events, or an observer
	 *     object.
	 * @param error When supplied, a custom handler for an error notification from this emitter.
	 * @param complete When supplied, a custom handler for a completion notification from this
	 *     emitter.
	 */
	subscribe(observerOrNext?: any, error?: any, complete?: any): Subscription;
}

/**
 * @publicApi
 */
export declare const EventEmitter: {
	new(isAsync?: boolean): EventEmitter<any>;
	new <T>(isAsync?: boolean): EventEmitter<T>;
	readonly prototype: EventEmitter<any>;
};

/**
 * Configures the \`Injector\` to return a value of another \`useExisting\` token.
 *
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * {@example core/di/ts/provider_spec.ts region='ExistingProvider'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 *
 * @publicApi
 */
export declare interface ExistingProvider extends ExistingSansProvider {
	/**
	 * An injection token. Typically an instance of \`Type\` or \`InjectionToken\`, but can be \`any\`.
	 */
	provide: any;
	/**
	 * When true, injector returns an array of instances. This is useful to allow multiple
	 * providers spread across many files to provide configuration information to a common token.
	 */
	multi?: boolean;
}

/**
 * Configures the \`Injector\` to return a value of another \`useExisting\` token.
 *
 * @see \`ExistingProvider\`
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @publicApi
 */
export declare interface ExistingSansProvider {
	/**
	 * Existing \`token\` to return. (Equivalent to \`injector.get(useExisting)\`)
	 */
	useExisting: any;
}

/**
 * Definition of what a factory function should look like.
 */
declare type FactoryFn<T> = {
	/**
	 * Subclasses without an explicit constructor call through to the factory of their base
	 * definition, providing it with their own constructor to instantiate.
	 */
	<U extends T>(t?: Type<U>): U;
	/**
	 * If no constructor to instantiate is provided, an instance of type T itself is created.
	 */
	(t?: undefined): T;
};

/**
 * Configures the \`Injector\` to return a value by invoking a \`useFactory\` function.
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * {@example core/di/ts/provider_spec.ts region='FactoryProvider'}
 *
 * Dependencies can also be marked as optional:
 *
 * {@example core/di/ts/provider_spec.ts region='FactoryProviderOptionalDeps'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 *
 * @publicApi
 */
export declare interface FactoryProvider extends FactorySansProvider {
	/**
	 * An injection token. (Typically an instance of \`Type\` or \`InjectionToken\`, but can be \`any\`).
	 */
	provide: any;
	/**
	 * When true, injector returns an array of instances. This is useful to allow multiple
	 * providers spread across many files to provide configuration information to a common token.
	 */
	multi?: boolean;
}

/**
 * Configures the \`Injector\` to return a value by invoking a \`useFactory\` function.
 *
 * @see \`FactoryProvider\`
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @publicApi
 */
export declare interface FactorySansProvider {
	/**
	 * A function to invoke to create a value for this \`token\`. The function is invoked with
	 * resolved values of \`token\`s in the \`deps\` field.
	 */
	useFactory: Function;
	/**
	 * A list of \`token\`s to be resolved by the injector. The list of values is then
	 * used as arguments to the \`useFactory\` function.
	 */
	deps?: any[];
}

declare const FLAGS = 2;

/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, \`forwardRef\` is used when the \`token\` which we need to refer to for the purposes of
 * DI is declared, but not yet defined. It is also used when the \`token\` which we use when creating
 * a query is not yet defined.
 *
 * @usageNotes
 * ### Example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * @publicApi
 */
export declare function forwardRef(forwardRefFn: ForwardRefFn): Type<any>;

/**
 * An interface that a function passed into {@link forwardRef} has to implement.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref_fn'}
 * @publicApi
 */
export declare interface ForwardRefFn {
	(): any;
}

/**
 * @publicApi
 */
declare function getDebugNode(nativeNode: any): DebugNode | null;
export { getDebugNode }
export { getDebugNode as ɵgetDebugNode }

/**
 * Returns the NgModuleFactory with the given id (specified using [@NgModule.id
 * field](api/core/NgModule#id)), if it exists and has been loaded. Factories for NgModules that do
 * not specify an \`id\` cannot be retrieved. Throws if an NgModule cannot be found.
 * @publicApi
 * @deprecated Use \`getNgModuleById\` instead.
 */
export declare function getModuleFactory(id: string): NgModuleFactory<any>;

/**
 * Returns the NgModule class with the given id (specified using [@NgModule.id
 * field](api/core/NgModule#id)), if it exists and has been loaded. Classes for NgModules that do
 * not specify an \`id\` cannot be retrieved. Throws if an NgModule cannot be found.
 * @publicApi
 */
export declare function getNgModuleById<T>(id: string): Type<T>;

/**
 * Returns the current platform.
 *
 * @publicApi
 */
export declare function getPlatform(): PlatformRef | null;

/**
 * Adapter interface for retrieving the \`Testability\` service associated for a
 * particular context.
 *
 * @publicApi
 */
export declare interface GetTestability {
	addToWindow(registry: TestabilityRegistry): void;
	findTestabilityInTree(registry: TestabilityRegistry, elem: any, findInAncestors: boolean): Testability | null;
}

/**
 * The goal here is to make sure that the browser DOM API is the Renderer.
 * We do this by defining a subset of DOM API to be the renderer and then
 * use that at runtime for rendering.
 *
 * At runtime we can then use the DOM api directly, in server or web-worker
 * it will be easy to implement such API.
 */
declare type GlobalTargetName = 'document' | 'window' | 'body';

declare type GlobalTargetResolver = (element: any) => EventTarget;

/**
 * Flag to signify that this \`LContainer\` may have transplanted views which need to be change
 * detected. (see: \`LView[DECLARATION_COMPONENT_VIEW])\`.
 *
 * This flag, once set, is never unset for the \`LContainer\`. This means that when unset we can skip
 * a lot of work in \`refreshEmbeddedViews\`. But when set we still need to verify
 * that the \`MOVED_VIEWS\` are transplanted and on-push.
 */
declare const HAS_TRANSPLANTED_VIEWS = 2;

/**
 * Array of hooks that should be executed for a view and their directive indices.
 *
 * For each node of the view, the following data is stored:
 * 1) Node index (optional)
 * 2) A series of number/function pairs where:
 *  - even indices are directive indices
 *  - odd indices are hook functions
 *
 * Special cases:
 *  - a negative directive index flags an init hook (ngOnInit, ngAfterContentInit, ngAfterViewInit)
 */
declare type HookData = HookEntry[];

/**
 * Information necessary to call a hook. E.g. the callback that
 * needs to invoked and the index at which to find its context.
 */
declare type HookEntry = number | HookFn;

/** Single hook callback function. */
declare type HookFn = () => void;

declare const HOST = 0;

/**
 * Type of the Host metadata.
 *
 * @publicApi
 */
export declare interface Host {
}

/**
 * Host decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Host: HostDecorator;

/**
 * Type of the HostBinding metadata.
 *
 * @publicApi
 */
export declare interface HostBinding {
	/**
	 * The DOM property that is bound to a data property.
	 */
	hostPropertyName?: string;
}

/**
 * @Annotation
 * @publicApi
 */
export declare const HostBinding: HostBindingDecorator;

/**
 * Type of the HostBinding decorator / constructor function.
 *
 * @publicApi
 */
export declare interface HostBindingDecorator {
	/**
	 * Decorator that marks a DOM property as a host-binding property and supplies configuration
	 * metadata.
	 * Angular automatically checks host property bindings during change detection, and
	 * if a binding changes it updates the host element of the directive.
	 *
	 * @usageNotes
	 *
	 * The following example creates a directive that sets the \`valid\` and \`invalid\`
	 * properties on the DOM element that has an \`ngModel\` directive on it.
	 *
	 * \`\`\`typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control: NgModel) {}
	 *   @HostBinding('class.valid') get valid() { return this.control.valid; }
	 *   @HostBinding('class.invalid') get invalid() { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: \`<input [(ngModel)]="prop">\`,
	 * })
	 * class App {
	 *   prop;
	 * }
	 * \`\`\`
	 *
	 */
	(hostPropertyName?: string): any;
	new(hostPropertyName?: string): any;
}

/**
 * Stores a set of OpCodes to process \`HostBindingsFunction\` associated with a current view.
 *
 * In order to invoke \`HostBindingsFunction\` we need:
 * 1. 'elementIdx\`: Index to the element associated with the \`HostBindingsFunction\`.
 * 2. 'directiveIdx\`: Index to the directive associated with the \`HostBindingsFunction\`. (This will
 *    become the context for the \`HostBindingsFunction\` invocation.)
 * 3. \`bindingRootIdx\`: Location where the bindings for the \`HostBindingsFunction\` start. Internally
 *    \`HostBindingsFunction\` binding indexes start from \`0\` so we need to add \`bindingRootIdx\` to
 *    it.
 * 4. \`HostBindingsFunction\`: A host binding function to execute.
 *
 * The above information needs to be encoded into the \`HostBindingOpCodes\` in an efficient manner.
 *
 * 1. \`elementIdx\` is encoded into the \`HostBindingOpCodes\` as \`~elementIdx\` (so a negative number);
 * 2. \`directiveIdx\`
 * 3. \`bindingRootIdx\`
 * 4. \`HostBindingsFunction\` is passed in as is.
 *
 * The \`HostBindingOpCodes\` array contains:
 * - negative number to select the element index.
 * - followed by 1 or more of:
 *    - a number to select the directive index
 *    - a number to select the bindingRoot index
 *    - and a function to invoke.
 *
 * ## Example
 *
 * \`\`\`
 * const hostBindingOpCodes = [
 *   ~30,                               // Select element 30
 *   40, 45, MyDir.ɵdir.hostBindings    // Invoke host bindings on MyDir on element 30;
 *                                      // directiveIdx = 40; bindingRootIdx = 45;
 *   50, 55, OtherDir.ɵdir.hostBindings // Invoke host bindings on OtherDire on element 30
 *                                      // directiveIdx = 50; bindingRootIdx = 55;
 * ]
 * \`\`\`
 *
 * ## Pseudocode
 * \`\`\`
 * const hostBindingOpCodes = tView.hostBindingOpCodes;
 * if (hostBindingOpCodes === null) return;
 * for (let i = 0; i < hostBindingOpCodes.length; i++) {
 *   const opCode = hostBindingOpCodes[i] as number;
 *   if (opCode < 0) {
 *     // Negative numbers are element indexes.
 *     setSelectedIndex(~opCode);
 *   } else {
 *     // Positive numbers are NumberTuple which store bindingRootIndex and directiveIndex.
 *     const directiveIdx = opCode;
 *     const bindingRootIndx = hostBindingOpCodes[++i] as number;
 *     const hostBindingFn = hostBindingOpCodes[++i] as HostBindingsFunction<any>;
 *     setBindingRootForHostBindings(bindingRootIndx, directiveIdx);
 *     const context = lView[directiveIdx];
 *     hostBindingFn(RenderFlags.Update, context);
 *   }
 * }
 * \`\`\`
 *
 */
declare interface HostBindingOpCodes extends Array<number | HostBindingsFunction<any>> {
	__brand__: 'HostBindingOpCodes';
	debug?: string[];
}

declare type HostBindingsFunction<T> = <U extends T>(rf: ɵRenderFlags, ctx: U) => void;

/**
 * Type of the \`Host\` decorator / constructor function.
 *
 * @publicApi
 */
export declare interface HostDecorator {
	/**
	 * Parameter decorator on a view-provider parameter of a class constructor
	 * that tells the DI framework to resolve the view by checking injectors of child
	 * elements, and stop when reaching the host element of the current component.
	 *
	 * @usageNotes
	 *
	 * The following shows use with the \`@Optional\` decorator, and allows for a \`null\` result.
	 *
	 * <code-example path="core/di/ts/metadata_spec.ts" region="Host">
	 * </code-example>
	 *
	 * For an extended example, see ["Dependency Injection
	 * Guide"](guide/dependency-injection-in-action#optional).
	 */
	(): any;
	new(): Host;
}

/**
 * Type of the HostListener metadata.
 *
 * @publicApi
 */
export declare interface HostListener {
	/**
	 * The DOM event to listen for.
	 */
	eventName?: string;
	/**
	 * A set of arguments to pass to the handler method when the event occurs.
	 */
	args?: string[];
}

/**
 * Decorator that binds a DOM event to a host listener and supplies configuration metadata.
 * Angular invokes the supplied handler method when the host element emits the specified event,
 * and updates the bound element with the result.
 *
 * If the handler method returns false, applies \`preventDefault\` on the bound element.
 *
 * @usageNotes
 *
 * The following example declares a directive
 * that attaches a click listener to a button and counts clicks.
 *
 * \`\`\`ts
 * @Directive({selector: 'button[counting]'})
 * class CountClicks {
 *   numberOfClicks = 0;
 *
 *   @HostListener('click', ['$event.target'])
 *   onClick(btn) {
 *     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 *   }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: '<button counting>Increment</button>',
 * })
 * class App {}
 *
 * \`\`\`
 *
 * The following example registers another DOM event handler that listens for \`Enter\` key-press
 * events on the global \`window\`.
 * \`\`\` ts
 * import { HostListener, Component } from "@angular/core";
 *
 * @Component({
 *   selector: 'app',
 *   template: \`<h1>Hello, you have pressed enter {{counter}} number of times!</h1> Press enter key
 * to increment the counter.
 *   <button (click)="resetCounter()">Reset Counter</button>\`
 * })
 * class AppComponent {
 *   counter = 0;
 *   @HostListener('window:keydown.enter', ['$event'])
 *   handleKeyDown(event: KeyboardEvent) {
 *     this.counter++;
 *   }
 *   resetCounter() {
 *     this.counter = 0;
 *   }
 * }
 * \`\`\`
 * The list of valid key names for \`keydown\` and \`keyup\` events
 * can be found here:
 * https://www.w3.org/TR/DOM-Level-3-Events-key/#named-key-attribute-values
 *
 * Note that keys can also be combined, e.g. \`@HostListener('keydown.shift.a')\`.
 *
 * The global target names that can be used to prefix an event name are
 * \`document:\`, \`window:\` and \`body:\`.
 *
 * @Annotation
 * @publicApi
 */
export declare const HostListener: HostListenerDecorator;

/**
 * Type of the HostListener decorator / constructor function.
 *
 * @publicApi
 */
export declare interface HostListenerDecorator {
	/**
	 * Decorator that declares a DOM event to listen for,
	 * and provides a handler method to run when that event occurs.
	 *
	 * Angular invokes the supplied handler method when the host element emits the specified event,
	 * and updates the bound element with the result.
	 *
	 * If the handler method returns false, applies \`preventDefault\` on the bound element.
	 */
	(eventName: string, args?: string[]): any;
	new(eventName: string, args?: string[]): any;
}

declare namespace i0 {
	export {
		ɵɵinject,
		ɵɵdefineInjectable,
		ɵɵdefineInjector,
		ɵɵInjectableDeclaration,
		ɵNgModuleDef as NgModuleDef,
		ɵɵdefineNgModule,
		ɵɵFactoryDeclaration,
		ɵɵInjectorDeclaration,
		ɵɵNgModuleDeclaration,
		ɵsetClassMetadata as setClassMetadata,
		ɵNgModuleFactory as NgModuleFactory,
		ɵnoSideEffects,
		ITS_JUST_ANGULAR
	}
}

/**
 * Array storing OpCode for dynamically creating \`i18n\` translation DOM elements.
 *
 * This array creates a sequence of \`Text\` and \`Comment\` (as ICU anchor) DOM elements. It consists
 * of a pair of \`number\` and \`string\` pairs which encode the operations for the creation of the
 * translated block.
 *
 * The number is shifted and encoded according to \`I18nCreateOpCode\`
 *
 * Pseudocode:
 * \`\`\`
 * const i18nCreateOpCodes = [
 *   10 << I18nCreateOpCode.SHIFT, "Text Node add to DOM",
 *   11 << I18nCreateOpCode.SHIFT | I18nCreateOpCode.COMMENT, "Comment Node add to DOM",
 *   12 << I18nCreateOpCode.SHIFT | I18nCreateOpCode.APPEND_LATER, "Text Node added later"
 * ];
 *
 * for(var i=0; i<i18nCreateOpCodes.length; i++) {
 *   const opcode = i18NCreateOpCodes[i++];
 *   const index = opcode >> I18nCreateOpCode.SHIFT;
 *   const text = i18NCreateOpCodes[i];
 *   let node: Text|Comment;
 *   if (opcode & I18nCreateOpCode.COMMENT === I18nCreateOpCode.COMMENT) {
 *     node = lView[~index] = document.createComment(text);
 *   } else {
 *     node = lView[index] = document.createText(text);
 *   }
 *   if (opcode & I18nCreateOpCode.APPEND_EAGERLY !== I18nCreateOpCode.APPEND_EAGERLY) {
 *     parentNode.appendChild(node);
 *   }
 * }
 * \`\`\`
 */
declare interface I18nCreateOpCodes extends Array<number | string>, I18nDebug {
	__brand__: 'I18nCreateOpCodes';
}

declare interface I18nDebug {
	/**
	 * Human readable representation of the OpCode arrays.
	 *
	 * NOTE: This property only exists if \`ngDevMode\` is set to \`true\` and it is not present in
	 * production. Its presence is purely to help debug issue in development, and should not be relied
	 * on in production application.
	 */
	debug?: string[];
}

/**
 * Stores a list of nodes which need to be removed.
 *
 * Numbers are indexes into the \`LView\`
 * - index > 0: \`removeRNode(lView[0])\`
 * - index < 0: \`removeICU(~lView[0])\`
 */
declare interface I18nRemoveOpCodes extends Array<number> {
	__brand__: 'I18nRemoveOpCodes';
}

/**
 * Stores DOM operations which need to be applied to update DOM render tree due to changes in
 * expressions.
 *
 * The basic idea is that \`i18nExp\` OpCodes capture expression changes and update a change
 * mask bit. (Bit 1 for expression 1, bit 2 for expression 2 etc..., bit 32 for expression 32 and
 * higher.) The OpCodes then compare its own change mask against the expression change mask to
 * determine if the OpCodes should execute.
 *
 * NOTE: 32nd bit is special as it says 32nd or higher. This way if we have more than 32 bindings
 * the code still works, but with lower efficiency. (it is unlikely that a translation would have
 * more than 32 bindings.)
 *
 * These OpCodes can be used by both the i18n block as well as ICU sub-block.
 *
 * ## Example
 *
 * Assume
 * \`\`\`ts
 *   if (rf & RenderFlags.Update) {
 *    i18nExp(ctx.exp1); // If changed set mask bit 1
 *    i18nExp(ctx.exp2); // If changed set mask bit 2
 *    i18nExp(ctx.exp3); // If changed set mask bit 3
 *    i18nExp(ctx.exp4); // If changed set mask bit 4
 *    i18nApply(0);            // Apply all changes by executing the OpCodes.
 *  }
 * \`\`\`
 * We can assume that each call to \`i18nExp\` sets an internal \`changeMask\` bit depending on the
 * index of \`i18nExp\`.
 *
 * ### OpCodes
 * \`\`\`ts
 * <I18nUpdateOpCodes>[
 *   // The following OpCodes represent: \`<div i18n-title="pre{{exp1}}in{{exp2}}post">\`
 *   // If \`changeMask & 0b11\`
 *   //        has changed then execute update OpCodes.
 *   //        has NOT changed then skip \`8\` values and start processing next OpCodes.
 *   0b11, 8,
 *   // Concatenate \`newValue = 'pre'+lView[bindIndex-4]+'in'+lView[bindIndex-3]+'post';\`.
 *   'pre', -4, 'in', -3, 'post',
 *   // Update attribute: \`elementAttribute(1, 'title', sanitizerFn(newValue));\`
 *   1 << SHIFT_REF | Attr, 'title', sanitizerFn,
 *
 *   // The following OpCodes represent: \`<div i18n>Hello {{exp3}}!">\`
 *   // If \`changeMask & 0b100\`
 *   //        has changed then execute update OpCodes.
 *   //        has NOT changed then skip \`4\` values and start processing next OpCodes.
 *   0b100, 4,
 *   // Concatenate \`newValue = 'Hello ' + lView[bindIndex -2] + '!';\`.
 *   'Hello ', -2, '!',
 *   // Update text: \`lView[1].textContent = newValue;\`
 *   1 << SHIFT_REF | Text,
 *
 *   // The following OpCodes represent: \`<div i18n>{exp4, plural, ... }">\`
 *   // If \`changeMask & 0b1000\`
 *   //        has changed then execute update OpCodes.
 *   //        has NOT changed then skip \`2\` values and start processing next OpCodes.
 *   0b1000, 2,
 *   // Concatenate \`newValue = lView[bindIndex -1];\`.
 *   -1,
 *   // Switch ICU: \`icuSwitchCase(lView[1], 0, newValue);\`
 *   0 << SHIFT_ICU | 1 << SHIFT_REF | IcuSwitch,
 *
 *   // Note \`changeMask & -1\` is always true, so the IcuUpdate will always execute.
 *   -1, 1,
 *   // Update ICU: \`icuUpdateCase(lView[1], 0);\`
 *   0 << SHIFT_ICU | 1 << SHIFT_REF | IcuUpdate,
 *
 * ];
 * \`\`\`
 *
 */
declare interface I18nUpdateOpCodes extends Array<string | number | SanitizerFn | null>, I18nDebug {
	__brand__: 'I18nUpdateOpCodes';
}

/**
 * Marks that the next string is comment text need for ICU.
 *
 * See \`I18nMutateOpCodes\` documentation.
 */
declare const ICU_MARKER: ICU_MARKER;

declare interface ICU_MARKER {
	marker: 'ICU';
}

/**
 * Array storing OpCode for dynamically creating \`i18n\` blocks.
 *
 * Example:
 * \`\`\`ts
 * <I18nCreateOpCode>[
 *   // For adding text nodes
 *   // ---------------------
 *   // Equivalent to:
 *   //   lView[1].appendChild(lView[0] = document.createTextNode('xyz'));
 *   'xyz', 0, 1 << SHIFT_PARENT | 0 << SHIFT_REF | AppendChild,
 *
 *   // For adding element nodes
 *   // ---------------------
 *   // Equivalent to:
 *   //   lView[1].appendChild(lView[0] = document.createElement('div'));
 *   ELEMENT_MARKER, 'div', 0, 1 << SHIFT_PARENT | 0 << SHIFT_REF | AppendChild,
 *
 *   // For adding comment nodes
 *   // ---------------------
 *   // Equivalent to:
 *   //   lView[1].appendChild(lView[0] = document.createComment(''));
 *   ICU_MARKER, '', 0, 1 << SHIFT_PARENT | 0 << SHIFT_REF | AppendChild,
 *
 *   // For moving existing nodes to a different location
 *   // --------------------------------------------------
 *   // Equivalent to:
 *   //   const node = lView[1];
 *   //   lView[2].appendChild(node);
 *   1 << SHIFT_REF | Select, 2 << SHIFT_PARENT | 0 << SHIFT_REF | AppendChild,
 *
 *   // For removing existing nodes
 *   // --------------------------------------------------
 *   //   const node = lView[1];
 *   //   removeChild(tView.data(1), node, lView);
 *   1 << SHIFT_REF | Remove,
 *
 *   // For writing attributes
 *   // --------------------------------------------------
 *   //   const node = lView[1];
 *   //   node.setAttribute('attr', 'value');
 *   1 << SHIFT_REF | Attr, 'attr', 'value'
 * ];
 * \`\`\`
 */
declare interface IcuCreateOpCodes extends Array<number | string | ELEMENT_MARKER | ICU_MARKER | null>, I18nDebug {
	__brand__: 'I18nCreateOpCodes';
}

/**
 * Defines the ICU type of \`select\` or \`plural\`
 */
declare const enum IcuType {
	select = 0,
	plural = 1
}

declare const ID = 20;

/**
 * Providers that were imported from NgModules via the \`importProvidersFrom\` function.
 *
 * These providers are meant for use in an application injector (or other environment injectors) and
 * should not be used in component injectors.
 *
 * This type cannot be directly implemented. It's returned from the \`importProvidersFrom\` function
 * and serves to prevent the extracted NgModule providers from being used in the wrong contexts.
 *
 * @see \`importProvidersFrom\`
 *
 * @publicApi
 * @developerPreview
 */
export declare interface ImportedNgModuleProviders {
	ɵproviders: Provider[];
}

/**
 * Collects providers from all NgModules and standalone components, including transitively imported
 * ones.
 *
 * Providers extracted via \`importProvidersFrom\` are only usable in an application injector or
 * another environment injector (such as a route injector). They should not be used in component
 * providers.
 *
 * More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The results of the \`importProvidersFrom\` call can be used in the \`bootstrapApplication\` call:
 *
 * \`\`\`typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(NgModuleOne, NgModuleTwo)
 *   ]
 * });
 * \`\`\`
 *
 * You can also use the \`importProvidersFrom\` results in the \`providers\` field of a route, when a
 * standalone component is used:
 *
 * \`\`\`typescript
 * export const ROUTES: Route[] = [
 *   {
 *     path: 'foo',
 *     providers: [
 *       importProvidersFrom(NgModuleOne, NgModuleTwo)
 *     ],
 *     component: YourStandaloneComponent
 *   }
 * ];
 * \`\`\`
 *
 * @returns Collected providers from the specified list of types.
 * @publicApi
 * @developerPreview
 */
export declare function importProvidersFrom(...sources: ImportProvidersSource[]): ImportedNgModuleProviders;

/**
 * A source of providers for the \`importProvidersFrom\` function.
 *
 * @developerPreview
 * @publicApi
 */
export declare type ImportProvidersSource = Type<unknown> | ModuleWithProviders<unknown> | Array<ImportProvidersSource>;

/**
 * This array contains information about input properties that
 * need to be set once from attribute data. It's ordered by
 * directive index (relative to element) so it's simple to
 * look up a specific directive's initial input data.
 *
 * Within each sub-array:
 *
 * i+0: attribute name
 * i+1: minified/internal input name
 * i+2: initial value
 *
 * If a directive on a node does not have any input properties
 * that should be set from attributes, its index is set to null
 * to avoid a sparse array.
 *
 * e.g. [null, ['role-min', 'minified-input', 'button']]
 */
declare type InitialInputData = (InitialInputs | null)[];

/**
 * Used by InitialInputData to store input properties
 * that should be set once from attributes.
 *
 * i+0: attribute name
 * i+1: minified/internal input name
 * i+2: initial value
 *
 * e.g. ['role-min', 'minified-input', 'button']
 */
declare type InitialInputs = string[];

/**
 * Type of the Inject metadata.
 *
 * @publicApi
 */
export declare interface Inject {
	/**
	 * A [DI token](guide/glossary#di-token) that maps to the dependency to be injected.
	 */
	token: any;
}

/**
 * Inject decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Inject: InjectDecorator;

/**
 * @param token A token that represents a dependency that should be injected.
 * @returns the injected value if operation is successful, \`null\` otherwise.
 * @throws if called outside of a supported context.
 *
 * @publicApi
 */
export declare function inject<T>(token: ProviderToken<T>): T;

/**
 * @param token A token that represents a dependency that should be injected.
 * @param flags Control how injection is executed. The flags correspond to injection strategies that
 *     can be specified with parameter decorators \`@Host\`, \`@Self\`, \`@SkipSelf\`, and \`@Optional\`.
 * @returns the injected value if operation is successful, \`null\` otherwise.
 * @throws if called outside of a supported context.
 *
 * @publicApi
 * @deprecated prefer an options object instead of \`InjectFlags\`
 */
export declare function inject<T>(token: ProviderToken<T>, flags?: InjectFlags): T | null;

/**
 * @param token A token that represents a dependency that should be injected.
 * @param options Control how injection is executed. Options correspond to injection strategies
 *     that can be specified with parameter decorators \`@Host\`, \`@Self\`, \`@SkipSelf\`, and
 *     \`@Optional\`.
 * @returns the injected value if operation is successful.
 * @throws if called outside of a supported context, or if the token is not found.
 *
 * @publicApi
 */
export declare function inject<T>(token: ProviderToken<T>, options: InjectOptions & {
	optional?: false;
}): T;

/**
 * @param token A token that represents a dependency that should be injected.
 * @param options Control how injection is executed. Options correspond to injection strategies
 *     that can be specified with parameter decorators \`@Host\`, \`@Self\`, \`@SkipSelf\`, and
 *     \`@Optional\`.
 * @returns the injected value if operation is successful,  \`null\` if the token is not
 *     found and optional injection has been requested.
 * @throws if called outside of a supported context, or if the token is not found and optional
 *     injection was not requested.
 *
 * @publicApi
 */
export declare function inject<T>(token: ProviderToken<T>, options: InjectOptions): T | null;

/**
 * Type of the Injectable metadata.
 *
 * @publicApi
 */
export declare interface Injectable {
	/**
	 * Determines which injectors will provide the injectable.
	 *
	 * - \`Type<any>\` - associates the injectable with an \`@NgModule\` or other \`InjectorType\`,
	 * - 'null' : Equivalent to \`undefined\`. The injectable is not provided in any scope automatically
	 * and must be added to a \`providers\` array of an [@NgModule](api/core/NgModule#providers),
	 * [@Component](api/core/Directive#providers) or [@Directive](api/core/Directive#providers).
	 *
	 * The following options specify that this injectable should be provided in one of the following
	 * injectors:
	 * - 'root' : The application-level injector in most apps.
	 * - 'platform' : A special singleton platform injector shared by all
	 * applications on the page.
	 * - 'any' : Provides a unique instance in each lazy loaded module while all eagerly loaded
	 * modules share one instance.
	 *
	 */
	providedIn?: Type<any> | 'root' | 'platform' | 'any' | null;
}

/**
 * Injectable decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Injectable: InjectableDecorator;

/**
 * Type of the Injectable decorator / constructor function.
 *
 * @publicApi
 */
export declare interface InjectableDecorator {
	/**
	 * Decorator that marks a class as available to be
	 * provided and injected as a dependency.
	 *
	 * @see [Introduction to Services and DI](guide/architecture-services)
	 * @see [Dependency Injection Guide](guide/dependency-injection)
	 *
	 * @usageNotes
	 *
	 * Marking a class with \`@Injectable\` ensures that the compiler
	 * will generate the necessary metadata to create the class's
	 * dependencies when the class is injected.
	 *
	 * The following example shows how a service class is properly
	 *  marked so that a supporting service can be injected upon creation.
	 *
	 * <code-example path="core/di/ts/metadata_spec.ts" region="Injectable"></code-example>
	 *
	 */
	(): TypeDecorator;
	(options?: {
		providedIn: Type<any> | 'root' | 'platform' | 'any' | null;
	} & InjectableProvider): TypeDecorator;
	new(): Injectable;
	new(options?: {
		providedIn: Type<any> | 'root' | 'platform' | 'any' | null;
	} & InjectableProvider): Injectable;
}

/**
 * Injectable providers used in \`@Injectable\` decorator.
 *
 * @publicApi
 */
export declare type InjectableProvider = ValueSansProvider | ExistingSansProvider | StaticClassSansProvider | ConstructorSansProvider | FactorySansProvider | ClassSansProvider;

/**
 * A \`Type\` which has a \`ɵprov: ɵɵInjectableDeclaration\` static field.
 *
 * \`InjectableType\`s contain their own Dependency Injection metadata and are usable in an
 * \`InjectorDef\`-based \`StaticInjector\`.
 *
 * @publicApi
 */
export declare interface InjectableType<T> extends Type<T> {
	/**
	 * Opaque type whose structure is highly version dependent. Do not rely on any properties.
	 */
	ɵprov: unknown;
}


/**
 * Type of the Inject decorator / constructor function.
 *
 * @publicApi
 */
export declare interface InjectDecorator {
	/**
	 * Parameter decorator on a dependency parameter of a class constructor
	 * that specifies a custom provider of the dependency.
	 *
	 * @usageNotes
	 * The following example shows a class constructor that specifies a
	 * custom provider of a dependency using the parameter decorator.
	 *
	 * When \`@Inject()\` is not present, the injector uses the type annotation of the
	 * parameter as the provider.
	 *
	 * <code-example path="core/di/ts/metadata_spec.ts" region="InjectWithoutDecorator">
	 * </code-example>
	 *
	 * @see ["Dependency Injection Guide"](guide/dependency-injection)
	 *
	 */
	(token: any): any;
	new(token: any): Inject;
}

/**
 * Injection flags for DI.
 *
 * @publicApi
 * @deprecated use an options object for \`inject\` instead.
 */
export declare enum InjectFlags {
	/** Check self and check parent injector if needed */
	Default = 0,
	/**
	 * Specifies that an injector should retrieve a dependency from any injector until reaching the
	 * host element of the current component. (Only used with Element Injector)
	 */
	Host = 1,
	/** Don't ascend to ancestors of the node requesting injection. */
	Self = 2,
	/** Skip the node that is requesting injection. */
	SkipSelf = 4,
	/** Inject \`defaultValue\` instead if token not found. */
	Optional = 8
}

/**
 * Creates a token that can be used in a DI Provider.
 *
 * Use an \`InjectionToken\` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, callable type, array or
 * parameterized type.
 *
 * \`InjectionToken\` is parameterized on \`T\` which is the type of object which will be returned by
 * the \`Injector\`. This provides an additional level of type safety.
 *
 * \`\`\`
 * interface MyInterface {...}
 * const myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
 * // myInterface is inferred to be MyInterface.
 * \`\`\`
 *
 * When creating an \`InjectionToken\`, you can optionally specify a factory function which returns
 * (possibly by creating) a default value of the parameterized type \`T\`. This sets up the
 * \`InjectionToken\` using this factory as a provider as if it was defined explicitly in the
 * application's root injector. If the factory function, which takes zero arguments, needs to inject
 * dependencies, it can do so using the \`inject\` function.
 * As you can see in the Tree-shakable InjectionToken example below.
 *
 * Additionally, if a \`factory\` is specified you can also specify the \`providedIn\` option, which
 * overrides the above behavior and marks the token as belonging to a particular \`@NgModule\`. As
 * mentioned above, \`'root'\` is the default value for \`providedIn\`.
 *
 * @usageNotes
 * ### Basic Examples
 *
 * ### Plain InjectionToken
 *
 * {@example core/di/ts/injector_spec.ts region='InjectionToken'}
 *
 * ### Tree-shakable InjectionToken
 *
 * {@example core/di/ts/injector_spec.ts region='ShakableInjectionToken'}
 *
 *
 * @publicApi
 */
export declare class InjectionToken<T> {
	protected _desc: string;
	readonly ɵprov: unknown;
	/**
	 * @param _desc   Description for the token,
	 *                used only for debugging purposes,
	 *                it should but does not need to be unique
	 * @param options Options for the token's usage, as described above
	 */
	constructor(_desc: string, options?: {
		providedIn?: Type<any> | 'root' | 'platform' | 'any' | null;
		factory: () => T;
	});
	toString(): string;
}

/**
 * Type of the options argument to \`inject\`.
 *
 * @publicApi
 */
export declare interface InjectOptions {
	/**
	 * Use optional injection, and return \`null\` if the requested token is not found.
	 */
	optional?: boolean;
	/**
	 * Start injection at the parent of the current injector.
	 */
	skipSelf?: boolean;
	/**
	 * Only query the current injector for the token, and don't fall back to the parent injector if
	 * it's not found.
	 */
	self?: boolean;
	/**
	 * Stop injection at the host component's injector. Only relevant when injecting from an element
	 * injector, and a no-op for environment injectors.
	 */
	host?: boolean;
}

/**
 * An InjectionToken that gets the current \`Injector\` for \`createInjector()\`-style injectors.
 *
 * Requesting this token instead of \`Injector\` allows \`StaticInjector\` to be tree-shaken from a
 * project.
 *
 * @publicApi
 */
export declare const INJECTOR: InjectionToken<Injector>;

/**
 * Concrete injectors implement this interface. Injectors are configured
 * with [providers](guide/glossary#provider) that associate
 * dependencies of various types with [injection tokens](guide/glossary#di-token).
 *
 * @see ["DI Providers"](guide/dependency-injection-providers).
 * @see \`StaticProvider\`
 *
 * @usageNotes
 *
 *  The following example creates a service injector instance.
 *
 * {@example core/di/ts/provider_spec.ts region='ConstructorProvider'}
 *
 * ### Usage example
 *
 * {@example core/di/ts/injector_spec.ts region='Injector'}
 *
 * \`Injector\` returns itself when given \`Injector\` as a token:
 *
 * {@example core/di/ts/injector_spec.ts region='injectInjector'}
 *
 * @publicApi
 */
export declare abstract class Injector {
	static THROW_IF_NOT_FOUND: {};
	static NULL: Injector;
	/**
	 * Retrieves an instance from the injector based on the provided token.
	 * @returns The instance from the injector if defined, otherwise the \`notFoundValue\`.
	 * @throws When the \`notFoundValue\` is \`undefined\` or \`Injector.THROW_IF_NOT_FOUND\`.
	 */
	abstract get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
	/**
	 * @deprecated from v4.0.0 use ProviderToken<T>
	 * @suppress {duplicate}
	 */
	abstract get(token: any, notFoundValue?: any): any;
	/**
	 * @deprecated from v5 use the new signature Injector.create(options)
	 */
	static create(providers: StaticProvider[], parent?: Injector): Injector;
	/**
	 * Creates a new injector instance that provides one or more dependencies,
	 * according to a given type or types of \`StaticProvider\`.
	 *
	 * @param options An object with the following properties:
	 * * \`providers\`: An array of providers of the [StaticProvider type](api/core/StaticProvider).
	 * * \`parent\`: (optional) A parent injector.
	 * * \`name\`: (optional) A developer-defined identifying name for the new injector.
	 *
	 * @returns The new injector instance.
	 *
	 */
	static create(options: {
		providers: StaticProvider[];
		parent?: Injector;
		name?: string;
	}): Injector;
	/** @nocollapse */
	static ɵprov: unknown;
}

declare const INJECTOR_2 = 9;

declare type InjectorScope = 'root' | 'platform' | 'environment';

/**
 * A type which has an \`InjectorDef\` static field.
 *
 * \`InjectorTypes\` can be used to configure a \`StaticInjector\`.
 *
 * This is an opaque type whose structure is highly version dependent. Do not rely on any
 * properties.
 *
 * @publicApi
 */
export declare interface InjectorType<T> extends Type<T> {
	ɵfac?: unknown;
	ɵinj: unknown;
}

/**
 * Describes the \`InjectorDef\` equivalent of a \`ModuleWithProviders\`, an \`InjectorType\` with an
 * associated array of providers.
 *
 * Objects of this type can be listed in the imports section of an \`InjectorDef\`.
 *
 * NOTE: This is a private type and should not be exported
 */
declare interface InjectorTypeWithProviders<T> {
	ngModule: InjectorType<T>;
	providers?: (Type<any> | ValueProvider | ExistingProvider | FactoryProvider | ConstructorProvider | StaticClassProvider | ClassProvider | any[])[];
}

/**
 * Type of metadata for an \`Input\` property.
 *
 * @publicApi
 */
export declare interface Input {
	/**
	 * The name of the DOM property to which the input property is bound.
	 */
	bindingPropertyName?: string;
}

/**
 * @Annotation
 * @publicApi
 */
export declare const Input: InputDecorator;

/**
 * @publicApi
 */
export declare interface InputDecorator {
	/**
	 * Decorator that marks a class field as an input property and supplies configuration metadata.
	 * The input property is bound to a DOM property in the template. During change detection,
	 * Angular automatically updates the data property with the DOM property's value.
	 *
	 * @usageNotes
	 *
	 * You can supply an optional name to use in templates when the
	 * component is instantiated, that maps to the
	 * name of the bound property. By default, the original
	 * name of the bound property is used for input binding.
	 *
	 * The following example creates a component with two input properties,
	 * one of which is given a special binding name.
	 *
	 * \`\`\`typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: \`
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   \`
	 * })
	 * class BankAccount {
	 *   // This property is bound using its original name.
	 *   @Input() bankName: string;
	 *   // this property value is bound to a different property name
	 *   // when this component is instantiated in a template.
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and is not automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: \`
	 *     <bank-account bankName="RBC" account-id="4747"></bank-account>
	 *   \`
	 * })
	 * class App {}
	 * \`\`\`
	 *
	 * @see [Input and Output properties](guide/inputs-outputs)
	 */
	(bindingPropertyName?: string): any;
	new(bindingPropertyName?: string): any;
}

/**
 * See \`TNode.insertBeforeIndex\`
 */
declare type InsertBeforeIndex = null | number | number[];

declare interface InternalNgModuleRef<T> extends NgModuleRef<T> {
	_bootstrapComponents: Type<any>[];
}

declare interface InternalViewRef extends ViewRef {
	detachFromAppRef(): void;
	attachToAppRef(appRef: ViewRefTracker): void;
}


/**
 * Returns whether Angular is in development mode. After called once,
 * the value is locked and won't change any more.
 *
 * By default, this is true, unless a user calls \`enableProdMode\` before calling this.
 *
 * @publicApi
 */
export declare function isDevMode(): boolean;

/**
 * Record representing the item change information.
 *
 * @publicApi
 */
export declare interface IterableChangeRecord<V> {
	/** Current index of the item in \`Iterable\` or null if removed. */
	readonly currentIndex: number | null;
	/** Previous index of the item in \`Iterable\` or null if added. */
	readonly previousIndex: number | null;
	/** The item. */
	readonly item: V;
	/** Track by identity as computed by the \`TrackByFunction\`. */
	readonly trackById: any;
}

declare class IterableChangeRecord_<V> implements IterableChangeRecord<V> {
	item: V;
	trackById: any;
	currentIndex: number | null;
	previousIndex: number | null;
	constructor(item: V, trackById: any);
}

/**
 * An object describing the changes in the \`Iterable\` collection since last time
 * \`IterableDiffer#diff()\` was invoked.
 *
 * @publicApi
 */
export declare interface IterableChanges<V> {
	/**
	 * Iterate over all changes. \`IterableChangeRecord\` will contain information about changes
	 * to each item.
	 */
	forEachItem(fn: (record: IterableChangeRecord<V>) => void): void;
	/**
	 * Iterate over a set of operations which when applied to the original \`Iterable\` will produce the
	 * new \`Iterable\`.
	 *
	 * NOTE: These are not necessarily the actual operations which were applied to the original
	 * \`Iterable\`, rather these are a set of computed operations which may not be the same as the
	 * ones applied.
	 *
	 * @param record A change which needs to be applied
	 * @param previousIndex The \`IterableChangeRecord#previousIndex\` of the \`record\` refers to the
	 *        original \`Iterable\` location, where as \`previousIndex\` refers to the transient location
	 *        of the item, after applying the operations up to this point.
	 * @param currentIndex The \`IterableChangeRecord#currentIndex\` of the \`record\` refers to the
	 *        original \`Iterable\` location, where as \`currentIndex\` refers to the transient location
	 *        of the item, after applying the operations up to this point.
	 */
	forEachOperation(fn: (record: IterableChangeRecord<V>, previousIndex: number | null, currentIndex: number | null) => void): void;
	/**
	 * Iterate over changes in the order of original \`Iterable\` showing where the original items
	 * have moved.
	 */
	forEachPreviousItem(fn: (record: IterableChangeRecord<V>) => void): void;
	/** Iterate over all added items. */
	forEachAddedItem(fn: (record: IterableChangeRecord<V>) => void): void;
	/** Iterate over all moved items. */
	forEachMovedItem(fn: (record: IterableChangeRecord<V>) => void): void;
	/** Iterate over all removed items. */
	forEachRemovedItem(fn: (record: IterableChangeRecord<V>) => void): void;
	/**
	 * Iterate over all items which had their identity (as computed by the \`TrackByFunction\`)
	 * changed.
	 */
	forEachIdentityChange(fn: (record: IterableChangeRecord<V>) => void): void;
}

/**
 * A strategy for tracking changes over time to an iterable. Used by {@link NgForOf} to
 * respond to changes in an iterable by effecting equivalent changes in the DOM.
 *
 * @publicApi
 */
export declare interface IterableDiffer<V> {
	/**
	 * Compute a difference between the previous state and the new \`object\` state.
	 *
	 * @param object containing the new value.
	 * @returns an object describing the difference. The return value is only valid until the next
	 * \`diff()\` invocation.
	 */
	diff(object: NgIterable<V> | undefined | null): IterableChanges<V> | null;
}

/**
 * Provides a factory for {@link IterableDiffer}.
 *
 * @publicApi
 */
export declare interface IterableDifferFactory {
	supports(objects: any): boolean;
	create<V>(trackByFn?: TrackByFunction<V>): IterableDiffer<V>;
}

/**
 * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
 *
 * @publicApi
 */
export declare class IterableDiffers {
	/** @nocollapse */
	static ɵprov: unknown;
	/**
	 * @deprecated v4.0.0 - Should be private
	 */
	factories: IterableDifferFactory[];
	constructor(factories: IterableDifferFactory[]);
	static create(factories: IterableDifferFactory[], parent?: IterableDiffers): IterableDiffers;
	/**
	 * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
	 * inherited {@link IterableDiffers} instance with the provided factories and return a new
	 * {@link IterableDiffers} instance.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * The following example shows how to extend an existing list of factories,
	 * which will only be applied to the injector for this component and its children.
	 * This step is all that's required to make a new {@link IterableDiffer} available.
	 *
	 * \`\`\`
	 * @Component({
	 *   viewProviders: [
	 *     IterableDiffers.extend([new ImmutableListDiffer()])
	 *   ]
	 * })
	 * \`\`\`
	 */
	static extend(factories: IterableDifferFactory[]): StaticProvider;
	find(iterable: any): IterableDifferFactory;
}

/**
 * The existence of this constant (in this particular file) informs the Angular compiler that the
 * current program is actually @angular/core, which needs to be compiled specially.
 */
declare const ITS_JUST_ANGULAR = true;

/**
 * \`KeyValueArray\` is an array where even positions contain keys and odd positions contain values.
 *
 * \`KeyValueArray\` provides a very efficient way of iterating over its contents. For small
 * sets (~10) the cost of binary searching an \`KeyValueArray\` has about the same performance
 * characteristics that of a \`Map\` with significantly better memory footprint.
 *
 * If used as a \`Map\` the keys are stored in alphabetical order so that they can be binary searched
 * for retrieval.
 *
 * See: \`keyValueArraySet\`, \`keyValueArrayGet\`, \`keyValueArrayIndexOf\`, \`keyValueArrayDelete\`.
 */
declare interface KeyValueArray<VALUE> extends Array<VALUE | string> {
	__brand__: 'array-map';
}

/**
 * Record representing the item change information.
 *
 * @publicApi
 */
export declare interface KeyValueChangeRecord<K, V> {
	/**
	 * Current key in the Map.
	 */
	readonly key: K;
	/**
	 * Current value for the key or \`null\` if removed.
	 */
	readonly currentValue: V | null;
	/**
	 * Previous value for the key or \`null\` if added.
	 */
	readonly previousValue: V | null;
}

/**
 * An object describing the changes in the \`Map\` or \`{[k:string]: string}\` since last time
 * \`KeyValueDiffer#diff()\` was invoked.
 *
 * @publicApi
 */
export declare interface KeyValueChanges<K, V> {
	/**
	 * Iterate over all changes. \`KeyValueChangeRecord\` will contain information about changes
	 * to each item.
	 */
	forEachItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
	/**
	 * Iterate over changes in the order of original Map showing where the original items
	 * have moved.
	 */
	forEachPreviousItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
	/**
	 * Iterate over all keys for which values have changed.
	 */
	forEachChangedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
	/**
	 * Iterate over all added items.
	 */
	forEachAddedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
	/**
	 * Iterate over all removed items.
	 */
	forEachRemovedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
}

/**
 * A differ that tracks changes made to an object over time.
 *
 * @publicApi
 */
export declare interface KeyValueDiffer<K, V> {
	/**
	 * Compute a difference between the previous state and the new \`object\` state.
	 *
	 * @param object containing the new value.
	 * @returns an object describing the difference. The return value is only valid until the next
	 * \`diff()\` invocation.
	 */
	diff(object: Map<K, V>): KeyValueChanges<K, V> | null;
	/**
	 * Compute a difference between the previous state and the new \`object\` state.
	 *
	 * @param object containing the new value.
	 * @returns an object describing the difference. The return value is only valid until the next
	 * \`diff()\` invocation.
	 */
	diff(object: {
		[key: string]: V;
	}): KeyValueChanges<string, V> | null;
}

/**
 * Provides a factory for {@link KeyValueDiffer}.
 *
 * @publicApi
 */
export declare interface KeyValueDifferFactory {
	/**
	 * Test to see if the differ knows how to diff this kind of object.
	 */
	supports(objects: any): boolean;
	/**
	 * Create a \`KeyValueDiffer\`.
	 */
	create<K, V>(): KeyValueDiffer<K, V>;
}

/**
 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 *
 * @publicApi
 */
export declare class KeyValueDiffers {
	/** @nocollapse */
	static ɵprov: unknown;
	/**
	 * @deprecated v4.0.0 - Should be private.
	 */
	factories: KeyValueDifferFactory[];
	constructor(factories: KeyValueDifferFactory[]);
	static create<S>(factories: KeyValueDifferFactory[], parent?: KeyValueDiffers): KeyValueDiffers;
	/**
	 * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
	 * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
	 * {@link KeyValueDiffers} instance.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * The following example shows how to extend an existing list of factories,
	 * which will only be applied to the injector for this component and its children.
	 * This step is all that's required to make a new {@link KeyValueDiffer} available.
	 *
	 * \`\`\`
	 * @Component({
	 *   viewProviders: [
	 *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
	 *   ]
	 * })
	 * \`\`\`
	 */
	static extend<S>(factories: KeyValueDifferFactory[]): StaticProvider;
	find(kv: any): KeyValueDifferFactory;
}

/**
 * The state associated with a container.
 *
 * This is an array so that its structure is closer to LView. This helps
 * when traversing the view tree (which is a mix of containers and component
 * views), so we can jump to viewOrContainer[NEXT] in the same way regardless
 * of type.
 */
declare interface LContainer extends Array<any> {
	/**
	 * The host element of this LContainer.
	 *
	 * The host could be an LView if this container is on a component node.
	 * In that case, the component LView is its HOST.
	 */
	readonly [HOST]: RElement | RComment | LView;
	/**
	 * This is a type field which allows us to differentiate \`LContainer\` from \`StylingContext\` in an
	 * efficient way. The value is always set to \`true\`
	 */
	[TYPE]: true;
	/**
	 * Flag to signify that this \`LContainer\` may have transplanted views which need to be change
	 * detected. (see: \`LView[DECLARATION_COMPONENT_VIEW])\`.
	 *
	 * This flag, once set, is never unset for the \`LContainer\`.
	 */
	[HAS_TRANSPLANTED_VIEWS]: boolean;
	/**
	 * Access to the parent view is necessary so we can propagate back
	 * up from inside a container to parent[NEXT].
	 */
	[PARENT]: LView;
	/**
	 * This allows us to jump from a container to a sibling container or component
	 * view with the same parent, so we can remove listeners efficiently.
	 */
	[NEXT]: LView | LContainer | null;
	/**
	 * The number of direct transplanted views which need a refresh or have descendants themselves
	 * that need a refresh but have not marked their ancestors as Dirty. This tells us that during
	 * change detection we should still descend to find those children to refresh, even if the parents
	 * are not \`Dirty\`/\`CheckAlways\`.
	 */
	[TRANSPLANTED_VIEWS_TO_REFRESH]: number;
	/**
	 * A collection of views created based on the underlying \`<ng-template>\` element but inserted into
	 * a different \`LContainer\`. We need to track views created from a given declaration point since
	 * queries collect matches from the embedded view declaration point and _not_ the insertion point.
	 */
	[MOVED_VIEWS]: LView[] | null;
	/**
	 * Pointer to the \`TNode\` which represents the host of the container.
	 */
	[T_HOST]: TNode;
	/** The comment element that serves as an anchor for this LContainer. */
	readonly [NATIVE]: RComment;
	/**
	 * Array of \`ViewRef\`s used by any \`ViewContainerRef\`s that point to this container.
	 *
	 * This is lazily initialized by \`ViewContainerRef\` when the first view is inserted.
	 *
	 * NOTE: This is stored as \`any[]\` because render3 should really not be aware of \`ViewRef\` and
	 * doing so creates circular dependency.
	 */
	[VIEW_REFS]: unknown[] | null;
}

/**
 * Human readable version of the \`LContainer\`
 *
 * \`LContainer\` is a data structure used internally to keep track of child views. The \`LContainer\`
 * is designed for efficiency and so at times it is difficult to read or write tests which assert on
 * its values. For this reason when \`ngDevMode\` is true we patch a \`LContainer.debug\` property which
 * points to \`LContainerDebug\` for easier debugging and test writing. It is the intent of
 * \`LContainerDebug\` to be used in tests.
 */
declare interface LContainerDebug {
	readonly native: RComment;
	/**
	 * Child \`LView\`s.
	 */
	readonly views: LViewDebug[];
	readonly parent: LViewDebug | null;
	readonly movedViews: LView[] | null;
	readonly host: RElement | RComment | LView;
	readonly next: LViewDebug | LContainerDebug | null;
	readonly hasTransplantedViews: boolean;
}

/**
 * Provide this token to set the locale of your application.
 * It is used for i18n extraction, by i18n pipes (DatePipe, I18nPluralPipe, CurrencyPipe,
 * DecimalPipe and PercentPipe) and by ICU expressions.
 *
 * See the [i18n guide](guide/i18n-common-locale-id) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * \`\`\`typescript
 * import { LOCALE_ID } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
 * });
 * \`\`\`
 *
 * @publicApi
 */
export declare const LOCALE_ID: InjectionToken<string>;

/**
 * Type for a function that extracts a value for a local refs.
 * Example:
 * - \`<div #nativeDivEl>\` - \`nativeDivEl\` should point to the native \`<div>\` element;
 * - \`<ng-template #tplRef>\` - \`tplRef\` should point to the \`TemplateRef\` instance;
 */
declare type LocalRefExtractor = (tNode: TNodeWithLocalRefs, currentView: LView) => any;

/**
 * lQueries represent a collection of individual LQuery objects tracked in a given view.
 */
declare interface LQueries {
	/**
	 * A collection of queries tracked in a given view.
	 */
	queries: LQuery<any>[];
	/**
	 * A method called when a new embedded view is created. As a result a set of LQueries applicable
	 * for a new embedded view is instantiated (cloned) from the declaration view.
	 * @param tView
	 */
	createEmbeddedView(tView: TView): LQueries | null;
	/**
	 * A method called when an embedded view is inserted into a container. As a result all impacted
	 * \`LQuery\` objects (and associated \`QueryList\`) are marked as dirty.
	 * @param tView
	 */
	insertView(tView: TView): void;
	/**
	 * A method called when an embedded view is detached from a container. As a result all impacted
	 * \`LQuery\` objects (and associated \`QueryList\`) are marked as dirty.
	 * @param tView
	 */
	detachView(tView: TView): void;
}

/**
 * An interface that represents query-related information specific to a view instance. Most notably
 * it contains:
 * - materialized query matches;
 * - a pointer to a QueryList where materialized query results should be reported.
 */
declare interface LQuery<T> {
	/**
	 * Materialized query matches for a given view only (!). Results are initialized lazily so the
	 * array of matches is set to \`null\` initially.
	 */
	matches: (T | null)[] | null;
	/**
	 * A QueryList where materialized query results should be reported.
	 */
	queryList: QueryList<T>;
	/**
	 * Clones an LQuery for an embedded view. A cloned query shares the same \`QueryList\` but has a
	 * separate collection of materialized matches.
	 */
	clone(): LQuery<T>;
	/**
	 * Called when an embedded view, impacting results of this query, is inserted or removed.
	 */
	setDirty(): void;
}

/**
 * \`LView\` stores all of the information needed to process the instructions as
 * they are invoked from the template. Each embedded view and component view has its
 * own \`LView\`. When processing a particular view, we set the \`viewData\` to that
 * \`LView\`. When that view is done processing, the \`viewData\` is set back to
 * whatever the original \`viewData\` was before (the parent \`LView\`).
 *
 * Keeping separate state for each view facilities view insertion / deletion, so we
 * don't have to edit the data array based on which views are present.
 */
declare interface LView<T = unknown> extends Array<any> {
	/**
	 * Human readable representation of the \`LView\`.
	 *
	 * NOTE: This property only exists if \`ngDevMode\` is set to \`true\` and it is not present in
	 * production. Its presence is purely to help debug issue in development, and should not be relied
	 * on in production application.
	 */
	debug?: LViewDebug;
	/**
	 * The node into which this \`LView\` is inserted.
	 */
	[HOST]: RElement | null;
	/**
	 * The static data for this view. We need a reference to this so we can easily walk up the
	 * node tree in DI and get the TView.data array associated with a node (where the
	 * directive defs are stored).
	 */
	readonly [TVIEW]: TView;
	/** Flags for this view. See LViewFlags for more info. */
	[FLAGS]: LViewFlags;
	/**
	 * This may store an {@link LView} or {@link LContainer}.
	 *
	 * \`LView\` - The parent view. This is needed when we exit the view and must restore the previous
	 * LView. Without this, the render method would have to keep a stack of
	 * views as it is recursively rendering templates.
	 *
	 * \`LContainer\` - The current view is part of a container, and is an embedded view.
	 */
	[PARENT]: LView | LContainer | null;
	/**
	 *
	 * The next sibling LView or LContainer.
	 *
	 * Allows us to propagate between sibling view states that aren't in the same
	 * container. Embedded views already have a node.next, but it is only set for
	 * views in the same container. We need a way to link component views and views
	 * across containers as well.
	 */
	[NEXT]: LView | LContainer | null;
	/** Queries active for this view - nodes from a view are reported to those queries. */
	[QUERIES]: LQueries | null;
	/**
	 * Store the \`TNode\` of the location where the current \`LView\` is inserted into.
	 *
	 * Given:
	 * \`\`\`
	 * <div>
	 *   <ng-template><span></span></ng-template>
	 * </div>
	 * \`\`\`
	 *
	 * We end up with two \`TView\`s.
	 * - \`parent\` \`TView\` which contains \`<div><!-- anchor --></div>\`
	 * - \`child\` \`TView\` which contains \`<span></span>\`
	 *
	 * Typically the \`child\` is inserted into the declaration location of the \`parent\`, but it can be
	 * inserted anywhere. Because it can be inserted anywhere it is not possible to store the
	 * insertion information in the \`TView\` and instead we must store it in the \`LView[T_HOST]\`.
	 *
	 * So to determine where is our insertion parent we would execute:
	 * \`\`\`
	 * const parentLView = lView[PARENT];
	 * const parentTNode = lView[T_HOST];
	 * const insertionParent = parentLView[parentTNode.index];
	 * \`\`\`
	 *
	 *
	 * If \`null\`, this is the root view of an application (root component is in this view) and it has
	 * no parents.
	 */
	[T_HOST]: TNode | null;
	/**
	 * When a view is destroyed, listeners need to be released and outputs need to be
	 * unsubscribed. This context array stores both listener functions wrapped with
	 * their context and output subscription instances for a particular view.
	 *
	 * These change per LView instance, so they cannot be stored on TView. Instead,
	 * TView.cleanup saves an index to the necessary context in this array.
	 *
	 * After \`LView\` is created it is possible to attach additional instance specific functions at the
	 * end of the \`lView[CLEANUP]\` because we know that no more \`T\` level cleanup functions will be
	 * added here.
	 */
	[CLEANUP]: any[] | null;
	/**
	 * - For dynamic views, this is the context with which to render the template (e.g.
	 *   \`NgForContext\`), or \`{}\` if not defined explicitly.
	 * - For root view of the root component it's a reference to the component instance itself.
	 * - For components, the context is a reference to the component instance itself.
	 * - For inline views, the context is null.
	 */
	[CONTEXT]: T;
	/** An optional Module Injector to be used as fall back after Element Injectors are consulted. */
	readonly [INJECTOR_2]: Injector | null;
	/** Factory to be used for creating Renderer. */
	[RENDERER_FACTORY]: RendererFactory;
	/** Renderer to be used for this view. */
	[RENDERER]: Renderer;
	/** An optional custom sanitizer. */
	[SANITIZER]: Sanitizer | null;
	/**
	 * Reference to the first LView or LContainer beneath this LView in
	 * the hierarchy.
	 *
	 * Necessary to store this so views can traverse through their nested views
	 * to remove listeners and call onDestroy callbacks.
	 */
	[CHILD_HEAD]: LView | LContainer | null;
	/**
	 * The last LView or LContainer beneath this LView in the hierarchy.
	 *
	 * The tail allows us to quickly add a new state to the end of the view list
	 * without having to propagate starting from the first child.
	 */
	[CHILD_TAIL]: LView | LContainer | null;
	/**
	 * View where this view's template was declared.
	 *
	 * The template for a dynamically created view may be declared in a different view than
	 * it is inserted. We already track the "insertion view" (view where the template was
	 * inserted) in LView[PARENT], but we also need access to the "declaration view"
	 * (view where the template was declared). Otherwise, we wouldn't be able to call the
	 * view's template function with the proper contexts. Context should be inherited from
	 * the declaration view tree, not the insertion view tree.
	 *
	 * Example (AppComponent template):
	 *
	 * <ng-template #foo></ng-template>       <-- declared here -->
	 * <some-comp [tpl]="foo"></some-comp>    <-- inserted inside this component -->
	 *
	 * The <ng-template> above is declared in the AppComponent template, but it will be passed into
	 * SomeComp and inserted there. In this case, the declaration view would be the AppComponent,
	 * but the insertion view would be SomeComp. When we are removing views, we would want to
	 * traverse through the insertion view to clean up listeners. When we are calling the
	 * template function during change detection, we need the declaration view to get inherited
	 * context.
	 */
	[DECLARATION_VIEW]: LView | null;
	/**
	 * Points to the declaration component view, used to track transplanted \`LView\`s.
	 *
	 * See: \`DECLARATION_VIEW\` which points to the actual \`LView\` where it was declared, whereas
	 * \`DECLARATION_COMPONENT_VIEW\` points to the component which may not be same as
	 * \`DECLARATION_VIEW\`.
	 *
	 * Example:
	 * \`\`\`
	 * <#VIEW #myComp>
	 *  <div *ngIf="true">
	 *   <ng-template #myTmpl>...</ng-template>
	 *  </div>
	 * </#VIEW>
	 * \`\`\`
	 * In the above case \`DECLARATION_VIEW\` for \`myTmpl\` points to the \`LView\` of \`ngIf\` whereas
	 * \`DECLARATION_COMPONENT_VIEW\` points to \`LView\` of the \`myComp\` which owns the template.
	 *
	 * The reason for this is that all embedded views are always check-always whereas the component
	 * view can be check-always or on-push. When we have a transplanted view it is important to
	 * determine if we have transplanted a view from check-always declaration to on-push insertion
	 * point. In such a case the transplanted view needs to be added to the \`LContainer\` in the
	 * declared \`LView\` and CD during the declared view CD (in addition to the CD at the insertion
	 * point.) (Any transplanted views which are intra Component are of no interest because the CD
	 * strategy of declaration and insertion will always be the same, because it is the same
	 * component.)
	 *
	 * Queries already track moved views in \`LView[DECLARATION_LCONTAINER]\` and
	 * \`LContainer[MOVED_VIEWS]\`. However the queries also track \`LView\`s which moved within the same
	 * component \`LView\`. Transplanted views are a subset of moved views, and we use
	 * \`DECLARATION_COMPONENT_VIEW\` to differentiate them. As in this example.
	 *
	 * Example showing intra component \`LView\` movement.
	 * \`\`\`
	 * <#VIEW #myComp>
	 *   <div *ngIf="condition; then thenBlock else elseBlock"></div>
	 *   <ng-template #thenBlock>Content to render when condition is true.</ng-template>
	 *   <ng-template #elseBlock>Content to render when condition is false.</ng-template>
	 * </#VIEW>
	 * \`\`\`
	 * The \`thenBlock\` and \`elseBlock\` is moved but not transplanted.
	 *
	 * Example showing inter component \`LView\` movement (transplanted view).
	 * \`\`\`
	 * <#VIEW #myComp>
	 *   <ng-template #myTmpl>...</ng-template>
	 *   <insertion-component [template]="myTmpl"></insertion-component>
	 * </#VIEW>
	 * \`\`\`
	 * In the above example \`myTmpl\` is passed into a different component. If \`insertion-component\`
	 * instantiates \`myTmpl\` and \`insertion-component\` is on-push then the \`LContainer\` needs to be
	 * marked as containing transplanted views and those views need to be CD as part of the
	 * declaration CD.
	 *
	 *
	 * When change detection runs, it iterates over \`[MOVED_VIEWS]\` and CDs any child \`LView\`s where
	 * the \`DECLARATION_COMPONENT_VIEW\` of the current component and the child \`LView\` does not match
	 * (it has been transplanted across components.)
	 *
	 * Note: \`[DECLARATION_COMPONENT_VIEW]\` points to itself if the LView is a component view (the
	 *       simplest / most common case).
	 *
	 * see also:
	 *   - https://hackmd.io/@mhevery/rJUJsvv9H write up of the problem
	 *   - \`LContainer[HAS_TRANSPLANTED_VIEWS]\` which marks which \`LContainer\` has transplanted views.
	 *   - \`LContainer[TRANSPLANT_HEAD]\` and \`LContainer[TRANSPLANT_TAIL]\` storage for transplanted
	 *   - \`LView[DECLARATION_LCONTAINER]\` similar problem for queries
	 *   - \`LContainer[MOVED_VIEWS]\` similar problem for queries
	 */
	[DECLARATION_COMPONENT_VIEW]: LView;
	/**
	 * A declaration point of embedded views (ones instantiated based on the content of a
	 * <ng-template>), null for other types of views.
	 *
	 * We need to track all embedded views created from a given declaration point so we can prepare
	 * query matches in a proper order (query matches are ordered based on their declaration point and
	 * _not_ the insertion point).
	 */
	[DECLARATION_LCONTAINER]: LContainer | null;
	/**
	 * More flags for this view. See PreOrderHookFlags for more info.
	 */
	[PREORDER_HOOK_FLAGS]: PreOrderHookFlags;
	/**
	 * The number of direct transplanted views which need a refresh or have descendants themselves
	 * that need a refresh but have not marked their ancestors as Dirty. This tells us that during
	 * change detection we should still descend to find those children to refresh, even if the parents
	 * are not \`Dirty\`/\`CheckAlways\`.
	 */
	[TRANSPLANTED_VIEWS_TO_REFRESH]: number;
	/** Unique ID of the view. Used for \`__ngContext__\` lookups in the \`LView\` registry. */
	[ID]: number;
	/**
	 * Optional injector assigned to embedded views that takes
	 * precedence over the element and module injectors.
	 */
	readonly [EMBEDDED_VIEW_INJECTOR]: Injector | null;
}

/**
 * Human readable version of the \`LView\`.
 *
 * \`LView\` is a data structure used internally to keep track of views. The \`LView\` is designed for
 * efficiency and so at times it is difficult to read or write tests which assert on its values. For
 * this reason when \`ngDevMode\` is true we patch a \`LView.debug\` property which points to
 * \`LViewDebug\` for easier debugging and test writing. It is the intent of \`LViewDebug\` to be used
 * in tests.
 */
declare interface LViewDebug<T = unknown> {
	/**
	 * Flags associated with the \`LView\` unpacked into a more readable state.
	 *
	 * See \`LViewFlags\` for the flag meanings.
	 */
	readonly flags: {
		initPhaseState: number;
		creationMode: boolean;
		firstViewPass: boolean;
		checkAlways: boolean;
		dirty: boolean;
		attached: boolean;
		destroyed: boolean;
		isRoot: boolean;
		indexWithinInitPhase: number;
	};
	/**
	 * Associated TView
	 */
	readonly tView: TView;
	/**
	 * Parent view (or container)
	 */
	readonly parent: LViewDebug | LContainerDebug | null;
	/**
	 * Next sibling to the \`LView\`.
	 */
	readonly next: LViewDebug | LContainerDebug | null;
	/**
	 * The context used for evaluation of the \`LView\`
	 *
	 * (Usually the component)
	 */
	readonly context: T;
	/**
	 * Hierarchical tree of nodes.
	 */
	readonly nodes: DebugNode_2[];
	/**
	 * Template structure (no instance data).
	 * (Shows how TNodes are connected)
	 */
	readonly template: string;
	/**
	 * HTML representation of the \`LView\`.
	 *
	 * This is only approximate to actual HTML as child \`LView\`s are removed.
	 */
	readonly html: string;
	/**
	 * The host element to which this \`LView\` is attached.
	 */
	readonly hostHTML: string | null;
	/**
	 * Child \`LView\`s
	 */
	readonly childViews: Array<LViewDebug | LContainerDebug>;
	/**
	 * Sub range of \`LView\` containing decls (DOM elements).
	 */
	readonly decls: LViewDebugRange;
	/**
	 * Sub range of \`LView\` containing vars (bindings).
	 */
	readonly vars: LViewDebugRange;
	/**
	 * Sub range of \`LView\` containing expando (used by DI).
	 */
	readonly expando: LViewDebugRange;
}

/**
 * \`LView\` is subdivided to ranges where the actual data is stored. Some of these ranges such as
 * \`decls\` and \`vars\` are known at compile time. Other such as \`i18n\` and \`expando\` are runtime only
 * concepts.
 */
declare interface LViewDebugRange {
	/**
	 * The starting index in \`LView\` where the range begins. (Inclusive)
	 */
	start: number;
	/**
	 * The ending index in \`LView\` where the range ends. (Exclusive)
	 */
	end: number;
	/**
	 * The length of the range
	 */
	length: number;
	/**
	 * The merged content of the range. \`t\` contains data from \`TView.data\` and \`l\` contains \`LView\`
	 * data at an index.
	 */
	content: LViewDebugRangeContent[];
}

/**
 * For convenience the static and instance portions of \`TView\` and \`LView\` are merged into a single
 * object in \`LViewRange\`.
 */
declare interface LViewDebugRangeContent {
	/**
	 * Index into original \`LView\` or \`TView.data\`.
	 */
	index: number;
	/**
	 * Value from the \`TView.data[index]\` location.
	 */
	t: any;
	/**
	 * Value from the \`LView[index]\` location.
	 */
	l: any;
}

/** Flags associated with an LView (saved in LView[FLAGS]) */
declare const enum LViewFlags {
	/** The state of the init phase on the first 2 bits */
	InitPhaseStateIncrementer = 1,
	InitPhaseStateMask = 3,
	/**
	 * Whether or not the view is in creationMode.
	 *
	 * This must be stored in the view rather than using \`data\` as a marker so that
	 * we can properly support embedded views. Otherwise, when exiting a child view
	 * back into the parent view, \`data\` will be defined and \`creationMode\` will be
	 * improperly reported as false.
	 */
	CreationMode = 4,
	/**
	 * Whether or not this LView instance is on its first processing pass.
	 *
	 * An LView instance is considered to be on its "first pass" until it
	 * has completed one creation mode run and one update mode run. At this
	 * time, the flag is turned off.
	 */
	FirstLViewPass = 8,
	/** Whether this view has default change detection strategy (checks always) or onPush */
	CheckAlways = 16,
	/** Whether or not this view is currently dirty (needing check) */
	Dirty = 32,
	/** Whether or not this view is currently attached to change detection tree. */
	Attached = 64,
	/** Whether or not this view is destroyed. */
	Destroyed = 128,
	/** Whether or not this view is the root view */
	IsRoot = 256,
	/**
	 * Whether this moved LView was needs to be refreshed at the insertion location because the
	 * declaration was dirty.
	 */
	RefreshTransplantedView = 512,
	/** Indicates that the view **or any of its ancestors** have an embedded view injector. */
	HasEmbeddedViewInjector = 1024,
	/**
	 * Index of the current init phase on last 21 bits
	 */
	IndexWithinInitPhaseIncrementer = 2048,
	IndexWithinInitPhaseShift = 11,
	IndexWithinInitPhaseReset = 2047
}

/**
 * Use this enum at bootstrap as an option of \`bootstrapModule\` to define the strategy
 * that the compiler should use in case of missing translations:
 * - Error: throw if you have missing translations.
 * - Warning (default): show a warning in the console and/or shell.
 * - Ignore: do nothing.
 *
 * See the [i18n guide](guide/i18n-common-merge#report-missing-translations) for more information.
 *
 * @usageNotes
 * ### Example
 * \`\`\`typescript
 * import { MissingTranslationStrategy } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   missingTranslation: MissingTranslationStrategy.Error
 * });
 * \`\`\`
 *
 * @publicApi
 */
export declare enum MissingTranslationStrategy {
	Error = 0,
	Warning = 1,
	Ignore = 2
}

/**
 * Combination of NgModuleFactory and ComponentFactories.
 *
 * @publicApi
 *
 * @deprecated
 * Ivy JIT mode doesn't require accessing this symbol.
 * See [JIT API changes due to ViewEngine deprecation](guide/deprecations#jit-api-changes) for
 * additional context.
 */
export declare class ModuleWithComponentFactories<T> {
	ngModuleFactory: NgModuleFactory<T>;
	componentFactories: ComponentFactory<any>[];
	constructor(ngModuleFactory: NgModuleFactory<T>, componentFactories: ComponentFactory<any>[]);
}

/**
 * A wrapper around an NgModule that associates it with [providers](guide/glossary#provider
 * "Definition"). Usage without a generic type is deprecated.
 *
 * @see [Deprecations](guide/deprecations#modulewithproviders-type-without-a-generic)
 *
 * @publicApi
 */
export declare interface ModuleWithProviders<T> {
	ngModule: Type<T>;
	providers?: Provider[];
}

declare const MOVED_VIEWS = 9;

declare const NATIVE = 7;

declare const NEXT = 4;

/**
 * A type describing supported iterable types.
 *
 * @publicApi
 */
export declare type NgIterable<T> = Array<T> | Iterable<T>;

/**
 * Type of the NgModule metadata.
 *
 * @publicApi
 */
export declare interface NgModule {
	/**
	 * The set of injectable objects that are available in the injector
	 * of this module.
	 *
	 * @see [Dependency Injection guide](guide/dependency-injection)
	 * @see [NgModule guide](guide/providers)
	 *
	 * @usageNotes
	 *
	 * Dependencies whose providers are listed here become available for injection
	 * into any component, directive, pipe or service that is a child of this injector.
	 * The NgModule used for bootstrapping uses the root injector, and can provide dependencies
	 * to any part of the app.
	 *
	 * A lazy-loaded module has its own injector, typically a child of the app root injector.
	 * Lazy-loaded services are scoped to the lazy-loaded module's injector.
	 * If a lazy-loaded module also provides the \`UserService\`, any component created
	 * within that module's context (such as by router navigation) gets the local instance
	 * of the service, not the instance in the root injector.
	 * Components in external modules continue to receive the instance provided by their injectors.
	 *
	 * ### Example
	 *
	 * The following example defines a class that is injected in
	 * the HelloWorld NgModule:
	 *
	 * \`\`\`
	 * class Greeter {
	 *    greet(name:string) {
	 *      return 'Hello ' + name + '!';
	 *    }
	 * }
	 *
	 * @NgModule({
	 *   providers: [
	 *     Greeter
	 *   ]
	 * })
	 * class HelloWorld {
	 *   greeter:Greeter;
	 *
	 *   constructor(greeter:Greeter) {
	 *     this.greeter = greeter;
	 *   }
	 * }
	 * \`\`\`
	 */
	providers?: Provider[];
	/**
	 * The set of components, directives, and pipes ([declarables](guide/glossary#declarable))
	 * that belong to this module.
	 *
	 * @usageNotes
	 *
	 * The set of selectors that are available to a template include those declared here, and
	 * those that are exported from imported NgModules.
	 *
	 * Declarables must belong to exactly one module.
	 * The compiler emits an error if you try to declare the same class in more than one module.
	 * Be careful not to declare a class that is imported from another module.
	 *
	 * ### Example
	 *
	 * The following example allows the CommonModule to use the \`NgFor\`
	 * directive.
	 *
	 * \`\`\`javascript
	 * @NgModule({
	 *   declarations: [NgFor]
	 * })
	 * class CommonModule {
	 * }
	 * \`\`\`
	 */
	declarations?: Array<Type<any> | any[]>;
	/**
	 * The set of NgModules whose exported [declarables](guide/glossary#declarable)
	 * are available to templates in this module.
	 *
	 * @usageNotes
	 *
	 * A template can use exported declarables from any
	 * imported module, including those from modules that are imported indirectly
	 * and re-exported.
	 * For example, \`ModuleA\` imports \`ModuleB\`, and also exports
	 * it, which makes the declarables from \`ModuleB\` available
	 * wherever \`ModuleA\` is imported.
	 *
	 * ### Example
	 *
	 * The following example allows MainModule to use anything exported by
	 * \`CommonModule\`:
	 *
	 * \`\`\`javascript
	 * @NgModule({
	 *   imports: [CommonModule]
	 * })
	 * class MainModule {
	 * }
	 * \`\`\`
	 *
	 */
	imports?: Array<Type<any> | ModuleWithProviders<{}> | any[]>;
	/**
	 * The set of components, directives, and pipes declared in this
	 * NgModule that can be used in the template of any component that is part of an
	 * NgModule that imports this NgModule. Exported declarations are the module's public API.
	 *
	 * A declarable belongs to one and only one NgModule.
	 * A module can list another module among its exports, in which case all of that module's
	 * public declaration are exported.
	 *
	 * @usageNotes
	 *
	 * Declarations are private by default.
	 * If this ModuleA does not export UserComponent, then only the components within this
	 * ModuleA can use UserComponent.
	 *
	 * ModuleA can import ModuleB and also export it, making exports from ModuleB
	 * available to an NgModule that imports ModuleA.
	 *
	 * ### Example
	 *
	 * The following example exports the \`NgFor\` directive from CommonModule.
	 *
	 * \`\`\`javascript
	 * @NgModule({
	 *   exports: [NgFor]
	 * })
	 * class CommonModule {
	 * }
	 * \`\`\`
	 */
	exports?: Array<Type<any> | any[]>;
	/**
	 * The set of components to compile when this NgModule is defined,
	 * so that they can be dynamically loaded into the view.
	 *
	 * For each component listed here, Angular creates a \`ComponentFactory\`
	 * and stores it in the \`ComponentFactoryResolver\`.
	 *
	 * Angular automatically adds components in the module's bootstrap
	 * and route definitions into the \`entryComponents\` list. Use this
	 * option to add components that are bootstrapped
	 * using one of the imperative techniques, such as \`ViewContainerRef.createComponent()\`.
	 *
	 * @see [Entry Components](guide/entry-components)
	 * @deprecated
	 * Since 9.0.0. With Ivy, this property is no longer necessary.
	 * (You may need to keep these if building a library that will be consumed by a View Engine
	 * application.)
	 */
	entryComponents?: Array<Type<any> | any[]>;
	/**
	 * The set of components that are bootstrapped when
	 * this module is bootstrapped. The components listed here
	 * are automatically added to \`entryComponents\`.
	 */
	bootstrap?: Array<Type<any> | any[]>;
	/**
	 * The set of schemas that declare elements to be allowed in the NgModule.
	 * Elements and properties that are neither Angular components nor directives
	 * must be declared in a schema.
	 *
	 * Allowed value are \`NO_ERRORS_SCHEMA\` and \`CUSTOM_ELEMENTS_SCHEMA\`.
	 *
	 * @security When using one of \`NO_ERRORS_SCHEMA\` or \`CUSTOM_ELEMENTS_SCHEMA\`
	 * you must ensure that allowed elements and properties securely escape inputs.
	 */
	schemas?: Array<SchemaMetadata | any[]>;
	/**
	 * A name or path that uniquely identifies this NgModule in \`getNgModuleById\`.
	 * If left \`undefined\`, the NgModule is not registered with \`getNgModuleById\`.
	 */
	id?: string;
	/**
	 * When present, this module is ignored by the AOT compiler.
	 * It remains in distributed code, and the JIT compiler attempts to compile it
	 * at run time, in the browser.
	 * To ensure the correct behavior, the app must import \`@angular/compiler\`.
	 */
	jit?: true;
}

/**
 * @Annotation
 * @publicApi
 */
export declare const NgModule: NgModuleDecorator;

/**
 * Type of the NgModule decorator / constructor function.
 *
 * @publicApi
 */
export declare interface NgModuleDecorator {
	/**
	 * Decorator that marks a class as an NgModule and supplies configuration metadata.
	 */
	(obj?: NgModule): TypeDecorator;
	new(obj?: NgModule): NgModule;
}

/**
 * @publicApi
 *
 * @deprecated
 * This class was mostly used as a part of ViewEngine-based JIT API and is no longer needed in Ivy
 * JIT mode. See [JIT API changes due to ViewEngine deprecation](guide/deprecations#jit-api-changes)
 * for additional context. Angular provides APIs that accept NgModule classes directly (such as
 * [PlatformRef.bootstrapModule](api/core/PlatformRef#bootstrapModule) and
 * [createNgModule](api/core/createNgModule)), consider switching to those APIs instead of
 * using factory-based ones.
 */
export declare abstract class NgModuleFactory<T> {
	abstract get moduleType(): Type<T>;
	abstract create(parentInjector: Injector | null): NgModuleRef<T>;
}

/**
 * Represents an instance of an \`NgModule\` created by an \`NgModuleFactory\`.
 * Provides access to the \`NgModule\` instance and related objects.
 *
 * @publicApi
 */
export declare abstract class NgModuleRef<T> {
	/**
	 * The injector that contains all of the providers of the \`NgModule\`.
	 */
	abstract get injector(): EnvironmentInjector;
	/**
	 * The resolver that can retrieve component factories in a context of this module.
	 *
	 * Note: since v13, dynamic component creation via
	 * [\`ViewContainerRef.createComponent\`](api/core/ViewContainerRef#createComponent)
	 * does **not** require resolving component factory: component class can be used directly.
	 *
	 * @deprecated Angular no longer requires Component factories. Please use other APIs where
	 *     Component class can be used directly.
	 */
	abstract get componentFactoryResolver(): ComponentFactoryResolver;
	/**
	 * The \`NgModule\` instance.
	 */
	abstract get instance(): T;
	/**
	 * Destroys the module instance and all of the data structures associated with it.
	 */
	abstract destroy(): void;
	/**
	 * Registers a callback to be executed when the module is destroyed.
	 */
	abstract onDestroy(callback: () => void): void;
}

/**
 * A token for third-party components that can register themselves with NgProbe.
 *
 * @publicApi
 */
export declare class NgProbeToken {
	name: string;
	token: any;
	constructor(name: string, token: any);
}

/**
 * An injectable service for executing work inside or outside of the Angular zone.
 *
 * The most common use of this service is to optimize performance when starting a work consisting of
 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
 * can reenter the Angular zone via {@link #run}.
 *
 * <!-- TODO: add/fix links to:
 *   - docs explaining zones and the use of zones in Angular and change-detection
 *   - link to runOutsideAngular/run (throughout this file!)
 *   -->
 *
 * @usageNotes
 * ### Example
 *
 * \`\`\`
 * import {Component, NgZone} from '@angular/core';
 * import {NgIf} from '@angular/common';
 *
 * @Component({
 *   selector: 'ng-zone-demo',
 *   template: \`
 *     <h2>Demo: NgZone</h2>
 *
 *     <p>Progress: {{progress}}%</p>
 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
 *
 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
 *   \`,
 * })
 * export class NgZoneDemo {
 *   progress: number = 0;
 *   label: string;
 *
 *   constructor(private _ngZone: NgZone) {}
 *
 *   // Loop inside the Angular zone
 *   // so the UI DOES refresh after each setTimeout cycle
 *   processWithinAngularZone() {
 *     this.label = 'inside';
 *     this.progress = 0;
 *     this._increaseProgress(() => console.log('Inside Done!'));
 *   }
 *
 *   // Loop outside of the Angular zone
 *   // so the UI DOES NOT refresh after each setTimeout cycle
 *   processOutsideOfAngularZone() {
 *     this.label = 'outside';
 *     this.progress = 0;
 *     this._ngZone.runOutsideAngular(() => {
 *       this._increaseProgress(() => {
 *         // reenter the Angular zone and display done
 *         this._ngZone.run(() => { console.log('Outside Done!'); });
 *       });
 *     });
 *   }
 *
 *   _increaseProgress(doneCallback: () => void) {
 *     this.progress += 1;
 *     console.log(\`Current progress: \${this.progress}%\`);
 *
 *     if (this.progress < 100) {
 *       window.setTimeout(() => this._increaseProgress(doneCallback), 10);
 *     } else {
 *       doneCallback();
 *     }
 *   }
 * }
 * \`\`\`
 *
 * @publicApi
 */
export declare class NgZone {
	readonly hasPendingMacrotasks: boolean;
	readonly hasPendingMicrotasks: boolean;
	/**
	 * Whether there are no outstanding microtasks or macrotasks.
	 */
	readonly isStable: boolean;
	/**
	 * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
	 */
	readonly onUnstable: EventEmitter<any>;
	/**
	 * Notifies when there is no more microtasks enqueued in the current VM Turn.
	 * This is a hint for Angular to do change detection, which may enqueue more microtasks.
	 * For this reason this event can fire multiple times per VM Turn.
	 */
	readonly onMicrotaskEmpty: EventEmitter<any>;
	/**
	 * Notifies when the last \`onMicrotaskEmpty\` has run and there are no more microtasks, which
	 * implies we are about to relinquish VM turn.
	 * This event gets called just once.
	 */
	readonly onStable: EventEmitter<any>;
	/**
	 * Notifies that an error has been delivered.
	 */
	readonly onError: EventEmitter<any>;
	constructor({ enableLongStackTrace, shouldCoalesceEventChangeDetection, shouldCoalesceRunChangeDetection }: {
		enableLongStackTrace?: boolean | undefined;
		shouldCoalesceEventChangeDetection?: boolean | undefined;
		shouldCoalesceRunChangeDetection?: boolean | undefined;
	});
	static isInAngularZone(): boolean;
	static assertInAngularZone(): void;
	static assertNotInAngularZone(): void;
	/**
	 * Executes the \`fn\` function synchronously within the Angular zone and returns value returned by
	 * the function.
	 *
	 * Running functions via \`run\` allows you to reenter Angular zone from a task that was executed
	 * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
	 *
	 * Any future tasks or microtasks scheduled from within this function will continue executing from
	 * within the Angular zone.
	 *
	 * If a synchronous error happens it will be rethrown and not reported via \`onError\`.
	 */
	run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
	/**
	 * Executes the \`fn\` function synchronously within the Angular zone as a task and returns value
	 * returned by the function.
	 *
	 * Running functions via \`run\` allows you to reenter Angular zone from a task that was executed
	 * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
	 *
	 * Any future tasks or microtasks scheduled from within this function will continue executing from
	 * within the Angular zone.
	 *
	 * If a synchronous error happens it will be rethrown and not reported via \`onError\`.
	 */
	runTask<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[], name?: string): T;
	/**
	 * Same as \`run\`, except that synchronous errors are caught and forwarded via \`onError\` and not
	 * rethrown.
	 */
	runGuarded<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
	/**
	 * Executes the \`fn\` function synchronously in Angular's parent zone and returns value returned by
	 * the function.
	 *
	 * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
	 * work that
	 * doesn't trigger Angular change-detection or is subject to Angular's error handling.
	 *
	 * Any future tasks or microtasks scheduled from within this function will continue executing from
	 * outside of the Angular zone.
	 *
	 * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
	 */
	runOutsideAngular<T>(fn: (...args: any[]) => T): T;
}

/**
 * Defines a schema that allows any property on any element.
 *
 * This schema allows you to ignore the errors related to any unknown elements or properties in a
 * template. The usage of this schema is generally discouraged because it prevents useful validation
 * and may hide real errors in your template. Consider using the \`CUSTOM_ELEMENTS_SCHEMA\` instead.
 *
 * @publicApi
 */
export declare const NO_ERRORS_SCHEMA: SchemaMetadata;

declare interface NodeInjectorDebug {
	/**
	 * Instance bloom. Does the current injector have a provider with a given bloom mask.
	 */
	bloom: string;
	/**
	 * Cumulative bloom. Do any of the above injectors have a provider with a given bloom mask.
	 */
	cumulativeBloom: string;
	/**
	 * A list of providers associated with this injector.
	 */
	providers: (Type<unknown> | ɵDirectiveDef<unknown> | ɵComponentDef<unknown>)[];
	/**
	 * A list of providers associated with this injector visible to the view of the component only.
	 */
	viewProviders: Type<unknown>[];
	/**
	 * Location of the parent \`TNode\`.
	 */
	parentInjectorIndex: number;
}

/**
 * @description
 * A lifecycle hook that is called when any data-bound property of a directive changes.
 * Define an \`ngOnChanges()\` method to handle the changes.
 *
 * @see \`DoCheck\`
 * @see \`OnInit\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface to
 * define an on-changes handler for an input property.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnChanges'}
 *
 * @publicApi
 */
export declare interface OnChanges {
	/**
	 * A callback method that is invoked immediately after the
	 * default change detector has checked data-bound properties
	 * if at least one has changed, and before the view and content
	 * children are checked.
	 * @param changes The changed properties.
	 */
	ngOnChanges(changes: SimpleChanges): void;
}

/**
 * A lifecycle hook that is called when a directive, pipe, or service is destroyed.
 * Use for any custom cleanup that needs to occur when the
 * instance is destroyed.
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface
 * to define its own custom clean-up method.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnDestroy'}
 *
 * @publicApi
 */
export declare interface OnDestroy {
	/**
	 * A callback method that performs custom clean-up, invoked immediately
	 * before a directive, pipe, or service instance is destroyed.
	 */
	ngOnDestroy(): void;
}

/**
 * @description
 * A lifecycle hook that is called after Angular has initialized
 * all data-bound properties of a directive.
 * Define an \`ngOnInit()\` method to handle any additional initialization tasks.
 *
 * @see \`AfterContentInit\`
 * @see [Lifecycle hooks guide](guide/lifecycle-hooks)
 *
 * @usageNotes
 * The following snippet shows how a component can implement this interface to
 * define its own initialization method.
 *
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnInit'}
 *
 * @publicApi
 */
export declare interface OnInit {
	/**
	 * A callback method that is invoked immediately after the
	 * default change detector has checked the directive's
	 * data-bound properties for the first time,
	 * and before any of the view or content children have been checked.
	 * It is invoked only once when the directive is instantiated.
	 */
	ngOnInit(): void;
}

declare type OpaqueValue = unknown;

declare interface OpaqueViewState {
	'__brand__': 'Brand for OpaqueViewState that nothing will match';
}

/**
 * Type of the Optional metadata.
 *
 * @publicApi
 */
export declare interface Optional {
}

/**
 * Optional decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Optional: OptionalDecorator;

/**
 * Type of the Optional decorator / constructor function.
 *
 * @publicApi
 */
export declare interface OptionalDecorator {
	/**
	 * Parameter decorator to be used on constructor parameters,
	 * which marks the parameter as being an optional dependency.
	 * The DI framework provides \`null\` if the dependency is not found.
	 *
	 * Can be used together with other parameter decorators
	 * that modify how dependency injection operates.
	 *
	 * @usageNotes
	 *
	 * The following code allows the possibility of a \`null\` result:
	 *
	 * <code-example path="core/di/ts/metadata_spec.ts" region="Optional">
	 * </code-example>
	 *
	 * @see ["Dependency Injection Guide"](guide/dependency-injection).
	 */
	(): any;
	new(): Optional;
}

/**
 * Type of the Output metadata.
 *
 * @publicApi
 */
export declare interface Output {
	/**
	 * The name of the DOM property to which the output property is bound.
	 */
	bindingPropertyName?: string;
}

/**
 * @Annotation
 * @publicApi
 */
export declare const Output: OutputDecorator;

/**
 * Type of the Output decorator / constructor function.
 *
 * @publicApi
 */
export declare interface OutputDecorator {
	/**
	 * Decorator that marks a class field as an output property and supplies configuration metadata.
	 * The DOM property bound to the output property is automatically updated during change detection.
	 *
	 * @usageNotes
	 *
	 * You can supply an optional name to use in templates when the
	 * component is instantiated, that maps to the
	 * name of the bound property. By default, the original
	 * name of the bound property is used for output binding.
	 *
	 * See \`Input\` decorator for an example of providing a binding name.
	 *
	 * @see [Input and Output properties](guide/inputs-outputs)
	 *
	 */
	(bindingPropertyName?: string): any;
	new(bindingPropertyName?: string): any;
}

/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates the root directory of
 * the application
 * @publicApi
 */
export declare const PACKAGE_ROOT_URL: InjectionToken<string>;

declare const PARENT = 3;

/**
 * Type of the Pipe metadata.
 *
 * @publicApi
 */
export declare interface Pipe {
	/**
	 * The pipe name to use in template bindings.
	 * Typically uses [lowerCamelCase](guide/glossary#case-types)
	 * because the name cannot contain hyphens.
	 */
	name: string;
	/**
	 * When true, the pipe is pure, meaning that the
	 * \`transform()\` method is invoked only when its input arguments
	 * change. Pipes are pure by default.
	 *
	 * If the pipe has internal state (that is, the result
	 * depends on state other than its arguments), set \`pure\` to false.
	 * In this case, the pipe is invoked on each change-detection cycle,
	 * even if the arguments have not changed.
	 */
	pure?: boolean;
	/**
	 * Angular pipes marked as \`standalone\` do not need to be declared in an NgModule. Such
	 * pipes don't depend on any "intermediate context" of an NgModule (ex. configured providers).
	 *
	 * More information about standalone components, directives, and pipes can be found in [this
	 * guide](guide/standalone-components).
	 */
	standalone?: boolean;
}

/**
 * @Annotation
 * @publicApi
 */
export declare const Pipe: PipeDecorator;

/**
 * Type of the Pipe decorator / constructor function.
 *
 * @publicApi
 */
export declare interface PipeDecorator {
	/**
	 *
	 * Decorator that marks a class as pipe and supplies configuration metadata.
	 *
	 * A pipe class must implement the \`PipeTransform\` interface.
	 * For example, if the name is "myPipe", use a template binding expression
	 * such as the following:
	 *
	 * \`\`\`
	 * {{ exp | myPipe }}
	 * \`\`\`
	 *
	 * The result of the expression is passed to the pipe's \`transform()\` method.
	 *
	 * A pipe must belong to an NgModule in order for it to be available
	 * to a template. To make it a member of an NgModule,
	 * list it in the \`declarations\` field of the \`NgModule\` metadata.
	 *
	 * @see [Style Guide: Pipe Names](guide/styleguide#02-09)
	 *
	 */
	(obj: Pipe): TypeDecorator;
	/**
	 * See the \`Pipe\` decorator.
	 */
	new(obj: Pipe): Pipe;
}

declare type PipeDefList = ɵPipeDef<any>[];

/**
 * Type used for PipeDefs on component definition.
 *
 * The function is necessary to be able to support forward declarations.
 */
declare type PipeDefListOrFactory = (() => PipeDefList) | PipeDefList;


/**
 * An interface that is implemented by pipes in order to perform a transformation.
 * Angular invokes the \`transform\` method with the value of a binding
 * as the first argument, and any parameters as the second argument in list form.
 *
 * @usageNotes
 *
 * In the following example, \`TruncatePipe\` returns the shortened value with an added ellipses.
 *
 * <code-example path="core/ts/pipes/simple_truncate.ts" header="simple_truncate.ts"></code-example>
 *
 * Invoking \`{{ 'It was the best of times' | truncate }}\` in a template will produce \`It was...\`.
 *
 * In the following example, \`TruncatePipe\` takes parameters that sets the truncated length and the
 * string to append with.
 *
 * <code-example path="core/ts/pipes/truncate.ts" header="truncate.ts"></code-example>
 *
 * Invoking \`{{ 'It was the best of times' | truncate:4:'....' }}\` in a template will produce \`It
 * was the best....\`.
 *
 * @publicApi
 */
export declare interface PipeTransform {
	transform(value: any, ...args: any[]): any;
}

/**
 * A subclass of \`Type\` which has a static \`ɵpipe\`:\`PipeDef\` field making it
 * consumable for rendering.
 */
declare interface PipeType<T> extends Type<T> {
	ɵpipe: unknown;
}

/**
 * A token that indicates an opaque platform ID.
 * @publicApi
 */
export declare const PLATFORM_ID: InjectionToken<Object>;

/**
 * A function that is executed when a platform is initialized.
 * @publicApi
 */
export declare const PLATFORM_INITIALIZER: InjectionToken<(() => void)[]>;

/**
 * This platform has to be included in any other platform
 *
 * @publicApi
 */
export declare const platformCore: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * The Angular platform is the entry point for Angular on a web page.
 * Each page has exactly one platform. Services (such as reflection) which are common
 * to every Angular application running on the page are bound in its scope.
 * A page's platform is initialized implicitly when a platform is created using a platform
 * factory such as \`PlatformBrowser\`, or explicitly by calling the \`createPlatform()\` function.
 *
 * @publicApi
 */
export declare class PlatformRef {
	private _injector;
	private _modules;
	private _destroyListeners;
	private _destroyed;
	/**
	 * Creates an instance of an \`@NgModule\` for the given platform.
	 *
	 * @deprecated Passing NgModule factories as the \`PlatformRef.bootstrapModuleFactory\` function
	 *     argument is deprecated. Use the \`PlatformRef.bootstrapModule\` API instead.
	 */
	bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>, options?: BootstrapOptions): Promise<NgModuleRef<M>>;
	/**
	 * Creates an instance of an \`@NgModule\` for a given platform.
	 *
	 * @usageNotes
	 * ### Simple Example
	 *
	 * \`\`\`typescript
	 * @NgModule({
	 *   imports: [BrowserModule]
	 * })
	 * class MyModule {}
	 *
	 * let moduleRef = platformBrowser().bootstrapModule(MyModule);
	 * \`\`\`
	 *
	 */
	bootstrapModule<M>(moduleType: Type<M>, compilerOptions?: (CompilerOptions & BootstrapOptions) | Array<CompilerOptions & BootstrapOptions>): Promise<NgModuleRef<M>>;
	private _moduleDoBootstrap;
	/**
	 * Registers a listener to be called when the platform is destroyed.
	 */
	onDestroy(callback: () => void): void;
	/**
	 * Retrieves the platform {@link Injector}, which is the parent injector for
	 * every Angular application on the page and provides singleton providers.
	 */
	get injector(): Injector;
	/**
	 * Destroys the current Angular platform and all Angular applications on the page.
	 * Destroys all modules and listeners registered with the platform.
	 */
	destroy(): void;
	/**
	 * Indicates whether this instance was destroyed.
	 */
	get destroyed(): boolean;
	static ɵfac: i0.ɵɵFactoryDeclaration<PlatformRef, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<PlatformRef>;
}

declare interface PlatformReflectionCapabilities {
	factory(type: Type<any>): Function;
	hasLifecycleHook(type: any, lcProperty: string): boolean;
	/**
	 * Return a list of annotations/types for constructor parameters
	 */
	parameters(type: Type<any>): any[][];
	/**
	 * Return a list of annotations declared on the class
	 */
	annotations(type: Type<any>): any[];
	/**
	 * Return a object literal which describes the annotations on Class fields/properties.
	 */
	propMetadata(typeOrFunc: Type<any>): {
		[key: string]: any[];
	};
}

/**
 * A boolean-valued function over a value, possibly including context information
 * regarding that value's position in an array.
 *
 * @publicApi
 */
export declare interface Predicate<T> {
	(value: T): boolean;
}

declare const PREORDER_HOOK_FLAGS = 18;

/** More flags associated with an LView (saved in LView[PREORDER_HOOK_FLAGS]) */
declare const enum PreOrderHookFlags {
	/**
	 The index of the next pre-order hook to be called in the hooks array, on the first 16
	 bits
	 */
	IndexOfTheNextPreOrderHookMaskMask = 65535,
	/**
	 * The number of init hooks that have already been called, on the last 16 bits
	 */
	NumberOfInitHooksCalledIncrementer = 65536,
	NumberOfInitHooksCalledShift = 16,
	NumberOfInitHooksCalledMask = 4294901760
}

/**
 * Describes a function that is used to process provider lists (such as provider
 * overrides).
 */
declare type ProcessProvidersFunction = (providers: Provider[]) => Provider[];

/**
 * List of slots for a projection. A slot can be either based on a parsed CSS selector
 * which will be used to determine nodes which are projected into that slot.
 *
 * When set to "*", the slot is reserved and can be used for multi-slot projection
 * using {@link ViewContainerRef#createComponent}. The last slot that specifies the
 * wildcard selector will retrieve all projectable nodes which do not match any selector.
 */
declare type ProjectionSlots = (ɵCssSelectorList | '*')[];

/**
 * This mapping is necessary so we can set input properties and output listeners
 * properly at runtime when property names are minified or aliased.
 *
 * Key: unminified / public input or output name
 * Value: array containing minified / internal name and related directive index
 *
 * The value must be an array to support inputs and outputs with the same name
 * on the same node.
 */
declare type PropertyAliases = {
	[key: string]: PropertyAliasValue;
};

/**
 * Store the runtime input or output names for all the directives.
 *
 * i+0: directive instance index
 * i+1: privateName
 *
 * e.g. [0, 'change-minified']
 */
declare type PropertyAliasValue = (number | string)[];

/**
 * Describes how the \`Injector\` should be configured.
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @see \`StaticProvider\`
 *
 * @publicApi
 */
export declare type Provider = TypeProvider | ValueProvider | ClassProvider | ConstructorProvider | ExistingProvider | FactoryProvider | any[];

/**
 * @description
 *
 * Token that can be used to retrieve an instance from an injector or through a query.
 *
 * @publicApi
 */
export declare type ProviderToken<T> = Type<T> | AbstractType<T> | InjectionToken<T>;

/**
 * Testability API.
 * \`declare\` keyword causes tsickle to generate externs, so these methods are
 * not renamed by Closure Compiler.
 * @publicApi
 */
declare interface PublicTestability {
	isStable(): boolean;
	whenStable(callback: Function, timeout?: number, updateCallback?: Function): void;
	findProviders(using: any, provider: string, exactMatch: boolean): any[];
}

declare const QUERIES = 19;

/**
 * Type of the Query metadata.
 *
 * @publicApi
 */
export declare interface Query {
	descendants: boolean;
	emitDistinctChangesOnly: boolean;
	first: boolean;
	read: any;
	isViewQuery: boolean;
	selector: any;
	static?: boolean;
}

/**
 * Base class for query metadata.
 *
 * @see \`ContentChildren\`.
 * @see \`ContentChild\`.
 * @see \`ViewChildren\`.
 * @see \`ViewChild\`.
 *
 * @publicApi
 */
export declare abstract class Query {
}

/**
 * A set of flags to be used with Queries.
 *
 * NOTE: Ensure changes here are reflected in \`packages/compiler/src/render3/view/compiler.ts\`
 */
declare const enum QueryFlags {
	/**
	 * No flags
	 */
	none = 0,
	/**
	 * Whether or not the query should descend into children.
	 */
	descendants = 1,
	/**
	 * The query can be computed statically and hence can be assigned eagerly.
	 *
	 * NOTE: Backwards compatibility with ViewEngine.
	 */
	isStatic = 2,
	/**
	 * If the \`QueryList\` should fire change event only if actual change to query was computed (vs old
	 * behavior where the change was fired whenever the query was recomputed, even if the recomputed
	 * query resulted in the same list.)
	 */
	emitDistinctChangesOnly = 4
}

/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {@link ViewChildren}, {@link ContentChildren}, and {@link QueryList}
 * provide.
 *
 * Implements an iterable interface, therefore it can be used in both ES6
 * javascript \`for (var i of items)\` loops as well as in Angular templates with
 * \`*ngFor="let i of myList"\`.
 *
 * Changes can be observed by subscribing to the changes \`Observable\`.
 *
 * NOTE: In the future this class will implement an \`Observable\` interface.
 *
 * @usageNotes
 * ### Example
 * \`\`\`typescript
 * @Component({...})
 * class Container {
 *   @ViewChildren(Item) items:QueryList<Item>;
 * }
 * \`\`\`
 *
 * @publicApi
 */
export declare class QueryList<T> implements Iterable<T> {
	private _emitDistinctChangesOnly;
	readonly dirty = true;
	private _results;
	private _changesDetected;
	private _changes;
	readonly length: number;
	readonly first: T;
	readonly last: T;
	/**
	 * Returns \`Observable\` of \`QueryList\` notifying the subscriber of changes.
	 */
	get changes(): Observable<any>;
	/**
	 * @param emitDistinctChangesOnly Whether \`QueryList.changes\` should fire only when actual change
	 *     has occurred. Or if it should fire when query is recomputed. (recomputing could resolve in
	 *     the same result)
	 */
	constructor(_emitDistinctChangesOnly?: boolean);
	/**
	 * Returns the QueryList entry at \`index\`.
	 */
	get(index: number): T | undefined;
	/**
	 * See
	 * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
	 */
	map<U>(fn: (item: T, index: number, array: T[]) => U): U[];
	/**
	 * See
	 * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
	 */
	filter(fn: (item: T, index: number, array: T[]) => boolean): T[];
	/**
	 * See
	 * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
	 */
	find(fn: (item: T, index: number, array: T[]) => boolean): T | undefined;
	/**
	 * See
	 * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	 */
	reduce<U>(fn: (prevValue: U, curValue: T, curIndex: number, array: T[]) => U, init: U): U;
	/**
	 * See
	 * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	 */
	forEach(fn: (item: T, index: number, array: T[]) => void): void;
	/**
	 * See
	 * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
	 */
	some(fn: (value: T, index: number, array: T[]) => boolean): boolean;
	/**
	 * Returns a copy of the internal results list as an Array.
	 */
	toArray(): T[];
	toString(): string;
	/**
	 * Updates the stored data of the query list, and resets the \`dirty\` flag to \`false\`, so that
	 * on change detection, it will not notify of changes to the queries, unless a new change
	 * occurs.
	 *
	 * @param resultsTree The query results to store
	 * @param identityAccessor Optional function for extracting stable object identity from a value
	 *    in the array. This function is executed for each element of the query result list while
	 *    comparing current query list with the new one (provided as a first argument of the \`reset\`
	 *    function) to detect if the lists are different. If the function is not provided, elements
	 *    are compared as is (without any pre-processing).
	 */
	reset(resultsTree: Array<T | any[]>, identityAccessor?: (value: T) => unknown): void;
	/**
	 * Triggers a change event by emitting on the \`changes\` {@link EventEmitter}.
	 */
	notifyOnChanges(): void;
	/** internal */
	setDirty(): void;
	/** internal */
	destroy(): void;
	[Symbol.iterator]: () => Iterator<T>;
}

declare interface R3DeclareComponentFacade extends R3DeclareDirectiveFacade {
	template: string;
	isInline?: boolean;
	styles?: string[];
	dependencies?: R3DeclareTemplateDependencyFacade[];
	components?: R3DeclareDirectiveDependencyFacade[];
	directives?: R3DeclareDirectiveDependencyFacade[];
	pipes?: {
		[pipeName: string]: OpaqueValue | (() => OpaqueValue);
	};
	viewProviders?: OpaqueValue;
	animations?: OpaqueValue;
	changeDetection?: ChangeDetectionStrategy_2;
	encapsulation?: ViewEncapsulation_2;
	interpolation?: [string, string];
	preserveWhitespaces?: boolean;
}

declare interface R3DeclareDependencyMetadataFacade {
	token: OpaqueValue;
	attribute?: boolean;
	host?: boolean;
	optional?: boolean;
	self?: boolean;
	skipSelf?: boolean;
}

declare interface R3DeclareDirectiveDependencyFacade {
	kind?: 'directive' | 'component';
	selector: string;
	type: OpaqueValue | (() => OpaqueValue);
	inputs?: string[];
	outputs?: string[];
	exportAs?: string[];
}

declare interface R3DeclareDirectiveFacade {
	selector?: string;
	type: Type_2;
	inputs?: {
		[classPropertyName: string]: string | [string, string];
	};
	outputs?: {
		[classPropertyName: string]: string;
	};
	host?: {
		attributes?: {
			[key: string]: OpaqueValue;
		};
		listeners?: {
			[key: string]: string;
		};
		properties?: {
			[key: string]: string;
		};
		classAttribute?: string;
		styleAttribute?: string;
	};
	queries?: R3DeclareQueryMetadataFacade[];
	viewQueries?: R3DeclareQueryMetadataFacade[];
	providers?: OpaqueValue;
	exportAs?: string[];
	usesInheritance?: boolean;
	usesOnChanges?: boolean;
	isStandalone?: boolean;
}

declare interface R3DeclareFactoryFacade {
	type: Type_2;
	deps: R3DeclareDependencyMetadataFacade[] | 'invalid' | null;
	target: ɵɵFactoryTarget;
}

declare interface R3DeclareInjectableFacade {
	type: Type_2;
	providedIn?: Type_2 | 'root' | 'platform' | 'any' | null;
	useClass?: OpaqueValue;
	useFactory?: OpaqueValue;
	useExisting?: OpaqueValue;
	useValue?: OpaqueValue;
	deps?: R3DeclareDependencyMetadataFacade[];
}

declare interface R3DeclareInjectorFacade {
	type: Type_2;
	imports?: OpaqueValue[];
	providers?: OpaqueValue[];
}

declare interface R3DeclareNgModuleDependencyFacade {
	kind: 'ngmodule';
	type: OpaqueValue | (() => OpaqueValue);
}

declare interface R3DeclareNgModuleFacade {
	type: Type_2;
	bootstrap?: OpaqueValue[] | (() => OpaqueValue[]);
	declarations?: OpaqueValue[] | (() => OpaqueValue[]);
	imports?: OpaqueValue[] | (() => OpaqueValue[]);
	exports?: OpaqueValue[] | (() => OpaqueValue[]);
	schemas?: OpaqueValue[];
	id?: OpaqueValue;
}

declare interface R3DeclarePipeDependencyFacade {
	kind?: 'pipe';
	name: string;
	type: OpaqueValue | (() => OpaqueValue);
}

declare interface R3DeclarePipeFacade {
	type: Type_2;
	name: string;
	pure?: boolean;
	isStandalone?: boolean;
}

declare interface R3DeclareQueryMetadataFacade {
	propertyName: string;
	first?: boolean;
	predicate: OpaqueValue | string[];
	descendants?: boolean;
	read?: OpaqueValue;
	static?: boolean;
	emitDistinctChangesOnly?: boolean;
}

declare type R3DeclareTemplateDependencyFacade = {
	kind: string;
} & (R3DeclareDirectiveDependencyFacade | R3DeclarePipeDependencyFacade | R3DeclareNgModuleDependencyFacade);

declare class R3Injector extends EnvironmentInjector {
	readonly parent: Injector;
	readonly source: string | null;
	readonly scopes: Set<InjectorScope>;
	/**
	 * Map of tokens to records which contain the instances of those tokens.
	 * - \`null\` value implies that we don't have the record. Used by tree-shakable injectors
	 * to prevent further searches.
	 */
	private records;
	/**
	 * Set of values instantiated by this injector which contain \`ngOnDestroy\` lifecycle hooks.
	 */
	private _ngOnDestroyHooks;
	private _onDestroyHooks;
	/**
	 * Flag indicating that this injector was previously destroyed.
	 */
	get destroyed(): boolean;
	private _destroyed;
	private injectorDefTypes;
	constructor(providers: Array<Provider | ImportedNgModuleProviders>, parent: Injector, source: string | null, scopes: Set<InjectorScope>);
	/**
	 * Destroy the injector and release references to every instance or provider associated with it.
	 *
	 * Also calls the \`OnDestroy\` lifecycle hooks of every instance that was created for which a
	 * hook was found.
	 */
	destroy(): void;
	onDestroy(callback: () => void): void;
	runInContext<ReturnT>(fn: () => ReturnT): ReturnT;
	get<T>(token: ProviderToken<T>, notFoundValue?: any, flags?: InjectFlags): T;
	toString(): string;
	private assertNotDestroyed;
	/**
	 * Process a \`SingleProvider\` and add it.
	 */
	private processProvider;
	private hydrate;
	private injectableDefInScope;
}

declare interface RComment extends RNode {
	textContent: string | null;
}

declare interface RCssStyleDeclaration {
	removeProperty(propertyName: string): string;
	setProperty(propertyName: string, value: string | null, priority?: string): void;
}

declare interface RDomTokenList {
	add(token: string): void;
	remove(token: string): void;
}

/**
 * Creates an object that allows to retrieve component metadata.
 *
 * @usageNotes
 *
 * The example below demonstrates how to use the function and how the fields
 * of the returned object map to the component metadata.
 *
 * \`\`\`typescript
 * @Component({
 *   standalone: true,
 *   selector: 'foo-component',
 *   template: \`
 *     <ng-content></ng-content>
 *     <ng-content select="content-selector-a"></ng-content>
 *   \`,
 * })
 * class FooComponent {
 *   @Input('inputName') inputPropName: string;
 *   @Output('outputName') outputPropName = new EventEmitter<void>();
 * }
 *
 * const mirror = reflectComponentType(FooComponent);
 * expect(mirror.type).toBe(FooComponent);
 * expect(mirror.selector).toBe('foo-component');
 * expect(mirror.isStandalone).toBe(true);
 * expect(mirror.inputs).toEqual([{propName: 'inputName', templateName: 'inputPropName'}]);
 * expect(mirror.outputs).toEqual([{propName: 'outputName', templateName: 'outputPropName'}]);
 * expect(mirror.ngContentSelectors).toEqual([
 *   '*',                 // first \`<ng-content>\` in a template, the selector defaults to \`*\`
 *   'content-selector-a' // second \`<ng-content>\` in a template
 * ]);
 * \`\`\`
 *
 * @param component Component class reference.
 * @returns An object that allows to retrieve component metadata.
 *
 * @publicApi
 */
export declare function reflectComponentType<C>(component: Type<C>): ComponentMirror<C> | null;

/**
 * \`Dependency\` is used by the framework to extend DI.
 * This is internal to Angular and should not be used directly.
 */
declare class ReflectiveDependency {
	key: ReflectiveKey;
	optional: boolean;
	visibility: Self | SkipSelf | null;
	constructor(key: ReflectiveKey, optional: boolean, visibility: Self | SkipSelf | null);
	static fromKey(key: ReflectiveKey): ReflectiveDependency;
}

/**
 * A ReflectiveDependency injection container used for instantiating objects and resolving
 * dependencies.
 *
 * An \`Injector\` is a replacement for a \`new\` operator, which can automatically resolve the
 * constructor dependencies.
 *
 * In typical use, application code asks for the dependencies in the constructor and they are
 * resolved by the \`Injector\`.
 *
 * @usageNotes
 * ### Example
 *
 * The following example creates an \`Injector\` configured to create \`Engine\` and \`Car\`.
 *
 * \`\`\`typescript
 * @Injectable()
 * class Engine {
 * }
 *
 * @Injectable()
 * class Car {
 *   constructor(public engine:Engine) {}
 * }
 *
 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
 * var car = injector.get(Car);
 * expect(car instanceof Car).toBe(true);
 * expect(car.engine instanceof Engine).toBe(true);
 * \`\`\`
 *
 * Notice, we don't use the \`new\` operator because we explicitly want to have the \`Injector\`
 * resolve all of the object's dependencies automatically.
 *
 * TODO: delete in v14.
 *
 * @deprecated from v5 - slow and brings in a lot of code, Use \`Injector.create\` instead.
 * @publicApi
 */
export declare abstract class ReflectiveInjector implements Injector {
	/**
	 * Turns an array of provider definitions into an array of resolved providers.
	 *
	 * A resolution is a process of flattening multiple nested arrays and converting individual
	 * providers into an array of \`ResolvedReflectiveProvider\`s.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
	 *
	 * expect(providers.length).toEqual(2);
	 *
	 * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
	 * expect(providers[0].key.displayName).toBe("Car");
	 * expect(providers[0].dependencies.length).toEqual(1);
	 * expect(providers[0].factory).toBeDefined();
	 *
	 * expect(providers[1].key.displayName).toBe("Engine");
	 * });
	 * \`\`\`
	 *
	 */
	static resolve(providers: Provider[]): ResolvedReflectiveProvider[];
	/**
	 * Resolves an array of providers and creates an injector from those providers.
	 *
	 * The passed-in providers can be an array of \`Type\`, \`Provider\`,
	 * or a recursive array of more providers.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	 * expect(injector.get(Car) instanceof Car).toBe(true);
	 * \`\`\`
	 */
	static resolveAndCreate(providers: Provider[], parent?: Injector): ReflectiveInjector;
	/**
	 * Creates an injector from previously resolved providers.
	 *
	 * This API is the recommended way to construct injectors in performance-sensitive parts.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var providers = ReflectiveInjector.resolve([Car, Engine]);
	 * var injector = ReflectiveInjector.fromResolvedProviders(providers);
	 * expect(injector.get(Car) instanceof Car).toBe(true);
	 * \`\`\`
	 */
	static fromResolvedProviders(providers: ResolvedReflectiveProvider[], parent?: Injector): ReflectiveInjector;
	/**
	 * Parent of this injector.
	 *
	 * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	 * -->
	 */
	abstract get parent(): Injector | null;
	/**
	 * Resolves an array of providers and creates a child injector from those providers.
	 *
	 * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	 * -->
	 *
	 * The passed-in providers can be an array of \`Type\`, \`Provider\`,
	 * or a recursive array of more providers.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * class ParentProvider {}
	 * class ChildProvider {}
	 *
	 * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
	 * var child = parent.resolveAndCreateChild([ChildProvider]);
	 *
	 * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	 * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	 * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	 * \`\`\`
	 */
	abstract resolveAndCreateChild(providers: Provider[]): ReflectiveInjector;
	/**
	 * Creates a child injector from previously resolved providers.
	 *
	 * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	 * -->
	 *
	 * This API is the recommended way to construct injectors in performance-sensitive parts.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * class ParentProvider {}
	 * class ChildProvider {}
	 *
	 * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
	 * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
	 *
	 * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
	 * var child = parent.createChildFromResolved(childProviders);
	 *
	 * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	 * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	 * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	 * \`\`\`
	 */
	abstract createChildFromResolved(providers: ResolvedReflectiveProvider[]): ReflectiveInjector;
	/**
	 * Resolves a provider and instantiates an object in the context of the injector.
	 *
	 * The created object does not get cached by the injector.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	 *
	 * var car = injector.resolveAndInstantiate(Car);
	 * expect(car.engine).toBe(injector.get(Engine));
	 * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
	 * \`\`\`
	 */
	abstract resolveAndInstantiate(provider: Provider): any;
	/**
	 * Instantiates an object using a resolved provider in the context of the injector.
	 *
	 * The created object does not get cached by the injector.
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	 * var carProvider = ReflectiveInjector.resolve([Car])[0];
	 * var car = injector.instantiateResolved(carProvider);
	 * expect(car.engine).toBe(injector.get(Engine));
	 * expect(car).not.toBe(injector.instantiateResolved(carProvider));
	 * \`\`\`
	 */
	abstract instantiateResolved(provider: ResolvedReflectiveProvider): any;
	abstract get(token: any, notFoundValue?: any): any;
}


/**
 * A unique object used for retrieving items from the {@link ReflectiveInjector}.
 *
 * Keys have:
 * - a system-wide unique \`id\`.
 * - a \`token\`.
 *
 * \`Key\` is used internally by {@link ReflectiveInjector} because its system-wide unique \`id\` allows
 * the
 * injector to store created objects in a more efficient way.
 *
 * \`Key\` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
 * resolving
 * providers.
 *
 * @deprecated No replacement
 * @publicApi
 */
export declare class ReflectiveKey {
	token: Object;
	id: number;
	readonly displayName: string;
	/**
	 * Private
	 */
	constructor(token: Object, id: number);
	/**
	 * Retrieves a \`Key\` for a token.
	 */
	static get(token: Object): ReflectiveKey;
	/**
	 * @returns the number of keys registered in the system.
	 */
	static get numberOfKeys(): number;
}

/**
 * Subset of API needed for writing attributes, properties, and setting up
 * listeners on Element.
 */
declare interface RElement extends RNode {
	style: RCssStyleDeclaration;
	classList: RDomTokenList;
	className: string;
	tagName: string;
	textContent: string | null;
	setAttribute(name: string, value: string | TrustedHTML | TrustedScript | TrustedScriptURL): void;
	removeAttribute(name: string): void;
	setAttributeNS(namespaceURI: string, qualifiedName: string, value: string | TrustedHTML | TrustedScript | TrustedScriptURL): void;
	addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
	removeEventListener(type: string, listener?: EventListener, options?: boolean): void;
	setProperty?(name: string, value: any): void;
}

declare const RENDERER = 11;

/**
 * Procedural style of API needed to create elements and text nodes.
 *
 * In non-native browser environments (e.g. platforms such as web-workers), this is the
 * facade that enables element manipulation. In practice, this is implemented by \`Renderer2\`.
 */
declare interface Renderer {
	destroy(): void;
	createComment(value: string): RComment;
	createElement(name: string, namespace?: string | null): RElement;
	createText(value: string): RText;
	/**
	 * This property is allowed to be null / undefined,
	 * in which case the view engine won't call it.
	 * This is used as a performance optimization for production mode.
	 */
	destroyNode?: ((node: RNode) => void) | null;
	appendChild(parent: RElement, newChild: RNode): void;
	insertBefore(parent: RNode, newChild: RNode, refChild: RNode | null, isMove?: boolean): void;
	removeChild(parent: RElement, oldChild: RNode, isHostElement?: boolean): void;
	selectRootElement(selectorOrNode: string | any, preserveContent?: boolean): RElement;
	parentNode(node: RNode): RElement | null;
	nextSibling(node: RNode): RNode | null;
	setAttribute(el: RElement, name: string, value: string | TrustedHTML | TrustedScript | TrustedScriptURL, namespace?: string | null): void;
	removeAttribute(el: RElement, name: string, namespace?: string | null): void;
	addClass(el: RElement, name: string): void;
	removeClass(el: RElement, name: string): void;
	setStyle(el: RElement, style: string, value: any, flags?: RendererStyleFlags2): void;
	removeStyle(el: RElement, style: string, flags?: RendererStyleFlags2): void;
	setProperty(el: RElement, name: string, value: any): void;
	setValue(node: RText | RComment, value: string): void;
	listen(target: GlobalTargetName | RNode, eventName: string, callback: (event: any) => boolean | void): () => void;
}

/**
 * Extend this base class to implement custom rendering. By default, Angular
 * renders a template into DOM. You can use custom rendering to intercept
 * rendering calls, or to render to something other than DOM.
 *
 * Create your custom renderer using \`RendererFactory2\`.
 *
 * Use a custom renderer to bypass Angular's templating and
 * make custom UI changes that can't be expressed declaratively.
 * For example if you need to set a property or an attribute whose name is
 * not statically known, use the \`setProperty()\` or
 * \`setAttribute()\` method.
 *
 * @publicApi
 */
export declare abstract class Renderer2 {
	/**
	 * Use to store arbitrary developer-defined data on a renderer instance,
	 * as an object containing key-value pairs.
	 * This is useful for renderers that delegate to other renderers.
	 */
	abstract get data(): {
		[key: string]: any;
	};
	/**
	 * Implement this callback to destroy the renderer or the host element.
	 */
	abstract destroy(): void;
	/**
	 * Implement this callback to create an instance of the host element.
	 * @param name An identifying name for the new element, unique within the namespace.
	 * @param namespace The namespace for the new element.
	 * @returns The new element.
	 */
	abstract createElement(name: string, namespace?: string | null): any;
	/**
	 * Implement this callback to add a comment to the DOM of the host element.
	 * @param value The comment text.
	 * @returns The modified element.
	 */
	abstract createComment(value: string): any;
	/**
	 * Implement this callback to add text to the DOM of the host element.
	 * @param value The text string.
	 * @returns The modified element.
	 */
	abstract createText(value: string): any;
	/**
	 * If null or undefined, the view engine won't call it.
	 * This is used as a performance optimization for production mode.
	 */
	destroyNode: ((node: any) => void) | null;
	/**
	 * Appends a child to a given parent node in the host element DOM.
	 * @param parent The parent node.
	 * @param newChild The new child node.
	 */
	abstract appendChild(parent: any, newChild: any): void;
	/**
	 * Implement this callback to insert a child node at a given position in a parent node
	 * in the host element DOM.
	 * @param parent The parent node.
	 * @param newChild The new child nodes.
	 * @param refChild The existing child node before which \`newChild\` is inserted.
	 * @param isMove Optional argument which signifies if the current \`insertBefore\` is a result of a
	 *     move. Animation uses this information to trigger move animations. In the past the Animation
	 *     would always assume that any \`insertBefore\` is a move. This is not strictly true because
	 *     with runtime i18n it is possible to invoke \`insertBefore\` as a result of i18n and it should
	 *     not trigger an animation move.
	 */
	abstract insertBefore(parent: any, newChild: any, refChild: any, isMove?: boolean): void;
	/**
	 * Implement this callback to remove a child node from the host element's DOM.
	 * @param parent The parent node.
	 * @param oldChild The child node to remove.
	 * @param isHostElement Optionally signal to the renderer whether this element is a host element
	 * or not
	 */
	abstract removeChild(parent: any, oldChild: any, isHostElement?: boolean): void;
	/**
	 * Implement this callback to prepare an element to be bootstrapped
	 * as a root element, and return the element instance.
	 * @param selectorOrNode The DOM element.
	 * @param preserveContent Whether the contents of the root element
	 * should be preserved, or cleared upon bootstrap (default behavior).
	 * Use with \`ViewEncapsulation.ShadowDom\` to allow simple native
	 * content projection via \`<slot>\` elements.
	 * @returns The root element.
	 */
	abstract selectRootElement(selectorOrNode: string | any, preserveContent?: boolean): any;
	/**
	 * Implement this callback to get the parent of a given node
	 * in the host element's DOM.
	 * @param node The child node to query.
	 * @returns The parent node, or null if there is no parent.
	 * For WebWorkers, always returns true.
	 * This is because the check is synchronous,
	 * and the caller can't rely on checking for null.
	 */
	abstract parentNode(node: any): any;
	/**
	 * Implement this callback to get the next sibling node of a given node
	 * in the host element's DOM.
	 * @returns The sibling node, or null if there is no sibling.
	 * For WebWorkers, always returns a value.
	 * This is because the check is synchronous,
	 * and the caller can't rely on checking for null.
	 */
	abstract nextSibling(node: any): any;
	/**
	 * Implement this callback to set an attribute value for an element in the DOM.
	 * @param el The element.
	 * @param name The attribute name.
	 * @param value The new value.
	 * @param namespace The namespace.
	 */
	abstract setAttribute(el: any, name: string, value: string, namespace?: string | null): void;
	/**
	 * Implement this callback to remove an attribute from an element in the DOM.
	 * @param el The element.
	 * @param name The attribute name.
	 * @param namespace The namespace.
	 */
	abstract removeAttribute(el: any, name: string, namespace?: string | null): void;
	/**
	 * Implement this callback to add a class to an element in the DOM.
	 * @param el The element.
	 * @param name The class name.
	 */
	abstract addClass(el: any, name: string): void;
	/**
	 * Implement this callback to remove a class from an element in the DOM.
	 * @param el The element.
	 * @param name The class name.
	 */
	abstract removeClass(el: any, name: string): void;
	/**
	 * Implement this callback to set a CSS style for an element in the DOM.
	 * @param el The element.
	 * @param style The name of the style.
	 * @param value The new value.
	 * @param flags Flags for style variations. No flags are set by default.
	 */
	abstract setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void;
	/**
	 * Implement this callback to remove the value from a CSS style for an element in the DOM.
	 * @param el The element.
	 * @param style The name of the style.
	 * @param flags Flags for style variations to remove, if set. ???
	 */
	abstract removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void;
	/**
	 * Implement this callback to set the value of a property of an element in the DOM.
	 * @param el The element.
	 * @param name The property name.
	 * @param value The new value.
	 */
	abstract setProperty(el: any, name: string, value: any): void;
	/**
	 * Implement this callback to set the value of a node in the host element.
	 * @param node The node.
	 * @param value The new value.
	 */
	abstract setValue(node: any, value: string): void;
	/**
	 * Implement this callback to start an event listener.
	 * @param target The context in which to listen for events. Can be
	 * the entire window or document, the body of the document, or a specific
	 * DOM element.
	 * @param eventName The event to listen for.
	 * @param callback A handler function to invoke when the event occurs.
	 * @returns An "unlisten" function for disposing of this handler.
	 */
	abstract listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => boolean | void): () => void;
}

declare const RENDERER_FACTORY = 10;

declare interface RendererFactory {
	createRenderer(hostElement: RElement | null, rendererType: RendererType2 | null): Renderer;
	begin?(): void;
	end?(): void;
}

/**
 * Creates and initializes a custom renderer that implements the \`Renderer2\` base class.
 *
 * @publicApi
 */
export declare abstract class RendererFactory2 {
	/**
	 * Creates and initializes a custom renderer for a host DOM element.
	 * @param hostElement The element to render.
	 * @param type The base class to implement.
	 * @returns The new custom renderer instance.
	 */
	abstract createRenderer(hostElement: any, type: RendererType2 | null): Renderer2;
	/**
	 * A callback invoked when rendering has begun.
	 */
	abstract begin?(): void;
	/**
	 * A callback invoked when rendering has completed.
	 */
	abstract end?(): void;
	/**
	 * Use with animations test-only mode. Notifies the test when rendering has completed.
	 * @returns The asynchronous result of the developer-defined function.
	 */
	abstract whenRenderingDone?(): Promise<any>;
}

/**
 * Flags for renderer-specific style modifiers.
 * @publicApi
 */
export declare enum RendererStyleFlags2 {
	/**
	 * Marks a style as important.
	 */
	Important = 1,
	/**
	 * Marks a style as using dash case naming (this-is-dash-case).
	 */
	DashCase = 2
}

/**
 * Used by \`RendererFactory2\` to associate custom rendering data and styles
 * with a rendering implementation.
 *  @publicApi
 */
export declare interface RendererType2 {
	/**
	 * A unique identifying string for the new renderer, used when creating
	 * unique styles for encapsulation.
	 */
	id: string;
	/**
	 * The view encapsulation type, which determines how styles are applied to
	 * DOM elements. One of
	 * - \`Emulated\` (default): Emulate native scoping of styles.
	 * - \`Native\`: Use the native encapsulation mechanism of the renderer.
	 * - \`ShadowDom\`: Use modern [Shadow
	 * DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	 * create a ShadowRoot for component's host element.
	 * - \`None\`: Do not provide any template or style encapsulation.
	 */
	encapsulation: ViewEncapsulation;
	/**
	 * Defines CSS styles to be stored on a renderer instance.
	 */
	styles: (string | any[])[];
	/**
	 * Defines arbitrary developer-defined data to be stored on a renderer instance.
	 * This is useful for renderers that delegate to other renderers.
	 */
	data: {
		[kind: string]: any;
	};
}

/**
 * An internal resolved representation of a factory function created by resolving \`Provider\`.
 * @publicApi
 */
export declare class ResolvedReflectiveFactory {
	/**
	 * Factory function which can return an instance of an object represented by a key.
	 */
	factory: Function;
	/**
	 * Arguments (dependencies) to the \`factory\` function.
	 */
	dependencies: ReflectiveDependency[];
	constructor(
		/**
		 * Factory function which can return an instance of an object represented by a key.
		 */
		factory: Function,
		/**
		 * Arguments (dependencies) to the \`factory\` function.
		 */
		dependencies: ReflectiveDependency[]);
}

/**
 * An internal resolved representation of a \`Provider\` used by the \`Injector\`.
 *
 * @usageNotes
 * This is usually created automatically by \`Injector.resolveAndCreate\`.
 *
 * It can be created manually, as follows:
 *
 * ### Example
 *
 * \`\`\`typescript
 * var resolvedProviders = Injector.resolve([{ provide: 'message', useValue: 'Hello' }]);
 * var injector = Injector.fromResolvedProviders(resolvedProviders);
 *
 * expect(injector.get('message')).toEqual('Hello');
 * \`\`\`
 *
 * @publicApi
 */
export declare interface ResolvedReflectiveProvider {
	/**
	 * A key, usually a \`Type<any>\`.
	 */
	key: ReflectiveKey;
	/**
	 * Factory function which can return an instance of an object represented by a key.
	 */
	resolvedFactories: ResolvedReflectiveFactory[];
	/**
	 * Indicates if the provider is a multi-provider or a regular provider.
	 */
	multiProvider: boolean;
}

/**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
 *
 * @see \`forwardRef\`
 * @publicApi
 */
export declare function resolveForwardRef<T>(type: T): T;

/**
 * The goal here is to make sure that the browser DOM API is the Renderer.
 * We do this by defining a subset of DOM API to be the renderer and then
 * use that at runtime for rendering.
 *
 * At runtime we can then use the DOM api directly, in server or web-worker
 * it will be easy to implement such API.
 */
/** Subset of API needed for appending elements and text nodes. */
declare interface RNode {
	/**
	 * Returns the parent Element, Document, or DocumentFragment
	 */
	parentNode: RNode | null;
	/**
	 * Returns the parent Element if there is one
	 */
	parentElement: RElement | null;
	/**
	 * Gets the Node immediately following this one in the parent's childNodes
	 */
	nextSibling: RNode | null;
	/**
	 * Removes a child from the current node and returns the removed node
	 * @param oldChild the child node to remove
	 */
	removeChild(oldChild: RNode): RNode;
	/**
	 * Insert a child node.
	 *
	 * Used exclusively for adding View root nodes into ViewAnchor location.
	 */
	insertBefore(newChild: RNode, refChild: RNode | null, isViewRoot: boolean): void;
	/**
	 * Append a child node.
	 *
	 * Used exclusively for building up DOM which are static (ie not View roots)
	 */
	appendChild(newChild: RNode): RNode;
}

declare interface RText extends RNode {
	textContent: string | null;
}


/**
 * The list of error codes used in runtime code of the \`core\` package.
 * Reserved error code range: 100-999.
 *
 * Note: the minus sign denotes the fact that a particular code has a detailed guide on
 * angular.io. This extra annotation is needed to avoid introducing a separate set to store
 * error codes which have guides, which might leak into runtime code.
 *
 * Full list of available error guides can be found at https://angular.io/errors.
 */
declare const enum RuntimeErrorCode {
	EXPRESSION_CHANGED_AFTER_CHECKED = -100,
	RECURSIVE_APPLICATION_REF_TICK = 101,
	CYCLIC_DI_DEPENDENCY = -200,
	PROVIDER_NOT_FOUND = -201,
	INVALID_FACTORY_DEPENDENCY = 202,
	MISSING_INJECTION_CONTEXT = -203,
	INVALID_INJECTION_TOKEN = 204,
	INJECTOR_ALREADY_DESTROYED = 205,
	PROVIDER_IN_WRONG_CONTEXT = 207,
	MISSING_INJECTION_TOKEN = 208,
	INVALID_MULTI_PROVIDER = 209,
	MULTIPLE_COMPONENTS_MATCH = -300,
	EXPORT_NOT_FOUND = -301,
	PIPE_NOT_FOUND = -302,
	UNKNOWN_BINDING = 303,
	UNKNOWN_ELEMENT = 304,
	TEMPLATE_STRUCTURE_ERROR = 305,
	INVALID_EVENT_BINDING = 306,
	MULTIPLE_PLATFORMS = 400,
	PLATFORM_NOT_FOUND = 401,
	ERROR_HANDLER_NOT_FOUND = 402,
	BOOTSTRAP_COMPONENTS_NOT_FOUND = 403,
	PLATFORM_ALREADY_DESTROYED = 404,
	ASYNC_INITIALIZERS_STILL_RUNNING = 405,
	APPLICATION_REF_ALREADY_DESTROYED = 406,
	RENDERER_NOT_FOUND = 407,
	INVALID_I18N_STRUCTURE = 700,
	MISSING_LOCALE_DATA = 701,
	IMPORT_PROVIDERS_FROM_STANDALONE = 800,
	INVALID_DIFFER_INPUT = 900,
	NO_SUPPORTING_DIFFER_FACTORY = 901,
	VIEW_ALREADY_ATTACHED = 902,
	INVALID_INHERITANCE = 903,
	UNSAFE_VALUE_IN_RESOURCE_URL = 904,
	UNSAFE_VALUE_IN_SCRIPT = 905,
	MISSING_GENERATED_DEF = 906,
	TYPE_IS_NOT_STANDALONE = 907,
	MISSING_ZONEJS = 908,
	UNEXPECTED_ZONE_STATE = 909
}

declare const SANITIZER = 12;

/**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 * @publicApi
 */
export declare abstract class Sanitizer {
	abstract sanitize(context: SecurityContext, value: {} | string | null): string | null;
	/** @nocollapse */
	static ɵprov: unknown;
}

/**
 * Function used to sanitize the value before writing it into the renderer.
 */
declare type SanitizerFn = (value: any, tagName?: string, propName?: string) => string | TrustedHTML | TrustedScript | TrustedScriptURL;


/**
 * A schema definition associated with an NgModule.
 *
 * @see \`@NgModule\`, \`CUSTOM_ELEMENTS_SCHEMA\`, \`NO_ERRORS_SCHEMA\`
 *
 * @param name The name of a defined schema.
 *
 * @publicApi
 */
export declare interface SchemaMetadata {
	name: string;
}


/**
 * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
 * like \`innerHTML\` that could cause Cross Site Scripting (XSS) security bugs when improperly
 * handled.
 *
 * See DomSanitizer for more details on security in Angular applications.
 *
 * @publicApi
 */
export declare enum SecurityContext {
	NONE = 0,
	HTML = 1,
	STYLE = 2,
	SCRIPT = 3,
	URL = 4,
	RESOURCE_URL = 5
}

/** Flags used to build up CssSelectors */
declare const enum SelectorFlags {
	/** Indicates this is the beginning of a new negative selector */
	NOT = 1,
	/** Mode for matching attributes */
	ATTRIBUTE = 2,
	/** Mode for matching tag names */
	ELEMENT = 4,
	/** Mode for matching class names */
	CLASS = 8
}

/**
 * Type of the Self metadata.
 *
 * @publicApi
 */
export declare interface Self {
}

/**
 * Self decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const Self: SelfDecorator;

/**
 * Type of the Self decorator / constructor function.
 *
 * @publicApi
 */
export declare interface SelfDecorator {
	/**
	 * Parameter decorator to be used on constructor parameters,
	 * which tells the DI framework to start dependency resolution from the local injector.
	 *
	 * Resolution works upward through the injector hierarchy, so the children
	 * of this class must configure their own providers or be prepared for a \`null\` result.
	 *
	 * @usageNotes
	 *
	 * In the following example, the dependency can be resolved
	 * by the local injector when instantiating the class itself, but not
	 * when instantiating a child.
	 *
	 * <code-example path="core/di/ts/metadata_spec.ts" region="Self">
	 * </code-example>
	 *
	 * @see \`SkipSelf\`
	 * @see \`Optional\`
	 *
	 */
	(): any;
	new(): Self;
}

/**
 * Set the {@link GetTestability} implementation used by the Angular testing framework.
 * @publicApi
 */
export declare function setTestabilityGetter(getter: GetTestability): void;


/**
 * Represents a basic change from a previous to a new value for a single
 * property on a directive instance. Passed as a value in a
 * {@link SimpleChanges} object to the \`ngOnChanges\` hook.
 *
 * @see \`OnChanges\`
 *
 * @publicApi
 */
export declare class SimpleChange {
	previousValue: any;
	currentValue: any;
	firstChange: boolean;
	constructor(previousValue: any, currentValue: any, firstChange: boolean);
	/**
	 * Check whether the new value is the first value assigned.
	 */
	isFirstChange(): boolean;
}

/**
 * A hashtable of changes represented by {@link SimpleChange} objects stored
 * at the declared property name they belong to on a Directive or Component. This is
 * the type passed to the \`ngOnChanges\` hook.
 *
 * @see \`OnChanges\`
 *
 * @publicApi
 */
export declare interface SimpleChanges {
	[propName: string]: SimpleChange;
}

/**
 * Type of the \`SkipSelf\` metadata.
 *
 * @publicApi
 */
export declare interface SkipSelf {
}

/**
 * \`SkipSelf\` decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const SkipSelf: SkipSelfDecorator;

/**
 * Type of the \`SkipSelf\` decorator / constructor function.
 *
 * @publicApi
 */
export declare interface SkipSelfDecorator {
	/**
	 * Parameter decorator to be used on constructor parameters,
	 * which tells the DI framework to start dependency resolution from the parent injector.
	 * Resolution works upward through the injector hierarchy, so the local injector
	 * is not checked for a provider.
	 *
	 * @usageNotes
	 *
	 * In the following example, the dependency can be resolved when
	 * instantiating a child, but not when instantiating the class itself.
	 *
	 * <code-example path="core/di/ts/metadata_spec.ts" region="SkipSelf">
	 * </code-example>
	 *
	 * @see [Dependency Injection guide](guide/dependency-injection-in-action#skip).
	 * @see \`Self\`
	 * @see \`Optional\`
	 *
	 */
	(): any;
	new(): SkipSelf;
}

/**
 * Configures the \`Injector\` to return an instance of \`useClass\` for a token.
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * {@example core/di/ts/provider_spec.ts region='StaticClassProvider'}
 *
 * Note that following two providers are not equal:
 *
 * {@example core/di/ts/provider_spec.ts region='StaticClassProviderDifference'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 *
 * @publicApi
 */
export declare interface StaticClassProvider extends StaticClassSansProvider {
	/**
	 * An injection token. Typically an instance of \`Type\` or \`InjectionToken\`, but can be \`any\`.
	 */
	provide: any;
	/**
	 * When true, injector returns an array of instances. This is useful to allow multiple
	 * providers spread across many files to provide configuration information to a common token.
	 */
	multi?: boolean;
}

/**
 * Configures the \`Injector\` to return an instance of \`useClass\` for a token.
 * Base for \`StaticClassProvider\` decorator.
 *
 * @publicApi
 */
export declare interface StaticClassSansProvider {
	/**
	 * An optional class to instantiate for the \`token\`. By default, the \`provide\`
	 * class is instantiated.
	 */
	useClass: Type<any>;
	/**
	 * A list of \`token\`s to be resolved by the injector. The list of values is then
	 * used as arguments to the \`useClass\` constructor.
	 */
	deps: any[];
}

/**
 * Describes how an \`Injector\` should be configured as static (that is, without reflection).
 * A static provider provides tokens to an injector for various types of dependencies.
 *
 * @see \`Injector.create()\`.
 * @see ["Dependency Injection Guide"](guide/dependency-injection-providers).
 *
 * @publicApi
 */
export declare type StaticProvider = ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | any[];

declare const T_HOST = 6;

/**
 * A combination of:
 * - Attribute names and values.
 * - Special markers acting as flags to alter attributes processing.
 * - Parsed ngProjectAs selectors.
 */
declare type TAttributes = (string | ɵAttributeMarker | CssSelector)[];

/**
 * Constants that are associated with a view. Includes:
 * - Attribute arrays.
 * - Local definition arrays.
 * - Translated messages (i18n).
 */
declare type TConstants = (TAttributes | string)[];

/**
 * Factory function that returns an array of consts. Consts can be represented as a function in
 * case any additional statements are required to define consts in the list. An example is i18n
 * where additional i18n calls are generated, which should be executed when consts are requested
 * for the first time.
 */
declare type TConstantsFactory = () => TConstants;

/**
 * TConstants type that describes how the \`consts\` field is generated on ComponentDef: it can be
 * either an array or a factory function that returns that array.
 */
declare type TConstantsOrFactory = TConstants | TConstantsFactory;

/** Static data for an LContainer */
declare interface TContainerNode extends TNode {
	/**
	 * Index in the data[] array.
	 *
	 * If it's -1, this is a dynamically created container node that isn't stored in
	 * data[] (e.g. when you inject ViewContainerRef) .
	 */
	index: number;
	child: null;
	/**
	 * Container nodes will have parents unless:
	 *
	 * - They are the first node of a component or embedded view
	 * - They are dynamically created
	 */
	parent: TElementNode | TElementContainerNode | null;
	tViews: TView | TView[] | null;
	projection: null;
	value: null;
}

/**
 * Static data that corresponds to the instance-specific data array on an LView.
 *
 * Each node's static data is stored in tData at the same index that it's stored
 * in the data array.  Any nodes that do not have static data store a null value in
 * tData to avoid a sparse array.
 *
 * Each pipe's definition is stored here at the same index as its pipe instance in
 * the data array.
 *
 * Each host property's name is stored here at the same index as its value in the
 * data array.
 *
 * Each property binding name is stored here at the same index as its value in
 * the data array. If the binding is an interpolation, the static string values
 * are stored parallel to the dynamic values. Example:
 *
 * id="prefix {{ v0 }} a {{ v1 }} b {{ v2 }} suffix"
 *
 * LView       |   TView.data
 *------------------------
 *  v0 value   |   'a'
 *  v1 value   |   'b'
 *  v2 value   |   id � prefix � suffix
 *
 * Injector bloom filters are also stored here.
 */
declare type TData = (TNode | ɵPipeDef<any> | ɵDirectiveDef<any> | ɵComponentDef<any> | number | TStylingRange | TStylingKey | ProviderToken<any> | TI18n | I18nUpdateOpCodes | TIcu | null | string)[];

/** Static data for an <ng-container> */
declare interface TElementContainerNode extends TNode {
	/** Index in the LView[] array. */
	index: number;
	child: TElementNode | TTextNode | TContainerNode | TElementContainerNode | TProjectionNode | null;
	parent: TElementNode | TElementContainerNode | null;
	tViews: null;
	projection: null;
}

/** Static data for an element  */
declare interface TElementNode extends TNode {
	/** Index in the data[] array */
	index: number;
	child: TElementNode | TTextNode | TElementContainerNode | TContainerNode | TProjectionNode | null;
	/**
	 * Element nodes will have parents unless they are the first node of a component or
	 * embedded view (which means their parent is in a different view and must be
	 * retrieved using viewData[HOST_NODE]).
	 */
	parent: TElementNode | TElementContainerNode | null;
	tViews: null;
	/**
	 * If this is a component TNode with projection, this will be an array of projected
	 * TNodes or native nodes (see TNode.projection for more info). If it's a regular element node
	 * or a component without projection, it will be null.
	 */
	projection: (TNode | RNode[])[] | null;
	/**
	 * Stores TagName
	 */
	value: string;
}

/**
 * Represents an embedded template that can be used to instantiate embedded views.
 * To instantiate embedded views based on a template, use the \`ViewContainerRef\`
 * method \`createEmbeddedView()\`.
 *
 * Access a \`TemplateRef\` instance by placing a directive on an \`<ng-template>\`
 * element (or directive prefixed with \`*\`). The \`TemplateRef\` for the embedded view
 * is injected into the constructor of the directive,
 * using the \`TemplateRef\` token.
 *
 * You can also use a \`Query\` to find a \`TemplateRef\` associated with
 * a component or a directive.
 *
 * @see \`ViewContainerRef\`
 * @see [Navigate the Component Tree with DI](guide/dependency-injection-navtree)
 *
 * @publicApi
 */
export declare abstract class TemplateRef<C> {
	/**
	 * The anchor element in the parent view for this embedded view.
	 *
	 * The data-binding and injection contexts of embedded views created from this \`TemplateRef\`
	 * inherit from the contexts of this location.
	 *
	 * Typically new embedded views are attached to the view container of this location, but in
	 * advanced use-cases, the view can be attached to a different container while keeping the
	 * data-binding and injection context from the original location.
	 *
	 */
	abstract readonly elementRef: ElementRef;
	/**
	 * Instantiates an unattached embedded view based on this template.
	 * @param context The data-binding context of the embedded view, as declared
	 * in the \`<ng-template>\` usage.
	 * @param injector Injector to be used within the embedded view.
	 * @returns The new embedded view object.
	 */
	abstract createEmbeddedView(context: C, injector?: Injector): EmbeddedViewRef<C>;
}

/**
 * The Testability service provides testing hooks that can be accessed from
 * the browser.
 *
 * Angular applications bootstrapped using an NgModule (via \`@NgModule.bootstrap\` field) will also
 * instantiate Testability by default (in both development and production modes).
 *
 * For applications bootstrapped using the \`bootstrapApplication\` function, Testability is not
 * included by default. You can include it into your applications by getting the list of necessary
 * providers using the \`provideProtractorTestingSupport()\` function and adding them into the
 * \`options.providers\` array. Example:
 *
 * \`\`\`typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, providers: [provideProtractorTestingSupport()]);
 * \`\`\`
 *
 * @publicApi
 */
export declare class Testability implements PublicTestability {
	private _ngZone;
	private registry;
	private _pendingCount;
	private _isZoneStable;
	private _callbacks;
	private taskTrackingZone;
	constructor(_ngZone: NgZone, registry: TestabilityRegistry, testabilityGetter: GetTestability);
	private _watchAngularEvents;
	/**
	 * Increases the number of pending request
	 * @deprecated pending requests are now tracked with zones.
	 */
	increasePendingRequestCount(): number;
	/**
	 * Decreases the number of pending request
	 * @deprecated pending requests are now tracked with zones
	 */
	decreasePendingRequestCount(): number;
	/**
	 * Whether an associated application is stable
	 */
	isStable(): boolean;
	private _runCallbacksIfReady;
	private getPendingTasks;
	private addCallback;
	/**
	 * Wait for the application to be stable with a timeout. If the timeout is reached before that
	 * happens, the callback receives a list of the macro tasks that were pending, otherwise null.
	 *
	 * @param doneCb The callback to invoke when Angular is stable or the timeout expires
	 *    whichever comes first.
	 * @param timeout Optional. The maximum time to wait for Angular to become stable. If not
	 *    specified, whenStable() will wait forever.
	 * @param updateCb Optional. If specified, this callback will be invoked whenever the set of
	 *    pending macrotasks changes. If this callback returns true doneCb will not be invoked
	 *    and no further updates will be issued.
	 */
	whenStable(doneCb: Function, timeout?: number, updateCb?: Function): void;
	/**
	 * Get the number of pending requests
	 * @deprecated pending requests are now tracked with zones
	 */
	getPendingRequestCount(): number;
	/**
	 * Find providers by name
	 * @param using The root element to search from
	 * @param provider The name of binding variable
	 * @param exactMatch Whether using exactMatch
	 */
	findProviders(using: any, provider: string, exactMatch: boolean): any[];
	static ɵfac: i0.ɵɵFactoryDeclaration<Testability, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<Testability>;
}

/**
 * A global registry of {@link Testability} instances for specific elements.
 * @publicApi
 */
export declare class TestabilityRegistry {
	/**
	 * Registers an application with a testability hook so that it can be tracked
	 * @param token token of application, root element
	 * @param testability Testability hook
	 */
	registerApplication(token: any, testability: Testability): void;
	/**
	 * Unregisters an application.
	 * @param token token of application, root element
	 */
	unregisterApplication(token: any): void;
	/**
	 * Unregisters all applications
	 */
	unregisterAllApplications(): void;
	/**
	 * Get a testability hook associated with the application
	 * @param elem root element
	 */
	getTestability(elem: any): Testability | null;
	/**
	 * Get all registered testabilities
	 */
	getAllTestabilities(): Testability[];
	/**
	 * Get all registered applications(root elements)
	 */
	getAllRootElements(): any[];
	/**
	 * Find testability of a node in the Tree
	 * @param elem node
	 * @param findInAncestors whether finding testability in ancestors if testability was not found in
	 * current node
	 */
	findTestabilityInTree(elem: Node, findInAncestors?: boolean): Testability | null;
	static ɵfac: i0.ɵɵFactoryDeclaration<TestabilityRegistry, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<TestabilityRegistry>;
}

/**
 * Store information for the i18n translation block.
 */
declare interface TI18n {
	/**
	 * A set of OpCodes which will create the Text Nodes and ICU anchors for the translation blocks.
	 *
	 * NOTE: The ICU anchors are filled in with ICU Update OpCode.
	 */
	create: I18nCreateOpCodes;
	/**
	 * A set of OpCodes which will be executed on each change detection to determine if any changes to
	 * DOM are required.
	 */
	update: I18nUpdateOpCodes;
}

declare interface TIcu {
	/**
	 * Defines the ICU type of \`select\` or \`plural\`
	 */
	type: IcuType;
	/**
	 * Index in \`LView\` where the anchor node is stored. \`<!-- ICU 0:0 -->\`
	 */
	anchorIdx: number;
	/**
	 * Currently selected ICU case pointer.
	 *
	 * \`lView[currentCaseLViewIndex]\` stores the currently selected case. This is needed to know how
	 * to clean up the current case when transitioning no the new case.
	 *
	 * If the value stored is:
	 * \`null\`: No current case selected.
	 *   \`<0\`: A flag which means that the ICU just switched and that \`icuUpdate\` must be executed
	 *         regardless of the \`mask\`. (After the execution the flag is cleared)
	 *   \`>=0\` A currently selected case index.
	 */
	currentCaseLViewIndex: number;
	/**
	 * A list of case values which the current ICU will try to match.
	 *
	 * The last value is \`other\`
	 */
	cases: any[];
	/**
	 * A set of OpCodes to apply in order to build up the DOM render tree for the ICU
	 */
	create: IcuCreateOpCodes[];
	/**
	 * A set of OpCodes to apply in order to destroy the DOM render tree for the ICU.
	 */
	remove: I18nRemoveOpCodes[];
	/**
	 * A set of OpCodes to apply in order to update the DOM render tree for the ICU bindings.
	 */
	update: I18nUpdateOpCodes[];
}

/**
 * Binding data (flyweight) for a particular node that is shared between all templates
 * of a specific type.
 *
 * If a property is:
 *    - PropertyAliases: that property's data was generated and this is it
 *    - Null: that property's data was already generated and nothing was found.
 *    - Undefined: that property's data has not yet been generated
 *
 * see: https://en.wikipedia.org/wiki/Flyweight_pattern for more on the Flyweight pattern
 */
declare interface TNode {
	/** The type of the TNode. See TNodeType. */
	type: TNodeType;
	/**
	 * Index of the TNode in TView.data and corresponding native element in LView.
	 *
	 * This is necessary to get from any TNode to its corresponding native element when
	 * traversing the node tree.
	 *
	 * If index is -1, this is a dynamically created container node or embedded view node.
	 */
	index: number;
	/**
	 * Insert before existing DOM node index.
	 *
	 * When DOM nodes are being inserted, normally they are being appended as they are created.
	 * Under i18n case, the translated text nodes are created ahead of time as part of the
	 * \`ɵɵi18nStart\` instruction which means that this \`TNode\` can't just be appended and instead
	 * needs to be inserted using \`insertBeforeIndex\` semantics.
	 *
	 * Additionally sometimes it is necessary to insert new text nodes as a child of this \`TNode\`. In
	 * such a case the value stores an array of text nodes to insert.
	 *
	 * Example:
	 * \`\`\`
	 * <div i18n>
	 *   Hello <span>World</span>!
	 * </div>
	 * \`\`\`
	 * In the above example the \`ɵɵi18nStart\` instruction can create \`Hello \`, \`World\` and \`!\` text
	 * nodes. It can also insert \`Hello \` and \`!\` text node as a child of \`<div>\`, but it can't
	 * insert \`World\` because the \`<span>\` node has not yet been created. In such a case the
	 * \`<span>\` \`TNode\` will have an array which will direct the \`<span>\` to not only insert
	 * itself in front of \`!\` but also to insert the \`World\` (created by \`ɵɵi18nStart\`) into
	 * \`<span>\` itself.
	 *
	 * Pseudo code:
	 * \`\`\`
	 *   if (insertBeforeIndex === null) {
	 *     // append as normal
	 *   } else if (Array.isArray(insertBeforeIndex)) {
	 *     // First insert current \`TNode\` at correct location
	 *     const currentNode = lView[this.index];
	 *     parentNode.insertBefore(currentNode, lView[this.insertBeforeIndex[0]]);
	 *     // Now append all of the children
	 *     for(let i=1; i<this.insertBeforeIndex; i++) {
	 *       currentNode.appendChild(lView[this.insertBeforeIndex[i]]);
	 *     }
	 *   } else {
	 *     parentNode.insertBefore(lView[this.index], lView[this.insertBeforeIndex])
	 *   }
	 * \`\`\`
	 * - null: Append as normal using \`parentNode.appendChild\`
	 * - \`number\`: Append using
	 *      \`parentNode.insertBefore(lView[this.index], lView[this.insertBeforeIndex])\`
	 *
	 * *Initialization*
	 *
	 * Because \`ɵɵi18nStart\` executes before nodes are created, on \`TView.firstCreatePass\` it is not
	 * possible for \`ɵɵi18nStart\` to set the \`insertBeforeIndex\` value as the corresponding \`TNode\`
	 * has not yet been created. For this reason the \`ɵɵi18nStart\` creates a \`TNodeType.Placeholder\`
	 * \`TNode\` at that location. See \`TNodeType.Placeholder\` for more information.
	 */
	insertBeforeIndex: InsertBeforeIndex;
	/**
	 * The index of the closest injector in this node's LView.
	 *
	 * If the index === -1, there is no injector on this node or any ancestor node in this view.
	 *
	 * If the index !== -1, it is the index of this node's injector OR the index of a parent
	 * injector in the same view. We pass the parent injector index down the node tree of a view so
	 * it's possible to find the parent injector without walking a potentially deep node tree.
	 * Injector indices are not set across view boundaries because there could be multiple component
	 * hosts.
	 *
	 * If tNode.injectorIndex === tNode.parent.injectorIndex, then the index belongs to a parent
	 * injector.
	 */
	injectorIndex: number;
	/**
	 * Stores starting index of the directives.
	 *
	 * NOTE: The first directive is always component (if present).
	 */
	directiveStart: number;
	/**
	 * Stores final exclusive index of the directives.
	 *
	 * The area right behind the \`directiveStart-directiveEnd\` range is used to allocate the
	 * \`HostBindingFunction\` \`vars\` (or null if no bindings.) Therefore \`directiveEnd\` is used to set
	 * \`LFrame.bindingRootIndex\` before \`HostBindingFunction\` is executed.
	 */
	directiveEnd: number;
	/**
	 * Stores the last directive which had a styling instruction.
	 *
	 * Initial value of this is \`-1\` which means that no \`hostBindings\` styling instruction has
	 * executed. As \`hostBindings\` instructions execute they set the value to the index of the
	 * \`DirectiveDef\` which contained the last \`hostBindings\` styling instruction.
	 *
	 * Valid values are:
	 * - \`-1\` No \`hostBindings\` instruction has executed.
	 * - \`directiveStart <= directiveStylingLast < directiveEnd\`: Points to the \`DirectiveDef\` of
	 * the last styling instruction which executed in the \`hostBindings\`.
	 *
	 * This data is needed so that styling instructions know which static styling data needs to be
	 * collected from the \`DirectiveDef.hostAttrs\`. A styling instruction needs to collect all data
	 * since last styling instruction.
	 */
	directiveStylingLast: number;
	/**
	 * Stores indexes of property bindings. This field is only set in the ngDevMode and holds
	 * indexes of property bindings so TestBed can get bound property metadata for a given node.
	 */
	propertyBindings: number[] | null;
	/**
	 * Stores if Node isComponent, isProjected, hasContentQuery, hasClassInput and hasStyleInput
	 * etc.
	 */
	flags: TNodeFlags;
	/**
	 * This number stores two values using its bits:
	 *
	 * - the index of the first provider on that node (first 16 bits)
	 * - the count of view providers from the component on this node (last 16 bits)
	 */
	providerIndexes: TNodeProviderIndexes;
	/**
	 * The value name associated with this node.
	 * if type:
	 *   \`TNodeType.Text\`: text value
	 *   \`TNodeType.Element\`: tag name
	 *   \`TNodeType.ICUContainer\`: \`TIcu\`
	 */
	value: any;
	/**
	 * Attributes associated with an element. We need to store attributes to support various
	 * use-cases (attribute injection, content projection with selectors, directives matching).
	 * Attributes are stored statically because reading them from the DOM would be way too slow for
	 * content projection and queries.
	 *
	 * Since attrs will always be calculated first, they will never need to be marked undefined by
	 * other instructions.
	 *
	 * For regular attributes a name of an attribute and its value alternate in the array.
	 * e.g. ['role', 'checkbox']
	 * This array can contain flags that will indicate "special attributes" (attributes with
	 * namespaces, attributes extracted from bindings and outputs).
	 */
	attrs: TAttributes | null;
	/**
	 * Same as \`TNode.attrs\` but contains merged data across all directive host bindings.
	 *
	 * We need to keep \`attrs\` as unmerged so that it can be used for attribute selectors.
	 * We merge attrs here so that it can be used in a performant way for initial rendering.
	 *
	 * The \`attrs\` are merged in first pass in following order:
	 * - Component's \`hostAttrs\`
	 * - Directives' \`hostAttrs\`
	 * - Template \`TNode.attrs\` associated with the current \`TNode\`.
	 */
	mergedAttrs: TAttributes | null;
	/**
	 * A set of local names under which a given element is exported in a template and
	 * visible to queries. An entry in this array can be created for different reasons:
	 * - an element itself is referenced, ex.: \`<div #foo>\`
	 * - a component is referenced, ex.: \`<my-cmpt #foo>\`
	 * - a directive is referenced, ex.: \`<my-cmpt #foo="directiveExportAs">\`.
	 *
	 * A given element might have different local names and those names can be associated
	 * with a directive. We store local names at even indexes while odd indexes are reserved
	 * for directive index in a view (or \`-1\` if there is no associated directive).
	 *
	 * Some examples:
	 * - \`<div #foo>\` => \`["foo", -1]\`
	 * - \`<my-cmpt #foo>\` => \`["foo", myCmptIdx]\`
	 * - \`<my-cmpt #foo #bar="directiveExportAs">\` => \`["foo", myCmptIdx, "bar", directiveIdx]\`
	 * - \`<div #foo #bar="directiveExportAs">\` => \`["foo", -1, "bar", directiveIdx]\`
	 */
	localNames: (string | number)[] | null;
	/** Information about input properties that need to be set once from attribute data. */
	initialInputs: InitialInputData | null | undefined;
	/**
	 * Input data for all directives on this node. \`null\` means that there are no directives with
	 * inputs on this node.
	 */
	inputs: PropertyAliases | null;
	/**
	 * Output data for all directives on this node. \`null\` means that there are no directives with
	 * outputs on this node.
	 */
	outputs: PropertyAliases | null;
	/**
	 * The TView or TViews attached to this node.
	 *
	 * If this TNode corresponds to an LContainer with inline views, the container will
	 * need to store separate static data for each of its view blocks (TView[]). Otherwise,
	 * nodes in inline views with the same index as nodes in their parent views will overwrite
	 * each other, as they are in the same template.
	 *
	 * Each index in this array corresponds to the static data for a certain
	 * view. So if you had V(0) and V(1) in a container, you might have:
	 *
	 * [
	 *   [{tagName: 'div', attrs: ...}, null],     // V(0) TView
	 *   [{tagName: 'button', attrs ...}, null]    // V(1) TView
	 *
	 * If this TNode corresponds to an LContainer with a template (e.g. structural
	 * directive), the template's TView will be stored here.
	 *
	 * If this TNode corresponds to an element, tViews will be null .
	 */
	tViews: TView | TView[] | null;
	/**
	 * The next sibling node. Necessary so we can propagate through the root nodes of a view
	 * to insert them or remove them from the DOM.
	 */
	next: TNode | null;
	/**
	 * The next projected sibling. Since in Angular content projection works on the node-by-node
	 * basis the act of projecting nodes might change nodes relationship at the insertion point
	 * (target view). At the same time we need to keep initial relationship between nodes as
	 * expressed in content view.
	 */
	projectionNext: TNode | null;
	/**
	 * First child of the current node.
	 *
	 * For component nodes, the child will always be a ContentChild (in same view).
	 * For embedded view nodes, the child will be in their child view.
	 */
	child: TNode | null;
	/**
	 * Parent node (in the same view only).
	 *
	 * We need a reference to a node's parent so we can append the node to its parent's native
	 * element at the appropriate time.
	 *
	 * If the parent would be in a different view (e.g. component host), this property will be null.
	 * It's important that we don't try to cross component boundaries when retrieving the parent
	 * because the parent will change (e.g. index, attrs) depending on where the component was
	 * used (and thus shouldn't be stored on TNode). In these cases, we retrieve the parent through
	 * LView.node instead (which will be instance-specific).
	 *
	 * If this is an inline view node (V), the parent will be its container.
	 */
	parent: TElementNode | TContainerNode | null;
	/**
	 * List of projected TNodes for a given component host element OR index into the said nodes.
	 *
	 * For easier discussion assume this example:
	 * \`<parent>\`'s view definition:
	 * \`\`\`
	 * <child id="c1">content1</child>
	 * <child id="c2"><span>content2</span></child>
	 * \`\`\`
	 * \`<child>\`'s view definition:
	 * \`\`\`
	 * <ng-content id="cont1"></ng-content>
	 * \`\`\`
	 *
	 * If \`Array.isArray(projection)\` then \`TNode\` is a host element:
	 * - \`projection\` stores the content nodes which are to be projected.
	 *    - The nodes represent categories defined by the selector: For example:
	 *      \`<ng-content/><ng-content select="abc"/>\` would represent the heads for \`<ng-content/>\`
	 *      and \`<ng-content select="abc"/>\` respectively.
	 *    - The nodes we store in \`projection\` are heads only, we used \`.next\` to get their
	 *      siblings.
	 *    - The nodes \`.next\` is sorted/rewritten as part of the projection setup.
	 *    - \`projection\` size is equal to the number of projections \`<ng-content>\`. The size of
	 *      \`c1\` will be \`1\` because \`<child>\` has only one \`<ng-content>\`.
	 * - we store \`projection\` with the host (\`c1\`, \`c2\`) rather than the \`<ng-content>\` (\`cont1\`)
	 *   because the same component (\`<child>\`) can be used in multiple locations (\`c1\`, \`c2\`) and
	 * as a result have different set of nodes to project.
	 * - without \`projection\` it would be difficult to efficiently traverse nodes to be projected.
	 *
	 * If \`typeof projection == 'number'\` then \`TNode\` is a \`<ng-content>\` element:
	 * - \`projection\` is an index of the host's \`projection\`Nodes.
	 *   - This would return the first head node to project:
	 *     \`getHost(currentTNode).projection[currentTNode.projection]\`.
	 * - When projecting nodes the parent node retrieved may be a \`<ng-content>\` node, in which case
	 *   the process is recursive in nature.
	 *
	 * If \`projection\` is of type \`RNode[][]\` than we have a collection of native nodes passed as
	 * projectable nodes during dynamic component creation.
	 */
	projection: (TNode | RNode[])[] | number | null;
	/**
	 * A collection of all \`style\` static values for an element (including from host).
	 *
	 * This field will be populated if and when:
	 *
	 * - There are one or more initial \`style\`s on an element (e.g. \`<div style="width:200px;">\`)
	 * - There are one or more initial \`style\`s on a directive/component host
	 *   (e.g. \`@Directive({host: {style: "width:200px;" } }\`)
	 */
	styles: string | null;
	/**
	 * A collection of all \`style\` static values for an element excluding host sources.
	 *
	 * Populated when there are one or more initial \`style\`s on an element
	 * (e.g. \`<div style="width:200px;">\`)
	 * Must be stored separately from \`tNode.styles\` to facilitate setting directive
	 * inputs that shadow the \`style\` property. If we used \`tNode.styles\` as is for shadowed inputs,
	 * we would feed host styles back into directives as "inputs". If we used \`tNode.attrs\`, we
	 * would have to concatenate the attributes on every template pass. Instead, we process once on
	 * first create pass and store here.
	 */
	stylesWithoutHost: string | null;
	/**
	 * A \`KeyValueArray\` version of residual \`styles\`.
	 *
	 * When there are styling instructions than each instruction stores the static styling
	 * which is of lower priority than itself. This means that there may be a higher priority
	 * styling than the instruction.
	 *
	 * Imagine:
	 * \`\`\`
	 * <div style="color: highest;" my-dir>
	 *
	 * @Directive({
	 *   host: {
	 *     style: 'color: lowest; ',
	 *     '[styles.color]': 'exp' // ɵɵstyleProp('color', ctx.exp);
	 *   }
	 * })
	 * \`\`\`
	 *
	 * In the above case:
	 * - \`color: lowest\` is stored with \`ɵɵstyleProp('color', ctx.exp);\` instruction
	 * -  \`color: highest\` is the residual and is stored here.
	 *
	 * - \`undefined': not initialized.
	 * - \`null\`: initialized but \`styles\` is \`null\`
	 * - \`KeyValueArray\`: parsed version of \`styles\`.
	 */
	residualStyles: KeyValueArray<any> | undefined | null;
	/**
	 * A collection of all class static values for an element (including from host).
	 *
	 * This field will be populated if and when:
	 *
	 * - There are one or more initial classes on an element (e.g. \`<div class="one two three">\`)
	 * - There are one or more initial classes on an directive/component host
	 *   (e.g. \`@Directive({host: {class: "SOME_CLASS" } }\`)
	 */
	classes: string | null;
	/**
	 * A collection of all class static values for an element excluding host sources.
	 *
	 * Populated when there are one or more initial classes on an element
	 * (e.g. \`<div class="SOME_CLASS">\`)
	 * Must be stored separately from \`tNode.classes\` to facilitate setting directive
	 * inputs that shadow the \`class\` property. If we used \`tNode.classes\` as is for shadowed
	 * inputs, we would feed host classes back into directives as "inputs". If we used
	 * \`tNode.attrs\`, we would have to concatenate the attributes on every template pass. Instead,
	 * we process once on first create pass and store here.
	 */
	classesWithoutHost: string | null;
	/**
	 * A \`KeyValueArray\` version of residual \`classes\`.
	 *
	 * Same as \`TNode.residualStyles\` but for classes.
	 *
	 * - \`undefined': not initialized.
	 * - \`null\`: initialized but \`classes\` is \`null\`
	 * - \`KeyValueArray\`: parsed version of \`classes\`.
	 */
	residualClasses: KeyValueArray<any> | undefined | null;
	/**
	 * Stores the head/tail index of the class bindings.
	 *
	 * - If no bindings, the head and tail will both be 0.
	 * - If there are template bindings, stores the head/tail of the class bindings in the template.
	 * - If no template bindings but there are host bindings, the head value will point to the last
	 *   host binding for "class" (not the head of the linked list), tail will be 0.
	 *
	 * See: \`style_binding_list.ts\` for details.
	 *
	 * This is used by \`insertTStylingBinding\` to know where the next styling binding should be
	 * inserted so that they can be sorted in priority order.
	 */
	classBindings: TStylingRange;
	/**
	 * Stores the head/tail index of the class bindings.
	 *
	 * - If no bindings, the head and tail will both be 0.
	 * - If there are template bindings, stores the head/tail of the style bindings in the template.
	 * - If no template bindings but there are host bindings, the head value will point to the last
	 *   host binding for "style" (not the head of the linked list), tail will be 0.
	 *
	 * See: \`style_binding_list.ts\` for details.
	 *
	 * This is used by \`insertTStylingBinding\` to know where the next styling binding should be
	 * inserted so that they can be sorted in priority order.
	 */
	styleBindings: TStylingRange;
}

/**
 * Corresponds to the TNode.flags property.
 */
declare const enum TNodeFlags {
	/** Bit #1 - This bit is set if the node is a host for any directive (including a component) */
	isDirectiveHost = 1,
	/**
	 * Bit #2 - This bit is set if the node is a host for a component.
	 *
	 * Setting this bit implies that the \`isDirectiveHost\` bit is set as well.
	 * */
	isComponentHost = 2,
	/** Bit #3 - This bit is set if the node has been projected */
	isProjected = 4,
	/** Bit #4 - This bit is set if any directive on this node has content queries */
	hasContentQuery = 8,
	/** Bit #5 - This bit is set if the node has any "class" inputs */
	hasClassInput = 16,
	/** Bit #6 - This bit is set if the node has any "style" inputs */
	hasStyleInput = 32,
	/** Bit #7 This bit is set if the node has been detached by i18n */
	isDetached = 64,
	/**
	 * Bit #8 - This bit is set if the node has directives with host bindings.
	 *
	 * This flags allows us to guard host-binding logic and invoke it only on nodes
	 * that actually have directives with host bindings.
	 */
	hasHostBindings = 128
}

/**
 * Corresponds to the TNode.providerIndexes property.
 */
declare const enum TNodeProviderIndexes {
	/** The index of the first provider on this node is encoded on the least significant bits. */
	ProvidersStartIndexMask = 1048575,
	/**
	 * The count of view providers from the component on this node is
	 * encoded on the 20 most significant bits.
	 */
	CptViewProvidersCountShift = 20,
	CptViewProvidersCountShifter = 1048576
}

/**
 * TNodeType corresponds to the {@link TNode} \`type\` property.
 *
 * NOTE: type IDs are such that we use each bit to denote a type. This is done so that we can easily
 * check if the \`TNode\` is of more than one type.
 *
 * \`if (tNode.type === TNodeType.Text || tNode.type === TNode.Element)\`
 * can be written as:
 * \`if (tNode.type & (TNodeType.Text | TNodeType.Element))\`
 *
 * However any given \`TNode\` can only be of one type.
 */
declare const enum TNodeType {
	/**
	 * The TNode contains information about a DOM element aka {@link RText}.
	 */
	Text = 1,
	/**
	 * The TNode contains information about a DOM element aka {@link RElement}.
	 */
	Element = 2,
	/**
	 * The TNode contains information about an {@link LContainer} for embedded views.
	 */
	Container = 4,
	/**
	 * The TNode contains information about an \`<ng-container>\` element {@link RNode}.
	 */
	ElementContainer = 8,
	/**
	 * The TNode contains information about an \`<ng-content>\` projection
	 */
	Projection = 16,
	/**
	 * The TNode contains information about an ICU comment used in \`i18n\`.
	 */
	Icu = 32,
	/**
	 * Special node type representing a placeholder for future \`TNode\` at this location.
	 *
	 * I18n translation blocks are created before the element nodes which they contain. (I18n blocks
	 * can span over many elements.) Because i18n \`TNode\`s (representing text) are created first they
	 * often may need to point to element \`TNode\`s which are not yet created. In such a case we create
	 * a \`Placeholder\` \`TNode\`. This allows the i18n to structurally link the \`TNode\`s together
	 * without knowing any information about the future nodes which will be at that location.
	 *
	 * On \`firstCreatePass\` When element instruction executes it will try to create a \`TNode\` at that
	 * location. Seeing a \`Placeholder\` \`TNode\` already there tells the system that it should reuse
	 * existing \`TNode\` (rather than create a new one) and just update the missing information.
	 */
	Placeholder = 64,
	AnyRNode = 3,
	AnyContainer = 12
}

/**
 * Type representing a set of TNodes that can have local refs (\`#foo\`) placed on them.
 */
declare type TNodeWithLocalRefs = TContainerNode | TElementNode | TElementContainerNode;

/** Static data for an LProjectionNode  */
declare interface TProjectionNode extends TNode {
	/** Index in the data[] array */
	child: null;
	/**
	 * Projection nodes will have parents unless they are the first node of a component
	 * or embedded view (which means their parent is in a different view and must be
	 * retrieved using LView.node).
	 */
	parent: TElementNode | TElementContainerNode | null;
	tViews: null;
	/** Index of the projection node. (See TNode.projection for more info.) */
	projection: number;
	value: null;
}

/**
 * TQueries represent a collection of individual TQuery objects tracked in a given view. Most of the
 * methods on this interface are simple proxy methods to the corresponding functionality on TQuery.
 */
declare interface TQueries {
	/**
	 * Adds a new TQuery to a collection of queries tracked in a given view.
	 * @param tQuery
	 */
	track(tQuery: TQuery): void;
	/**
	 * Returns a TQuery instance for at the given index  in the queries array.
	 * @param index
	 */
	getByIndex(index: number): TQuery;
	/**
	 * Returns the number of queries tracked in a given view.
	 */
	length: number;
	/**
	 * A proxy method that iterates over all the TQueries in a given TView and calls the corresponding
	 * \`elementStart\` on each and every TQuery.
	 * @param tView
	 * @param tNode
	 */
	elementStart(tView: TView, tNode: TNode): void;
	/**
	 * A proxy method that iterates over all the TQueries in a given TView and calls the corresponding
	 * \`elementEnd\` on each and every TQuery.
	 * @param tNode
	 */
	elementEnd(tNode: TNode): void;
	/**
	 * A proxy method that iterates over all the TQueries in a given TView and calls the corresponding
	 * \`template\` on each and every TQuery.
	 * @param tView
	 * @param tNode
	 */
	template(tView: TView, tNode: TNode): void;
	/**
	 * A proxy method that iterates over all the TQueries in a given TView and calls the corresponding
	 * \`embeddedTView\` on each and every TQuery.
	 * @param tNode
	 */
	embeddedTView(tNode: TNode): TQueries | null;
}

/**
 * TQuery objects represent all the query-related data that remain the same from one view instance
 * to another and can be determined on the very first template pass. Most notably TQuery holds all
 * the matches for a given view.
 */
declare interface TQuery {
	/**
	 * Query metadata extracted from query annotations.
	 */
	metadata: TQueryMetadata;
	/**
	 * Index of a query in a declaration view in case of queries propagated to en embedded view, -1
	 * for queries declared in a given view. We are storing this index so we can find a parent query
	 * to clone for an embedded view (when an embedded view is created).
	 */
	indexInDeclarationView: number;
	/**
	 * Matches collected on the first template pass. Each match is a pair of:
	 * - TNode index;
	 * - match index;
	 *
	 * A TNode index can be either:
	 * - a positive number (the most common case) to indicate a matching TNode;
	 * - a negative number to indicate that a given query is crossing a <ng-template> element and
	 * results from views created based on TemplateRef should be inserted at this place.
	 *
	 * A match index is a number used to find an actual value (for a given node) when query results
	 * are materialized. This index can have one of the following values:
	 * - -2 - indicates that we need to read a special token (TemplateRef, ViewContainerRef etc.);
	 * - -1 - indicates that we need to read a default value based on the node type (TemplateRef for
	 * ng-template and ElementRef for other elements);
	 * - a positive number - index of an injectable to be read from the element injector.
	 */
	matches: number[] | null;
	/**
	 * A flag indicating if a given query crosses an <ng-template> element. This flag exists for
	 * performance reasons: we can notice that queries not crossing any <ng-template> elements will
	 * have matches from a given view only (and adapt processing accordingly).
	 */
	crossesNgTemplate: boolean;
	/**
	 * A method call when a given query is crossing an element (or element container). This is where a
	 * given TNode is matched against a query predicate.
	 * @param tView
	 * @param tNode
	 */
	elementStart(tView: TView, tNode: TNode): void;
	/**
	 * A method called when processing the elementEnd instruction - this is mostly useful to determine
	 * if a given content query should match any nodes past this point.
	 * @param tNode
	 */
	elementEnd(tNode: TNode): void;
	/**
	 * A method called when processing the template instruction. This is where a
	 * given TContainerNode is matched against a query predicate.
	 * @param tView
	 * @param tNode
	 */
	template(tView: TView, tNode: TNode): void;
	/**
	 * A query-related method called when an embedded TView is created based on the content of a
	 * <ng-template> element. We call this method to determine if a given query should be propagated
	 * to the embedded view and if so - return a cloned TQuery for this embedded view.
	 * @param tNode
	 * @param childQueryIndex
	 */
	embeddedTView(tNode: TNode, childQueryIndex: number): TQuery | null;
}

/**
 * An object representing query metadata extracted from query annotations.
 */
declare interface TQueryMetadata {
	predicate: ProviderToken<unknown> | string[];
	read: any;
	flags: QueryFlags;
}

/**
 * A function optionally passed into the \`NgForOf\` directive to customize how \`NgForOf\` uniquely
 * identifies items in an iterable.
 *
 * \`NgForOf\` needs to uniquely identify items in the iterable to correctly perform DOM updates
 * when items in the iterable are reordered, new items are added, or existing items are removed.
 *
 *
 * In all of these scenarios it is usually desirable to only update the DOM elements associated
 * with the items affected by the change. This behavior is important to:
 *
 * - preserve any DOM-specific UI state (like cursor position, focus, text selection) when the
 *   iterable is modified
 * - enable animation of item addition, removal, and iterable reordering
 * - preserve the value of the \`<select>\` element when nested \`<option>\` elements are dynamically
 *   populated using \`NgForOf\` and the bound iterable is updated
 *
 * A common use for custom \`trackBy\` functions is when the model that \`NgForOf\` iterates over
 * contains a property with a unique identifier. For example, given a model:
 *
 * \`\`\`ts
 * class User {
 *   id: number;
 *   name: string;
 *   ...
 * }
 * \`\`\`
 * a custom \`trackBy\` function could look like the following:
 * \`\`\`ts
 * function userTrackBy(index, user) {
 *   return user.id;
 * }
 * \`\`\`
 *
 * A custom \`trackBy\` function must have several properties:
 *
 * - be [idempotent](https://en.wikipedia.org/wiki/Idempotence) (be without side effects, and always
 * return the same value for a given input)
 * - return unique value for all unique inputs
 * - be fast
 *
 * @see [\`NgForOf#ngForTrackBy\`](api/common/NgForOf#ngForTrackBy)
 * @publicApi
 */
export declare interface TrackByFunction<T> {
	/**
	 * @param index The index of the item within the iterable.
	 * @param item The item in the iterable.
	 */
	<U extends T>(index: number, item: T & U): any;
}

/**
 * Use this token at bootstrap to provide the content of your translation file (\`xtb\`,
 * \`xlf\` or \`xlf2\`) when you want to translate your application in another language.
 *
 * See the [i18n guide](guide/i18n-common-merge) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * \`\`\`typescript
 * import { TRANSLATIONS } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * // content of your translation file
 * const translations = '....';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: TRANSLATIONS, useValue: translations }]
 * });
 * \`\`\`
 *
 * @publicApi
 */
export declare const TRANSLATIONS: InjectionToken<string>;

/**
 * Provide this token at bootstrap to set the format of your {@link TRANSLATIONS}: \`xtb\`,
 * \`xlf\` or \`xlf2\`.
 *
 * See the [i18n guide](guide/i18n-common-merge) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * \`\`\`typescript
 * import { TRANSLATIONS_FORMAT } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }]
 * });
 * \`\`\`
 *
 * @publicApi
 */
export declare const TRANSLATIONS_FORMAT: InjectionToken<string>;

declare const TRANSPLANTED_VIEWS_TO_REFRESH = 5;


/**
 * @fileoverview
 * While Angular only uses Trusted Types internally for the time being,
 * references to Trusted Types could leak into our core.d.ts, which would force
 * anyone compiling against @angular/core to provide the @types/trusted-types
 * package in their compilation unit.
 *
 * Until https://github.com/microsoft/TypeScript/issues/30024 is resolved, we
 * will keep Angular's public API surface free of references to Trusted Types.
 * For internal and semi-private APIs that need to reference Trusted Types, the
 * minimal type definitions for the Trusted Types API provided by this module
 * should be used instead. They are marked as "declare" to prevent them from
 * being renamed by compiler optimization.
 *
 * Adapted from
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/trusted-types/index.d.ts
 * but restricted to the API surface used within Angular.
 */
declare interface TrustedHTML {
	__brand__: 'TrustedHTML';
}

declare interface TrustedScript {
	__brand__: 'TrustedScript';
}

declare interface TrustedScriptURL {
	__brand__: 'TrustedScriptURL';
}

/**
 * Value stored in the \`TData\` which is needed to re-concatenate the styling.
 *
 * See: \`TStylingKeyPrimitive\` and \`TStylingStatic\`
 */
declare type TStylingKey = TStylingKeyPrimitive | TStylingStatic;

/**
 * The primitive portion (\`TStylingStatic\` removed) of the value stored in the \`TData\` which is
 * needed to re-concatenate the styling.
 *
 * - \`string\`: Stores the property name. Used with \`ɵɵstyleProp\`/\`ɵɵclassProp\` instruction.
 * - \`null\`: Represents map, so there is no name. Used with \`ɵɵstyleMap\`/\`ɵɵclassMap\`.
 * - \`false\`: Represents an ignore case. This happens when \`ɵɵstyleProp\`/\`ɵɵclassProp\` instruction
 *   is combined with directive which shadows its input \`@Input('class')\`. That way the binding
 *   should not participate in the styling resolution.
 */
declare type TStylingKeyPrimitive = string | null | false;

/**
 * This is a branded number which contains previous and next index.
 *
 * When we come across styling instructions we need to store the \`TStylingKey\` in the correct
 * order so that we can re-concatenate the styling value in the desired priority.
 *
 * The insertion can happen either at the:
 * - end of template as in the case of coming across additional styling instruction in the template
 * - in front of the template in the case of coming across additional instruction in the
 *   \`hostBindings\`.
 *
 * We use \`TStylingRange\` to store the previous and next index into the \`TData\` where the template
 * bindings can be found.
 *
 * - bit 0 is used to mark that the previous index has a duplicate for current value.
 * - bit 1 is used to mark that the next index has a duplicate for the current value.
 * - bits 2-16 are used to encode the next/tail of the template.
 * - bits 17-32 are used to encode the previous/head of template.
 *
 * NODE: *duplicate* false implies that it is statically known that this binding will not collide
 * with other bindings and therefore there is no need to check other bindings. For example the
 * bindings in \`<div [style.color]="exp" [style.width]="exp">\` will never collide and will have
 * their bits set accordingly. Previous duplicate means that we may need to check previous if the
 * current binding is \`null\`. Next duplicate means that we may need to check next bindings if the
 * current binding is not \`null\`.
 *
 * NOTE: \`0\` has special significance and represents \`null\` as in no additional pointer.
 */
declare interface TStylingRange {
	__brand__: 'TStylingRange';
}

/**
 * Store the static values for the styling binding.
 *
 * The \`TStylingStatic\` is just \`KeyValueArray\` where key \`""\` (stored at location 0) contains the
 * \`TStylingKey\` (stored at location 1). In other words this wraps the \`TStylingKey\` such that the
 * \`""\` contains the wrapped value.
 *
 * When instructions are resolving styling they may need to look forward or backwards in the linked
 * list to resolve the value. For this reason we have to make sure that he linked list also contains
 * the static values. However the list only has space for one item per styling instruction. For this
 * reason we store the static values here as part of the \`TStylingKey\`. This means that the
 * resolution function when looking for a value needs to first look at the binding value, and than
 * at \`TStylingKey\` (if it exists).
 *
 * Imagine we have:
 *
 * \`\`\`
 * <div class="TEMPLATE" my-dir>
 *
 * @Directive({
 *   host: {
 *     class: 'DIR',
 *     '[class.dynamic]': 'exp' // ɵɵclassProp('dynamic', ctx.exp);
 *   }
 * })
 * \`\`\`
 *
 * In the above case the linked list will contain one item:
 *
 * \`\`\`
 *   // assume binding location: 10 for \`ɵɵclassProp('dynamic', ctx.exp);\`
 *   tData[10] = <TStylingStatic>[
 *     '': 'dynamic', // This is the wrapped value of \`TStylingKey\`
 *     'DIR': true,   // This is the default static value of directive binding.
 *   ];
 *   tData[10 + 1] = 0; // We don't have prev/next.
 *
 *   lView[10] = undefined;     // assume \`ctx.exp\` is \`undefined\`
 *   lView[10 + 1] = undefined; // Just normalized \`lView[10]\`
 * \`\`\`
 *
 * So when the function is resolving styling value, it first needs to look into the linked list
 * (there is none) and than into the static \`TStylingStatic\` too see if there is a default value for
 * \`dynamic\` (there is not). Therefore it is safe to remove it.
 *
 * If setting \`true\` case:
 * \`\`\`
 *   lView[10] = true;     // assume \`ctx.exp\` is \`true\`
 *   lView[10 + 1] = true; // Just normalized \`lView[10]\`
 * \`\`\`
 * So when the function is resolving styling value, it first needs to look into the linked list
 * (there is none) and than into \`TNode.residualClass\` (TNode.residualStyle) which contains
 * \`\`\`
 *   tNode.residualClass = [
 *     'TEMPLATE': true,
 *   ];
 * \`\`\`
 *
 * This means that it is safe to add class.
 */
declare interface TStylingStatic extends KeyValueArray<any> {
}

/** Static data for a text node */
declare interface TTextNode extends TNode {
	/** Index in the data[] array */
	index: number;
	child: null;
	/**
	 * Text nodes will have parents unless they are the first node of a component or
	 * embedded view (which means their parent is in a different view and must be
	 * retrieved using LView.node).
	 */
	parent: TElementNode | TElementContainerNode | null;
	tViews: null;
	projection: null;
}

declare const TVIEW = 1;

/**
 * The static data for an LView (shared between all templates of a
 * given type).
 *
 * Stored on the \`ComponentDef.tView\`.
 */
declare interface TView {
	/**
	 * Type of \`TView\` (\`Root\`|\`Component\`|\`Embedded\`).
	 */
	type: TViewType;
	/**
	 * This is a blueprint used to generate LView instances for this TView. Copying this
	 * blueprint is faster than creating a new LView from scratch.
	 */
	blueprint: LView;
	/**
	 * The template function used to refresh the view of dynamically created views
	 * and components. Will be null for inline views.
	 */
	template: ComponentTemplate<{}> | null;
	/**
	 * A function containing query-related instructions.
	 */
	viewQuery: ViewQueriesFunction<{}> | null;
	/**
	 * A \`TNode\` representing the declaration location of this \`TView\` (not part of this TView).
	 */
	declTNode: TNode | null;
	/** Whether or not this template has been processed in creation mode. */
	firstCreatePass: boolean;
	/**
	 *  Whether or not this template has been processed in update mode (e.g. change detected)
	 *
	 * \`firstUpdatePass\` is used by styling to set up \`TData\` to contain metadata about the styling
	 * instructions. (Mainly to build up a linked list of styling priority order.)
	 *
	 * Typically this function gets cleared after first execution. If exception is thrown then this
	 * flag can remain turned un until there is first successful (no exception) pass. This means that
	 * individual styling instructions keep track of if they have already been added to the linked
	 * list to prevent double adding.
	 */
	firstUpdatePass: boolean;
	/** Static data equivalent of LView.data[]. Contains TNodes, PipeDefInternal or TI18n. */
	data: TData;
	/**
	 * The binding start index is the index at which the data array
	 * starts to store bindings only. Saving this value ensures that we
	 * will begin reading bindings at the correct point in the array when
	 * we are in update mode.
	 *
	 * -1 means that it has not been initialized.
	 */
	bindingStartIndex: number;
	/**
	 * The index where the "expando" section of \`LView\` begins. The expando
	 * section contains injectors, directive instances, and host binding values.
	 * Unlike the "decls" and "vars" sections of \`LView\`, the length of this
	 * section cannot be calculated at compile-time because directives are matched
	 * at runtime to preserve locality.
	 *
	 * We store this start index so we know where to start checking host bindings
	 * in \`setHostBindings\`.
	 */
	expandoStartIndex: number;
	/**
	 * Whether or not there are any static view queries tracked on this view.
	 *
	 * We store this so we know whether or not we should do a view query
	 * refresh after creation mode to collect static query results.
	 */
	staticViewQueries: boolean;
	/**
	 * Whether or not there are any static content queries tracked on this view.
	 *
	 * We store this so we know whether or not we should do a content query
	 * refresh after creation mode to collect static query results.
	 */
	staticContentQueries: boolean;
	/**
	 * A reference to the first child node located in the view.
	 */
	firstChild: TNode | null;
	/**
	 * Stores the OpCodes to be replayed during change-detection to process the \`HostBindings\`
	 *
	 * See \`HostBindingOpCodes\` for encoding details.
	 */
	hostBindingOpCodes: HostBindingOpCodes | null;
	/**
	 * Full registry of directives and components that may be found in this view.
	 *
	 * It's necessary to keep a copy of the full def list on the TView so it's possible
	 * to render template functions without a host component.
	 */
	directiveRegistry: DirectiveDefList | null;
	/**
	 * Full registry of pipes that may be found in this view.
	 *
	 * The property is either an array of \`PipeDefs\`s or a function which returns the array of
	 * \`PipeDefs\`s. The function is necessary to be able to support forward declarations.
	 *
	 * It's necessary to keep a copy of the full def list on the TView so it's possible
	 * to render template functions without a host component.
	 */
	pipeRegistry: PipeDefList | null;
	/**
	 * Array of ngOnInit, ngOnChanges and ngDoCheck hooks that should be executed for this view in
	 * creation mode.
	 *
	 * This array has a flat structure and contains TNode indices, directive indices (where an
	 * instance can be found in \`LView\`) and hook functions. TNode index is followed by the directive
	 * index and a hook function. If there are multiple hooks for a given TNode, the TNode index is
	 * not repeated and the next lifecycle hook information is stored right after the previous hook
	 * function. This is done so that at runtime the system can efficiently iterate over all of the
	 * functions to invoke without having to make any decisions/lookups.
	 */
	preOrderHooks: HookData | null;
	/**
	 * Array of ngOnChanges and ngDoCheck hooks that should be executed for this view in update mode.
	 *
	 * This array has the same structure as the \`preOrderHooks\` one.
	 */
	preOrderCheckHooks: HookData | null;
	/**
	 * Array of ngAfterContentInit and ngAfterContentChecked hooks that should be executed
	 * for this view in creation mode.
	 *
	 * Even indices: Directive index
	 * Odd indices: Hook function
	 */
	contentHooks: HookData | null;
	/**
	 * Array of ngAfterContentChecked hooks that should be executed for this view in update
	 * mode.
	 *
	 * Even indices: Directive index
	 * Odd indices: Hook function
	 */
	contentCheckHooks: HookData | null;
	/**
	 * Array of ngAfterViewInit and ngAfterViewChecked hooks that should be executed for
	 * this view in creation mode.
	 *
	 * Even indices: Directive index
	 * Odd indices: Hook function
	 */
	viewHooks: HookData | null;
	/**
	 * Array of ngAfterViewChecked hooks that should be executed for this view in
	 * update mode.
	 *
	 * Even indices: Directive index
	 * Odd indices: Hook function
	 */
	viewCheckHooks: HookData | null;
	/**
	 * Array of ngOnDestroy hooks that should be executed when this view is destroyed.
	 *
	 * Even indices: Directive index
	 * Odd indices: Hook function
	 */
	destroyHooks: DestroyHookData | null;
	/**
	 * When a view is destroyed, listeners need to be released and outputs need to be
	 * unsubscribed. This cleanup array stores both listener data (in chunks of 4)
	 * and output data (in chunks of 2) for a particular view. Combining the arrays
	 * saves on memory (70 bytes per array) and on a few bytes of code size (for two
	 * separate for loops).
	 *
	 * If it's a native DOM listener or output subscription being stored:
	 * 1st index is: event name  \`name = tView.cleanup[i+0]\`
	 * 2nd index is: index of native element or a function that retrieves global target (window,
	 *               document or body) reference based on the native element:
	 *    \`typeof idxOrTargetGetter === 'function'\`: global target getter function
	 *    \`typeof idxOrTargetGetter === 'number'\`: index of native element
	 *
	 * 3rd index is: index of listener function \`listener = lView[CLEANUP][tView.cleanup[i+2]]\`
	 * 4th index is: \`useCaptureOrIndx = tView.cleanup[i+3]\`
	 *    \`typeof useCaptureOrIndx == 'boolean' : useCapture boolean
	 *    \`typeof useCaptureOrIndx == 'number':
	 *         \`useCaptureOrIndx >= 0\` \`removeListener = LView[CLEANUP][useCaptureOrIndx]\`
	 *         \`useCaptureOrIndx <  0\` \`subscription = LView[CLEANUP][-useCaptureOrIndx]\`
	 *
	 * If it's an output subscription or query list destroy hook:
	 * 1st index is: output unsubscribe function / query list destroy function
	 * 2nd index is: index of function context in LView.cleanupInstances[]
	 *               \`tView.cleanup[i+0].call(lView[CLEANUP][tView.cleanup[i+1]])\`
	 */
	cleanup: any[] | null;
	/**
	 * A list of element indices for child components that will need to be
	 * refreshed when the current view has finished its check. These indices have
	 * already been adjusted for the HEADER_OFFSET.
	 *
	 */
	components: number[] | null;
	/**
	 * A collection of queries tracked in a given view.
	 */
	queries: TQueries | null;
	/**
	 * An array of indices pointing to directives with content queries alongside with the
	 * corresponding query index. Each entry in this array is a tuple of:
	 * - index of the first content query index declared by a given directive;
	 * - index of a directive.
	 *
	 * We are storing those indexes so we can refresh content queries as part of a view refresh
	 * process.
	 */
	contentQueries: number[] | null;
	/**
	 * Set of schemas that declare elements to be allowed inside the view.
	 */
	schemas: SchemaMetadata[] | null;
	/**
	 * Array of constants for the view. Includes attribute arrays, local definition arrays etc.
	 * Used for directive matching, attribute bindings, local definitions and more.
	 */
	consts: TConstants | null;
	/**
	 * Indicates that there was an error before we managed to complete the first create pass of the
	 * view. This means that the view is likely corrupted and we should try to recover it.
	 */
	incompleteFirstPass: boolean;
}

/**
 * Explicitly marks \`TView\` as a specific type in \`ngDevMode\`
 *
 * It is useful to know conceptually what time of \`TView\` we are dealing with when
 * debugging an application (even if the runtime does not need it.) For this reason
 * we store this information in the \`ngDevMode\` \`TView\` and than use it for
 * better debugging experience.
 */
declare const enum TViewType {
	/**
	 * Root \`TView\` is the used to bootstrap components into. It is used in conjunction with
	 * \`LView\` which takes an existing DOM node not owned by Angular and wraps it in \`TView\`/\`LView\`
	 * so that other components can be loaded into it.
	 */
	Root = 0,
	/**
	 * \`TView\` associated with a Component. This would be the \`TView\` directly associated with the
	 * component view (as opposed an \`Embedded\` \`TView\` which would be a child of \`Component\` \`TView\`)
	 */
	Component = 1,
	/**
	 * \`TView\` associated with a template. Such as \`*ngIf\`, \`<ng-template>\` etc... A \`Component\`
	 * can have zero or more \`Embedded\` \`TView\`s.
	 */
	Embedded = 2
}

/**
 * Special location which allows easy identification of type. If we have an array which was
 * retrieved from the \`LView\` and that array has \`true\` at \`TYPE\` location, we know it is
 * \`LContainer\`.
 */
declare const TYPE = 1;

/**
 * @description
 *
 * Represents a type that a Component or other object is instances of.
 *
 * An example of a \`Type\` is \`MyCustomComponent\` class, which in JavaScript is represented by
 * the \`MyCustomComponent\` constructor function.
 *
 * @publicApi
 */
export declare const Type: FunctionConstructor;

export declare interface Type<T> extends Function {
	new(...args: any[]): T;
}

declare type Type_2 = Function;

/**
 * An interface implemented by all Angular type decorators, which allows them to be used as
 * decorators as well as Angular syntax.
 *
 * \`\`\`
 * @ng.Component({...})
 * class MyClass {...}
 * \`\`\`
 *
 * @publicApi
 */
export declare interface TypeDecorator {
	/**
	 * Invoke as decorator.
	 */
	<T extends Type<any>>(type: T): T;
	(target: Object, propertyKey?: string | symbol, parameterIndex?: number): void;
}

declare type TypeOrFactory<T> = T | (() => T);

/**
 * Configures the \`Injector\` to return an instance of \`Type\` when \`Type' is used as the token.
 *
 * Create an instance by invoking the \`new\` operator and supplying additional arguments.
 * This form is a short form of \`TypeProvider\`;
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * {@example core/di/ts/provider_spec.ts region='TypeProvider'}
 *
 * @publicApi
 */
export declare interface TypeProvider extends Type<any> {
}

/**
 * Configures the \`Injector\` to return a value for a token.
 * @see ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ValueProvider'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 *
 * @publicApi
 */
export declare interface ValueProvider extends ValueSansProvider {
	/**
	 * An injection token. Typically an instance of \`Type\` or \`InjectionToken\`, but can be \`any\`.
	 */
	provide: any;
	/**
	 * When true, injector returns an array of instances. This is useful to allow multiple
	 * providers spread across many files to provide configuration information to a common token.
	 */
	multi?: boolean;
}

/**
 * Configures the \`Injector\` to return a value for a token.
 * Base for \`ValueProvider\` decorator.
 *
 * @publicApi
 */
export declare interface ValueSansProvider {
	/**
	 * The value to inject.
	 */
	useValue: any;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;


/**
 * @description Represents the version of Angular
 *
 * @publicApi
 */
export declare class Version {
	full: string;
	readonly major: string;
	readonly minor: string;
	readonly patch: string;
	constructor(full: string);
}

declare const VIEW_REFS = 8;

/**
 * Type of the ViewChild metadata.
 *
 * @publicApi
 */
export declare type ViewChild = Query;

/**
 * ViewChild decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const ViewChild: ViewChildDecorator;

/**
 * Type of the ViewChild decorator / constructor function.
 *
 * @see \`ViewChild\`.
 * @publicApi
 */
export declare interface ViewChildDecorator {
	/**
	 * @description
	 * Property decorator that configures a view query.
	 * The change detector looks for the first element or the directive matching the selector
	 * in the view DOM. If the view DOM changes, and a new child matches the selector,
	 * the property is updated.
	 *
	 * View queries are set before the \`ngAfterViewInit\` callback is called.
	 *
	 * **Metadata Properties**:
	 *
	 * * **selector** - The directive type or the name used for querying.
	 * * **read** - Used to read a different token from the queried elements.
	 * * **static** - True to resolve query results before change detection runs,
	 * false to resolve after change detection. Defaults to false.
	 *
	 *
	 * The following selectors are supported.
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * A template reference variable as a string (e.g. query \`<my-component #cmp></my-component>\`
	 * with \`@ViewChild('cmp')\`)
	 *   * Any provider defined in the child component tree of the current component (e.g.
	 * \`@ViewChild(SomeService) someService: SomeService\`)
	 *   * Any provider defined through a string token (e.g. \`@ViewChild('someToken') someTokenVal:
	 * any\`)
	 *   * A \`TemplateRef\` (e.g. query \`<ng-template></ng-template>\` with \`@ViewChild(TemplateRef)
	 * template;\`)
	 *
	 * The following values are supported by \`read\`:
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * Any provider defined on the injector of the component that is matched by the \`selector\` of
	 * this query
	 *   * Any provider defined through a string token (e.g. \`{provide: 'token', useValue: 'val'}\`)
	 *   * \`TemplateRef\`, \`ElementRef\`, and \`ViewContainerRef\`
	 *
	 * @usageNotes
	 *
	 * {@example core/di/ts/viewChild/view_child_example.ts region='Component'}
	 *
	 * ### Example 2
	 *
	 * {@example core/di/ts/viewChild/view_child_howto.ts region='HowTo'}
	 *
	 * @Annotation
	 */
	(selector: ProviderToken<unknown> | Function | string, opts?: {
		read?: any;
		static?: boolean;
	}): any;
	new(selector: ProviderToken<unknown> | Function | string, opts?: {
		read?: any;
		static?: boolean;
	}): ViewChild;
}

/**
 * Type of the ViewChildren metadata.
 *
 * @publicApi
 */
export declare type ViewChildren = Query;

/**
 * ViewChildren decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export declare const ViewChildren: ViewChildrenDecorator;

/**
 * Type of the ViewChildren decorator / constructor function.
 *
 * @see \`ViewChildren\`.
 *
 * @publicApi
 */
export declare interface ViewChildrenDecorator {
	/**
	 * @description
	 * Property decorator that configures a view query.
	 *
	 * Use to get the \`QueryList\` of elements or directives from the view DOM.
	 * Any time a child element is added, removed, or moved, the query list will be updated,
	 * and the changes observable of the query list will emit a new value.
	 *
	 * View queries are set before the \`ngAfterViewInit\` callback is called.
	 *
	 * **Metadata Properties**:
	 *
	 * * **selector** - The directive type or the name used for querying.
	 * * **read** - Used to read a different token from the queried elements.
	 * * **emitDistinctChangesOnly** - The \` QueryList#changes\` observable will emit new values only
	 *   if the QueryList result has changed. When \`false\` the \`changes\` observable might emit even
	 *   if the QueryList has not changed.
	 *   ** Note: *** This config option is **deprecated**, it will be permanently set to \`true\` and
	 * removed in future versions of Angular.
	 *
	 * The following selectors are supported.
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * A template reference variable as a string (e.g. query \`<my-component #cmp></my-component>\`
	 * with \`@ViewChildren('cmp')\`)
	 *   * Any provider defined in the child component tree of the current component (e.g.
	 * \`@ViewChildren(SomeService) someService!: SomeService\`)
	 *   * Any provider defined through a string token (e.g. \`@ViewChildren('someToken')
	 * someTokenVal!: any\`)
	 *   * A \`TemplateRef\` (e.g. query \`<ng-template></ng-template>\` with \`@ViewChildren(TemplateRef)
	 * template;\`)
	 *
	 * In addition, multiple string selectors can be separated with a comma (e.g.
	 * \`@ViewChildren('cmp1,cmp2')\`)
	 *
	 * The following values are supported by \`read\`:
	 *   * Any class with the \`@Component\` or \`@Directive\` decorator
	 *   * Any provider defined on the injector of the component that is matched by the \`selector\` of
	 * this query
	 *   * Any provider defined through a string token (e.g. \`{provide: 'token', useValue: 'val'}\`)
	 *   * \`TemplateRef\`, \`ElementRef\`, and \`ViewContainerRef\`
	 *
	 * @usageNotes
	 *
	 * {@example core/di/ts/viewChildren/view_children_howto.ts region='HowTo'}
	 *
	 * ### Another example
	 *
	 * {@example core/di/ts/viewChildren/view_children_example.ts region='Component'}
	 *
	 * @Annotation
	 */
	(selector: ProviderToken<unknown> | Function | string, opts?: {
		read?: any;
		emitDistinctChangesOnly?: boolean;
	}): any;
	new(selector: ProviderToken<unknown> | Function | string, opts?: {
		read?: any;
		emitDistinctChangesOnly?: boolean;
	}): ViewChildren;
}

/**
 * Represents a container where one or more views can be attached to a component.
 *
 * Can contain *host views* (created by instantiating a
 * component with the \`createComponent()\` method), and *embedded views*
 * (created by instantiating a \`TemplateRef\` with the \`createEmbeddedView()\` method).
 *
 * A view container instance can contain other view containers,
 * creating a [view hierarchy](guide/glossary#view-tree).
 *
 * @see \`ComponentRef\`
 * @see \`EmbeddedViewRef\`
 *
 * @publicApi
 */
export declare abstract class ViewContainerRef {
	/**
	 * Anchor element that specifies the location of this container in the containing view.
	 * Each view container can have only one anchor element, and each anchor element
	 * can have only a single view container.
	 *
	 * Root elements of views attached to this container become siblings of the anchor element in
	 * the rendered view.
	 *
	 * Access the \`ViewContainerRef\` of an element by placing a \`Directive\` injected
	 * with \`ViewContainerRef\` on the element, or use a \`ViewChild\` query.
	 *
	 * <!-- TODO: rename to anchorElement -->
	 */
	abstract get element(): ElementRef;
	/**
	 * The [dependency injector](guide/glossary#injector) for this view container.
	 */
	abstract get injector(): Injector;
	/** @deprecated No replacement */
	abstract get parentInjector(): Injector;
	/**
	 * Destroys all views in this container.
	 */
	abstract clear(): void;
	/**
	 * Retrieves a view from this container.
	 * @param index The 0-based index of the view to retrieve.
	 * @returns The \`ViewRef\` instance, or null if the index is out of range.
	 */
	abstract get(index: number): ViewRef | null;
	/**
	 * Reports how many views are currently attached to this container.
	 * @returns The number of views.
	 */
	abstract get length(): number;
	/**
	 * Instantiates an embedded view and inserts it
	 * into this container.
	 * @param templateRef The HTML template that defines the view.
	 * @param context The data-binding context of the embedded view, as declared
	 * in the \`<ng-template>\` usage.
	 * @param options Extra configuration for the created view. Includes:
	 *  * index: The 0-based index at which to insert the new view into this container.
	 *           If not specified, appends the new view as the last entry.
	 *  * injector: Injector to be used within the embedded view.
	 *
	 * @returns The \`ViewRef\` instance for the newly created view.
	 */
	abstract createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C, options?: {
		index?: number;
		injector?: Injector;
	}): EmbeddedViewRef<C>;
	/**
	 * Instantiates an embedded view and inserts it
	 * into this container.
	 * @param templateRef The HTML template that defines the view.
	 * @param context The data-binding context of the embedded view, as declared
	 * in the \`<ng-template>\` usage.
	 * @param index The 0-based index at which to insert the new view into this container.
	 * If not specified, appends the new view as the last entry.
	 *
	 * @returns The \`ViewRef\` instance for the newly created view.
	 */
	abstract createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C, index?: number): EmbeddedViewRef<C>;
	/**
	 * Instantiates a single component and inserts its host view into this container.
	 *
	 * @param componentType Component Type to use.
	 * @param options An object that contains extra parameters:
	 *  * index: the index at which to insert the new component's host view into this container.
	 *           If not specified, appends the new view as the last entry.
	 *  * injector: the injector to use as the parent for the new component.
	 *  * ngModuleRef: an NgModuleRef of the component's NgModule, you should almost always provide
	 *                 this to ensure that all expected providers are available for the component
	 *                 instantiation.
	 *  * environmentInjector: an EnvironmentInjector which will provide the component's environment.
	 *                 you should almost always provide this to ensure that all expected providers
	 *                 are available for the component instantiation. This option is intended to
	 *                 replace the \`ngModuleRef\` parameter.
	 *  * projectableNodes: list of DOM nodes that should be projected through
	 *                      [\`<ng-content>\`](api/core/ng-content) of the new component instance.
	 *
	 * @returns The new \`ComponentRef\` which contains the component instance and the host view.
	 */
	abstract createComponent<C>(componentType: Type<C>, options?: {
		index?: number;
		injector?: Injector;
		ngModuleRef?: NgModuleRef<unknown>;
		environmentInjector?: EnvironmentInjector | NgModuleRef<unknown>;
		projectableNodes?: Node[][];
	}): ComponentRef<C>;
	/**
	 * Instantiates a single component and inserts its host view into this container.
	 *
	 * @param componentFactory Component factory to use.
	 * @param index The index at which to insert the new component's host view into this container.
	 * If not specified, appends the new view as the last entry.
	 * @param injector The injector to use as the parent for the new component.
	 * @param projectableNodes List of DOM nodes that should be projected through
	 *     [\`<ng-content>\`](api/core/ng-content) of the new component instance.
	 * @param ngModuleRef An instance of the NgModuleRef that represent an NgModule.
	 * This information is used to retrieve corresponding NgModule injector.
	 *
	 * @returns The new \`ComponentRef\` which contains the component instance and the host view.
	 *
	 * @deprecated Angular no longer requires component factories to dynamically create components.
	 *     Use different signature of the \`createComponent\` method, which allows passing
	 *     Component class directly.
	 */
	abstract createComponent<C>(componentFactory: ComponentFactory<C>, index?: number, injector?: Injector, projectableNodes?: any[][], environmentInjector?: EnvironmentInjector | NgModuleRef<any>): ComponentRef<C>;
	/**
	 * Inserts a view into this container.
	 * @param viewRef The view to insert.
	 * @param index The 0-based index at which to insert the view.
	 * If not specified, appends the new view as the last entry.
	 * @returns The inserted \`ViewRef\` instance.
	 *
	 */
	abstract insert(viewRef: ViewRef, index?: number): ViewRef;
	/**
	 * Moves a view to a new location in this container.
	 * @param viewRef The view to move.
	 * @param index The 0-based index of the new location.
	 * @returns The moved \`ViewRef\` instance.
	 */
	abstract move(viewRef: ViewRef, currentIndex: number): ViewRef;
	/**
	 * Returns the index of a view within the current container.
	 * @param viewRef The view to query.
	 * @returns The 0-based index of the view's position in this container,
	 * or \`-1\` if this container doesn't contain the view.
	 */
	abstract indexOf(viewRef: ViewRef): number;
	/**
	 * Destroys a view attached to this container
	 * @param index The 0-based index of the view to destroy.
	 * If not specified, the last view in the container is removed.
	 */
	abstract remove(index?: number): void;
	/**
	 * Detaches a view from this container without destroying it.
	 * Use along with \`insert()\` to move a view within the current container.
	 * @param index The 0-based index of the view to detach.
	 * If not specified, the last view in the container is detached.
	 */
	abstract detach(index?: number): ViewRef | null;
}


/**
 * Defines the CSS styles encapsulation policies for the {@link Component} decorator's
 * \`encapsulation\` option.
 *
 * See {@link Component#encapsulation encapsulation}.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/ts/metadata/encapsulation.ts region='longform'}
 *
 * @publicApi
 */
export declare enum ViewEncapsulation {
	/**
	 * Emulates a native Shadow DOM encapsulation behavior by adding a specific attribute to the
	 * component's host element and applying the same attribute to all the CSS selectors provided
	 * via {@link Component#styles styles} or {@link Component#styleUrls styleUrls}.
	 *
	 * This is the default option.
	 */
	Emulated = 0,
	/**
	 * Doesn't provide any sort of CSS style encapsulation, meaning that all the styles provided
	 * via {@link Component#styles styles} or {@link Component#styleUrls styleUrls} are applicable
	 * to any HTML element of the application regardless of their host Component.
	 */
	None = 2,
	/**
	 * Uses the browser's native Shadow DOM API to encapsulate CSS styles, meaning that it creates
	 * a ShadowRoot for the component's host element which is then used to encapsulate
	 * all the Component's styling.
	 */
	ShadowDom = 3
}

declare enum ViewEncapsulation_2 {
	Emulated = 0,
	None = 2,
	ShadowDom = 3
}

declare interface viewEngine_ChangeDetectorRef_interface extends ChangeDetectorRef {
}

/**
 * Definition of what a view queries function should look like.
 */
declare type ViewQueriesFunction<T> = <U extends T>(rf: ɵRenderFlags, ctx: U) => void;

/**
 * Represents an Angular [view](guide/glossary#view "Definition").
 *
 * @see {@link ChangeDetectorRef#usage-notes Change detection usage}
 *
 * @publicApi
 */
export declare abstract class ViewRef extends ChangeDetectorRef {
	/**
	 * Destroys this view and all of the data structures associated with it.
	 */
	abstract destroy(): void;
	/**
	 * Reports whether this view has been destroyed.
	 * @returns True after the \`destroy()\` method has been called, false otherwise.
	 */
	abstract get destroyed(): boolean;
	/**
	 * A lifecycle hook that provides additional developer-defined cleanup
	 * functionality for views.
	 * @param callback A handler function that cleans up developer-defined data
	 * associated with a view. Called when the \`destroy()\` method is invoked.
	 */
	abstract onDestroy(callback: Function): any /** TODO #9100 */;
}

/**
 * Interface for tracking root \`ViewRef\`s in \`ApplicationRef\`.
 *
 * NOTE: Importing \`ApplicationRef\` here directly creates circular dependency, which is why we have
 * a subset of the \`ApplicationRef\` interface \`ViewRefTracker\` here.
 */
declare interface ViewRefTracker {
	detachView(viewRef: ViewRef): void;
}

/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 */
export declare function ɵ_sanitizeHtml(defaultDoc: any, unsafeHtmlInput: string): TrustedHTML | string;


export declare function ɵ_sanitizeUrl(url: string): string;

/**
 * Internal token to indicate whether having multiple bootstrapped platform should be allowed (only
 * one bootstrapped platform is allowed by default). This token helps to support SSR scenarios.
 */
export declare const ɵALLOW_MULTIPLE_PLATFORMS: InjectionToken<boolean>;

export declare function ɵallowSanitizationBypassAndThrow(value: any, type: ɵBypassType.Html): value is ɵSafeHtml;

export declare function ɵallowSanitizationBypassAndThrow(value: any, type: ɵBypassType.ResourceUrl): value is ɵSafeResourceUrl;

export declare function ɵallowSanitizationBypassAndThrow(value: any, type: ɵBypassType.Script): value is ɵSafeScript;

export declare function ɵallowSanitizationBypassAndThrow(value: any, type: ɵBypassType.Style): value is ɵSafeStyle;

export declare function ɵallowSanitizationBypassAndThrow(value: any, type: ɵBypassType.Url): value is ɵSafeUrl;

export declare function ɵallowSanitizationBypassAndThrow(value: any, type: ɵBypassType): boolean;

/**
 * Providers that generate a random \`APP_ID_TOKEN\`.
 * @publicApi
 */
export declare const ɵAPP_ID_RANDOM_PROVIDER: {
	provide: InjectionToken<string>;
	useFactory: typeof _appIdRandomProviderFactory;
	deps: any[];
};

/**
 * A set of marker values to be used in the attributes arrays. These markers indicate that some
 * items are not regular attributes and the processing should be adapted accordingly.
 */
export declare const enum ɵAttributeMarker {
	/**
	 * An implicit marker which indicates that the value in the array are of \`attributeKey\`,
	 * \`attributeValue\` format.
	 *
	 * NOTE: This is implicit as it is the type when no marker is present in array. We indicate that
	 * it should not be present at runtime by the negative number.
	 */
	ImplicitAttributes = -1,
	/**
	 * Marker indicates that the following 3 values in the attributes array are:
	 * namespaceUri, attributeName, attributeValue
	 * in that order.
	 */
	NamespaceURI = 0,
	/**
	 * Signals class declaration.
	 *
	 * Each value following \`Classes\` designates a class name to include on the element.
	 * ## Example:
	 *
	 * Given:
	 * \`\`\`
	 * <div class="foo bar baz">...<d/vi>
	 * \`\`\`
	 *
	 * the generated code is:
	 * \`\`\`
	 * var _c1 = [AttributeMarker.Classes, 'foo', 'bar', 'baz'];
	 * \`\`\`
	 */
	Classes = 1,
	/**
	 * Signals style declaration.
	 *
	 * Each pair of values following \`Styles\` designates a style name and value to include on the
	 * element.
	 * ## Example:
	 *
	 * Given:
	 * \`\`\`
	 * <div style="width:100px; height:200px; color:red">...</div>
	 * \`\`\`
	 *
	 * the generated code is:
	 * \`\`\`
	 * var _c1 = [AttributeMarker.Styles, 'width', '100px', 'height'. '200px', 'color', 'red'];
	 * \`\`\`
	 */
	Styles = 2,
	/**
	 * Signals that the following attribute names were extracted from input or output bindings.
	 *
	 * For example, given the following HTML:
	 *
	 * \`\`\`
	 * <div moo="car" [foo]="exp" (bar)="doSth()">
	 * \`\`\`
	 *
	 * the generated code is:
	 *
	 * \`\`\`
	 * var _c1 = ['moo', 'car', AttributeMarker.Bindings, 'foo', 'bar'];
	 * \`\`\`
	 */
	Bindings = 3,
	/**
	 * Signals that the following attribute names were hoisted from an inline-template declaration.
	 *
	 * For example, given the following HTML:
	 *
	 * \`\`\`
	 * <div *ngFor="let value of values; trackBy:trackBy" dirA [dirB]="value">
	 * \`\`\`
	 *
	 * the generated code for the \`template()\` instruction would include:
	 *
	 * \`\`\`
	 * ['dirA', '', AttributeMarker.Bindings, 'dirB', AttributeMarker.Template, 'ngFor', 'ngForOf',
	 * 'ngForTrackBy', 'let-value']
	 * \`\`\`
	 *
	 * while the generated code for the \`element()\` instruction inside the template function would
	 * include:
	 *
	 * \`\`\`
	 * ['dirA', '', AttributeMarker.Bindings, 'dirB']
	 * \`\`\`
	 */
	Template = 4,
	/**
	 * Signals that the following attribute is \`ngProjectAs\` and its value is a parsed
	 * \`CssSelector\`.
	 *
	 * For example, given the following HTML:
	 *
	 * \`\`\`
	 * <h1 attr="value" ngProjectAs="[title]">
	 * \`\`\`
	 *
	 * the generated code for the \`element()\` instruction would include:
	 *
	 * \`\`\`
	 * ['attr', 'value', AttributeMarker.ProjectAs, ['', 'title', '']]
	 * \`\`\`
	 */
	ProjectAs = 5,
	/**
	 * Signals that the following attribute will be translated by runtime i18n
	 *
	 * For example, given the following HTML:
	 *
	 * \`\`\`
	 * <div moo="car" foo="value" i18n-foo [bar]="binding" i18n-bar>
	 * \`\`\`
	 *
	 * the generated code is:
	 *
	 * \`\`\`
	 * var _c1 = ['moo', 'car', AttributeMarker.I18n, 'foo', 'bar'];
	 */
	I18n = 6
}

/**
 * Mark \`html\` string as trusted.
 *
 * This function wraps the trusted string in \`String\` and brands it in a way which makes it
 * recognizable to {@link htmlSanitizer} to be trusted implicitly.
 *
 * @param trustedHtml \`html\` string which needs to be implicitly trusted.
 * @returns a \`html\` which has been branded to be implicitly trusted.
 */
export declare function ɵbypassSanitizationTrustHtml(trustedHtml: string): ɵSafeHtml;

/**
 * Mark \`url\` string as trusted.
 *
 * This function wraps the trusted string in \`String\` and brands it in a way which makes it
 * recognizable to {@link resourceUrlSanitizer} to be trusted implicitly.
 *
 * @param trustedResourceUrl \`url\` string which needs to be implicitly trusted.
 * @returns a \`url\` which has been branded to be implicitly trusted.
 */
export declare function ɵbypassSanitizationTrustResourceUrl(trustedResourceUrl: string): ɵSafeResourceUrl;

/**
 * Mark \`script\` string as trusted.
 *
 * This function wraps the trusted string in \`String\` and brands it in a way which makes it
 * recognizable to {@link scriptSanitizer} to be trusted implicitly.
 *
 * @param trustedScript \`script\` string which needs to be implicitly trusted.
 * @returns a \`script\` which has been branded to be implicitly trusted.
 */
export declare function ɵbypassSanitizationTrustScript(trustedScript: string): ɵSafeScript;

/**
 * Mark \`style\` string as trusted.
 *
 * This function wraps the trusted string in \`String\` and brands it in a way which makes it
 * recognizable to {@link styleSanitizer} to be trusted implicitly.
 *
 * @param trustedStyle \`style\` string which needs to be implicitly trusted.
 * @returns a \`style\` hich has been branded to be implicitly trusted.
 */
export declare function ɵbypassSanitizationTrustStyle(trustedStyle: string): ɵSafeStyle;

/**
 * Mark \`url\` string as trusted.
 *
 * This function wraps the trusted string in \`String\` and brands it in a way which makes it
 * recognizable to {@link urlSanitizer} to be trusted implicitly.
 *
 * @param trustedUrl \`url\` string which needs to be implicitly trusted.
 * @returns a \`url\`  which has been branded to be implicitly trusted.
 */
export declare function ɵbypassSanitizationTrustUrl(trustedUrl: string): ɵSafeUrl;


export declare const enum ɵBypassType {
	Url = "URL",
	Html = "HTML",
	ResourceUrl = "ResourceURL",
	Script = "Script",
	Style = "Style"
}

/**
 * Defines the possible states of the default change detector.
 * @see \`ChangeDetectorRef\`
 */
export declare enum ɵChangeDetectorStatus {
	/**
	 * A state in which, after calling \`detectChanges()\`, the change detector
	 * state becomes \`Checked\`, and must be explicitly invoked or reactivated.
	 */
	CheckOnce = 0,
	/**
	 * A state in which change detection is skipped until the change detector mode
	 * becomes \`CheckOnce\`.
	 */
	Checked = 1,
	/**
	 * A state in which change detection continues automatically until explicitly
	 * deactivated.
	 */
	CheckAlways = 2,
	/**
	 * A state in which a change detector sub tree is not a part of the main tree and
	 * should be skipped.
	 */
	Detached = 3,
	/**
	 * Indicates that the change detector encountered an error checking a binding
	 * or calling a directive lifecycle method and is now in an inconsistent state. Change
	 * detectors in this state do not detect changes.
	 */
	Errored = 4,
	/**
	 * Indicates that the change detector has been destroyed.
	 */
	Destroyed = 5
}

export declare function ɵclearResolutionOfComponentResourcesQueue(): Map<Type<any>, Component>;


/** Coerces a value (typically a string) to a boolean. */
export declare function ɵcoerceToBoolean(value: unknown): boolean;

/**
 * Compile an Angular component according to its decorator metadata, and patch the resulting
 * component def (ɵcmp) onto the component type.
 *
 * Compilation may be asynchronous (due to the need to resolve URLs for the component template or
 * other resources, for example). In the event that compilation is not immediate, \`compileComponent\`
 * will enqueue resource resolution into a global queue and will fail to return the \`ɵcmp\`
 * until the global queue has been resolved with a call to \`resolveComponentResources\`.
 */
export declare function ɵcompileComponent(type: Type<any>, metadata: Component): void;

/**
 * Compile an Angular directive according to its decorator metadata, and patch the resulting
 * directive def onto the component type.
 *
 * In the event that compilation is not immediate, \`compileDirective\` will return a \`Promise\` which
 * will resolve when compilation completes and the directive becomes usable.
 */
export declare function ɵcompileDirective(type: Type<any>, directive: Directive | null): void;

/**
 * Compiles a module in JIT mode.
 *
 * This function automatically gets called when a class has a \`@NgModule\` decorator.
 */
export declare function ɵcompileNgModule(moduleType: Type<any>, ngModule?: NgModule): void;

/**
 * Compiles and adds the \`ɵmod\`, \`ɵfac\` and \`ɵinj\` properties to the module class.
 *
 * It's possible to compile a module via this API which will allow duplicate declarations in its
 * root.
 */
export declare function ɵcompileNgModuleDefs(moduleType: ɵNgModuleType, ngModule: NgModule, allowDuplicateDeclarationsInRoot?: boolean): void;

export declare function ɵcompileNgModuleFactory<M>(injector: Injector, options: CompilerOptions, moduleType: Type<M>): Promise<NgModuleFactory<M>>;

export declare function ɵcompilePipe(type: Type<any>, meta: Pipe): void;

/**
 * Runtime link information for Components.
 *
 * This is an internal data structure used by the render to link
 * components into templates.
 *
 * NOTE: Always use \`defineComponent\` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * See: {@link defineComponent}
 */
export declare interface ɵComponentDef<T> extends ɵDirectiveDef<T> {
	/**
	 * Unique ID for the component. Used in view encapsulation and
	 * to keep track of the injector in standalone components.
	 */
	readonly id: string;
	/**
	 * The View template of the component.
	 */
	readonly template: ComponentTemplate<T>;
	/** Constants associated with the component's view. */
	readonly consts: TConstantsOrFactory | null;
	/**
	 * An array of \`ngContent[selector]\` values that were found in the template.
	 */
	readonly ngContentSelectors?: string[];
	/**
	 * A set of styles that the component needs to be present for component to render correctly.
	 */
	readonly styles: string[];
	/**
	 * The number of nodes, local refs, and pipes in this component template.
	 *
	 * Used to calculate the length of the component's LView array, so we
	 * can pre-fill the array and set the binding start index.
	 */
	readonly decls: number;
	/**
	 * The number of bindings in this component template (including pure fn bindings).
	 *
	 * Used to calculate the length of the component's LView array, so we
	 * can pre-fill the array and set the host binding start index.
	 */
	readonly vars: number;
	/**
	 * Query-related instructions for a component.
	 */
	viewQuery: ViewQueriesFunction<T> | null;
	/**
	 * The view encapsulation type, which determines how styles are applied to
	 * DOM elements. One of
	 * - \`Emulated\` (default): Emulate native scoping of styles.
	 * - \`Native\`: Use the native encapsulation mechanism of the renderer.
	 * - \`ShadowDom\`: Use modern [ShadowDOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	 *   create a ShadowRoot for component's host element.
	 * - \`None\`: Do not provide any template or style encapsulation.
	 */
	readonly encapsulation: ViewEncapsulation;
	/**
	 * Defines arbitrary developer-defined data to be stored on a renderer instance.
	 * This is useful for renderers that delegate to other renderers.
	 */
	readonly data: {
		[kind: string]: any;
	};
	/** Whether or not this component's ChangeDetectionStrategy is OnPush */
	readonly onPush: boolean;
	/**
	 * Registry of directives and components that may be found in this view.
	 *
	 * The property is either an array of \`DirectiveDef\`s or a function which returns the array of
	 * \`DirectiveDef\`s. The function is necessary to be able to support forward declarations.
	 */
	directiveDefs: DirectiveDefListOrFactory | null;
	/**
	 * Registry of pipes that may be found in this view.
	 *
	 * The property is either an array of \`PipeDefs\`s or a function which returns the array of
	 * \`PipeDefs\`s. The function is necessary to be able to support forward declarations.
	 */
	pipeDefs: PipeDefListOrFactory | null;
	/**
	 * Unfiltered list of all dependencies of a component, or \`null\` if none.
	 */
	dependencies: TypeOrFactory<DependencyTypeList> | null;
	/**
	 * The set of schemas that declare elements to be allowed in the component's template.
	 */
	schemas: SchemaMetadata[] | null;
	/**
	 * Ivy runtime uses this place to store the computed tView for the component. This gets filled on
	 * the first run of component.
	 */
	tView: TView | null;
	/**
	 * A function added by the {@link ɵɵStandaloneFeature} and used by the framework to create
	 * standalone injectors.
	 */
	getStandaloneInjector: ((parentInjector: EnvironmentInjector) => EnvironmentInjector | null) | null;
	/**
	 * Used to store the result of \`noSideEffects\` function so that it is not removed by closure
	 * compiler. The property should never be read.
	 */
	readonly _?: unknown;
}

/**
 * A subclass of \`Type\` which has a static \`ɵcmp\`:\`ComponentDef\` field making it
 * consumable for rendering.
 */
export declare interface ɵComponentType<T> extends Type<T> {
	ɵcmp: unknown;
}

export declare class ɵConsole {
	log(message: string): void;
	warn(message: string): void;
	static ɵfac: i0.ɵɵFactoryDeclaration<ɵConsole, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<ɵConsole>;
}

/**
 * Create a new \`Injector\` which is configured using a \`defType\` of \`InjectorType<any>\`s.
 *
 * @publicApi
 */
export declare function ɵcreateInjector(defType: any, parent?: Injector | null, additionalProviders?: StaticProvider[] | null, name?: string): Injector;

/**
 * A list of CssSelectors.
 *
 * A directive or component can have multiple selectors. This type is used for
 * directive defs so any of the selectors in the list will match that directive.
 *
 * Original: 'form, [ngForm]'
 * Parsed: [['form'], ['', 'ngForm', '']]
 */
export declare type ɵCssSelectorList = CssSelector[];

/**
 * Index of each value in currency data (used to describe CURRENCIES_EN in currencies.ts)
 */
export declare const enum ɵCurrencyIndex {
	Symbol = 0,
	SymbolNarrow = 1,
	NbOfDigits = 2
}

/**
 * The locale id that the application is using by default (for translations and ICU expressions).
 */
export declare const ɵDEFAULT_LOCALE_ID = "en-US";

export declare const ɵdefaultIterableDiffers: IterableDiffers;

export declare const ɵdefaultKeyValueDiffers: KeyValueDiffers;


/**
 * Synchronously perform change detection on a component (and possibly its sub-components).
 *
 * This function triggers change detection in a synchronous way on a component.
 *
 * @param component The component which the change detection should be performed on.
 */
export declare function ɵdetectChanges(component: {}): void;


export declare function ɵdevModeEqual(a: any, b: any): boolean;

/**
 * Runtime link information for Directives.
 *
 * This is an internal data structure used by the render to link
 * directives into templates.
 *
 * NOTE: Always use \`defineDirective\` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * @param Selector type metadata specifying the selector of the directive or component
 *
 * See: {@link defineDirective}
 */
export declare interface ɵDirectiveDef<T> {
	/**
	 * A dictionary mapping the inputs' minified property names to their public API names, which
	 * are their aliases if any, or their original unminified property names
	 * (as in \`@Input('alias') propertyName: any;\`).
	 */
	readonly inputs: {
		[P in keyof T]: string;
	};
	/**
	 * @deprecated This is only here because \`NgOnChanges\` incorrectly uses declared name instead of
	 * public or minified name.
	 */
	readonly declaredInputs: {
		[P in keyof T]: string;
	};
	/**
	 * A dictionary mapping the outputs' minified property names to their public API names, which
	 * are their aliases if any, or their original unminified property names
	 * (as in \`@Output('alias') propertyName: any;\`).
	 */
	readonly outputs: {
		[P in keyof T]: string;
	};
	/**
	 * Function to create and refresh content queries associated with a given directive.
	 */
	contentQueries: ContentQueriesFunction<T> | null;
	/**
	 * Query-related instructions for a directive. Note that while directives don't have a
	 * view and as such view queries won't necessarily do anything, there might be
	 * components that extend the directive.
	 */
	viewQuery: ViewQueriesFunction<T> | null;
	/**
	 * Refreshes host bindings on the associated directive.
	 */
	readonly hostBindings: HostBindingsFunction<T> | null;
	/**
	 * The number of bindings in this directive \`hostBindings\` (including pure fn bindings).
	 *
	 * Used to calculate the length of the component's LView array, so we
	 * can pre-fill the array and set the host binding start index.
	 */
	readonly hostVars: number;
	/**
	 * Assign static attribute values to a host element.
	 *
	 * This property will assign static attribute values as well as class and style
	 * values to a host element. Since attribute values can consist of different types of values, the
	 * \`hostAttrs\` array must include the values in the following format:
	 *
	 * attrs = [
	 *   // static attributes (like \`title\`, \`name\`, \`id\`...)
	 *   attr1, value1, attr2, value,
	 *
	 *   // a single namespace value (like \`x:id\`)
	 *   NAMESPACE_MARKER, namespaceUri1, name1, value1,
	 *
	 *   // another single namespace value (like \`x:name\`)
	 *   NAMESPACE_MARKER, namespaceUri2, name2, value2,
	 *
	 *   // a series of CSS classes that will be applied to the element (no spaces)
	 *   CLASSES_MARKER, class1, class2, class3,
	 *
	 *   // a series of CSS styles (property + value) that will be applied to the element
	 *   STYLES_MARKER, prop1, value1, prop2, value2
	 * ]
	 *
	 * All non-class and non-style attributes must be defined at the start of the list
	 * first before all class and style values are set. When there is a change in value
	 * type (like when classes and styles are introduced) a marker must be used to separate
	 * the entries. The marker values themselves are set via entries found in the
	 * [AttributeMarker] enum.
	 */
	readonly hostAttrs: TAttributes | null;
	/** Token representing the directive. Used by DI. */
	readonly type: Type<T>;
	/** Function that resolves providers and publishes them into the DI system. */
	providersResolver: (<U extends T>(def: ɵDirectiveDef<U>, processProvidersFn?: ProcessProvidersFunction) => void) | null;
	/** The selectors that will be used to match nodes to this directive. */
	readonly selectors: ɵCssSelectorList;
	/**
	 * Name under which the directive is exported (for use with local references in template)
	 */
	readonly exportAs: string[] | null;
	/**
	 * Whether this directive (or component) is standalone.
	 */
	readonly standalone: boolean;
	/**
	 * Factory function used to create a new directive instance. Will be null initially.
	 * Populated when the factory is first requested by directive instantiation logic.
	 */
	readonly factory: FactoryFn<T> | null;
	/**
	 * The features applied to this directive
	 */
	readonly features: DirectiveDefFeature[] | null;
	setInput: (<U extends T>(this: ɵDirectiveDef<U>, instance: U, value: any, publicName: string, privateName: string) => void) | null;
}

/**
 * A subclass of \`Type\` which has a static \`ɵdir\`:\`DirectiveDef\` field making it
 * consumable for rendering.
 */
export declare interface ɵDirectiveType<T> extends Type<T> {
	ɵdir: unknown;
	ɵfac: unknown;
}

/**
 * Index of each type of locale data from the extra locale data array
 */
export declare const enum ɵExtraLocaleDataIndex {
	ExtraDayPeriodFormats = 0,
	ExtraDayPeriodStandalone = 1,
	ExtraDayPeriodsRules = 2
}

/**
 * Finds the locale data for a given locale.
 *
 * @param locale The locale code.
 * @returns The locale data.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n-overview)
 */
export declare function ɵfindLocaleData(locale: string): any;

/**
 * Loops over queued module definitions, if a given module definition has all of its
 * declarations resolved, it dequeues that module definition and sets the scope on
 * its declarations.
 */
export declare function ɵflushModuleScopingQueueAsMuchAsPossible(): void;

/**
 * Called to format a runtime error.
 * See additional info on the \`message\` argument type in the \`RuntimeError\` class description.
 */
export declare function ɵformatRuntimeError<T extends number = RuntimeErrorCode>(code: T, message: null | false | string): string;

export declare function ɵgetDebugNodeR2(_nativeNode: any): DebugNode | null;

/**
 * Retrieves directive instances associated with a given DOM node. Does not include
 * component instances.
 *
 * @usageNotes
 * Given the following DOM structure:
 *
 * \`\`\`html
 * <app-root>
 *   <button my-button></button>
 *   <my-comp></my-comp>
 * </app-root>
 * \`\`\`
 *
 * Calling \`getDirectives\` on \`<button>\` will return an array with an instance of the \`MyButton\`
 * directive that is associated with the DOM node.
 *
 * Calling \`getDirectives\` on \`<my-comp>\` will return an empty array.
 *
 * @param node DOM node for which to get the directives.
 * @returns Array of directives associated with the node.
 *
 * @publicApi
 * @globalApi ng
 */
export declare function ɵgetDirectives(node: Node): {}[];

/**
 * Retrieves the host element of a component or directive instance.
 * The host element is the DOM element that matched the selector of the directive.
 *
 * @param componentOrDirective Component or directive instance for which the host
 *     element should be retrieved.
 * @returns Host element of the target.
 *
 * @publicApi
 * @globalApi ng
 */
export declare function ɵgetHostElement(componentOrDirective: {}): Element;

/**
 * Read the injectable def (\`ɵprov\`) for \`type\` in a way which is immune to accidentally reading
 * inherited value.
 *
 * @param type A type which may have its own (non-inherited) \`ɵprov\`.
 */
export declare function ɵgetInjectableDef<T>(type: any): ɵɵInjectableDeclaration<T> | null;

/**
 * Returns the matching \`LContext\` data for a given DOM node, directive or component instance.
 *
 * This function will examine the provided DOM element, component, or directive instance\'s
 * monkey-patched property to derive the \`LContext\` data. Once called then the monkey-patched
 * value will be that of the newly created \`LContext\`.
 *
 * If the monkey-patched value is the \`LView\` instance then the context value for that
 * target will be created and the monkey-patch reference will be updated. Therefore when this
 * function is called it may mutate the provided element\'s, component\'s or any of the associated
 * directive\'s monkey-patch values.
 *
 * If the monkey-patch value is not detected then the code will walk up the DOM until an element
 * is found which contains a monkey-patch reference. When that occurs then the provided element
 * will be updated with a new context (which is then returned). If the monkey-patch value is not
 * detected for a component/directive instance then it will throw an error (all components and
 * directives should be automatically monkey-patched by ivy).
 *
 * @param target Component, Directive or DOM Node.
 */
export declare function ɵgetLContext(target: any): ɵLContext | null;

/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param locale The code of the locale whose currency code we want.
 * @returns The code of the default currency for the given locale.
 *
 */
export declare function ɵgetLocaleCurrencyCode(locale: string): string | null;

/**
 * Retrieves the plural function used by ICU expressions to determine the plural case to use
 * for a given locale.
 * @param locale A locale code for the locale format rules to use.
 * @returns The plural function for the locale.
 * @see \`NgPlural\`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n-overview)
 */
export declare function ɵgetLocalePluralCase(locale: string): (value: number) => number;

export declare function ɵgetSanitizationBypassType(value: any): ɵBypassType | null;

/**
 * Gets the current value of the strict mode.
 */
export declare function ɵgetUnknownElementStrictMode(): boolean;

/**
 * Gets the current value of the strict mode.
 */
export declare function ɵgetUnknownPropertyStrictMode(): boolean;


export declare const ɵglobal: any;

/** Returns a ChangeDetectorRef (a.k.a. a ViewRef) */
export declare function ɵinjectChangeDetectorRef(flags: InjectFlags): ChangeDetectorRef;

/**
 * An internal token whose presence in an injector indicates that the injector should treat itself
 * as a root scoped injector when processing requests for unknown tokens which may indicate
 * they are provided in the root scope.
 */
export declare const ɵINJECTOR_SCOPE: InjectionToken<InjectorScope | null>;

/**
 * Internal create application API that implements the core application creation logic and optional
 * bootstrap logic.
 *
 * Platforms (such as \`platform-browser\`) may require different set of application and platform
 * providers for an application to function correctly. As a result, platforms may use this function
 * internally and supply the necessary providers during the bootstrap, while exposing
 * platform-specific APIs as a part of their public API.
 *
 * @returns A promise that returns an \`ApplicationRef\` instance once resolved.
 */
export declare function ɵinternalCreateApplication(config: {
	rootComponent?: Type<unknown>;
	appProviders?: Array<Provider | ImportedNgModuleProviders>;
	platformProviders?: Provider[];
}): Promise<ApplicationRef>;

export declare function ɵisBoundToModule<C>(cf: ComponentFactory<C>): boolean;

/**
 * Reports whether a given strategy is currently the default for change detection.
 * @param changeDetectionStrategy The strategy to check.
 * @returns True if the given strategy is the current default, false otherwise.
 * @see \`ChangeDetectorStatus\`
 * @see \`ChangeDetectorRef\`
 */
export declare function ɵisDefaultChangeDetectionStrategy(changeDetectionStrategy: ChangeDetectionStrategy): boolean;

export declare function ɵisInjectable(type: any): boolean;

export declare function ɵisListLikeIterable(obj: any): boolean;

/**
 * Determine if the argument is an Observable
 *
 * Strictly this tests that the \`obj\` is \`Subscribable\`, since \`Observable\`
 * types need additional methods, such as \`lift()\`. But it is adequate for our
 * needs since within the Angular framework code we only ever need to use the
 * \`subscribe()\` method, and RxJS has mechanisms to wrap \`Subscribable\` objects
 * into \`Observable\` as needed.
 */
export declare const ɵisObservable: (obj: any | Observable<any>) => obj is Observable<any>;

/**
 * Determine if the argument is shaped like a Promise
 */
export declare function ɵisPromise<T = any>(obj: any): obj is Promise<T>;

export declare function ɵisStandalone<T>(type: Type<T>): boolean;

/**
 * Determine if the argument is a Subscribable
 */
export declare function ɵisSubscribable(obj: any | Subscribable<any>): obj is Subscribable<any>;

export declare const ɵivyEnabled = true;

/**
 * The internal view context which is specific to a given DOM element, directive or
 * component instance. Each value in here (besides the LView and element node details)
 * can be present, null or undefined. If undefined then it implies the value has not been
 * looked up yet, otherwise, if null, then a lookup was executed and nothing was found.
 *
 * Each value will get filled when the respective value is examined within the getContext
 * function. The component, element and each directive instance will share the same instance
 * of the context.
 */
export declare class ɵLContext {
	/**
	 * ID of the component's parent view data.
	 */
	private lViewId;
	/**
	 * The index instance of the node.
	 */
	nodeIndex: number;
	/**
	 * The instance of the DOM node that is attached to the lNode.
	 */
	native: RNode;
	/**
	 * The instance of the Component node.
	 */
	component: {} | null | undefined;
	/**
	 * The list of active directives that exist on this element.
	 */
	directives: any[] | null | undefined;
	/**
	 * The map of local references (local reference name => element or directive instance) that
	 * exist on this element.
	 */
	localRefs: {
		[key: string]: any;
	} | null | undefined;
	/** Component's parent view data. */
	get lView(): LView | null;
	constructor(
		/**
		 * ID of the component's parent view data.
		 */
		lViewId: number,
		/**
		 * The index instance of the node.
		 */
		nodeIndex: number,
		/**
		 * The instance of the DOM node that is attached to the lNode.
		 */
		native: RNode);
}

/**
 * Used to enable lifecycle hooks on the root component.
 *
 * Include this feature when calling \`renderComponent\` if the root component
 * you are rendering has lifecycle hooks defined. Otherwise, the hooks won't
 * be called properly.
 *
 * Example:
 *
 * \`\`\`
 * renderComponent(AppComponent, {hostFeatures: [LifecycleHooksFeature]});
 * \`\`\`
 */
export declare function ɵLifecycleHooksFeature(): void;

/**
 * Index of each type of locale data from the locale data array
 */
export declare enum ɵLocaleDataIndex {
	LocaleId = 0,
	DayPeriodsFormat = 1,
	DayPeriodsStandalone = 2,
	DaysFormat = 3,
	DaysStandalone = 4,
	MonthsFormat = 5,
	MonthsStandalone = 6,
	Eras = 7,
	FirstDayOfWeek = 8,
	WeekendRange = 9,
	DateFormat = 10,
	TimeFormat = 11,
	DateTimeFormat = 12,
	NumberSymbols = 13,
	NumberFormats = 14,
	CurrencyCode = 15,
	CurrencySymbol = 16,
	CurrencyName = 17,
	Currencies = 18,
	Directionality = 19,
	PluralCase = 20,
	ExtraData = 21
}

/**
 * @suppress {globalThis}
 */
export declare function ɵmakeDecorator<T>(name: string, props?: (...args: any[]) => any, parentClass?: any, additionalProcessing?: (type: Type<T>) => void, typeFn?: (type: Type<T>, ...args: any[]) => void): {
	new(...args: any[]): any;
	(...args: any[]): any;
	(...args: any[]): (cls: any) => any;
};


export declare const ɵNG_COMP_DEF: string;

export declare const ɵNG_DIR_DEF: string;

/**
 * If a directive is diPublic, bloomAdd sets a property on the type with this constant as
 * the key and the directive's unique ID as the value. This allows us to map directives to their
 * bloom filter bit for DI.
 */
export declare const ɵNG_ELEMENT_ID: string;

export declare const ɵNG_INJ_DEF: string;

export declare const ɵNG_MOD_DEF: string;

export declare const ɵNG_PIPE_DEF: string;

export declare const ɵNG_PROV_DEF: string;

/**
 * Runtime link information for NgModules.
 *
 * This is the internal data structure used by the runtime to assemble components, directives,
 * pipes, and injectors.
 *
 * NOTE: Always use \`ɵɵdefineNgModule\` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 */
export declare interface ɵNgModuleDef<T> {
	/** Token representing the module. Used by DI. */
	type: T;
	/** List of components to bootstrap. */
	bootstrap: Type<any>[] | (() => Type<any>[]);
	/** List of components, directives, and pipes declared by this module. */
	declarations: Type<any>[] | (() => Type<any>[]);
	/** List of modules or \`ModuleWithProviders\` imported by this module. */
	imports: Type<any>[] | (() => Type<any>[]);
	/**
	 * List of modules, \`ModuleWithProviders\`, components, directives, or pipes exported by this
	 * module.
	 */
	exports: Type<any>[] | (() => Type<any>[]);
	/**
	 * Cached value of computed \`transitiveCompileScopes\` for this module.
	 *
	 * This should never be read directly, but accessed via \`transitiveScopesFor\`.
	 */
	transitiveCompileScopes: ɵNgModuleTransitiveScopes | null;
	/** The set of schemas that declare elements to be allowed in the NgModule. */
	schemas: SchemaMetadata[] | null;
	/** Unique ID for the module with which it should be registered.  */
	id: string | null;
}

export declare class ɵNgModuleFactory<T> extends NgModuleFactory<T> {
	moduleType: Type<T>;
	constructor(moduleType: Type<T>);
	create(parentInjector: Injector | null): NgModuleRef<T>;
}

/**
 * Represents the expansion of an \`NgModule\` into its scopes.
 *
 * A scope is a set of directives and pipes that are visible in a particular context. Each
 * \`NgModule\` has two scopes. The \`compilation\` scope is the set of directives and pipes that will
 * be recognized in the templates of components declared by the module. The \`exported\` scope is the
 * set of directives and pipes exported by a module (that is, module B's exported scope gets added
 * to module A's compilation scope when module A imports B).
 */
export declare interface ɵNgModuleTransitiveScopes {
	compilation: {
		directives: Set<any>;
		pipes: Set<any>;
	};
	exported: {
		directives: Set<any>;
		pipes: Set<any>;
	};
	schemas: SchemaMetadata[] | null;
}

export declare interface ɵNgModuleType<T = any> extends Type<T> {
	ɵmod: ɵNgModuleDef<T>;
}


export declare interface ɵNO_CHANGE {
	__brand__: 'NO_CHANGE';
}

/** A special value which designates that a value has not changed. */
export declare const ɵNO_CHANGE: ɵNO_CHANGE;

/**
 * Provides a noop implementation of \`NgZone\` which does nothing. This zone requires explicit calls
 * to framework to perform rendering.
 */
export declare class ɵNoopNgZone implements NgZone {
	readonly hasPendingMicrotasks: boolean;
	readonly hasPendingMacrotasks: boolean;
	readonly isStable: boolean;
	readonly onUnstable: EventEmitter<any>;
	readonly onMicrotaskEmpty: EventEmitter<any>;
	readonly onStable: EventEmitter<any>;
	readonly onError: EventEmitter<any>;
	run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any): T;
	runGuarded<T>(fn: (...args: any[]) => any, applyThis?: any, applyArgs?: any): T;
	runOutsideAngular<T>(fn: (...args: any[]) => T): T;
	runTask<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any, name?: string): T;
}


/**
 * Convince closure compiler that the wrapped function has no side-effects.
 *
 * Closure compiler always assumes that \`toString\` has no side-effects. We use this quirk to
 * allow us to execute a function but have closure compiler mark the call as no-side-effects.
 * It is important that the return value for the \`noSideEffects\` function be assigned
 * to something which is retained otherwise the call to \`noSideEffects\` will be removed by closure
 * compiler.
 */
export declare function ɵnoSideEffects<T>(fn: () => T): T;


export declare const ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR: {};

/**
 * Patch the definition of a component with directives and pipes from the compilation scope of
 * a given module.
 */
export declare function ɵpatchComponentDefWithScope<C>(componentDef: ɵComponentDef<C>, transitiveScopes: ɵNgModuleTransitiveScopes): void;

/**
 * Runtime link information for Pipes.
 *
 * This is an internal data structure used by the renderer to link
 * pipes into templates.
 *
 * NOTE: Always use \`definePipe\` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * See: {@link definePipe}
 */
export declare interface ɵPipeDef<T> {
	/** Token representing the pipe. */
	type: Type<T>;
	/**
	 * Pipe name.
	 *
	 * Used to resolve pipe in templates.
	 */
	readonly name: string;
	/**
	 * Factory function used to create a new pipe instance. Will be null initially.
	 * Populated when the factory is first requested by pipe instantiation logic.
	 */
	factory: FactoryFn<T> | null;
	/**
	 * Whether or not the pipe is pure.
	 *
	 * Pure pipes result only depends on the pipe input and not on internal
	 * state of the pipe.
	 */
	readonly pure: boolean;
	/**
	 * Whether this pipe is standalone.
	 */
	readonly standalone: boolean;
	onDestroy: (() => void) | null;
}

/**
 * Profiler function which the runtime will invoke before and after user code.
 */
export declare interface ɵProfiler {
	(event: ɵProfilerEvent, instance: {} | null, hookOrListener?: (e?: any) => any): void;
}


/**
 * Profiler events is an enum used by the profiler to distinguish between different calls of user
 * code invoked throughout the application lifecycle.
 */
export declare const enum ɵProfilerEvent {
	/**
	 * Corresponds to the point in time before the runtime has called the template function of a
	 * component with \`RenderFlags.Create\`.
	 */
	TemplateCreateStart = 0,
	/**
	 * Corresponds to the point in time after the runtime has called the template function of a
	 * component with \`RenderFlags.Create\`.
	 */
	TemplateCreateEnd = 1,
	/**
	 * Corresponds to the point in time before the runtime has called the template function of a
	 * component with \`RenderFlags.Update\`.
	 */
	TemplateUpdateStart = 2,
	/**
	 * Corresponds to the point in time after the runtime has called the template function of a
	 * component with \`RenderFlags.Update\`.
	 */
	TemplateUpdateEnd = 3,
	/**
	 * Corresponds to the point in time before the runtime has called a lifecycle hook of a component
	 * or directive.
	 */
	LifecycleHookStart = 4,
	/**
	 * Corresponds to the point in time after the runtime has called a lifecycle hook of a component
	 * or directive.
	 */
	LifecycleHookEnd = 5,
	/**
	 * Corresponds to the point in time before the runtime has evaluated an expression associated with
	 * an event or an output.
	 */
	OutputStart = 6,
	/**
	 * Corresponds to the point in time after the runtime has evaluated an expression associated with
	 * an event or an output.
	 */
	OutputEnd = 7
}

/**
 * Publishes a collection of default debug tools onto\`window.ng\`.
 *
 * These functions are available globally when Angular is in development
 * mode and are automatically stripped away from prod mode is on.
 */
export declare function ɵpublishDefaultGlobalUtils(): void;

/**
 * Publishes the given function to \`window.ng\` so that it can be
 * used from the browser console when an application is not in production.
 */
export declare function ɵpublishGlobalUtil(name: string, fn: Function): void;

export declare class ɵReflectionCapabilities implements PlatformReflectionCapabilities {
	private _reflect;
	constructor(reflect?: any);
	factory<T>(t: Type<T>): (args: any[]) => T;
	private _ownParameters;
	parameters(type: Type<any>): any[][];
	private _ownAnnotations;
	annotations(typeOrFunc: Type<any>): any[];
	private _ownPropMetadata;
	propMetadata(typeOrFunc: any): {
		[key: string]: any[];
	};
	ownPropMetadata(typeOrFunc: any): {
		[key: string]: any[];
	};
	hasLifecycleHook(type: any, lcProperty: string): boolean;
}

/**
 * Register locale data to be used internally by Angular. See the
 * ["I18n guide"](guide/i18n-common-format-data-locale) to know how to import additional locale
 * data.
 *
 * The signature \`registerLocaleData(data: any, extraData?: any)\` is deprecated since v5.1
 */
export declare function ɵregisterLocaleData(data: any, localeId?: string | any, extraData?: any): void;

/**
 * ComponentFactory interface implementation.
 */
export declare class ɵRender3ComponentFactory<T> extends ComponentFactory<T> {
	private componentDef;
	private ngModule?;
	selector: string;
	componentType: Type<any>;
	ngContentSelectors: string[];
	isBoundToModule: boolean;
	get inputs(): {
		propName: string;
		templateName: string;
	}[];
	get outputs(): {
		propName: string;
		templateName: string;
	}[];
	/**
	 * @param componentDef The component definition.
	 * @param ngModule The NgModuleRef to which the factory is bound.
	 */
	constructor(componentDef: ɵComponentDef<any>, ngModule?: NgModuleRef<any> | undefined);
	create(injector: Injector, projectableNodes?: any[][] | undefined, rootSelectorOrNode?: any, environmentInjector?: NgModuleRef<any> | EnvironmentInjector | undefined): ComponentRef<T>;
}

/**
 * Represents an instance of a Component created via a {@link ComponentFactory}.
 *
 * \`ComponentRef\` provides access to the Component Instance as well other objects related to this
 * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
 * method.
 *
 */
export declare class ɵRender3ComponentRef<T> extends ComponentRef<T> {
	location: ElementRef;
	private _rootLView;
	private _tNode;
	instance: T;
	hostView: ɵViewRef<T>;
	changeDetectorRef: ChangeDetectorRef;
	componentType: Type<T>;
	constructor(componentType: Type<T>, instance: T, location: ElementRef, _rootLView: LView, _tNode: TElementNode | TContainerNode | TElementContainerNode);
	setInput(name: string, value: unknown): void;
	get injector(): Injector;
	destroy(): void;
	onDestroy(callback: () => void): void;
}

export declare class ɵRender3NgModuleRef<T> extends NgModuleRef<T> implements InternalNgModuleRef<T> {
	_parent: Injector | null;
	_bootstrapComponents: Type<any>[];
	_r3Injector: R3Injector;
	instance: T;
	destroyCbs: (() => void)[] | null;
	readonly componentFactoryResolver: ComponentFactoryResolver_2;
	constructor(ngModuleType: Type<T>, _parent: Injector | null);
	get injector(): EnvironmentInjector;
	destroy(): void;
	onDestroy(callback: () => void): void;
}

/**
 * Flags passed into template functions to determine which blocks (i.e. creation, update)
 * should be executed.
 *
 * Typically, a template runs both the creation block and the update block on initialization and
 * subsequent runs only execute the update block. However, dynamically created views require that
 * the creation block be executed separately from the update block (for backwards compat).
 */
export declare const enum ɵRenderFlags {
	Create = 1,
	Update = 2
}

export declare function ɵresetCompiledComponents(): void;

export declare function ɵresetJitOptions(): void;

/**
 * Used to resolve resource URLs on \`@Component\` when used with JIT compilation.
 *
 * Example:
 * \`\`\`
 * @Component({
 *   selector: 'my-comp',
 *   templateUrl: 'my-comp.html', // This requires asynchronous resolution
 * })
 * class MyComponent{
 * }
 *
 * // Calling \`renderComponent\` will fail because \`renderComponent\` is a synchronous process
 * // and \`MyComponent\`'s \`@Component.templateUrl\` needs to be resolved asynchronously.
 *
 * // Calling \`resolveComponentResources()\` will resolve \`@Component.templateUrl\` into
 * // \`@Component.template\`, which allows \`renderComponent\` to proceed in a synchronous manner.
 *
 * // Use browser's \`fetch()\` function as the default resource resolution strategy.
 * resolveComponentResources(fetch).then(() => {
 *   // After resolution all URLs have been converted into \`template\` strings.
 *   renderComponent(MyComponent);
 * });
 *
 * \`\`\`
 *
 * NOTE: In AOT the resolution happens during compilation, and so there should be no need
 * to call this method outside JIT mode.
 *
 * @param resourceResolver a function which is responsible for returning a \`Promise\` to the
 * contents of the resolved URL. Browser's \`fetch()\` method is a good default implementation.
 */
export declare function ɵresolveComponentResources(resourceResolver: (url: string) => (Promise<string | {
	text(): Promise<string>;
}>)): Promise<void>;

/**
 * Class that represents a runtime error.
 * Formats and outputs the error message in a consistent way.
 *
 * Example:
 * \`\`\`
 *  throw new RuntimeError(
 *    RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED,
 *    ngDevMode && 'Injector has already been destroyed.');
 * \`\`\`
 *
 * Note: the \`message\` argument contains a descriptive error message as a string in development
 * mode (when the \`ngDevMode\` is defined). In production mode (after tree-shaking pass), the
 * \`message\` argument becomes \`false\`, thus we account for it in the typings and the runtime logic.
 */
export declare class ɵRuntimeError<T extends number = RuntimeErrorCode> extends Error {
	code: T;
	constructor(code: T, message: null | false | string);
}

/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * @publicApi
 */
export declare interface ɵSafeHtml extends ɵSafeValue {
}

/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * @publicApi
 */
export declare interface ɵSafeResourceUrl extends ɵSafeValue {
}

/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * @publicApi
 */
export declare interface ɵSafeScript extends ɵSafeValue {
}

/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * @publicApi
 */
export declare interface ɵSafeStyle extends ɵSafeValue {
}

/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * @publicApi
 */
export declare interface ɵSafeUrl extends ɵSafeValue {
}

/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * @publicApi
 */
export declare interface ɵSafeValue {
}

/**
 * Control whether the NgModule registration system enforces that each NgModule type registered has
 * a unique id.
 *
 * This is useful for testing as the NgModule registry cannot be properly reset between tests with
 * Angular's current API.
 */
export declare function ɵsetAllowDuplicateNgModuleIdsForTest(allowDuplicates: boolean): void;

/**
 * Adds decorator, constructor, and property metadata to a given type via static metadata fields
 * on the type.
 *
 * These metadata fields can later be read with Angular's \`ReflectionCapabilities\` API.
 *
 * Calls to \`setClassMetadata\` can be guarded by ngDevMode, resulting in the metadata assignments
 * being tree-shaken away during production builds.
 */
export declare function ɵsetClassMetadata(type: Type<any>, decorators: any[] | null, ctorParameters: (() => any[]) | null, propDecorators: {
	[field: string]: any;
} | null): void;

export declare function ɵsetCurrentInjector(injector: Injector | null | undefined): Injector | undefined | null;


/**
 * Tell ivy what the \`document\` is for this platform.
 *
 * It is only necessary to call this if the current platform is not a browser.
 *
 * @param document The object representing the global \`document\` in this environment.
 */
export declare function ɵsetDocument(document: Document | undefined): void;


/**
 * Sets the locale id that will be used for translations and ICU expressions.
 * This is the ivy version of \`LOCALE_ID\` that was defined as an injection token for the view engine
 * but is now defined as a global value.
 *
 * @param localeId
 */
export declare function ɵsetLocaleId(localeId: string): void;

/**
 * Sets a strict mode for JIT-compiled components to throw an error on unknown elements,
 * instead of just logging the error.
 * (for AOT-compiled ones this check happens at build time).
 */
export declare function ɵsetUnknownElementStrictMode(shouldThrow: boolean): void;

/**
 * Sets a strict mode for JIT-compiled components to throw an error on unknown properties,
 * instead of just logging the error.
 * (for AOT-compiled ones this check happens at build time).
 */
export declare function ɵsetUnknownPropertyStrictMode(shouldThrow: boolean): void;

/** Store a value in the \`data\` at a given \`index\`. */
export declare function ɵstore<T>(tView: TView, lView: LView, index: number, value: T): void;


export declare function ɵstringify(token: any): string;

/**
 * Internal injection token that can used to access an instance of a Testability class.
 *
 * This token acts as a bridge between the core bootstrap code and the \`Testability\` class. This is
 * needed to ensure that there are no direct references to the \`Testability\` class, so it can be
 * tree-shaken away (if not referenced). For the environments/setups when the \`Testability\` class
 * should be available, this token is used to add a provider that references the \`Testability\`
 * class. Otherwise, only this token is retained in a bundle, but the \`Testability\` class is not.
 */
export declare const ɵTESTABILITY: InjectionToken<Testability>;

/**
 * Internal injection token to retrieve Testability getter class instance.
 */
export declare const ɵTESTABILITY_GETTER: InjectionToken<GetTestability>;

/**
 * Compute the pair of transitive scopes (compilation scope and exported scope) for a given type
 * (either a NgModule or a standalone component / directive / pipe).
 */
export declare function ɵtransitiveScopesFor<T>(type: Type<T>): ɵNgModuleTransitiveScopes;

/**
 * Helper function to remove all the locale data from \`LOCALE_DATA\`.
 */
export declare function ɵunregisterLocaleData(): void;

export declare function ɵunwrapSafeValue(value: ɵSafeValue): string;

export declare function ɵunwrapSafeValue<T>(value: T): T;

export declare class ɵViewRef<T> implements EmbeddedViewRef<T>, InternalViewRef, viewEngine_ChangeDetectorRef_interface {
	/**
	 * This represents the \`LView\` associated with the point where \`ChangeDetectorRef\` was
	 * requested.
	 *
	 * This may be different from \`_lView\` if the \`_cdRefInjectingView\` is an embedded view.
	 */
	private _cdRefInjectingView?;
	private _appRef;
	private _attachedToViewContainer;
	get rootNodes(): any[];
	constructor(
		/**
		 * This represents \`LView\` associated with the component when ViewRef is a ChangeDetectorRef.
		 *
		 * When ViewRef is created for a dynamic component, this also represents the \`LView\` for the
		 * component.
		 *
		 * For a "regular" ViewRef created for an embedded view, this is the \`LView\` for the embedded
		 * view.
		 *
		 * @internal
		 */
		_lView: LView,
		/**
		 * This represents the \`LView\` associated with the point where \`ChangeDetectorRef\` was
		 * requested.
		 *
		 * This may be different from \`_lView\` if the \`_cdRefInjectingView\` is an embedded view.
		 */
		_cdRefInjectingView?: LView<unknown> | undefined);
	get context(): T;
	set context(value: T);
	get destroyed(): boolean;
	destroy(): void;
	onDestroy(callback: Function): void;
	/**
	 * Marks a view and all of its ancestors dirty.
	 *
	 * This can be used to ensure an {@link ChangeDetectionStrategy#OnPush OnPush} component is
	 * checked when it needs to be re-rendered but the two normal triggers haven't marked it
	 * dirty (i.e. inputs haven't changed and events haven't fired in the view).
	 *
	 * <!-- TODO: Add a link to a chapter on OnPush components -->
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * \`\`\`typescript
	 * @Component({
	 *   selector: 'app-root',
	 *   template: \`Number of ticks: {{numberOfTicks}}\`
	 *   changeDetection: ChangeDetectionStrategy.OnPush,
	 * })
	 * class AppComponent {
	 *   numberOfTicks = 0;
	 *
	 *   constructor(private ref: ChangeDetectorRef) {
	 *     setInterval(() => {
	 *       this.numberOfTicks++;
	 *       // the following is required, otherwise the view will not be updated
	 *       this.ref.markForCheck();
	 *     }, 1000);
	 *   }
	 * }
	 * \`\`\`
	 */
	markForCheck(): void;
	/**
	 * Detaches the view from the change detection tree.
	 *
	 * Detached views will not be checked during change detection runs until they are
	 * re-attached, even if they are dirty. \`detach\` can be used in combination with
	 * {@link ChangeDetectorRef#detectChanges detectChanges} to implement local change
	 * detection checks.
	 *
	 * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
	 * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * The following example defines a component with a large list of readonly data.
	 * Imagine the data changes constantly, many times per second. For performance reasons,
	 * we want to check and update the list every five seconds. We can do that by detaching
	 * the component's change detector and doing a local check every five seconds.
	 *
	 * \`\`\`typescript
	 * class DataProvider {
	 *   // in a real application the returned data will be different every time
	 *   get data() {
	 *     return [1,2,3,4,5];
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'giant-list',
	 *   template: \`
	 *     <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
	 *   \`,
	 * })
	 * class GiantList {
	 *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {
	 *     ref.detach();
	 *     setInterval(() => {
	 *       this.ref.detectChanges();
	 *     }, 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [DataProvider],
	 *   template: \`
	 *     <giant-list><giant-list>
	 *   \`,
	 * })
	 * class App {
	 * }
	 * \`\`\`
	 */
	detach(): void;
	/**
	 * Re-attaches a view to the change detection tree.
	 *
	 * This can be used to re-attach views that were previously detached from the tree
	 * using {@link ChangeDetectorRef#detach detach}. Views are attached to the tree by default.
	 *
	 * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * The following example creates a component displaying \`live\` data. The component will detach
	 * its change detector from the main change detector tree when the component's live property
	 * is set to false.
	 *
	 * \`\`\`typescript
	 * class DataProvider {
	 *   data = 1;
	 *
	 *   constructor() {
	 *     setInterval(() => {
	 *       this.data = this.data * 2;
	 *     }, 500);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'live-data',
	 *   inputs: ['live'],
	 *   template: 'Data: {{dataProvider.data}}'
	 * })
	 * class LiveData {
	 *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {}
	 *
	 *   set live(value) {
	 *     if (value) {
	 *       this.ref.reattach();
	 *     } else {
	 *       this.ref.detach();
	 *     }
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app-root',
	 *   providers: [DataProvider],
	 *   template: \`
	 *     Live Update: <input type="checkbox" [(ngModel)]="live">
	 *     <live-data [live]="live"><live-data>
	 *   \`,
	 * })
	 * class AppComponent {
	 *   live = true;
	 * }
	 * \`\`\`
	 */
	reattach(): void;
	/**
	 * Checks the view and its children.
	 *
	 * This can also be used in combination with {@link ChangeDetectorRef#detach detach} to implement
	 * local change detection checks.
	 *
	 * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
	 * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
	 *
	 * @usageNotes
	 * ### Example
	 *
	 * The following example defines a component with a large list of readonly data.
	 * Imagine, the data changes constantly, many times per second. For performance reasons,
	 * we want to check and update the list every five seconds.
	 *
	 * We can do that by detaching the component's change detector and doing a local change detection
	 * check every five seconds.
	 *
	 * See {@link ChangeDetectorRef#detach detach} for more information.
	 */
	detectChanges(): void;
	/**
	 * Checks the change detector and its children, and throws if any changes are detected.
	 *
	 * This is used in development mode to verify that running change detection doesn't
	 * introduce other changes.
	 */
	checkNoChanges(): void;
	attachToViewContainerRef(): void;
	detachFromAppRef(): void;
	attachToAppRef(appRef: ViewRefTracker): void;
}

/**
 * Advances to an element for later binding instructions.
 *
 * Used in conjunction with instructions like {@link property} to act on elements with specified
 * indices, for example those created with {@link element} or {@link elementStart}.
 *
 * \`\`\`ts
 * (rf: RenderFlags, ctx: any) => {
 *   if (rf & 1) {
 *     text(0, 'Hello');
 *     text(1, 'Goodbye')
 *     element(2, 'div');
 *   }
 *   if (rf & 2) {
 *     advance(2); // Advance twice to the <div>.
 *     property('title', 'test');
 *   }
 *  }
 * \`\`\`
 * @param delta Number of elements to advance forwards by.
 *
 * @codeGenApi
 */
export declare function ɵɵadvance(delta: number): void;

/**
 * Updates the value of or removes a bound attribute on an Element.
 *
 * Used in the case of \`[attr.title]="value"\`
 *
 * @param name name The name of the attribute.
 * @param value value The attribute is removed when value is \`null\` or \`undefined\`.
 *                  Otherwise the attribute value is set to the stringified value.
 * @param sanitizer An optional function used to sanitize the value.
 * @param namespace Optional namespace to use when setting the attribute.
 *
 * @codeGenApi
 */
export declare function ɵɵattribute(name: string, value: any, sanitizer?: SanitizerFn | null, namespace?: string): typeof ɵɵattribute;

/**
 *
 * Update an interpolated attribute on an element with single bound value surrounded by text.
 *
 * Used when the value passed to a property has 1 interpolated value in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate1('title', 'prefix', v0, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate1(attrName: string, prefix: string, v0: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate1;

/**
 *
 * Update an interpolated attribute on an element with 2 bound values surrounded by text.
 *
 * Used when the value passed to a property has 2 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate2('title', 'prefix', v0, '-', v1, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate2(attrName: string, prefix: string, v0: any, i0: string, v1: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate2;

/**
 *
 * Update an interpolated attribute on an element with 3 bound values surrounded by text.
 *
 * Used when the value passed to a property has 3 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate3(
 * 'title', 'prefix', v0, '-', v1, '-', v2, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate3(attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate3;

/**
 *
 * Update an interpolated attribute on an element with 4 bound values surrounded by text.
 *
 * Used when the value passed to a property has 4 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate4(
 * 'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate4(attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate4;

/**
 *
 * Update an interpolated attribute on an element with 5 bound values surrounded by text.
 *
 * Used when the value passed to a property has 5 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate5(
 * 'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate5(attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate5;

/**
 *
 * Update an interpolated attribute on an element with 6 bound values surrounded by text.
 *
 * Used when the value passed to a property has 6 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate6(
 *    'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate6(attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate6;

/**
 *
 * Update an interpolated attribute on an element with 7 bound values surrounded by text.
 *
 * Used when the value passed to a property has 7 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate7(
 *    'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate7(attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate7;

/**
 *
 * Update an interpolated attribute on an element with 8 bound values surrounded by text.
 *
 * Used when the value passed to a property has 8 interpolated values in it:
 *
 * \`\`\`html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolate8(
 *  'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, 'suffix');
 * \`\`\`
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param i6 Static value used for concatenation only.
 * @param v7 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolate8(attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolate8;

/**
 * Update an interpolated attribute on an element with 9 or more bound values surrounded by text.
 *
 * Used when the number of interpolated values exceeds 8.
 *
 * \`\`\`html
 * <div
 *  title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵattributeInterpolateV(
 *  'title', ['prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, '-', v9,
 *  'suffix']);
 * \`\`\`
 *
 * @param attrName The name of the attribute to update.
 * @param values The collection of values and the strings in-between those values, beginning with
 * a string prefix and ending with a string suffix.
 * (e.g. \`['prefix', value0, '-', value1, '-', value2, ..., value99, 'suffix']\`)
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵattributeInterpolateV(attrName: string, values: any[], sanitizer?: SanitizerFn, namespace?: string): typeof ɵɵattributeInterpolateV;

/**
 * Update class bindings using an object literal or class-string on an element.
 *
 * This instruction is meant to apply styling via the \`[class]="exp"\` template bindings.
 * When classes are applied to the element they will then be updated with
 * respect to any styles/classes set via \`classProp\`. If any
 * classes are set to falsy then they will be removed from the element.
 *
 * Note that the styling instruction will not be applied until \`stylingApply\` is called.
 * Note that this will the provided classMap value to the host element if this function is called
 * within a host binding.
 *
 * @param classes A key/value map or string of CSS classes that will be added to the
 *        given element. Any missing classes (that have already been applied to the element
 *        beforehand) will be removed (unset) from the element's list of CSS classes.
 *
 * @codeGenApi
 */
export declare function ɵɵclassMap(classes: {
	[className: string]: boolean | undefined | null;
} | string | undefined | null): void;


/**
 *
 * Update an interpolated class on an element with single bound value surrounded by text.
 *
 * Used when the value passed to a property has 1 interpolated value in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate1('prefix', v0, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate1(prefix: string, v0: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 2 bound values surrounded by text.
 *
 * Used when the value passed to a property has 2 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate2('prefix', v0, '-', v1, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate2(prefix: string, v0: any, i0: string, v1: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 3 bound values surrounded by text.
 *
 * Used when the value passed to a property has 3 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate3(
 * 'prefix', v0, '-', v1, '-', v2, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate3(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 4 bound values surrounded by text.
 *
 * Used when the value passed to a property has 4 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate4(
 * 'prefix', v0, '-', v1, '-', v2, '-', v3, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate4(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 5 bound values surrounded by text.
 *
 * Used when the value passed to a property has 5 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate5(
 * 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate5(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 6 bound values surrounded by text.
 *
 * Used when the value passed to a property has 6 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate6(
 *    'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate6(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 7 bound values surrounded by text.
 *
 * Used when the value passed to a property has 7 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate7(
 *    'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate7(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string): void;

/**
 *
 * Update an interpolated class on an element with 8 bound values surrounded by text.
 *
 * Used when the value passed to a property has 8 interpolated values in it:
 *
 * \`\`\`html
 * <div class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolate8(
 *  'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param i6 Static value used for concatenation only.
 * @param v7 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolate8(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any, suffix: string): void;

/**
 * Update an interpolated class on an element with 9 or more bound values surrounded by text.
 *
 * Used when the number of interpolated values exceeds 8.
 *
 * \`\`\`html
 * <div
 *  class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵclassMapInterpolateV(
 *  ['prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, '-', v9,
 *  'suffix']);
 * \`\`\`
 *.
 * @param values The collection of values and the strings in-between those values, beginning with
 * a string prefix and ending with a string suffix.
 * (e.g. \`['prefix', value0, '-', value1, '-', value2, ..., value99, 'suffix']\`)
 * @codeGenApi
 */
export declare function ɵɵclassMapInterpolateV(values: any[]): void;

/**
 * Update a class binding on an element with the provided value.
 *
 * This instruction is meant to handle the \`[class.foo]="exp"\` case and,
 * therefore, the class binding itself must already be allocated using
 * \`styling\` within the creation block.
 *
 * @param prop A valid CSS class (only one).
 * @param value A true/false value which will turn the class on or off.
 *
 * Note that this will apply the provided class value to the host element if this function
 * is called within a host binding function.
 *
 * @codeGenApi
 */
export declare function ɵɵclassProp(className: string, value: boolean | undefined | null): typeof ɵɵclassProp;

/**
 * @publicApi
 */
export declare type ɵɵComponentDeclaration<T, Selector extends String, ExportAs extends string[], InputMap extends {
	[key: string]: string;
}, OutputMap extends {
	[key: string]: string;
}, QueryFields extends string[], NgContentSelectors extends string[], IsStandalone extends boolean = false> = unknown;

/**
 * Registers a QueryList, associated with a content query, for later refresh (part of a view
 * refresh).
 *
 * @param directiveIndex Current directive index
 * @param predicate The type for which the query will search
 * @param flags Flags associated with the query
 * @param read What to save in the query
 * @returns QueryList<T>
 *
 * @codeGenApi
 */
export declare function ɵɵcontentQuery<T>(directiveIndex: number, predicate: ProviderToken<unknown> | string[], flags: QueryFlags, read?: any): void;

/**
 * Copies the fields not handled by the \`ɵɵInheritDefinitionFeature\` from the supertype of a
 * definition.
 *
 * This exists primarily to support ngcc migration of an existing View Engine pattern, where an
 * entire decorator is inherited from a parent to a child class. When ngcc detects this case, it
 * generates a skeleton definition on the child class, and applies this feature.
 *
 * The \`ɵɵCopyDefinitionFeature\` then copies any needed fields from the parent class' definition,
 * including things like the component template function.
 *
 * @param definition The definition of a child class which inherits from a parent class with its
 * own definition.
 *
 * @codeGenApi
 */
export declare function ɵɵCopyDefinitionFeature(definition: ɵDirectiveDef<any> | ɵComponentDef<any>): void;

/**
 * Create a component definition object.
 *
 *
 * # Example
 * \`\`\`
 * class MyDirective {
 *   // Generated by Angular Template Compiler
 *   // [Symbol] syntax will not be supported by TypeScript until v2.7
 *   static ɵcmp = defineComponent({
 *     ...
 *   });
 * }
 * \`\`\`
 * @codeGenApi
 */
export declare function ɵɵdefineComponent<T>(componentDefinition: {
	/**
	 * Directive type, needed to configure the injector.
	 */
	type: Type<T>;
	/** The selectors that will be used to match nodes to this component. */
	selectors?: ɵCssSelectorList;
	/**
	 * The number of nodes, local refs, and pipes in this component template.
	 *
	 * Used to calculate the length of this component's LView array, so we
	 * can pre-fill the array and set the binding start index.
	 */
	decls: number;
	/**
	 * The number of bindings in this component template (including pure fn bindings).
	 *
	 * Used to calculate the length of this component's LView array, so we
	 * can pre-fill the array and set the host binding start index.
	 */
	vars: number;
	/**
	 * A map of input names.
	 *
	 * The format is in: \`{[actualPropertyName: string]:(string|[string, string])}\`.
	 *
	 * Given:
	 * \`\`\`
	 * class MyComponent {
	 *   @Input()
	 *   publicInput1: string;
	 *
	 *   @Input('publicInput2')
	 *   declaredInput2: string;
	 * }
	 * \`\`\`
	 *
	 * is described as:
	 * \`\`\`
	 * {
	 *   publicInput1: 'publicInput1',
	 *   declaredInput2: ['publicInput2', 'declaredInput2'],
	 * }
	 * \`\`\`
	 *
	 * Which the minifier may translate to:
	 * \`\`\`
	 * {
	 *   minifiedPublicInput1: 'publicInput1',
	 *   minifiedDeclaredInput2: ['publicInput2', 'declaredInput2'],
	 * }
	 * \`\`\`
	 *
	 * This allows the render to re-construct the minified, public, and declared names
	 * of properties.
	 *
	 * NOTE:
	 *  - Because declared and public name are usually same we only generate the array
	 *    \`['public', 'declared']\` format when they differ.
	 *  - The reason why this API and \`outputs\` API is not the same is that \`NgOnChanges\` has
	 *    inconsistent behavior in that it uses declared names rather than minified or public. For
	 *    this reason \`NgOnChanges\` will be deprecated and removed in future version and this
	 *    API will be simplified to be consistent with \`output\`.
	 */
	inputs?: {
		[P in keyof T]?: string | [string, string];
	};
	/**
	 * A map of output names.
	 *
	 * The format is in: \`{[actualPropertyName: string]:string}\`.
	 *
	 * Which the minifier may translate to: \`{[minifiedPropertyName: string]:string}\`.
	 *
	 * This allows the render to re-construct the minified and non-minified names
	 * of properties.
	 */
	outputs?: {
		[P in keyof T]?: string;
	};
	/**
	 * Function executed by the parent template to allow child directive to apply host bindings.
	 */
	hostBindings?: HostBindingsFunction<T>;
	/**
	 * The number of bindings in this directive \`hostBindings\` (including pure fn bindings).
	 *
	 * Used to calculate the length of the component's LView array, so we
	 * can pre-fill the array and set the host binding start index.
	 */
	hostVars?: number;
	/**
	 * Assign static attribute values to a host element.
	 *
	 * This property will assign static attribute values as well as class and style
	 * values to a host element. Since attribute values can consist of different types of values, the
	 * \`hostAttrs\` array must include the values in the following format:
	 *
	 * attrs = [
	 *   // static attributes (like \`title\`, \`name\`, \`id\`...)
	 *   attr1, value1, attr2, value,
	 *
	 *   // a single namespace value (like \`x:id\`)
	 *   NAMESPACE_MARKER, namespaceUri1, name1, value1,
	 *
	 *   // another single namespace value (like \`x:name\`)
	 *   NAMESPACE_MARKER, namespaceUri2, name2, value2,
	 *
	 *   // a series of CSS classes that will be applied to the element (no spaces)
	 *   CLASSES_MARKER, class1, class2, class3,
	 *
	 *   // a series of CSS styles (property + value) that will be applied to the element
	 *   STYLES_MARKER, prop1, value1, prop2, value2
	 * ]
	 *
	 * All non-class and non-style attributes must be defined at the start of the list
	 * first before all class and style values are set. When there is a change in value
	 * type (like when classes and styles are introduced) a marker must be used to separate
	 * the entries. The marker values themselves are set via entries found in the
	 * [AttributeMarker] enum.
	 */
	hostAttrs?: TAttributes;
	/**
	 * Function to create instances of content queries associated with a given directive.
	 */
	contentQueries?: ContentQueriesFunction<T>;
	/**
	 * Defines the name that can be used in the template to assign this directive to a variable.
	 *
	 * See: {@link Directive.exportAs}
	 */
	exportAs?: string[];
	/**
	 * Template function use for rendering DOM.
	 *
	 * This function has following structure.
	 *
	 * \`\`\`
	 * function Template<T>(ctx:T, creationMode: boolean) {
	 *   if (creationMode) {
	 *     // Contains creation mode instructions.
	 *   }
	 *   // Contains binding update instructions
	 * }
	 * \`\`\`
	 *
	 * Common instructions are:
	 * Creation mode instructions:
	 *  - \`elementStart\`, \`elementEnd\`
	 *  - \`text\`
	 *  - \`container\`
	 *  - \`listener\`
	 *
	 * Binding update instructions:
	 * - \`bind\`
	 * - \`elementAttribute\`
	 * - \`elementProperty\`
	 * - \`elementClass\`
	 * - \`elementStyle\`
	 *
	 */
	template: ComponentTemplate<T>;
	/**
	 * Constants for the nodes in the component's view.
	 * Includes attribute arrays, local definition arrays etc.
	 */
	consts?: TConstantsOrFactory;
	/**
	 * An array of \`ngContent[selector]\` values that were found in the template.
	 */
	ngContentSelectors?: string[];
	/**
	 * Additional set of instructions specific to view query processing. This could be seen as a
	 * set of instruction to be inserted into the template function.
	 *
	 * Query-related instructions need to be pulled out to a specific function as a timing of
	 * execution is different as compared to all other instructions (after change detection hooks but
	 * before view hooks).
	 */
	viewQuery?: ViewQueriesFunction<T> | null;
	/**
	 * A list of optional features to apply.
	 *
	 * See: {@link NgOnChangesFeature}, {@link ProvidersFeature}
	 */
	features?: ComponentDefFeature[];
	/**
	 * Defines template and style encapsulation options available for Component's {@link Component}.
	 */
	encapsulation?: ViewEncapsulation;
	/**
	 * Defines arbitrary developer-defined data to be stored on a renderer instance.
	 * This is useful for renderers that delegate to other renderers.
	 *
	 * see: animation
	 */
	data?: {
		[kind: string]: any;
	};
	/**
	 * A set of styles that the component needs to be present for component to render correctly.
	 */
	styles?: string[];
	/**
	 * The strategy that the default change detector uses to detect changes.
	 * When set, takes effect the next time change detection is triggered.
	 */
	changeDetection?: ChangeDetectionStrategy;
	/**
	 * Registry of directives, components, and pipes that may be found in this component's view.
	 *
	 * This property is either an array of types or a function that returns the array of types. This
	 * function may be necessary to support forward declarations.
	 */
	dependencies?: TypeOrFactory<DependencyTypeList>;
	/**
	 * The set of schemas that declare elements to be allowed in the component's template.
	 */
	schemas?: SchemaMetadata[] | null;
	/**
	 * Whether this directive/component is standalone.
	 */
	standalone?: boolean;
}): unknown;

/**
 * Create a directive definition object.
 *
 * # Example
 * \`\`\`ts
 * class MyDirective {
 *   // Generated by Angular Template Compiler
 *   // [Symbol] syntax will not be supported by TypeScript until v2.7
 *   static ɵdir = ɵɵdefineDirective({
 *     ...
 *   });
 * }
 * \`\`\`
 *
 * @codeGenApi
 */
export declare const ɵɵdefineDirective: <T>(directiveDefinition: {
	/**
	 * Directive type, needed to configure the injector.
	 */
	type: Type<T>;
	/** The selectors that will be used to match nodes to this directive. */
	selectors?: ɵCssSelectorList | undefined;
	/**
	 * A map of input names.
	 *
	 * The format is in: \`{[actualPropertyName: string]:(string|[string, string])}\`.
	 *
	 * Given:
	 * \`\`\`
	 * class MyComponent {
	 *   @Input()
	 *   publicInput1: string;
	 *
	 *   @Input('publicInput2')
	 *   declaredInput2: string;
	 * }
	 * \`\`\`
	 *
	 * is described as:
	 * \`\`\`
	 * {
	 *   publicInput1: 'publicInput1',
	 *   declaredInput2: ['declaredInput2', 'publicInput2'],
	 * }
	 * \`\`\`
	 *
	 * Which the minifier may translate to:
	 * \`\`\`
	 * {
	 *   minifiedPublicInput1: 'publicInput1',
	 *   minifiedDeclaredInput2: [ 'publicInput2', 'declaredInput2'],
	 * }
	 * \`\`\`
	 *
	 * This allows the render to re-construct the minified, public, and declared names
	 * of properties.
	 *
	 * NOTE:
	 *  - Because declared and public name are usually same we only generate the array
	 *    \`['declared', 'public']\` format when they differ.
	 *  - The reason why this API and \`outputs\` API is not the same is that \`NgOnChanges\` has
	 *    inconsistent behavior in that it uses declared names rather than minified or public. For
	 *    this reason \`NgOnChanges\` will be deprecated and removed in future version and this
	 *    API will be simplified to be consistent with \`output\`.
	 */
	inputs?: { [P in keyof T]?: string | [string, string] | undefined; } | undefined;
	/**
	 * A map of output names.
	 *
	 * The format is in: \`{[actualPropertyName: string]:string}\`.
	 *
	 * Which the minifier may translate to: \`{[minifiedPropertyName: string]:string}\`.
	 *
	 * This allows the render to re-construct the minified and non-minified names
	 * of properties.
	 */
	outputs?: { [P_1 in keyof T]?: string | undefined; } | undefined;
	/**
	 * A list of optional features to apply.
	 *
	 * See: {@link NgOnChangesFeature}, {@link ProvidersFeature}, {@link InheritDefinitionFeature}
	 */
	features?: DirectiveDefFeature[] | undefined;
	/**
	 * Function executed by the parent template to allow child directive to apply host bindings.
	 */
	hostBindings?: HostBindingsFunction<T> | undefined;
	/**
	 * The number of bindings in this directive \`hostBindings\` (including pure fn bindings).
	 *
	 * Used to calculate the length of the component's LView array, so we
	 * can pre-fill the array and set the host binding start index.
	 */
	hostVars?: number | undefined;
	/**
	 * Assign static attribute values to a host element.
	 *
	 * This property will assign static attribute values as well as class and style
	 * values to a host element. Since attribute values can consist of different types of values,
	 * the \`hostAttrs\` array must include the values in the following format:
	 *
	 * attrs = [
	 *   // static attributes (like \`title\`, \`name\`, \`id\`...)
	 *   attr1, value1, attr2, value,
	 *
	 *   // a single namespace value (like \`x:id\`)
	 *   NAMESPACE_MARKER, namespaceUri1, name1, value1,
	 *
	 *   // another single namespace value (like \`x:name\`)
	 *   NAMESPACE_MARKER, namespaceUri2, name2, value2,
	 *
	 *   // a series of CSS classes that will be applied to the element (no spaces)
	 *   CLASSES_MARKER, class1, class2, class3,
	 *
	 *   // a series of CSS styles (property + value) that will be applied to the element
	 *   STYLES_MARKER, prop1, value1, prop2, value2
	 * ]
	 *
	 * All non-class and non-style attributes must be defined at the start of the list
	 * first before all class and style values are set. When there is a change in value
	 * type (like when classes and styles are introduced) a marker must be used to separate
	 * the entries. The marker values themselves are set via entries found in the
	 * [AttributeMarker] enum.
	 */
	hostAttrs?: TAttributes | undefined;
	/**
	 * Function to create instances of content queries associated with a given directive.
	 */
	contentQueries?: ContentQueriesFunction<T> | undefined;
	/**
	 * Additional set of instructions specific to view query processing. This could be seen as a
	 * set of instructions to be inserted into the template function.
	 */
	viewQuery?: ViewQueriesFunction<T> | null | undefined;
	/**
	 * Defines the name that can be used in the template to assign this directive to a variable.
	 *
	 * See: {@link Directive.exportAs}
	 */
	exportAs?: string[] | undefined;
}) => never;

/**
 * Construct an injectable definition which defines how a token will be constructed by the DI
 * system, and in which injectors (if any) it will be available.
 *
 * This should be assigned to a static \`ɵprov\` field on a type, which will then be an
 * \`InjectableType\`.
 *
 * Options:
 * * \`providedIn\` determines which injectors will include the injectable, by either associating it
 *   with an \`@NgModule\` or other \`InjectorType\`, or by specifying that this injectable should be
 *   provided in the \`'root'\` injector, which will be the application-level injector in most apps.
 * * \`factory\` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call \`inject\` to access the \`Injector\` and request injection of dependencies.
 *
 * @codeGenApi
 * @publicApi This instruction has been emitted by ViewEngine for some time and is deployed to npm.
 */
export declare function ɵɵdefineInjectable<T>(opts: {
	token: unknown;
	providedIn?: Type<any> | 'root' | 'platform' | 'any' | 'environment' | null;
	factory: () => T;
}): unknown;

/**
 * Construct an \`InjectorDef\` which configures an injector.
 *
 * This should be assigned to a static injector def (\`ɵinj\`) field on a type, which will then be an
 * \`InjectorType\`.
 *
 * Options:
 *
 * * \`providers\`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has a \`ɵprov\` static property (the
 *   type must be an \`InjectableType\`).
 * * \`imports\`: an optional array of imports of other \`InjectorType\`s or \`InjectorTypeWithModule\`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @codeGenApi
 */
export declare function ɵɵdefineInjector(options: {
	providers?: any[];
	imports?: any[];
}): unknown;

/**
 * @codeGenApi
 */
export declare function ɵɵdefineNgModule<T>(def: {
	/** Token representing the module. Used by DI. */
	type: T;
	/** List of components to bootstrap. */
	bootstrap?: Type<any>[] | (() => Type<any>[]);
	/** List of components, directives, and pipes declared by this module. */
	declarations?: Type<any>[] | (() => Type<any>[]);
	/** List of modules or \`ModuleWithProviders\` imported by this module. */
	imports?: Type<any>[] | (() => Type<any>[]);
	/**
	 * List of modules, \`ModuleWithProviders\`, components, directives, or pipes exported by this
	 * module.
	 */
	exports?: Type<any>[] | (() => Type<any>[]);
	/** The set of schemas that declare elements to be allowed in the NgModule. */
	schemas?: SchemaMetadata[] | null;
	/** Unique ID for the module that is used with \`getModuleFactory\`. */
	id?: string | null;
}): unknown;

/**
 * Create a pipe definition object.
 *
 * # Example
 * \`\`\`
 * class MyPipe implements PipeTransform {
 *   // Generated by Angular Template Compiler
 *   static ɵpipe = definePipe({
 *     ...
 *   });
 * }
 * \`\`\`
 * @param pipeDef Pipe definition generated by the compiler
 *
 * @codeGenApi
 */
export declare function ɵɵdefinePipe<T>(pipeDef: {
	/** Name of the pipe. Used for matching pipes in template to pipe defs. */
	name: string;
	/** Pipe class reference. Needed to extract pipe lifecycle hooks. */
	type: Type<T>;
	/** Whether the pipe is pure. */
	pure?: boolean;
	/**
	 * Whether the pipe is standalone.
	 */
	standalone?: boolean;
}): unknown;


/**
 * @publicApi
 */
export declare type ɵɵDirectiveDeclaration<T, Selector extends string, ExportAs extends string[], InputMap extends {
	[key: string]: string;
}, OutputMap extends {
	[key: string]: string;
}, QueryFields extends string[], NgContentSelectors extends never = never, IsStandalone extends boolean = false> = unknown;

/**
 * Returns the value associated to the given token from the injectors.
 *
 * \`directiveInject\` is intended to be used for directive, component and pipe factories.
 *  All other injection use \`inject\` which does not walk the node injector tree.
 *
 * Usage example (in factory function):
 *
 * \`\`\`ts
 * class SomeDirective {
 *   constructor(directive: DirectiveA) {}
 *
 *   static ɵdir = ɵɵdefineDirective({
 *     type: SomeDirective,
 *     factory: () => new SomeDirective(ɵɵdirectiveInject(DirectiveA))
 *   });
 * }
 * \`\`\`
 * @param token the type or token to inject
 * @param flags Injection flags
 * @returns the value from the injector or \`null\` when not found
 *
 * @codeGenApi
 */
export declare function ɵɵdirectiveInject<T>(token: ProviderToken<T>): T;

export declare function ɵɵdirectiveInject<T>(token: ProviderToken<T>, flags: InjectFlags): T;

/**
 * Disables directive matching on element.
 *
 *  * Example:
 * \`\`\`
 * <my-comp my-directive>
 *   Should match component / directive.
 * </my-comp>
 * <div ngNonBindable>
 *   <!-- ɵɵdisableBindings() -->
 *   <my-comp my-directive>
 *     Should not match component / directive because we are in ngNonBindable.
 *   </my-comp>
 *   <!-- ɵɵenableBindings() -->
 * </div>
 * \`\`\`
 *
 * @codeGenApi
 */
export declare function ɵɵdisableBindings(): void;

/**
 * Creates an empty element using {@link elementStart} and {@link elementEnd}
 *
 * @param index Index of the element in the data array
 * @param name Name of the DOM Node
 * @param attrsIndex Index of the element's attributes in the \`consts\` array.
 * @param localRefsIndex Index of the element's local references in the \`consts\` array.
 * @returns This function returns itself so that it may be chained.
 *
 * @codeGenApi
 */
export declare function ɵɵelement(index: number, name: string, attrsIndex?: number | null, localRefsIndex?: number): typeof ɵɵelement;

/**
 * Creates an empty logical container using {@link elementContainerStart}
 * and {@link elementContainerEnd}
 *
 * @param index Index of the element in the LView array
 * @param attrsIndex Index of the container attributes in the \`consts\` array.
 * @param localRefsIndex Index of the container's local references in the \`consts\` array.
 * @returns This function returns itself so that it may be chained.
 *
 * @codeGenApi
 */
export declare function ɵɵelementContainer(index: number, attrsIndex?: number | null, localRefsIndex?: number): typeof ɵɵelementContainer;

/**
 * Mark the end of the <ng-container>.
 * @returns This function returns itself so that it may be chained.
 *
 * @codeGenApi
 */
export declare function ɵɵelementContainerEnd(): typeof ɵɵelementContainerEnd;

/**
 * Creates a logical container for other nodes (<ng-container>) backed by a comment node in the DOM.
 * The instruction must later be followed by \`elementContainerEnd()\` call.
 *
 * @param index Index of the element in the LView array
 * @param attrsIndex Index of the container attributes in the \`consts\` array.
 * @param localRefsIndex Index of the container's local references in the \`consts\` array.
 * @returns This function returns itself so that it may be chained.
 *
 * Even if this instruction accepts a set of attributes no actual attribute values are propagated to
 * the DOM (as a comment node can't have attributes). Attributes are here only for directive
 * matching purposes and setting initial inputs of directives.
 *
 * @codeGenApi
 */
export declare function ɵɵelementContainerStart(index: number, attrsIndex?: number | null, localRefsIndex?: number): typeof ɵɵelementContainerStart;

/**
 * Mark the end of the element.
 * @returns This function returns itself so that it may be chained.
 *
 * @codeGenApi
 */
export declare function ɵɵelementEnd(): typeof ɵɵelementEnd;


/**
 * Create DOM element. The instruction must later be followed by \`elementEnd()\` call.
 *
 * @param index Index of the element in the LView array
 * @param name Name of the DOM Node
 * @param attrsIndex Index of the element's attributes in the \`consts\` array.
 * @param localRefsIndex Index of the element's local references in the \`consts\` array.
 * @returns This function returns itself so that it may be chained.
 *
 * Attributes and localRefs are passed as an array of strings where elements with an even index
 * hold an attribute name and elements with an odd index hold an attribute value, ex.:
 * ['id', 'warning5', 'class', 'alert']
 *
 * @codeGenApi
 */
export declare function ɵɵelementStart(index: number, name: string, attrsIndex?: number | null, localRefsIndex?: number): typeof ɵɵelementStart;

/**
 * Enables directive matching on elements.
 *
 *  * Example:
 * \`\`\`
 * <my-comp my-directive>
 *   Should match component / directive.
 * </my-comp>
 * <div ngNonBindable>
 *   <!-- ɵɵdisableBindings() -->
 *   <my-comp my-directive>
 *     Should not match component / directive because we are in ngNonBindable.
 *   </my-comp>
 *   <!-- ɵɵenableBindings() -->
 * </div>
 * \`\`\`
 *
 * @codeGenApi
 */
export declare function ɵɵenableBindings(): void;

/**
 * @publicApi
 */
export declare type ɵɵFactoryDeclaration<T, CtorDependencies extends CtorDependency[]> = unknown;

export declare enum ɵɵFactoryTarget {
	Directive = 0,
	Component = 1,
	Injectable = 2,
	Pipe = 3,
	NgModule = 4
}

/**
 * Returns the current OpaqueViewState instance.
 *
 * Used in conjunction with the restoreView() instruction to save a snapshot
 * of the current view and restore it when listeners are invoked. This allows
 * walking the declaration view tree in listeners to get vars from parent views.
 *
 * @codeGenApi
 */
export declare function ɵɵgetCurrentView(): OpaqueViewState;

/**
 * @codeGenApi
 */
export declare function ɵɵgetInheritedFactory<T>(type: Type<any>): (type: Type<T>) => T;

/**
 * Update a property on a host element. Only applies to native node properties, not inputs.
 *
 * Operates on the element selected by index via the {@link select} instruction.
 *
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 * @returns This function returns itself so that it may be chained
 * (e.g. \`property('name', ctx.name)('title', ctx.title)\`)
 *
 * @codeGenApi
 */
export declare function ɵɵhostProperty<T>(propName: string, value: T, sanitizer?: SanitizerFn | null): typeof ɵɵhostProperty;

/**
 *
 * Use this instruction to create a translation block that doesn't contain any placeholder.
 * It calls both {@link i18nStart} and {@link i18nEnd} in one instruction.
 *
 * The translation \`message\` is the value which is locale specific. The translation string may
 * contain placeholders which associate inner elements and sub-templates within the translation.
 *
 * The translation \`message\` placeholders are:
 * - \`�{index}(:{block})�\`: *Binding Placeholder*: Marks a location where an expression will be
 *   interpolated into. The placeholder \`index\` points to the expression binding index. An optional
 *   \`block\` that matches the sub-template in which it was declared.
 * - \`�#{index}(:{block})�\`/\`�/#{index}(:{block})�\`: *Element Placeholder*:  Marks the beginning
 *   and end of DOM element that were embedded in the original translation block. The placeholder
 *   \`index\` points to the element index in the template instructions set. An optional \`block\` that
 *   matches the sub-template in which it was declared.
 * - \`�*{index}:{block}�\`/\`�/*{index}:{block}�\`: *Sub-template Placeholder*: Sub-templates must be
 *   split up and translated separately in each angular template function. The \`index\` points to the
 *   \`template\` instruction index. A \`block\` that matches the sub-template in which it was declared.
 *
 * @param index A unique index of the translation in the static block.
 * @param messageIndex An index of the translation message from the \`def.consts\` array.
 * @param subTemplateIndex Optional sub-template index in the \`message\`.
 *
 * @codeGenApi
 */
export declare function ɵɵi18n(index: number, messageIndex: number, subTemplateIndex?: number): void;

/**
 * Updates a translation block or an i18n attribute when the bindings have changed.
 *
 * @param index Index of either {@link i18nStart} (translation block) or {@link i18nAttributes}
 * (i18n attribute) on which it should update the content.
 *
 * @codeGenApi
 */
export declare function ɵɵi18nApply(index: number): void;

/**
 * Marks a list of attributes as translatable.
 *
 * @param index A unique index in the static block
 * @param values
 *
 * @codeGenApi
 */
export declare function ɵɵi18nAttributes(index: number, attrsIndex: number): void;

/**
 * Translates a translation block marked by \`i18nStart\` and \`i18nEnd\`. It inserts the text/ICU nodes
 * into the render tree, moves the placeholder nodes and removes the deleted nodes.
 *
 * @codeGenApi
 */
export declare function ɵɵi18nEnd(): void;

/**
 * Stores the values of the bindings during each update cycle in order to determine if we need to
 * update the translated nodes.
 *
 * @param value The binding's value
 * @returns This function returns itself so that it may be chained
 * (e.g. \`i18nExp(ctx.name)(ctx.title)\`)
 *
 * @codeGenApi
 */
export declare function ɵɵi18nExp<T>(value: T): typeof ɵɵi18nExp;

/**
 * Handles message string post-processing for internationalization.
 *
 * Handles message string post-processing by transforming it from intermediate
 * format (that might contain some markers that we need to replace) to the final
 * form, consumable by i18nStart instruction. Post processing steps include:
 *
 * 1. Resolve all multi-value cases (like [�*1:1��#2:1�|�#4:1�|�5�])
 * 2. Replace all ICU vars (like "VAR_PLURAL")
 * 3. Replace all placeholders used inside ICUs in a form of {PLACEHOLDER}
 * 4. Replace all ICU references with corresponding values (like �ICU_EXP_ICU_1�)
 *    in case multiple ICUs have the same placeholder name
 *
 * @param message Raw translation string for post processing
 * @param replacements Set of replacements that should be applied
 *
 * @returns Transformed string that can be consumed by i18nStart instruction
 *
 * @codeGenApi
 */
export declare function ɵɵi18nPostprocess(message: string, replacements?: {
	[key: string]: (string | string[]);
}): string;

/**
 * Marks a block of text as translatable.
 *
 * The instructions \`i18nStart\` and \`i18nEnd\` mark the translation block in the template.
 * The translation \`message\` is the value which is locale specific. The translation string may
 * contain placeholders which associate inner elements and sub-templates within the translation.
 *
 * The translation \`message\` placeholders are:
 * - \`�{index}(:{block})�\`: *Binding Placeholder*: Marks a location where an expression will be
 *   interpolated into. The placeholder \`index\` points to the expression binding index. An optional
 *   \`block\` that matches the sub-template in which it was declared.
 * - \`�#{index}(:{block})�\`/\`�/#{index}(:{block})�\`: *Element Placeholder*:  Marks the beginning
 *   and end of DOM element that were embedded in the original translation block. The placeholder
 *   \`index\` points to the element index in the template instructions set. An optional \`block\` that
 *   matches the sub-template in which it was declared.
 * - \`�*{index}:{block}�\`/\`�/*{index}:{block}�\`: *Sub-template Placeholder*: Sub-templates must be
 *   split up and translated separately in each angular template function. The \`index\` points to the
 *   \`template\` instruction index. A \`block\` that matches the sub-template in which it was declared.
 *
 * @param index A unique index of the translation in the static block.
 * @param messageIndex An index of the translation message from the \`def.consts\` array.
 * @param subTemplateIndex Optional sub-template index in the \`message\`.
 *
 * @codeGenApi
 */
export declare function ɵɵi18nStart(index: number, messageIndex: number, subTemplateIndex?: number): void;

/**
 * Merges the definition from a super class to a sub class.
 * @param definition The definition that is a SubClass of another directive of component
 *
 * @codeGenApi
 */
export declare function ɵɵInheritDefinitionFeature(definition: ɵDirectiveDef<any> | ɵComponentDef<any>): void;

/**
 * Generated instruction: injects a token from the currently active injector.
 *
 * (Additional documentation moved to \`inject\`, as it is the public API, and an alias for this
 * instruction)
 *
 * @see inject
 * @codeGenApi
 * @publicApi This instruction has been emitted by ViewEngine for some time and is deployed to npm.
 */
export declare function ɵɵinject<T>(token: ProviderToken<T>): T;

export declare function ɵɵinject<T>(token: ProviderToken<T>, flags?: InjectFlags): T | null;

/**
 * Information about how a type or \`InjectionToken\` interfaces with the DI system.
 *
 * At a minimum, this includes a \`factory\` which defines how to create the given type \`T\`, possibly
 * requesting injection of other types if necessary.
 *
 * Optionally, a \`providedIn\` parameter specifies that the given type belongs to a particular
 * \`Injector\`, \`NgModule\`, or a special scope (e.g. \`'root'\`). A value of \`null\` indicates
 * that the injectable does not belong to any scope.
 *
 * @codeGenApi
 * @publicApi The ViewEngine compiler emits code with this type for injectables. This code is
 *   deployed to npm, and should be treated as public api.
 
 */
export declare interface ɵɵInjectableDeclaration<T> {
	/**
	 * Specifies that the given type belongs to a particular injector:
	 * - \`InjectorType\` such as \`NgModule\`,
	 * - \`'root'\` the root injector
	 * - \`'any'\` all injectors.
	 * - \`null\`, does not belong to any injector. Must be explicitly listed in the injector
	 *   \`providers\`.
	 */
	providedIn: InjectorType<any> | 'root' | 'platform' | 'any' | 'environment' | null;
	/**
	 * The token to which this definition belongs.
	 *
	 * Note that this may not be the same as the type that the \`factory\` will create.
	 */
	token: unknown;
	/**
	 * Factory method to execute to create an instance of the injectable.
	 */
	factory: (t?: Type<any>) => T;
	/**
	 * In a case of no explicit injector, a location where the instance of the injectable is stored.
	 */
	value: T | undefined;
}

/**
 * Facade for the attribute injection from DI.
 *
 * @codeGenApi
 */
export declare function ɵɵinjectAttribute(attrNameToInject: string): string | null;

/**
 * @publicApi
 */
export declare type ɵɵInjectorDeclaration<T> = unknown;

/**
 * Information about the providers to be included in an \`Injector\` as well as how the given type
 * which carries the information should be created by the DI system.
 *
 * An \`InjectorDef\` can import other types which have \`InjectorDefs\`, forming a deep nested
 * structure of providers with a defined priority (identically to how \`NgModule\`s also have
 * an import/dependency structure).
 *
 * NOTE: This is a private type and should not be exported
 *
 * @codeGenApi
 */
export declare interface ɵɵInjectorDef<T> {
	providers: (Type<any> | ValueProvider | ExistingProvider | FactoryProvider | ConstructorProvider | StaticClassProvider | ClassProvider | any[])[];
	imports: (InjectorType<any> | InjectorTypeWithProviders<any>)[];
}

/**
 * Throws an error indicating that a factory function could not be generated by the compiler for a
 * particular class.
 *
 * This instruction allows the actual error message to be optimized away when ngDevMode is turned
 * off, saving bytes of generated code while still providing a good experience in dev mode.
 *
 * The name of the class is not mentioned here, but will be in the generated factory function name
 * and thus in the stack trace.
 *
 * @codeGenApi
 */
export declare function ɵɵinvalidFactory(): never;

/**
 * Throws an error indicating that a factory function could not be generated by the compiler for a
 * particular class.
 *
 * The name of the class is not mentioned here, but will be in the generated factory function name
 * and thus in the stack trace.
 *
 * @codeGenApi
 */
export declare function ɵɵinvalidFactoryDep(index: number): never;

/**
 * Adds an event listener to the current node.
 *
 * If an output exists on one of the node's directives, it also subscribes to the output
 * and saves the subscription for later cleanup.
 *
 * @param eventName Name of the event
 * @param listenerFn The function to be called when event emits
 * @param useCapture Whether or not to use capture in event listener
 * @param eventTargetResolver Function that returns global target information in case this listener
 * should be attached to a global object like window, document or body
 *
 * @codeGenApi
 */
export declare function ɵɵlistener(eventName: string, listenerFn: (e?: any) => any, useCapture?: boolean, eventTargetResolver?: GlobalTargetResolver): typeof ɵɵlistener;

/**
 * Loads a QueryList corresponding to the current view or content query.
 *
 * @codeGenApi
 */
export declare function ɵɵloadQuery<T>(): QueryList<T>;

/**
 * Sets the namespace used to create elements to \`null\`, which forces element creation to use
 * \`createElement\` rather than \`createElementNS\`.
 *
 * @codeGenApi
 */
export declare function ɵɵnamespaceHTML(): void;

/**
 * Sets the namespace used to create elements to \`'http://www.w3.org/1998/MathML/'\` in global state.
 *
 * @codeGenApi
 */
export declare function ɵɵnamespaceMathML(): void;

/**
 * Sets the namespace used to create elements to \`'http://www.w3.org/2000/svg'\` in global state.
 *
 * @codeGenApi
 */
export declare function ɵɵnamespaceSVG(): void;

/**
 * Retrieves a context at the level specified and saves it as the global, contextViewData.
 * Will get the next level up if level is not specified.
 *
 * This is used to save contexts of parent views so they can be bound in embedded views, or
 * in conjunction with reference() to bind a ref from a parent view.
 *
 * @param level The relative level of the view from which to grab context compared to contextVewData
 * @returns context
 *
 * @codeGenApi
 */
export declare function ɵɵnextContext<T = any>(level?: number): T;

/**
 * Evaluates the class metadata declaration.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareClassMetadata(decl: {
	type: Type<any>;
	decorators: any[];
	ctorParameters?: () => any[];
	propDecorators?: {
		[field: string]: any;
	};
}): void;

/**
 * Compiles a partial component declaration object into a full component definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareComponent(decl: R3DeclareComponentFacade): unknown;

/**
 * Compiles a partial directive declaration object into a full directive definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareDirective(decl: R3DeclareDirectiveFacade): unknown;

/**
 * Compiles a partial pipe declaration object into a full pipe definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareFactory(decl: R3DeclareFactoryFacade): unknown;

/**
 * Compiles a partial injectable declaration object into a full injectable definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareInjectable(decl: R3DeclareInjectableFacade): unknown;

/**
 * Compiles a partial injector declaration object into a full injector definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareInjector(decl: R3DeclareInjectorFacade): unknown;

/**
 * Compiles a partial NgModule declaration object into a full NgModule definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclareNgModule(decl: R3DeclareNgModuleFacade): unknown;

/**
 * Compiles a partial pipe declaration object into a full pipe definition object.
 *
 * @codeGenApi
 */
export declare function ɵɵngDeclarePipe(decl: R3DeclarePipeFacade): unknown;

/**
 * @publicApi
 */
export declare type ɵɵNgModuleDeclaration<T, Declarations, Imports, Exports> = unknown;

/**
 * The NgOnChangesFeature decorates a component with support for the ngOnChanges
 * lifecycle hook, so it should be included in any component that implements
 * that hook.
 *
 * If the component or directive uses inheritance, the NgOnChangesFeature MUST
 * be included as a feature AFTER {@link InheritDefinitionFeature}, otherwise
 * inherited properties will not be propagated to the ngOnChanges lifecycle
 * hook.
 *
 * Example usage:
 *
 * \`\`\`
 * static ɵcmp = defineComponent({
 *   ...
 *   inputs: {name: 'publicName'},
 *   features: [NgOnChangesFeature]
 * });
 * \`\`\`
 *
 * @codeGenApi
 */
export declare function ɵɵNgOnChangesFeature<T>(): DirectiveDefFeature;


/**
 * Create a pipe.
 *
 * @param index Pipe index where the pipe will be stored.
 * @param pipeName The name of the pipe
 * @returns T the instance of the pipe.
 *
 * @codeGenApi
 */
export declare function ɵɵpipe(index: number, pipeName: string): any;

/**
 * Invokes a pipe with 1 arguments.
 *
 * This instruction acts as a guard to {@link PipeTransform#transform} invoking
 * the pipe only when an input to the pipe changes.
 *
 * @param index Pipe index where the pipe was stored on creation.
 * @param slotOffset the offset in the reserved slot space
 * @param v1 1st argument to {@link PipeTransform#transform}.
 *
 * @codeGenApi
 */
export declare function ɵɵpipeBind1(index: number, slotOffset: number, v1: any): any;

/**
 * Invokes a pipe with 2 arguments.
 *
 * This instruction acts as a guard to {@link PipeTransform#transform} invoking
 * the pipe only when an input to the pipe changes.
 *
 * @param index Pipe index where the pipe was stored on creation.
 * @param slotOffset the offset in the reserved slot space
 * @param v1 1st argument to {@link PipeTransform#transform}.
 * @param v2 2nd argument to {@link PipeTransform#transform}.
 *
 * @codeGenApi
 */
export declare function ɵɵpipeBind2(index: number, slotOffset: number, v1: any, v2: any): any;

/**
 * Invokes a pipe with 3 arguments.
 *
 * This instruction acts as a guard to {@link PipeTransform#transform} invoking
 * the pipe only when an input to the pipe changes.
 *
 * @param index Pipe index where the pipe was stored on creation.
 * @param slotOffset the offset in the reserved slot space
 * @param v1 1st argument to {@link PipeTransform#transform}.
 * @param v2 2nd argument to {@link PipeTransform#transform}.
 * @param v3 4rd argument to {@link PipeTransform#transform}.
 *
 * @codeGenApi
 */
export declare function ɵɵpipeBind3(index: number, slotOffset: number, v1: any, v2: any, v3: any): any;

/**
 * Invokes a pipe with 4 arguments.
 *
 * This instruction acts as a guard to {@link PipeTransform#transform} invoking
 * the pipe only when an input to the pipe changes.
 *
 * @param index Pipe index where the pipe was stored on creation.
 * @param slotOffset the offset in the reserved slot space
 * @param v1 1st argument to {@link PipeTransform#transform}.
 * @param v2 2nd argument to {@link PipeTransform#transform}.
 * @param v3 3rd argument to {@link PipeTransform#transform}.
 * @param v4 4th argument to {@link PipeTransform#transform}.
 *
 * @codeGenApi
 */
export declare function ɵɵpipeBind4(index: number, slotOffset: number, v1: any, v2: any, v3: any, v4: any): any;

/**
 * Invokes a pipe with variable number of arguments.
 *
 * This instruction acts as a guard to {@link PipeTransform#transform} invoking
 * the pipe only when an input to the pipe changes.
 *
 * @param index Pipe index where the pipe was stored on creation.
 * @param slotOffset the offset in the reserved slot space
 * @param values Array of arguments to pass to {@link PipeTransform#transform} method.
 *
 * @codeGenApi
 */
export declare function ɵɵpipeBindV(index: number, slotOffset: number, values: [any, ...any[]]): any;

/**
 * @publicApi
 */
export declare type ɵɵPipeDeclaration<T, Name extends string, IsStandalone extends boolean = false> = unknown;

/**
 * Inserts previously re-distributed projected nodes. This instruction must be preceded by a call
 * to the projectionDef instruction.
 *
 * @param nodeIndex
 * @param selectorIndex:
 *        - 0 when the selector is \`*\` (or unspecified as this is the default value),
 *        - 1 based index of the selector from the {@link projectionDef}
 *
 * @codeGenApi
 */
export declare function ɵɵprojection(nodeIndex: number, selectorIndex?: number, attrs?: TAttributes): void;

/**
 * Instruction to distribute projectable nodes among <ng-content> occurrences in a given template.
 * It takes all the selectors from the entire component's template and decides where
 * each projected node belongs (it re-distributes nodes among "buckets" where each "bucket" is
 * backed by a selector).
 *
 * This function requires CSS selectors to be provided in 2 forms: parsed (by a compiler) and text,
 * un-parsed form.
 *
 * The parsed form is needed for efficient matching of a node against a given CSS selector.
 * The un-parsed, textual form is needed for support of the ngProjectAs attribute.
 *
 * Having a CSS selector in 2 different formats is not ideal, but alternatives have even more
 * drawbacks:
 * - having only a textual form would require runtime parsing of CSS selectors;
 * - we can't have only a parsed as we can't re-construct textual form from it (as entered by a
 * template author).
 *
 * @param projectionSlots? A collection of projection slots. A projection slot can be based
 *        on a parsed CSS selectors or set to the wildcard selector ("*") in order to match
 *        all nodes which do not match any selector. If not specified, a single wildcard
 *        selector projection slot will be defined.
 *
 * @codeGenApi
 */
export declare function ɵɵprojectionDef(projectionSlots?: ProjectionSlots): void;

/**
 * Update a property on a selected element.
 *
 * Operates on the element selected by index via the {@link select} instruction.
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled
 *
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 * @returns This function returns itself so that it may be chained
 * (e.g. \`property('name', ctx.name)('title', ctx.title)\`)
 *
 * @codeGenApi
 */
export declare function ɵɵproperty<T>(propName: string, value: T, sanitizer?: SanitizerFn | null): typeof ɵɵproperty;

/**
 *
 * Update an interpolated property on an element with a lone bound value
 *
 * Used when the value passed to a property has 1 interpolated value in it, an no additional text
 * surrounds that interpolated value:
 *
 * \`\`\`html
 * <div title="{{v0}}"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate('title', v0);
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate(propName: string, v0: any, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate;

/**
 *
 * Update an interpolated property on an element with single bound value surrounded by text.
 *
 * Used when the value passed to a property has 1 interpolated value in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate1('title', 'prefix', v0, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate1(propName: string, prefix: string, v0: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate1;

/**
 *
 * Update an interpolated property on an element with 2 bound values surrounded by text.
 *
 * Used when the value passed to a property has 2 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate2('title', 'prefix', v0, '-', v1, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate2(propName: string, prefix: string, v0: any, i0: string, v1: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate2;

/**
 *
 * Update an interpolated property on an element with 3 bound values surrounded by text.
 *
 * Used when the value passed to a property has 3 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate3(
 * 'title', 'prefix', v0, '-', v1, '-', v2, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate3(propName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate3;

/**
 *
 * Update an interpolated property on an element with 4 bound values surrounded by text.
 *
 * Used when the value passed to a property has 4 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate4(
 * 'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate4(propName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate4;

/**
 *
 * Update an interpolated property on an element with 5 bound values surrounded by text.
 *
 * Used when the value passed to a property has 5 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate5(
 * 'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate5(propName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate5;

/**
 *
 * Update an interpolated property on an element with 6 bound values surrounded by text.
 *
 * Used when the value passed to a property has 6 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate6(
 *    'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate6(propName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate6;

/**
 *
 * Update an interpolated property on an element with 7 bound values surrounded by text.
 *
 * Used when the value passed to a property has 7 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate7(
 *    'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate7(propName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate7;

/**
 *
 * Update an interpolated property on an element with 8 bound values surrounded by text.
 *
 * Used when the value passed to a property has 8 interpolated values in it:
 *
 * \`\`\`html
 * <div title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolate8(
 *  'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, 'suffix');
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param i6 Static value used for concatenation only.
 * @param v7 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolate8(propName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any, suffix: string, sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolate8;

/**
 * Update an interpolated property on an element with 9 or more bound values surrounded by text.
 *
 * Used when the number of interpolated values exceeds 8.
 *
 * \`\`\`html
 * <div
 *  title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is::
 *
 * \`\`\`ts
 * ɵɵpropertyInterpolateV(
 *  'title', ['prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, '-', v9,
 *  'suffix']);
 * \`\`\`
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new \`@Inputs\` don't have to be re-compiled.
 *
 * @param propName The name of the property to update.
 * @param values The collection of values and the strings in between those values, beginning with a
 * string prefix and ending with a string suffix.
 * (e.g. \`['prefix', value0, '-', value1, '-', value2, ..., value99, 'suffix']\`)
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵpropertyInterpolateV(propName: string, values: any[], sanitizer?: SanitizerFn): typeof ɵɵpropertyInterpolateV;

/**
 * This feature resolves the providers of a directive (or component),
 * and publish them into the DI system, making it visible to others for injection.
 *
 * For example:
 * \`\`\`ts
 * class ComponentWithProviders {
 *   constructor(private greeter: GreeterDE) {}
 *
 *   static ɵcmp = defineComponent({
 *     type: ComponentWithProviders,
 *     selectors: [['component-with-providers']],
 *    factory: () => new ComponentWithProviders(directiveInject(GreeterDE as any)),
 *    decls: 1,
 *    vars: 1,
 *    template: function(fs: RenderFlags, ctx: ComponentWithProviders) {
 *      if (fs & RenderFlags.Create) {
 *        ɵɵtext(0);
 *      }
 *      if (fs & RenderFlags.Update) {
 *        ɵɵtextInterpolate(ctx.greeter.greet());
 *      }
 *    },
 *    features: [ɵɵProvidersFeature([GreeterDE])]
 *  });
 * }
 * \`\`\`
 *
 * @param definition
 *
 * @codeGenApi
 */
export declare function ɵɵProvidersFeature<T>(providers: Provider[], viewProviders?: Provider[]): (definition: ɵDirectiveDef<T>) => void;

/**
 * Bindings for pure functions are stored after regular bindings.
 *
 * |-------decls------|---------vars---------|                 |----- hostVars (dir1) ------|
 * ------------------------------------------------------------------------------------------
 * | nodes/refs/pipes | bindings | fn slots  | injector | dir1 | host bindings | host slots |
 * ------------------------------------------------------------------------------------------
 *                    ^                      ^
 *      TView.bindingStartIndex      TView.expandoStartIndex
 *
 * Pure function instructions are given an offset from the binding root. Adding the offset to the
 * binding root gives the first index where the bindings are stored. In component views, the binding
 * root is the bindingStartIndex. In host bindings, the binding root is the expandoStartIndex +
 * any directive instances + any hostVars in directives evaluated before it.
 *
 * See VIEW_DATA.md for more information about host binding resolution.
 */
/**
 * If the value hasn't been saved, calls the pure function to store and return the
 * value. If it has been saved, returns the saved value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn Function that returns a value
 * @param thisArg Optional calling context of pureFn
 * @returns value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction0<T>(slotOffset: number, pureFn: () => T, thisArg?: any): T;

/**
 * If the value of the provided exp has changed, calls the pure function to return
 * an updated value. Or if the value has not changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn Function that returns an updated value
 * @param exp Updated expression value
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction1(slotOffset: number, pureFn: (v: any) => any, exp: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction2(slotOffset: number, pureFn: (v1: any, v2: any) => any, exp1: any, exp2: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param exp3
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction3(slotOffset: number, pureFn: (v1: any, v2: any, v3: any) => any, exp1: any, exp2: any, exp3: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param exp3
 * @param exp4
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction4(slotOffset: number, pureFn: (v1: any, v2: any, v3: any, v4: any) => any, exp1: any, exp2: any, exp3: any, exp4: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param exp3
 * @param exp4
 * @param exp5
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction5(slotOffset: number, pureFn: (v1: any, v2: any, v3: any, v4: any, v5: any) => any, exp1: any, exp2: any, exp3: any, exp4: any, exp5: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param exp3
 * @param exp4
 * @param exp5
 * @param exp6
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction6(slotOffset: number, pureFn: (v1: any, v2: any, v3: any, v4: any, v5: any, v6: any) => any, exp1: any, exp2: any, exp3: any, exp4: any, exp5: any, exp6: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param exp3
 * @param exp4
 * @param exp5
 * @param exp6
 * @param exp7
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction7(slotOffset: number, pureFn: (v1: any, v2: any, v3: any, v4: any, v5: any, v6: any, v7: any) => any, exp1: any, exp2: any, exp3: any, exp4: any, exp5: any, exp6: any, exp7: any, thisArg?: any): any;

/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn
 * @param exp1
 * @param exp2
 * @param exp3
 * @param exp4
 * @param exp5
 * @param exp6
 * @param exp7
 * @param exp8
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunction8(slotOffset: number, pureFn: (v1: any, v2: any, v3: any, v4: any, v5: any, v6: any, v7: any, v8: any) => any, exp1: any, exp2: any, exp3: any, exp4: any, exp5: any, exp6: any, exp7: any, exp8: any, thisArg?: any): any;

/**
 * pureFunction instruction that can support any number of bindings.
 *
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param slotOffset the offset from binding root to the reserved slot
 * @param pureFn A pure function that takes binding values and builds an object or array
 * containing those values.
 * @param exps An array of binding values
 * @param thisArg Optional calling context of pureFn
 * @returns Updated or cached value
 *
 * @codeGenApi
 */
export declare function ɵɵpureFunctionV(slotOffset: number, pureFn: (...v: any[]) => any, exps: any[], thisArg?: any): any;

/**
 * Refreshes a query by combining matches from all active views and removing matches from deleted
 * views.
 *
 * @returns \`true\` if a query got dirty during change detection or if this is a static query
 * resolving in creation mode, \`false\` otherwise.
 *
 * @codeGenApi
 */
export declare function ɵɵqueryRefresh(queryList: QueryList<any>): boolean;

/**
 * Retrieves a local reference from the current contextViewData.
 *
 * If the reference to retrieve is in a parent view, this instruction is used in conjunction
 * with a nextContext() call, which walks up the tree and updates the contextViewData instance.
 *
 * @param index The index of the local ref in contextViewData.
 *
 * @codeGenApi
 */
export declare function ɵɵreference<T>(index: number): T;

/**
 * Adds the given NgModule type to Angular's NgModule registry.
 *
 * This is generated as a side-effect of NgModule compilation. Note that the \`id\` is passed in
 * explicitly and not read from the NgModule definition. This is for two reasons: it avoids a
 * megamorphic read, and in JIT there's a chicken-and-egg problem where the NgModule may not be
 * fully resolved when it's registered.
 *
 * @codeGenApi
 */
export declare function ɵɵregisterNgModuleType(ngModuleType: ɵNgModuleType, id: string): void;

/**
 * Clears the view set in \`ɵɵrestoreView\` from memory. Returns the passed in
 * value so that it can be used as a return value of an instruction.
 *
 * @codeGenApi
 */
export declare function ɵɵresetView<T>(value?: T): T | undefined;

/**
 *
 * @codeGenApi
 */
export declare function ɵɵresolveBody(element: RElement & {
	ownerDocument: Document;
}): HTMLElement;

/**
 *
 * @codeGenApi
 */
export declare function ɵɵresolveDocument(element: RElement & {
	ownerDocument: Document;
}): Document;

/**
 *
 * @codeGenApi
 */
export declare function ɵɵresolveWindow(element: RElement & {
	ownerDocument: Document;
}): (Window & typeof globalThis) | null;

/**
 * Restores \`contextViewData\` to the given OpaqueViewState instance.
 *
 * Used in conjunction with the getCurrentView() instruction to save a snapshot
 * of the current view and restore it when listeners are invoked. This allows
 * walking the declaration view tree in listeners to get vars from parent views.
 *
 * @param viewToRestore The OpaqueViewState instance to restore.
 * @returns Context of the restored OpaqueViewState instance.
 *
 * @codeGenApi
 */
export declare function ɵɵrestoreView<T = any>(viewToRestore: OpaqueViewState): T;

/**
 * An \`html\` sanitizer which converts untrusted \`html\` **string** into trusted string by removing
 * dangerous content.
 *
 * This method parses the \`html\` and locates potentially dangerous content (such as urls and
 * javascript) and removes it.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustHtml}.
 *
 * @param unsafeHtml untrusted \`html\`, typically from the user.
 * @returns \`html\` string which is safe to display to user, because all of the dangerous javascript
 * and urls have been removed.
 *
 * @codeGenApi
 */
export declare function ɵɵsanitizeHtml(unsafeHtml: any): TrustedHTML | string;

/**
 * A \`url\` sanitizer which only lets trusted \`url\`s through.
 *
 * This passes only \`url\`s marked trusted by calling {@link bypassSanitizationTrustResourceUrl}.
 *
 * @param unsafeResourceUrl untrusted \`url\`, typically from the user.
 * @returns \`url\` string which is safe to bind to the \`src\` properties such as \`<img src>\`, because
 * only trusted \`url\`s have been allowed to pass.
 *
 * @codeGenApi
 */
export declare function ɵɵsanitizeResourceUrl(unsafeResourceUrl: any): TrustedScriptURL | string;

/**
 * A \`script\` sanitizer which only lets trusted javascript through.
 *
 * This passes only \`script\`s marked trusted by calling {@link
 * bypassSanitizationTrustScript}.
 *
 * @param unsafeScript untrusted \`script\`, typically from the user.
 * @returns \`url\` string which is safe to bind to the \`<script>\` element such as \`<img src>\`,
 * because only trusted \`scripts\` have been allowed to pass.
 *
 * @codeGenApi
 */
export declare function ɵɵsanitizeScript(unsafeScript: any): TrustedScript | string;

/**
 * A \`style\` sanitizer which converts untrusted \`style\` **string** into trusted string by removing
 * dangerous content.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustStyle}.
 *
 * @param unsafeStyle untrusted \`style\`, typically from the user.
 * @returns \`style\` string which is safe to bind to the \`style\` properties.
 *
 * @codeGenApi
 */
export declare function ɵɵsanitizeStyle(unsafeStyle: any): string;

/**
 * A \`url\` sanitizer which converts untrusted \`url\` **string** into trusted string by removing
 * dangerous
 * content.
 *
 * This method parses the \`url\` and locates potentially dangerous content (such as javascript) and
 * removes it.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustUrl}.
 *
 * @param unsafeUrl untrusted \`url\`, typically from the user.
 * @returns \`url\` string which is safe to bind to the \`src\` properties such as \`<img src>\`, because
 * all of the dangerous javascript has been removed.
 *
 * @codeGenApi
 */
export declare function ɵɵsanitizeUrl(unsafeUrl: any): string;

/**
 * Sanitizes URL, selecting sanitizer function based on tag and property names.
 *
 * This function is used in case we can't define security context at compile time, when only prop
 * name is available. This happens when we generate host bindings for Directives/Components. The
 * host element is unknown at compile time, so we defer calculation of specific sanitizer to
 * runtime.
 *
 * @param unsafeUrl untrusted \`url\`, typically from the user.
 * @param tag target element tag name.
 * @param prop name of the property that contains the value.
 * @returns \`url\` string which is safe to bind.
 *
 * @codeGenApi
 */
export declare function ɵɵsanitizeUrlOrResourceUrl(unsafeUrl: any, tag: string, prop: string): any;

/**
 * Generated next to NgModules to monkey-patch directive and pipe references onto a component's
 * definition, when generating a direct reference in the component file would otherwise create an
 * import cycle.
 *
 * See [this explanation](https://hackmd.io/Odw80D0pR6yfsOjg_7XCJg?view) for more details.
 *
 * @codeGenApi
 */
export declare function ɵɵsetComponentScope(type: ɵComponentType<any>, directives: Type<any>[] | (() => Type<any>[]), pipes: Type<any>[] | (() => Type<any>[])): void;

/**
 * Adds the module metadata that is necessary to compute the module's transitive scope to an
 * existing module definition.
 *
 * Scope metadata of modules is not used in production builds, so calls to this function can be
 * marked pure to tree-shake it from the bundle, allowing for all referenced declarations
 * to become eligible for tree-shaking as well.
 *
 * @codeGenApi
 */
export declare function ɵɵsetNgModuleScope(type: any, scope: {
	/** List of components, directives, and pipes declared by this module. */
	declarations?: Type<any>[] | (() => Type<any>[]);
	/** List of modules or \`ModuleWithProviders\` imported by this module. */
	imports?: Type<any>[] | (() => Type<any>[]);
	/**
	 * List of modules, \`ModuleWithProviders\`, components, directives, or pipes exported by this
	 * module.
	 */
	exports?: Type<any>[] | (() => Type<any>[]);
}): unknown;

/**
 * A feature that acts as a setup code for the {@link StandaloneService}.
 *
 * The most important responsibility of this feature is to expose the "getStandaloneInjector"
 * function (an entry points to a standalone injector creation) on a component definition object. We
 * go through the features infrastructure to make sure that the standalone injector creation logic
 * is tree-shakable and not included in applications that don't use standalone components.
 *
 * @codeGenApi
 */
export declare function ɵɵStandaloneFeature(definition: ɵComponentDef<unknown>): void;

/**
 * Update style bindings using an object literal on an element.
 *
 * This instruction is meant to apply styling via the \`[style]="exp"\` template bindings.
 * When styles are applied to the element they will then be updated with respect to
 * any styles/classes set via \`styleProp\`. If any styles are set to falsy
 * then they will be removed from the element.
 *
 * Note that the styling instruction will not be applied until \`stylingApply\` is called.
 *
 * @param styles A key/value style map of the styles that will be applied to the given element.
 *        Any missing styles (that have already been applied to the element beforehand) will be
 *        removed (unset) from the element's styling.
 *
 * Note that this will apply the provided styleMap value to the host element if this function
 * is called within a host binding.
 *
 * @codeGenApi
 */
export declare function ɵɵstyleMap(styles: {
	[styleName: string]: any;
} | string | undefined | null): void;


/**
 *
 * Update an interpolated style on an element with single bound value surrounded by text.
 *
 * Used when the value passed to a property has 1 interpolated value in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate1('key: ', v0, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate1(prefix: string, v0: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 2 bound values surrounded by text.
 *
 * Used when the value passed to a property has 2 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key1: {{v1}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate2('key: ', v0, '; key1: ', v1, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate2(prefix: string, v0: any, i0: string, v1: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 3 bound values surrounded by text.
 *
 * Used when the value passed to a property has 3 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key2: {{v1}}; key2: {{v2}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate3(
 *     'key: ', v0, '; key1: ', v1, '; key2: ', v2, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate3(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 4 bound values surrounded by text.
 *
 * Used when the value passed to a property has 4 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate4(
 *     'key: ', v0, '; key1: ', v1, '; key2: ', v2, '; key3: ', v3, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate4(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 5 bound values surrounded by text.
 *
 * Used when the value passed to a property has 5 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate5(
 *     'key: ', v0, '; key1: ', v1, '; key2: ', v2, '; key3: ', v3, '; key4: ', v4, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate5(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 6 bound values surrounded by text.
 *
 * Used when the value passed to a property has 6 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}};
 *             key5: {{v5}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate6(
 *    'key: ', v0, '; key1: ', v1, '; key2: ', v2, '; key3: ', v3, '; key4: ', v4, '; key5: ', v5,
 *    'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate6(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 7 bound values surrounded by text.
 *
 * Used when the value passed to a property has 7 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}}; key5: {{v5}};
 *             key6: {{v6}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate7(
 *    'key: ', v0, '; key1: ', v1, '; key2: ', v2, '; key3: ', v3, '; key4: ', v4, '; key5: ', v5,
 *    '; key6: ', v6, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate7(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string): void;

/**
 *
 * Update an interpolated style on an element with 8 bound values surrounded by text.
 *
 * Used when the value passed to a property has 8 interpolated values in it:
 *
 * \`\`\`html
 * <div style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}}; key5: {{v5}};
 *             key6: {{v6}}; key7: {{v7}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolate8(
 *    'key: ', v0, '; key1: ', v1, '; key2: ', v2, '; key3: ', v3, '; key4: ', v4, '; key5: ', v5,
 *    '; key6: ', v6, '; key7: ', v7, 'suffix');
 * \`\`\`
 *
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param i6 Static value used for concatenation only.
 * @param v7 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolate8(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any, suffix: string): void;

/**
 * Update an interpolated style on an element with 9 or more bound values surrounded by text.
 *
 * Used when the number of interpolated values exceeds 8.
 *
 * \`\`\`html
 * <div
 *  class="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}}; key5: {{v5}};
 *         key6: {{v6}}; key7: {{v7}}; key8: {{v8}}; key9: {{v9}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstyleMapInterpolateV(
 *    ['key: ', v0, '; key1: ', v1, '; key2: ', v2, '; key3: ', v3, '; key4: ', v4, '; key5: ', v5,
 *     '; key6: ', v6, '; key7: ', v7, '; key8: ', v8, '; key9: ', v9, 'suffix']);
 * \`\`\`
 *.
 * @param values The collection of values and the strings in-between those values, beginning with
 * a string prefix and ending with a string suffix.
 * (e.g. \`['prefix', value0, '; key2: ', value1, '; key2: ', value2, ..., value99, 'suffix']\`)
 * @codeGenApi
 */
export declare function ɵɵstyleMapInterpolateV(values: any[]): void;

/**
 * Update a style binding on an element with the provided value.
 *
 * If the style value is falsy then it will be removed from the element
 * (or assigned a different value depending if there are any styles placed
 * on the element with \`styleMap\` or any static styles that are
 * present from when the element was created with \`styling\`).
 *
 * Note that the styling element is updated as part of \`stylingApply\`.
 *
 * @param prop A valid CSS property.
 * @param value New value to write (\`null\` or an empty string to remove).
 * @param suffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 *
 * Note that this will apply the provided style value to the host element if this function is called
 * within a host binding function.
 *
 * @codeGenApi
 */
export declare function ɵɵstyleProp(prop: string, value: string | number | ɵSafeValue | undefined | null, suffix?: string | null): typeof ɵɵstyleProp;


/**
 *
 * Update an interpolated style property on an element with single bound value surrounded by text.
 *
 * Used when the value passed to a property has 1 interpolated value in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate1(0, 'prefix', v0, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate1(prop: string, prefix: string, v0: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate1;

/**
 *
 * Update an interpolated style property on an element with 2 bound values surrounded by text.
 *
 * Used when the value passed to a property has 2 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate2(0, 'prefix', v0, '-', v1, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate2(prop: string, prefix: string, v0: any, i0: string, v1: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate2;

/**
 *
 * Update an interpolated style property on an element with 3 bound values surrounded by text.
 *
 * Used when the value passed to a property has 3 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate3(0, 'prefix', v0, '-', v1, '-', v2, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate3(prop: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate3;

/**
 *
 * Update an interpolated style property on an element with 4 bound values surrounded by text.
 *
 * Used when the value passed to a property has 4 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate4(0, 'prefix', v0, '-', v1, '-', v2, '-', v3, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate4(prop: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate4;

/**
 *
 * Update an interpolated style property on an element with 5 bound values surrounded by text.
 *
 * Used when the value passed to a property has 5 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate5(0, 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate5(prop: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate5;

/**
 *
 * Update an interpolated style property on an element with 6 bound values surrounded by text.
 *
 * Used when the value passed to a property has 6 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate6(0, 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate6(prop: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate6;

/**
 *
 * Update an interpolated style property on an element with 7 bound values surrounded by text.
 *
 * Used when the value passed to a property has 7 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate7(
 *    0, 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate7(prop: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate7;

/**
 *
 * Update an interpolated style property on an element with 8 bound values surrounded by text.
 *
 * Used when the value passed to a property has 8 interpolated values in it:
 *
 * \`\`\`html
 * <div style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix"></div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolate8(0, 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6,
 * '-', v7, 'suffix');
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`.
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param i6 Static value used for concatenation only.
 * @param v7 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolate8(prop: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any, suffix: string, valueSuffix?: string | null): typeof ɵɵstylePropInterpolate8;

/**
 * Update an interpolated style property on an element with 9 or more bound values surrounded by
 * text.
 *
 * Used when the number of interpolated values exceeds 8.
 *
 * \`\`\`html
 * <div
 *  style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix">
 * </div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵstylePropInterpolateV(
 *  0, ['prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, '-', v9,
 *  'suffix']);
 * \`\`\`
 *
 * @param styleIndex Index of style to update. This index value refers to the
 *        index of the style in the style bindings array that was passed into
 *        \`styling\`..
 * @param values The collection of values and the strings in-between those values, beginning with
 * a string prefix and ending with a string suffix.
 * (e.g. \`['prefix', value0, '-', value1, '-', value2, ..., value99, 'suffix']\`)
 * @param valueSuffix Optional suffix. Used with scalar values to add unit such as \`px\`.
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵstylePropInterpolateV(prop: string, values: any[], valueSuffix?: string | null): typeof ɵɵstylePropInterpolateV;

/**
 * Registers a synthetic host listener (e.g. \`(@foo.start)\`) on a component or directive.
 *
 * This instruction is for compatibility purposes and is designed to ensure that a
 * synthetic host listener (e.g. \`@HostListener('@foo.start')\`) properly gets rendered
 * in the component's renderer. Normally all host listeners are evaluated with the
 * parent component's renderer, but, in the case of animation @triggers, they need
 * to be evaluated with the sub component's renderer (because that's where the
 * animation triggers are defined).
 *
 * Do not use this instruction as a replacement for \`listener\`. This instruction
 * only exists to ensure compatibility with the ViewEngine's host binding behavior.
 *
 * @param eventName Name of the event
 * @param listenerFn The function to be called when event emits
 * @param useCapture Whether or not to use capture in event listener
 * @param eventTargetResolver Function that returns global target information in case this listener
 * should be attached to a global object like window, document or body
 *
 * @codeGenApi
 */
export declare function ɵɵsyntheticHostListener(eventName: string, listenerFn: (e?: any) => any): typeof ɵɵsyntheticHostListener;

/**
 * Updates a synthetic host binding (e.g. \`[@foo]\`) on a component or directive.
 *
 * This instruction is for compatibility purposes and is designed to ensure that a
 * synthetic host binding (e.g. \`@HostBinding('@foo')\`) properly gets rendered in
 * the component's renderer. Normally all host bindings are evaluated with the parent
 * component's renderer, but, in the case of animation @triggers, they need to be
 * evaluated with the sub component's renderer (because that's where the animation
 * triggers are defined).
 *
 * Do not use this instruction as a replacement for \`elementProperty\`. This instruction
 * only exists to ensure compatibility with the ViewEngine's host binding behavior.
 *
 * @param index The index of the element to update in the data array
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 *
 * @codeGenApi
 */
export declare function ɵɵsyntheticHostProperty<T>(propName: string, value: T | ɵNO_CHANGE, sanitizer?: SanitizerFn | null): typeof ɵɵsyntheticHostProperty;

/**
 * Creates an LContainer for an ng-template (dynamically-inserted view), e.g.
 *
 * <ng-template #foo>
 *    <div></div>
 * </ng-template>
 *
 * @param index The index of the container in the data array
 * @param templateFn Inline template
 * @param decls The number of nodes, local refs, and pipes for this template
 * @param vars The number of bindings for this template
 * @param tagName The name of the container element, if applicable
 * @param attrsIndex Index of template attributes in the \`consts\` array.
 * @param localRefs Index of the local references in the \`consts\` array.
 * @param localRefExtractor A function which extracts local-refs values from the template.
 *        Defaults to the current element associated with the local-ref.
 *
 * @codeGenApi
 */
export declare function ɵɵtemplate(index: number, templateFn: ComponentTemplate<any> | null, decls: number, vars: number, tagName?: string | null, attrsIndex?: number | null, localRefsIndex?: number | null, localRefExtractor?: LocalRefExtractor): void;

/**
 * Retrieves \`TemplateRef\` instance from \`Injector\` when a local reference is placed on the
 * \`<ng-template>\` element.
 *
 * @codeGenApi
 */
export declare function ɵɵtemplateRefExtractor(tNode: TNode, lView: LView): TemplateRef<any> | null;

/**
 * Create static text node
 *
 * @param index Index of the node in the data array
 * @param value Static string value to write.
 *
 * @codeGenApi
 */
export declare function ɵɵtext(index: number, value?: string): void;

/**
 *
 * Update text content with a lone bound value
 *
 * Used when a text node has 1 interpolated value in it, an no additional text
 * surrounds that interpolated value:
 *
 * \`\`\`html
 * <div>{{v0}}</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate(v0);
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate(v0: any): typeof ɵɵtextInterpolate;

/**
 *
 * Update text content with single bound value surrounded by other text.
 *
 * Used when a text node has 1 interpolated value in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate1('prefix', v0, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate1(prefix: string, v0: any, suffix: string): typeof ɵɵtextInterpolate1;

/**
 *
 * Update text content with 2 bound values surrounded by other text.
 *
 * Used when a text node has 2 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate2('prefix', v0, '-', v1, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate2(prefix: string, v0: any, i0: string, v1: any, suffix: string): typeof ɵɵtextInterpolate2;

/**
 *
 * Update text content with 3 bound values surrounded by other text.
 *
 * Used when a text node has 3 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate3(
 * 'prefix', v0, '-', v1, '-', v2, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate3(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, suffix: string): typeof ɵɵtextInterpolate3;

/**
 *
 * Update text content with 4 bound values surrounded by other text.
 *
 * Used when a text node has 4 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate4(
 * 'prefix', v0, '-', v1, '-', v2, '-', v3, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see ɵɵtextInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate4(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, suffix: string): typeof ɵɵtextInterpolate4;

/**
 *
 * Update text content with 5 bound values surrounded by other text.
 *
 * Used when a text node has 5 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate5(
 * 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate5(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, suffix: string): typeof ɵɵtextInterpolate5;

/**
 *
 * Update text content with 6 bound values surrounded by other text.
 *
 * Used when a text node has 6 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate6(
 *    'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, 'suffix');
 * \`\`\`
 *
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change. @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate6(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string): typeof ɵɵtextInterpolate6;

/**
 *
 * Update text content with 7 bound values surrounded by other text.
 *
 * Used when a text node has 7 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate7(
 *    'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate7(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string): typeof ɵɵtextInterpolate7;

/**
 *
 * Update text content with 8 bound values surrounded by other text.
 *
 * Used when a text node has 8 interpolated values in it:
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolate8(
 *  'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, 'suffix');
 * \`\`\`
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
export declare function ɵɵtextInterpolate8(prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string, v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any, suffix: string): typeof ɵɵtextInterpolate8;

/**
 * Update text content with 9 or more bound values other surrounded by text.
 *
 * Used when the number of interpolated values exceeds 8.
 *
 * \`\`\`html
 * <div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix</div>
 * \`\`\`
 *
 * Its compiled representation is:
 *
 * \`\`\`ts
 * ɵɵtextInterpolateV(
 *  ['prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, '-', v9,
 *  'suffix']);
 * \`\`\`
 *.
 * @param values The collection of values and the strings in between those values, beginning with
 * a string prefix and ending with a string suffix.
 * (e.g. \`['prefix', value0, '-', value1, '-', value2, ..., value99, 'suffix']\`)
 *
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export declare function ɵɵtextInterpolateV(values: any[]): typeof ɵɵtextInterpolateV;

/**
 * A template tag function for promoting the associated constant literal to a
 * TrustedHTML. Interpolation is explicitly not allowed.
 *
 * @param html constant template literal containing trusted HTML.
 * @returns TrustedHTML wrapping \`html\`.
 *
 * @security This is a security-sensitive function and should only be used to
 * convert constant values of attributes and properties found in
 * application-provided Angular templates to TrustedHTML.
 *
 * @codeGenApi
 */
export declare function ɵɵtrustConstantHtml(html: TemplateStringsArray): TrustedHTML | string;

/**
 * A template tag function for promoting the associated constant literal to a
 * TrustedScriptURL. Interpolation is explicitly not allowed.
 *
 * @param url constant template literal containing a trusted script URL.
 * @returns TrustedScriptURL wrapping \`url\`.
 *
 * @security This is a security-sensitive function and should only be used to
 * convert constant values of attributes and properties found in
 * application-provided Angular templates to TrustedScriptURL.
 *
 * @codeGenApi
 */
export declare function ɵɵtrustConstantResourceUrl(url: TemplateStringsArray): TrustedScriptURL | string;

/**
 * Creates new QueryList, stores the reference in LView and returns QueryList.
 *
 * @param predicate The type for which the query will search
 * @param flags Flags associated with the query
 * @param read What to save in the query
 *
 * @codeGenApi
 */
export declare function ɵɵviewQuery<T>(predicate: ProviderToken<unknown> | string[], flags: QueryFlags, read?: any): void;

export { }
`;

/***/ }),

/***/ 8736:
/*!**********************************************!*\
  !*** ./src/angular-platform-browser-file.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ANGULAR_PLATFORM_BROWSER_FILE = `/**
* @license Angular v14.2.8
* (c) 2010-2022 Google LLC. https://angular.io/
* License: MIT
*/


import { ApplicationRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { DebugElement } from '@angular/core';
import { DebugNode } from '@angular/core';
import { GetTestability } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import { ImportedNgModuleProviders } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { Predicate } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { RendererType2 } from '@angular/core';
import { Sanitizer } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { Testability } from '@angular/core';
import { TestabilityRegistry } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ɵConsole } from '@angular/core';
import { ɵDomAdapter } from '@angular/common';
import { ɵgetDOM } from '@angular/common';

/**
* Set of config options available during the application bootstrap operation.
*
* @developerPreview
* @publicApi
*/
export declare interface ApplicationConfig {
 /**
	* List of providers that should be available to the root component and all its children.
	*/
 providers: Array<Provider | ImportedNgModuleProviders>;
}

/**
* Bootstraps an instance of an Angular application and renders a standalone component as the
* application's root component. More information about standalone components can be found in [this
* guide](guide/standalone-components).
*
* @usageNotes
* The root component passed into this function *must* be a standalone one (should have the
* \`standalone: true\` flag in the \`@Component\` decorator config).
*
* \`\`\`typescript
* @Component({
*   standalone: true,
*   template: 'Hello world!'
* })
* class RootComponent {}
*
* const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
* \`\`\`
*
* You can add the list of providers that should be available in the application injector by
* specifying the \`providers\` field in an object passed as the second argument:
*
* \`\`\`typescript
* await bootstrapApplication(RootComponent, {
*   providers: [
*     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
*   ]
* });
* \`\`\`
*
* The \`importProvidersFrom\` helper method can be used to collect all providers from any
* existing NgModule (and transitively from all NgModules that it imports):
*
* \`\`\`typescript
* await bootstrapApplication(RootComponent, {
*   providers: [
*     importProvidersFrom(SomeNgModule)
*   ]
* });
* \`\`\`
*
* Note: the \`bootstrapApplication\` method doesn't include [Testability](api/core/Testability) by
* default. You can add [Testability](api/core/Testability) by getting the list of necessary
* providers using \`provideProtractorTestingSupport()\` function and adding them into the \`providers\`
* array, for example:
*
* \`\`\`typescript
* import {provideProtractorTestingSupport} from '@angular/platform-browser';
*
* await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
* \`\`\`
*
* @param rootComponent A reference to a standalone component that should be rendered.
* @param options Extra configuration for the bootstrap operation, see \`ApplicationConfig\` for
*     additional info.
* @returns A promise that returns an \`ApplicationRef\` instance once resolved.
*
* @publicApi
* @developerPreview
*/
export declare function bootstrapApplication(rootComponent: Type<unknown>, options?: ApplicationConfig): Promise<ApplicationRef>;

/**
* Exports required infrastructure for all Angular apps.
* Included by default in all Angular apps created with the CLI
* \`new\` command.
* Re-exports \`CommonModule\` and \`ApplicationModule\`, making their
* exports and providers available to all apps.
*
* @publicApi
*/
export declare class BrowserModule {
 constructor(providersAlreadyPresent: boolean | null);
 /**
	* Configures a browser-based app to transition from a server-rendered app, if
	* one is present on the page.
	*
	* @param params An object containing an identifier for the app to transition.
	* The ID must match between the client and server versions of the app.
	* @returns The reconfigured \`BrowserModule\` to import into the app's root \`AppModule\`.
	*/
 static withServerTransition(params: {
	 appId: string;
 }): ModuleWithProviders<BrowserModule>;
 static ɵfac: i0.ɵɵFactoryDeclaration<BrowserModule, [{ optional: true; skipSelf: true; }]>;
 static ɵmod: i0.ɵɵNgModuleDeclaration<BrowserModule, never, never, [typeof i1.CommonModule, typeof i0.ApplicationModule]>;
 static ɵinj: i0.ɵɵInjectorDeclaration<BrowserModule>;
}

/**
* NgModule to install on the client side while using the \`TransferState\` to transfer state from
* server to client.
*
* @publicApi
* @deprecated no longer needed, you can inject the \`TransferState\` in an app without providing
*     this module.
*/
export declare class BrowserTransferStateModule {
 static ɵfac: i0.ɵɵFactoryDeclaration<BrowserTransferStateModule, never>;
 static ɵmod: i0.ɵɵNgModuleDeclaration<BrowserTransferStateModule, never, never, never>;
 static ɵinj: i0.ɵɵInjectorDeclaration<BrowserTransferStateModule>;
}

/**
* Predicates for use with {@link DebugElement}'s query functions.
*
* @publicApi
*/
export declare class By {
 /**
	* Match all nodes.
	*
	* @usageNotes
	* ### Example
	*
	* {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
	*/
 static all(): Predicate<DebugNode>;
 /**
	* Match elements by the given CSS selector.
	*
	* @usageNotes
	* ### Example
	*
	* {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
	*/
 static css(selector: string): Predicate<DebugElement>;
 /**
	* Match nodes that have the given directive present.
	*
	* @usageNotes
	* ### Example
	*
	* {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
	*/
 static directive(type: Type<any>): Predicate<DebugNode>;
}

/**
* Create an instance of an Angular application without bootstrapping any components. This is useful
* for the situation where one wants to decouple application environment creation (a platform and
* associated injectors) from rendering components on a screen. Components can be subsequently
* bootstrapped on the returned \`ApplicationRef\`.
*
* @param options Extra configuration for the application environment, see \`ApplicationConfig\` for
*     additional info.
* @returns A promise that returns an \`ApplicationRef\` instance once resolved.
*
* @publicApi
* @developerPreview
*/
export declare function createApplication(options?: ApplicationConfig): Promise<ApplicationRef>;

/**
* Disables Angular tools.
*
* @publicApi
*/
export declare function disableDebugTools(): void;

/**
* DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
* values to be safe to use in the different DOM contexts.
*
* For example, when binding a URL in an \`<a [href]="someValue">\` hyperlink, \`someValue\` will be
* sanitized so that an attacker cannot inject e.g. a \`javascript:\` URL that would execute code on
* the website.
*
* In specific situations, it might be necessary to disable sanitization, for example if the
* application genuinely needs to produce a \`javascript:\` style link with a dynamic value in it.
* Users can bypass security by constructing a value with one of the \`bypassSecurityTrust...\`
* methods, and then binding to that value from the template.
*
* These situations should be very rare, and extraordinary care must be taken to avoid creating a
* Cross Site Scripting (XSS) security bug!
*
* When using \`bypassSecurityTrust...\`, make sure to call the method as early as possible and as
* close as possible to the source of the value, to make it easy to verify no security bug is
* created by its use.
*
* It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
* does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
* code. The sanitizer leaves safe values intact.
*
* @security Calling any of the \`bypassSecurityTrust...\` APIs disables Angular's built-in
* sanitization for the value passed in. Carefully check and audit all values and code paths going
* into this call. Make sure any user data is appropriately escaped for this security context.
* For more detail, see the [Security Guide](https://g.co/ng/security).
*
* @publicApi
*/
export declare abstract class DomSanitizer implements Sanitizer {
 /**
	* Sanitizes a value for use in the given SecurityContext.
	*
	* If value is trusted for the context, this method will unwrap the contained safe value and use
	* it directly. Otherwise, value will be sanitized to be safe in the given context, for example
	* by replacing URLs that have an unsafe protocol part (such as \`javascript:\`). The implementation
	* is responsible to make sure that the value can definitely be safely used in the given context.
	*/
 abstract sanitize(context: SecurityContext, value: SafeValue | string | null): string | null;
 /**
	* Bypass security and trust the given value to be safe HTML. Only use this when the bound HTML
	* is unsafe (e.g. contains \`<script>\` tags) and the code should be executed. The sanitizer will
	* leave safe HTML intact, so in most situations this method should not be used.
	*
	* **WARNING:** calling this method with untrusted user data exposes your application to XSS
	* security risks!
	*/
 abstract bypassSecurityTrustHtml(value: string): SafeHtml;
 /**
	* Bypass security and trust the given value to be safe style value (CSS).
	*
	* **WARNING:** calling this method with untrusted user data exposes your application to XSS
	* security risks!
	*/
 abstract bypassSecurityTrustStyle(value: string): SafeStyle;
 /**
	* Bypass security and trust the given value to be safe JavaScript.
	*
	* **WARNING:** calling this method with untrusted user data exposes your application to XSS
	* security risks!
	*/
 abstract bypassSecurityTrustScript(value: string): SafeScript;
 /**
	* Bypass security and trust the given value to be a safe style URL, i.e. a value that can be used
	* in hyperlinks or \`<img src>\`.
	*
	* **WARNING:** calling this method with untrusted user data exposes your application to XSS
	* security risks!
	*/
 abstract bypassSecurityTrustUrl(value: string): SafeUrl;
 /**
	* Bypass security and trust the given value to be a safe resource URL, i.e. a location that may
	* be used to load executable code from, like \`<script src>\`, or \`<iframe src>\`.
	*
	* **WARNING:** calling this method with untrusted user data exposes your application to XSS
	* security risks!
	*/
 abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
 static ɵfac: i0.ɵɵFactoryDeclaration<DomSanitizer, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<DomSanitizer>;
}

/**
* Enabled Angular debug tools that are accessible via your browser's
* developer console.
*
* Usage:
*
* 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
* 1. Type \`ng.\` (usually the console will show auto-complete suggestion)
* 1. Try the change detection profiler \`ng.profiler.timeChangeDetection()\`
*    then hit Enter.
*
* @publicApi
*/
export declare function enableDebugTools<T>(ref: ComponentRef<T>): ComponentRef<T>;

/**
* The injection token for the event-manager plug-in service.
*
* @publicApi
*/
export declare const EVENT_MANAGER_PLUGINS: InjectionToken<EventManagerPlugin[]>;

/**
* An injectable service that provides event management for Angular
* through a browser plug-in.
*
* @publicApi
*/
export declare class EventManager {
 private _zone;
 private _plugins;
 private _eventNameToPlugin;
 /**
	* Initializes an instance of the event-manager service.
	*/
 constructor(plugins: EventManagerPlugin[], _zone: NgZone);
 /**
	* Registers a handler for a specific element and event.
	*
	* @param element The HTML element to receive event notifications.
	* @param eventName The name of the event to listen for.
	* @param handler A function to call when the notification occurs. Receives the
	* event object as an argument.
	* @returns  A callback function that can be used to remove the handler.
	*/
 addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
 /**
	* Registers a global handler for an event in a target view.
	*
	* @param target A target for global event notifications. One of "window", "document", or "body".
	* @param eventName The name of the event to listen for.
	* @param handler A function to call when the notification occurs. Receives the
	* event object as an argument.
	* @returns A callback function that can be used to remove the handler.
	* @deprecated No longer being used in Ivy code. To be removed in version 14.
	*/
 addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
 /**
	* Retrieves the compilation zone in which event listeners are registered.
	*/
 getZone(): NgZone;
 static ɵfac: i0.ɵɵFactoryDeclaration<EventManager, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<EventManager>;
}

declare abstract class EventManagerPlugin {
 private _doc;
 constructor(_doc: any);
 manager: EventManager;
 abstract supports(eventName: string): boolean;
 abstract addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
 addGlobalEventListener(element: string, eventName: string, handler: Function): Function;
}

/**
* Provides DOM operations in any browser environment.
*
* @security Tread carefully! Interacting with the DOM directly is dangerous and
* can introduce XSS risks.
*/
declare abstract class GenericBrowserDomAdapter extends ɵDomAdapter {
 readonly supportsDOMEvents: boolean;
}

/**
* DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
* @see \`HammerGestureConfig\`
*
* @ngModule HammerModule
* @publicApi
*/
export declare const HAMMER_GESTURE_CONFIG: InjectionToken<HammerGestureConfig>;

/**
* Injection token used to provide a {@link HammerLoader} to Angular.
*
* @publicApi
*/
export declare const HAMMER_LOADER: InjectionToken<HammerLoader>;

/**
* An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
* for gesture recognition. Configures specific event recognition.
* @publicApi
*/
export declare class HammerGestureConfig {
 /**
	* A set of supported event names for gestures to be used in Angular.
	* Angular supports all built-in recognizers, as listed in
	* [HammerJS documentation](https://hammerjs.github.io/).
	*/
 events: string[];
 /**
	* Maps gesture event names to a set of configuration options
	* that specify overrides to the default values for specific properties.
	*
	* The key is a supported event name to be configured,
	* and the options object contains a set of properties, with override values
	* to be applied to the named recognizer event.
	* For example, to disable recognition of the rotate event, specify
	*  \`{"rotate": {"enable": false}}\`.
	*
	* Properties that are not present take the HammerJS default values.
	* For information about which properties are supported for which events,
	* and their allowed and default values, see
	* [HammerJS documentation](https://hammerjs.github.io/).
	*
	*/
 overrides: {
	 [key: string]: Object;
 };
 /**
	* Properties whose default values can be overridden for a given event.
	* Different sets of properties apply to different events.
	* For information about which properties are supported for which events,
	* and their allowed and default values, see
	* [HammerJS documentation](https://hammerjs.github.io/).
	*/
 options?: {
	 cssProps?: any;
	 domEvents?: boolean;
	 enable?: boolean | ((manager: any) => boolean);
	 preset?: any[];
	 touchAction?: string;
	 recognizers?: any[];
	 inputClass?: any;
	 inputTarget?: EventTarget;
 };
 /**
	* Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
	* and attaches it to a given HTML element.
	* @param element The element that will recognize gestures.
	* @returns A HammerJS event-manager object.
	*/
 buildHammer(element: HTMLElement): HammerInstance;
 static ɵfac: i0.ɵɵFactoryDeclaration<HammerGestureConfig, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<HammerGestureConfig>;
}

declare interface HammerInstance {
 on(eventName: string, callback?: Function): void;
 off(eventName: string, callback?: Function): void;
 destroy?(): void;
}

/**
* Function that loads HammerJS, returning a promise that is resolved once HammerJs is loaded.
*
* @publicApi
*/
export declare type HammerLoader = () => Promise<void>;

/**
* Adds support for HammerJS.
*
* Import this module at the root of your application so that Angular can work with
* HammerJS to detect gesture events.
*
* Note that applications still need to include the HammerJS script itself. This module
* simply sets up the coordination layer between HammerJS and Angular's EventManager.
*
* @publicApi
*/
export declare class HammerModule {
 static ɵfac: i0.ɵɵFactoryDeclaration<HammerModule, never>;
 static ɵmod: i0.ɵɵNgModuleDeclaration<HammerModule, never, never, never>;
 static ɵinj: i0.ɵɵInjectorDeclaration<HammerModule>;
}

/**
* Create a \`StateKey<T>\` that can be used to store value of type T with \`TransferState\`.
*
* Example:
*
* \`\`\`
* const COUNTER_KEY = makeStateKey<number>('counter');
* let value = 10;
*
* transferState.set(COUNTER_KEY, value);
* \`\`\`
*
* @publicApi
*/
export declare function makeStateKey<T = void>(key: string): StateKey<T>;

/**
* A service for managing HTML \`<meta>\` tags.
*
* Properties of the \`MetaDefinition\` object match the attributes of the
* HTML \`<meta>\` tag. These tags define document metadata that is important for
* things like configuring a Content Security Policy, defining browser compatibility
* and security settings, setting HTTP Headers, defining rich content for social sharing,
* and Search Engine Optimization (SEO).
*
* To identify specific \`<meta>\` tags in a document, use an attribute selection
* string in the format \`"tag_attribute='value string'"\`.
* For example, an \`attrSelector\` value of \`"name='description'"\` matches a tag
* whose \`name\` attribute has the value \`"description"\`.
* Selectors are used with the \`querySelector()\` Document method,
* in the format \`meta[{attrSelector}]\`.
*
* @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
* @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
*
*
* @publicApi
*/
export declare class Meta {
 private _doc;
 private _dom;
 constructor(_doc: any);
 /**
	* Retrieves or creates a specific \`<meta>\` tag element in the current HTML document.
	* In searching for an existing tag, Angular attempts to match the \`name\` or \`property\` attribute
	* values in the provided tag definition, and verifies that all other attribute values are equal.
	* If an existing element is found, it is returned and is not modified in any way.
	* @param tag The definition of a \`<meta>\` element to match or create.
	* @param forceCreation True to create a new element without checking whether one already exists.
	* @returns The existing element with the same attributes and values if found,
	* the new element if no match is found, or \`null\` if the tag parameter is not defined.
	*/
 addTag(tag: MetaDefinition, forceCreation?: boolean): HTMLMetaElement | null;
 /**
	* Retrieves or creates a set of \`<meta>\` tag elements in the current HTML document.
	* In searching for an existing tag, Angular attempts to match the \`name\` or \`property\` attribute
	* values in the provided tag definition, and verifies that all other attribute values are equal.
	* @param tags An array of tag definitions to match or create.
	* @param forceCreation True to create new elements without checking whether they already exist.
	* @returns The matching elements if found, or the new elements.
	*/
 addTags(tags: MetaDefinition[], forceCreation?: boolean): HTMLMetaElement[];
 /**
	* Retrieves a \`<meta>\` tag element in the current HTML document.
	* @param attrSelector The tag attribute and value to match against, in the format
	* \`"tag_attribute='value string'"\`.
	* @returns The matching element, if any.
	*/
 getTag(attrSelector: string): HTMLMetaElement | null;
 /**
	* Retrieves a set of \`<meta>\` tag elements in the current HTML document.
	* @param attrSelector The tag attribute and value to match against, in the format
	* \`"tag_attribute='value string'"\`.
	* @returns The matching elements, if any.
	*/
 getTags(attrSelector: string): HTMLMetaElement[];
 /**
	* Modifies an existing \`<meta>\` tag element in the current HTML document.
	* @param tag The tag description with which to replace the existing tag content.
	* @param selector A tag attribute and value to match against, to identify
	* an existing tag. A string in the format \`"tag_attribute=\`value string\`"\`.
	* If not supplied, matches a tag with the same \`name\` or \`property\` attribute value as the
	* replacement tag.
	* @return The modified element.
	*/
 updateTag(tag: MetaDefinition, selector?: string): HTMLMetaElement | null;
 /**
	* Removes an existing \`<meta>\` tag element from the current HTML document.
	* @param attrSelector A tag attribute and value to match against, to identify
	* an existing tag. A string in the format \`"tag_attribute=\`value string\`"\`.
	*/
 removeTag(attrSelector: string): void;
 /**
	* Removes an existing \`<meta>\` tag element from the current HTML document.
	* @param meta The tag definition to match against to identify an existing tag.
	*/
 removeTagElement(meta: HTMLMetaElement): void;
 private _getOrCreateElement;
 private _setMetaElementAttributes;
 private _parseSelector;
 private _containsAttributes;
 private _getMetaKeyMap;
 static ɵfac: i0.ɵɵFactoryDeclaration<Meta, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<Meta>;
}

/**
* Represents the attributes of an HTML \`<meta>\` element. The element itself is
* represented by the internal \`HTMLMetaElement\`.
*
* @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
* @see \`Meta\`
*
* @publicApi
*/
export declare type MetaDefinition = {
 charset?: string;
 content?: string;
 httpEquiv?: string;
 id?: string;
 itemprop?: string;
 name?: string;
 property?: string;
 scheme?: string;
 url?: string;
} & {
 [prop: string]: string;
};

/**
* A factory function that returns a \`PlatformRef\` instance associated with browser service
* providers.
*
* @publicApi
*/
export declare const platformBrowser: (extraProviders?: StaticProvider[]) => PlatformRef;

/**
* Returns a set of providers required to setup [Testability](api/core/Testability) for an
* application bootstrapped using the \`bootstrapApplication\` function. The set of providers is
* needed to support testing an application with Protractor (which relies on the Testability APIs
* to be present).
*
* @returns An array of providers required to setup Testability for an application and make it
*     available for testing using Protractor.
*
* @developerPreview
* @publicApi
*/
export declare function provideProtractorTestingSupport(): Provider[];

/**
* Marker interface for a value that's safe to use as HTML.
*
* @publicApi
*/
export declare interface SafeHtml extends SafeValue {
}

/**
* Marker interface for a value that's safe to use as a URL to load executable code from.
*
* @publicApi
*/
export declare interface SafeResourceUrl extends SafeValue {
}

/**
* Marker interface for a value that's safe to use as JavaScript.
*
* @publicApi
*/
export declare interface SafeScript extends SafeValue {
}

/**
* Marker interface for a value that's safe to use as style (CSS).
*
* @publicApi
*/
export declare interface SafeStyle extends SafeValue {
}

/**
* Marker interface for a value that's safe to use as a URL linking to a document.
*
* @publicApi
*/
export declare interface SafeUrl extends SafeValue {
}

/**
* Marker interface for a value that's safe to use in a particular context.
*
* @publicApi
*/
export declare interface SafeValue {
}

/**
* A type-safe key to use with \`TransferState\`.
*
* Example:
*
* \`\`\`
* const COUNTER_KEY = makeStateKey<number>('counter');
* let value = 10;
*
* transferState.set(COUNTER_KEY, value);
* \`\`\`
*
* @publicApi
*/
export declare type StateKey<T> = string & {
 __not_a_string: never;
 __value_type?: T;
};

/**
* A service that can be used to get and set the title of a current HTML document.
*
* Since an Angular application can't be bootstrapped on the entire HTML document (\`<html>\` tag)
* it is not possible to bind to the \`text\` property of the \`HTMLTitleElement\` elements
* (representing the \`<title>\` tag). Instead, this service can be used to set and get the current
* title value.
*
* @publicApi
*/
export declare class Title {
 private _doc;
 constructor(_doc: any);
 /**
	* Get the title of the current HTML document.
	*/
 getTitle(): string;
 /**
	* Set the title of the current HTML document.
	* @param newTitle
	*/
 setTitle(newTitle: string): void;
 static ɵfac: i0.ɵɵFactoryDeclaration<Title, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<Title>;
}

/**
* A key value store that is transferred from the application on the server side to the application
* on the client side.
*
* The \`TransferState\` is available as an injectable token.
* On the client, just inject this token using DI and use it, it will be lazily initialized.
* On the server it's already included if \`renderApplication\` function is used. Otherwise, import
* the \`ServerTransferStateModule\` module to make the \`TransferState\` available.
*
* The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
* boolean, number, string, null and non-class objects will be serialized and deserialized in a
* non-lossy manner.
*
* @publicApi
*/
export declare class TransferState {
 private store;
 private onSerializeCallbacks;
 /**
	* Get the value corresponding to a key. Return \`defaultValue\` if key is not found.
	*/
 get<T>(key: StateKey<T>, defaultValue: T): T;
 /**
	* Set the value corresponding to a key.
	*/
 set<T>(key: StateKey<T>, value: T): void;
 /**
	* Remove a key from the store.
	*/
 remove<T>(key: StateKey<T>): void;
 /**
	* Test whether a key exists in the store.
	*/
 hasKey<T>(key: StateKey<T>): boolean;
 /**
	* Indicates whether the state is empty.
	*/
 get isEmpty(): boolean;
 /**
	* Register a callback to provide the value for a key when \`toJson\` is called.
	*/
 onSerialize<T>(key: StateKey<T>, callback: () => T): void;
 /**
	* Serialize the current state of the store to JSON.
	*/
 toJson(): string;
 static ɵfac: i0.ɵɵFactoryDeclaration<TransferState, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<TransferState>;
}

/**
* @publicApi
*/
export declare const VERSION: Version;

/**
* A \`DomAdapter\` powered by full browser DOM APIs.
*
* @security Tread carefully! Interacting with the DOM directly is dangerous and
* can introduce XSS risks.
*/
export declare class ɵBrowserDomAdapter extends GenericBrowserDomAdapter {
 static makeCurrent(): void;
 onAndCancel(el: Node, evt: any, listener: any): Function;
 dispatchEvent(el: Node, evt: any): void;
 remove(node: Node): void;
 createElement(tagName: string, doc?: Document): HTMLElement;
 createHtmlDocument(): Document;
 getDefaultDocument(): Document;
 isElementNode(node: Node): boolean;
 isShadowRoot(node: any): boolean;
 /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
 getGlobalEventTarget(doc: Document, target: string): EventTarget | null;
 getBaseHref(doc: Document): string | null;
 resetBaseElement(): void;
 getUserAgent(): string;
 getCookie(name: string): string | null;
}

export declare class ɵBrowserGetTestability implements GetTestability {
 addToWindow(registry: TestabilityRegistry): void;
 findTestabilityInTree(registry: TestabilityRegistry, elem: any, findInAncestors: boolean): Testability | null;
}

export declare class ɵDomEventsPlugin extends EventManagerPlugin {
 constructor(doc: any);
 supports(eventName: string): boolean;
 addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
 removeEventListener(target: any, eventName: string, callback: Function): void;
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵDomEventsPlugin, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵDomEventsPlugin>;
}

export declare class ɵDomRendererFactory2 implements RendererFactory2 {
 private eventManager;
 private sharedStylesHost;
 private appId;
 private rendererByCompId;
 private defaultRenderer;
 constructor(eventManager: EventManager, sharedStylesHost: ɵDomSharedStylesHost, appId: string);
 createRenderer(element: any, type: RendererType2 | null): Renderer2;
 begin(): void;
 end(): void;
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵDomRendererFactory2, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵDomRendererFactory2>;
}

export declare class ɵDomSanitizerImpl extends DomSanitizer {
 private _doc;
 constructor(_doc: any);
 sanitize(ctx: SecurityContext, value: SafeValue | string | null): string | null;
 bypassSecurityTrustHtml(value: string): SafeHtml;
 bypassSecurityTrustStyle(value: string): SafeStyle;
 bypassSecurityTrustScript(value: string): SafeScript;
 bypassSecurityTrustUrl(value: string): SafeUrl;
 bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵDomSanitizerImpl, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵDomSanitizerImpl>;
}

export declare class ɵDomSharedStylesHost extends ɵSharedStylesHost implements OnDestroy {
 private _doc;
 private _hostNodes;
 constructor(_doc: any);
 private _addStylesToHost;
 addHost(hostNode: Node): void;
 removeHost(hostNode: Node): void;
 onStylesAdded(additions: Set<string>): void;
 ngOnDestroy(): void;
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵDomSharedStylesHost, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵDomSharedStylesHost>;
}

export declare function ɵescapeHtml(text: string): string;

export declare function ɵflattenStyles(compId: string, styles: Array<any | any[]>, target: string[]): string[];

export { ɵgetDOM }

/**
* Event plugin that adds Hammer support to an application.
*
* @ngModule HammerModule
*/
export declare class ɵHammerGesturesPlugin extends EventManagerPlugin {
 private _config;
 private console;
 private loader?;
 private _loaderPromise;
 constructor(doc: any, _config: HammerGestureConfig, console: ɵConsole, loader?: HammerLoader | null | undefined);
 supports(eventName: string): boolean;
 addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
 isCustomEvent(eventName: string): boolean;
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵHammerGesturesPlugin, [null, null, null, { optional: true; }]>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵHammerGesturesPlugin>;
}

export declare function ɵinitDomAdapter(): void;

export declare const ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS: StaticProvider[];

/**
* @publicApi
* A browser plug-in that provides support for handling of key events in Angular.
*/
export declare class ɵKeyEventsPlugin extends EventManagerPlugin {
 /**
	* Initializes an instance of the browser plug-in.
	* @param doc The document in which key events will be detected.
	*/
 constructor(doc: any);
 /**
	* Reports whether a named key event is supported.
	* @param eventName The event name to query.
	* @return True if the named key event is supported.
	*/
 supports(eventName: string): boolean;
 /**
	* Registers a handler for a specific element and key event.
	* @param element The HTML element to receive event notifications.
	* @param eventName The name of the key event to listen for.
	* @param handler A function to call when the notification occurs. Receives the
	* event object as an argument.
	* @returns The key event that was registered.
	*/
 addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
 /**
	* Parses the user provided full keyboard event definition and normalizes it for
	* later internal use. It ensures the string is all lowercase, converts special
	* characters to a standard spelling, and orders all the values consistently.
	*
	* @param eventName The name of the key event to listen for.
	* @returns an object with the full, normalized string, and the dom event name
	* or null in the case when the event doesn't match a keyboard event.
	*/
 static parseEventName(eventName: string): {
	 fullKey: string;
	 domEventName: string;
 } | null;
 /**
	* Determines whether the actual keys pressed match the configured key code string.
	* The \`fullKeyCode\` event is normalized in the \`parseEventName\` method when the
	* event is attached to the DOM during the \`addEventListener\` call. This is unseen
	* by the end user and is normalized for internal consistency and parsing.
	*
	* @param event The keyboard event.
	* @param fullKeyCode The normalized user defined expected key event string
	* @returns boolean.
	*/
 static matchEventFullKeyCode(event: KeyboardEvent, fullKeyCode: string): boolean;
 /**
	* Configures a handler callback for a key event.
	* @param fullKey The event name that combines all simultaneous keystrokes.
	* @param handler The function that responds to the key event.
	* @param zone The zone in which the event occurred.
	* @returns A callback function.
	*/
 static eventCallback(fullKey: string, handler: Function, zone: NgZone): Function;
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵKeyEventsPlugin, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵKeyEventsPlugin>;
}

export declare const ɵNAMESPACE_URIS: {
 [ns: string]: string;
};

export declare class ɵSharedStylesHost {
 addStyles(styles: string[]): void;
 onStylesAdded(additions: Set<string>): void;
 getAllStyles(): string[];
 static ɵfac: i0.ɵɵFactoryDeclaration<ɵSharedStylesHost, never>;
 static ɵprov: i0.ɵɵInjectableDeclaration<ɵSharedStylesHost>;
}

export declare function ɵshimContentAttribute(componentShortId: string): string;

export declare function ɵshimHostAttribute(componentShortId: string): string;

/**
* An id that identifies a particular application being bootstrapped, that should
* match across the client/server boundary.
*/
export declare const ɵTRANSITION_ID: InjectionToken<unknown>;

export { }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ANGULAR_PLATFORM_BROWSER_FILE);


/***/ }),

/***/ 5676:
/*!******************************!*\
  !*** ./src/app.component.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component */ 6266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


// import WorkspaceWithRendererDebugComponent from './workspace-with-renderer-debug.component';
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "wp-home-page");
    } }, dependencies: [_home_page_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1047:
/*!****************************!*\
  !*** ./src/base-editor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseEditor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _monaco_editor_config_injection_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monaco-editor-config-injection-token */ 7239);



const _c0 = ["editorContainer"];
let loadedMonaco = false;
let loadPromise;
class BaseEditor {
    constructor(_config) {
        this._config = _config;
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngAfterViewInit() {
        if (loadedMonaco) {
            // Wait until monaco editor is available
            loadPromise.then(() => {
                this.isInit.emit();
                this.initMonaco(this._options);
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise((resolve) => {
                const baseUrl = (this._config.baseUrl || './assets') + '/monaco-editor/min/vs';
                if (typeof (window.monaco) === 'object') {
                    resolve();
                    return;
                }
                const onGotAmdLoader = () => {
                    // Load monaco
                    window.require.config({ paths: { 'vs': `${baseUrl}` } });
                    window.require([`vs/editor/editor.main`], () => {
                        if (typeof this._config.onMonacoLoad === 'function') {
                            this._config.onMonacoLoad();
                        }
                        this.isInit.emit();
                        this.initMonaco(this._options);
                        resolve();
                    });
                };
                // Load AMD loader if necessary
                if (!window.require) {
                    const loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = `${baseUrl}/loader.js`;
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onGotAmdLoader();
                }
            });
        }
    }
    ngOnDestroy() {
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    }
}
BaseEditor.ɵfac = function BaseEditor_Factory(t) { return new (t || BaseEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_monaco_editor_config_injection_token__WEBPACK_IMPORTED_MODULE_0__["default"])); };
BaseEditor.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseEditor, selectors: [["ng-component"]], viewQuery: function BaseEditor_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._editorContainer = _t.first);
    } }, outputs: { onInit: "onInit", isInit: "isInit" }, decls: 0, vars: 0, template: function BaseEditor_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 375:
/*!********************************************!*\
  !*** ./src/clickable-element.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClickableElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);



const _c0 = ["*"];
class ClickableElementComponent {
}
ClickableElementComponent.ɵfac = function ClickableElementComponent_Factory(t) { return new (t || ClickableElementComponent)(); };
ClickableElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClickableElementComponent, selectors: [["wp-clickable-element"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center"]], template: function ClickableElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  background-color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWNrYWJsZS1lbGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRDtBQUNDO0VBQ0Msc0JBQUE7QUFDRiIsImZpbGUiOiJjbGlja2FibGUtZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2Njtcblx0fVxuXG5cdC8vID5pbWcge1xuXHQvLyBcdHdpZHRoOiAxNXB4O1xuXHQvLyBcdGhlaWdodDogMTVweDtcblx0Ly8gfVxufVxuIl19 */"] });


/***/ }),

/***/ 143:
/*!*****************************************!*\
  !*** ./src/clickable-icon.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClickableIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);



class ClickableIconComponent {
}
ClickableIconComponent.ɵfac = function ClickableIconComponent_Factory(t) { return new (t || ClickableIconComponent)(); };
ClickableIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClickableIconComponent, selectors: [["wp-clickable-icon"]], inputs: { icon: "icon" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 2, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "icon", 3, "src"]], template: function ClickableIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/icons/" + ctx.icon + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  background-color: #666;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWNrYWJsZS1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRDtBQUNDO0VBQ0Msc0JBQUE7QUFDRjtBQUVDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJjbGlja2FibGUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2Njtcblx0fVxuXG5cdD5pbWcge1xuXHRcdHdpZHRoOiAxNXB4O1xuXHRcdGhlaWdodDogMTVweDtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 7844:
/*!********************************************!*\
  !*** ./src/compile-component.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompileComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 510);
/* harmony import */ var _create_ng_component_from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-ng-component-from-string */ 983);
/* harmony import */ var _i_ng_project_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i-ng-project-files-service */ 3633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);






function CompileComponentComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function CompileComponentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompileComponentComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r0.dynamicComponent);
} }
const DEBOUNCE_MS = 250;
/**
 * To use this component, you should have this line
 * in main.ts file :
 * import '@angular/compiler';
 */
class CompileComponentComponent {
    constructor(_ngProjectFilesService) {
        this._ngProjectFilesService = _ngProjectFilesService;
        this.listenChanges();
    }
    get renderComponent() {
        return this.dynamicComponent !== undefined;
    }
    ngOnChanges() {
        this.update();
    }
    update() {
        this.dynamicComponent = (0,_create_ng_component_from_string__WEBPACK_IMPORTED_MODULE_0__["default"])(this.ngComponentFileName, this._ngProjectFilesService);
    }
    listenChanges() {
        /**
         * TODO
         */
        this._ngProjectFilesService.change$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(DEBOUNCE_MS)).subscribe(() => {
            this.update();
        });
    }
}
CompileComponentComponent.ɵfac = function CompileComponentComponent_Factory(t) { return new (t || CompileComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_i_ng_project_files_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
CompileComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompileComponentComponent, selectors: [["wp-compile-component"]], inputs: { ngComponentFileName: "ngComponentFileName" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngComponentOutlet"]], template: function CompileComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CompileComponentComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.renderComponent);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21waWxlLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
CompileComponentComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CompileComponentComponent, factory: CompileComponentComponent.ɵfac });


/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** ./src/context-menu-2.directive.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContextMenu2Directive)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2628);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2704);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1927);
/* harmony import */ var _context_menu_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context-menu-ref.service */ 3290);
/* harmony import */ var _file_context_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-context-menu.component */ 1068);
/* harmony import */ var _show_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-overlay.service */ 2390);






class ContextMenu2Directive {
    constructor(_showOverlayService, _injector, elementRef) {
        this._showOverlayService = _showOverlayService;
        this._injector = _injector;
        elementRef.nativeElement.oncontextmenu = () => false;
    }
    onContextMenu({ x, y }) {
        this.open({
            x,
            y
        });
    }
    open({ x, y }) {
        this.close();
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create([
            {
                provide: _context_menu_ref_service__WEBPACK_IMPORTED_MODULE_0__["default"],
                useValue: {
                    close: () => {
                        this.close();
                    }
                }
            }
        ], this._injector);
        this._overlayRef = this._showOverlayService.showOverlay2(_file_context_menu_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
            x,
            y
        }, { filePath: this.filePath }, injector);
        const containerHtml = this._showOverlayService.container.element.nativeElement;
        if (containerHtml.style.pointerEvents === 'none') {
            return;
        }
        this._sub = listenClickOutside(this._overlayRef).subscribe(() => {
            this.close();
        });
    }
    close() {
        if (this._overlayRef === undefined) {
            return;
        }
        this._sub?.unsubscribe();
        this._overlayRef?.destroy();
        this._overlayRef = undefined;
    }
}
ContextMenu2Directive.ɵfac = function ContextMenu2Directive_Factory(t) { return new (t || ContextMenu2Directive)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_show_overlay_service__WEBPACK_IMPORTED_MODULE_2__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
ContextMenu2Directive.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ContextMenu2Directive, selectors: [["", "wp-context-menu-2", ""]], hostBindings: function ContextMenu2Directive_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("contextmenu", function ContextMenu2Directive_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } }, inputs: { filePath: "filePath" }, standalone: true });
function listenClickOutside(overlayRef) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'click').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => {
        const clickTargetHtml = event.target;
        const contentElementRef = overlayRef.instance.contentElementRef;
        const contentHtmlElement = contentElementRef.nativeElement;
        return !contentHtmlElement.contains(clickTargetHtml);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(e => undefined));
}


/***/ }),

/***/ 3290:
/*!*****************************************!*\
  !*** ./src/context-menu-ref.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContextMenuRef)
/* harmony export */ });
class ContextMenuRef {
    close() {
    }
}


/***/ }),

/***/ 7085:
/*!**************************************!*\
  !*** ./src/convert-to-kebab-case.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToKebabCase": () => (/* binding */ convertToKebabCase)
/* harmony export */ });
function convertToKebabCase(text) {
    const match = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
    if (match === null) {
        return '';
    }
    return match.map(x => x.toLowerCase()).join('-');
}


/***/ }),

/***/ 282:
/*!*****************************************************!*\
  !*** ./src/create-function-in-workspace.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateFunctionInWorkspaceService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _add_new_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-import */ 3184);
/* harmony import */ var _convert_to_kebab_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convert-to-kebab-case */ 7085);
/* harmony import */ var _get_available_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-available-name */ 2131);
/* harmony import */ var _get_typescript_file_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-typescript-file-name */ 1370);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _show_input_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-input-box.service */ 6346);
/* harmony import */ var _to_camel_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to-camel-case */ 8734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9332);









class CreateFunctionInWorkspaceService {
  constructor(_projectFilesService, _showInputBoxService) {
    this._projectFilesService = _projectFilesService;
    this._showInputBoxService = _showInputBoxService;
  }

  createFunction(data) {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const interfaceNameFromUser = yield _this._showInputBoxService.showInputBox({
        placeHolder: 'functionName',
        prompt: 'Function name'
      });

      if (interfaceNameFromUser === undefined) {
        return;
      }

      let kebabName = (0,_convert_to_kebab_case__WEBPACK_IMPORTED_MODULE_2__.convertToKebabCase)(interfaceNameFromUser);
      const availableNameKebab = yield (0,_get_available_name__WEBPACK_IMPORTED_MODULE_3__.getAvailableName)(_this._projectFilesService.filePathList.map(e => e.path), kebabName);
      const newFilePath = (0,_get_typescript_file_name__WEBPACK_IMPORTED_MODULE_4__.getTypescriptFileName)(availableNameKebab);
      const functionName = (0,_to_camel_case__WEBPACK_IMPORTED_MODULE_7__.camalize)(kebabName);

      _this._projectFilesService.updt_create({
        path: newFilePath,
        content: `export default function ${functionName}() {
	// ...
}
`
      });

      const importerFilePath = data.filePath;

      const importerFileContent = _this._projectFilesService.getFile(importerFilePath);

      const newFileContent = (0,_add_new_import__WEBPACK_IMPORTED_MODULE_1__["default"])({
        alias: functionName,
        name: availableNameKebab
      }, importerFileContent);

      _this._projectFilesService.updt_modifyContent({
        path: importerFilePath,
        content: newFileContent
      });
    })();
  }

}

CreateFunctionInWorkspaceService.ɵfac = function CreateFunctionInWorkspaceService_Factory(t) {
  return new (t || CreateFunctionInWorkspaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_5__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_show_input_box_service__WEBPACK_IMPORTED_MODULE_6__["default"]));
};

CreateFunctionInWorkspaceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: CreateFunctionInWorkspaceService,
  factory: CreateFunctionInWorkspaceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 983:
/*!************************************************!*\
  !*** ./src/create-ng-component-from-string.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNgComponentFromString)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ 9109);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-imports */ 8351);
/* harmony import */ var _get_ts_imports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-ts-imports */ 9906);
/* harmony import */ var _is_angular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-angular-component */ 8448);
/* harmony import */ var _to_pascal_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-pascal-case */ 8160);
/* harmony import */ var _transpile_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transpile-ts */ 1655);








const AngularCommon = _angular_common__WEBPACK_IMPORTED_MODULE_6__;
const AngularCore = _angular_core__WEBPACK_IMPORTED_MODULE_7__;
const sharedModules = {
    '@angular/core': 'AngularCore',
    '@angular/common': 'AngularCommon',
    'rxjs': 'Rxjs'
};
function createNgComponentFromString(ngComponentFileName, ngProjectFilesService) {
    const bundle = bundleFiles(ngComponentFileName, ngProjectFilesService);
    if (bundle === undefined) {
        return undefined;
    }
    const jsCode = (0,_transpile_ts__WEBPACK_IMPORTED_MODULE_5__["default"])(bundle);
    const jsClass = eval(jsCode);
    return jsClass;
}
function bundleFiles(ngComponentFileName, ngProjectFilesService) {
    const fileContent = ngProjectFilesService.getFile(ngComponentFileName);
    if (fileContent === undefined) {
        return undefined;
    }
    let modifiedContent = getNgComponentModifiedContent(ngComponentFileName, fileContent, ngProjectFilesService);
    const dependenciesFilesNames = getAllDepedenciesFilesNames(ngComponentFileName, ngProjectFilesService);
    const res = dependenciesFilesNames.map(e => getDependencyFileModifiedContent(e, ngProjectFilesService)).join('\n') + '\n' + modifiedContent;
    return res;
}
function getAllDepedenciesFilesNames(fileName, ngProjectFilesService) {
    const res = [];
    const fileContent = ngProjectFilesService.getFile(fileName);
    if (fileContent === undefined) {
        throw new Error(`no file ${fileName}`);
    }
    const localImports = (0,_get_imports__WEBPACK_IMPORTED_MODULE_1__.getImports)(fileContent);
    localImports.forEach(e => {
        /**
         * TODO
         * prendre en compte e.alias
         */
        const dependencyFileName = e.name + '.ts';
        const array = getAllDepedenciesFilesNames(dependencyFileName, ngProjectFilesService).concat(dependencyFileName);
        let ref = 0;
        for (const e of array) {
            const i = res.indexOf(e);
            if (i >= 0) {
                ref = i;
            }
            else {
                res.splice(ref, 0, e);
                ref++;
            }
        }
    });
    return res;
}
// function getModifiedContent(fileContent: string): string | undefined {
// 	let res = fileContent;
// 	const match = fileContent.match(IMPORT_REGEX);
// 	if (match !== null) {
// 		const lastImport = match.slice(-1)[0];
// 		const index = fileContent.lastIndexOf(lastImport);
// 		res = fileContent.slice(index + lastImport.length);
// 	}
// 	const className = getClassName(res);
// 	if (className === undefined) {
// 		return undefined;
// 	}
// 	res = res.replace('export default', '');
// 	return res + '\n' + className;
// }
function getNgComponentModifiedContent(ngComponentFileName, fileContent, ngProjectFilesService) {
    let modifiedContent = convertImports(ngComponentFileName, fileContent);
    if (modifiedContent === undefined) {
        return undefined;
    }
    modifiedContent = replaceTemplateAndStylesUrl(modifiedContent, ngProjectFilesService);
    return modifiedContent + '\n' + getGlobalExportedNameFromFileNameWithExtension(ngComponentFileName);
}
function replaceTemplateUrl(fileContent, ngProjectFilesService) {
    const a = fileContent.match(/templateUrl: '\.\/([\w\.-]+)'/);
    if (a === null) {
        return fileContent;
    }
    const templateUrl = a[1];
    const templateFileContent = ngProjectFilesService.getFile(templateUrl);
    if (templateFileContent === undefined) {
        throw new Error(`no file ${templateUrl}`);
    }
    return fileContent.replace(a[0], `template: \`${templateFileContent}\``);
}
function replaceStyleUrls(fileContent, ngProjectFilesService) {
    /**
     * TODO
     * multiple scss files
     */
    const a = fileContent.match(/styleUrls: \['\.\/([\w\.-]+)'\]/);
    if (a === null) {
        return fileContent;
    }
    const styleUrl = a[1];
    const styleFileContent = ngProjectFilesService.getFile(styleUrl);
    if (styleFileContent === undefined) {
        throw new Error(`no file ${styleUrl}`);
    }
    return fileContent.replace(a[0], `styles: [\`${styleFileContent}\`]`);
}
function getDependencyFileModifiedContent(fileName, ngProjectFilesService) {
    const fileContent = ngProjectFilesService.getFile(fileName);
    if (fileContent === undefined) {
        throw new Error();
    }
    return getModifiedContent2(fileName, fileContent, ngProjectFilesService);
}
function getModifiedContent2(fileNameWithExtension, fileContent, ngProjectFilesService) {
    let res = convertImports(fileNameWithExtension, fileContent);
    if (res === undefined) {
        return undefined;
    }
    if (!(0,_is_angular_component__WEBPACK_IMPORTED_MODULE_3__.isAngularComponent)(fileContent)) {
        return res;
    }
    return replaceTemplateAndStylesUrl(res, ngProjectFilesService);
}
function convertImports(fileNameWithExtension, fileContent) {
    const imports = (0,_get_ts_imports__WEBPACK_IMPORTED_MODULE_2__.getTsImports)(fileContent);
    const importLines = convertImportLines(imports);
    const a = fileContent.match(/export default \w+ ([\w_]+)/);
    if (a === null) {
        return undefined;
    }
    const exportedName = a[1];
    let b = fileContent.replace('export default ', '');
    if (imports.length > 0) {
        b = b.slice(imports.slice(-1)[0]?.tokenPosition.end);
    }
    const globalName = getGlobalExportedNameFromFileNameWithExtension(fileNameWithExtension);
    return `const ${globalName} = (() => {
  ${importLines}

  ${b}
  return ${exportedName};
})();`;
}
function convertImportLines(imports) {
    const res = [];
    imports.forEach(e => {
        const namespace = getNamespace(e.moduleSpecifier);
        if (namespace === undefined) {
            return;
        }
        if (typeof e.importClause === 'string') {
            const line = createAlias(e.importClause, namespace);
            if (line !== undefined) {
                res.push(line);
            }
            return;
        }
        if (!Array.isArray(e.importClause)) {
            const line = createAlias(e.importClause.defaultImport, namespace);
            if (line !== undefined) {
                res.push(line);
            }
            return;
        }
        e.importClause.forEach(element => {
            if (typeof element === 'string') {
                res.push(`const ${element} = ${namespace}.${element};`);
                return;
            }
            res.push(`const ${element.name} = ${namespace}.${element.propertyName};`);
        });
        return;
    });
    return res.join('\n');
}
function createAlias(alias, name) {
    if (alias === name) {
        return undefined;
    }
    return `const ${alias} = ${name};`;
}
function getNamespace(moduleSpecifier) {
    const globalNamespace = getGlobalNamespace(moduleSpecifier);
    if (globalNamespace !== undefined) {
        return globalNamespace;
    }
    const match = moduleSpecifier.match(/\.\/([\w\.-]+)/);
    if (match === null) {
        return undefined;
    }
    const fileName = match[1];
    return getGlobalExportedNameFromFileName(fileName);
}
function getGlobalNamespace(moduleSpecifier) {
    return sharedModules[moduleSpecifier];
}
function replaceTemplateAndStylesUrl(fileContent, ngProjectFilesService) {
    let res = fileContent;
    res = replaceTemplateUrl(res, ngProjectFilesService);
    res = replaceStyleUrls(res, ngProjectFilesService);
    return res;
}
function getGlobalExportedNameFromFileNameWithExtension(fileNameWithExtension) {
    let fileName = getFileName(fileNameWithExtension);
    return getGlobalExportedNameFromFileName(fileName);
}
function getGlobalExportedNameFromFileName(fileName) {
    const a = fileName.replace('.', '_');
    return (0,_to_pascal_case__WEBPACK_IMPORTED_MODULE_4__["default"])(a);
}
function getFileName(filePath) {
    const a = filePath.split('.');
    a.pop();
    return a.join('.');
}


/***/ }),

/***/ 550:
/*!****************************************************!*\
  !*** ./src/create-ng-component-in-file.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNgComponentInFileService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _create_ng_component_in_workspace_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-ng-component-in-workspace.service */ 7641);
/* harmony import */ var _import_ng_component_in_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-ng-component-in-file */ 1383);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9332);





class CreateNgComponentInFileService {
  constructor(_createNgComponentInWorkspaceService, _projectFilesService) {
    this._createNgComponentInWorkspaceService = _createNgComponentInWorkspaceService;
    this._projectFilesService = _projectFilesService;
  }

  createNgComponentInFile(data) {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const importerFile = _this._projectFilesService.filePathList.find(e => e.path === data.filePath);

      if (importerFile === undefined) {
        return undefined;
      }

      const a = yield _this._createNgComponentInWorkspaceService.createNgComponentInWorkspace();

      if (a === undefined) {
        return undefined;
      }

      const newFileContent = (0,_import_ng_component_in_file__WEBPACK_IMPORTED_MODULE_2__["default"])(importerFile.content, {
        className: a.componentClassName,
        fileName: a.fileName
      });

      _this._projectFilesService.updt_modifyContent({
        path: data.filePath,
        content: newFileContent
      });

      return a.fileName;
    })();
  }

}

CreateNgComponentInFileService.ɵfac = function CreateNgComponentInFileService_Factory(t) {
  return new (t || CreateNgComponentInFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_create_ng_component_in_workspace_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_3__["default"]));
};

CreateNgComponentInFileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CreateNgComponentInFileService,
  factory: CreateNgComponentInFileService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7641:
/*!*********************************************************!*\
  !*** ./src/create-ng-component-in-workspace.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNgComponentInWorkspaceService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _convert_to_kebab_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-to-kebab-case */ 7085);
/* harmony import */ var _get_available_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-available-name */ 2131);
/* harmony import */ var _get_typescript_file_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-typescript-file-name */ 1370);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _show_input_box_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-input-box.service */ 6346);
/* harmony import */ var _to_pascal_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-pascal-case */ 8160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 9332);








const PLACE_HOLDER = 'Angular component name';
const PROMPT = 'Angular component name';
const COMPONENT_FILE_SUFFIX = '.component';
const COMPONENT_CLASS_NAME_SUFFIX = 'Component';
const PREFIX = 'wp';
class CreateNgComponentInWorkspaceService {
  constructor(_showInputBoxService, _projectFilesService) {
    this._showInputBoxService = _showInputBoxService;
    this._projectFilesService = _projectFilesService;
  }

  createNgComponentInWorkspace() {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nameFromUser = yield _this._showInputBoxService.showInputBox({
        placeHolder: PLACE_HOLDER,
        prompt: PROMPT
      });

      if (nameFromUser === undefined) {
        return undefined;
      }

      const kebabName = (0,_convert_to_kebab_case__WEBPACK_IMPORTED_MODULE_1__.convertToKebabCase)(nameFromUser);
      const availableNameKebab = yield (0,_get_available_name__WEBPACK_IMPORTED_MODULE_2__.getAvailableName)(_this._projectFilesService.filePathList.map(e => e.path), kebabName + COMPONENT_FILE_SUFFIX);
      const htmlFileName = `${availableNameKebab}.html`;
      const styleFileName = `${availableNameKebab}.scss`;
      const componentClassName = getComponentClassName(kebabName);
      const fileContent = getNgComponentFileContent(componentClassName, kebabName, htmlFileName, styleFileName);
      const componentFilePath = (0,_get_typescript_file_name__WEBPACK_IMPORTED_MODULE_3__.getTypescriptFileName)(availableNameKebab);

      _this._projectFilesService.updt_create({
        path: componentFilePath,
        content: fileContent
      });

      _this._projectFilesService.updt_create({
        path: htmlFileName,
        content: getHtmlFileContent(kebabName)
      });

      _this._projectFilesService.updt_create({
        path: styleFileName,
        content: ''
      }); // await createMockInputsFile(
      // 	srcPath,
      // 	fileName
      // );
      // await createMockInitService(componentFilePath);
      // vscode.window.showTextDocument(vscode.Uri.file(componentFilePath));


      return {
        componentClassName,
        fileName: availableNameKebab
      };
    })();
  }

}

CreateNgComponentInWorkspaceService.ɵfac = function CreateNgComponentInWorkspaceService_Factory(t) {
  return new (t || CreateNgComponentInWorkspaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_show_input_box_service__WEBPACK_IMPORTED_MODULE_5__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_4__["default"]));
};

CreateNgComponentInWorkspaceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CreateNgComponentInWorkspaceService,
  factory: CreateNgComponentInWorkspaceService.ɵfac,
  providedIn: 'root'
});
/**
 * @param kebabName suffix .component
 */

function getNgComponentFileContent(componentClassName, kebabName, htmlFileName, styleFileName) {
  return `import { Component } from '@angular/core';

@Component({
	selector: '${PREFIX}-${kebabName}',
	standalone: true,
	templateUrl: './${htmlFileName}',
	styleUrls: ['./${styleFileName}']
})
export default class ${componentClassName} { }
`;
}

function getComponentClassName(kebabName) {
  const componentName = (0,_to_pascal_case__WEBPACK_IMPORTED_MODULE_6__["default"])(kebabName);
  return `${componentName}${COMPONENT_CLASS_NAME_SUFFIX}`;
}

function getHtmlFileContent(kebabName) {
  return `<p>${kebabName} component works</p>`;
}

/***/ }),

/***/ 2836:
/*!**************************************************!*\
  !*** ./src/create-ng-service-in-file.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNgServiceInFileService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _create_ng_service_in_workspace_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-ng-service-in-workspace.service */ 593);
/* harmony import */ var _import_ng_service_in_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-ng-service-in-file */ 2972);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9332);





class CreateNgServiceInFileService {
  constructor(_createNgServiceInWorkspaceService, _projectFilesService) {
    this._createNgServiceInWorkspaceService = _createNgServiceInWorkspaceService;
    this._projectFilesService = _projectFilesService;
  }

  createNgServiceInFile(data) {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const importerFile = _this._projectFilesService.filePathList.find(e => e.path === data.filePath);

      if (importerFile === undefined) {
        return undefined;
      }

      const a = yield _this._createNgServiceInWorkspaceService.createNgServiceInWorkspace();

      if (a === undefined) {
        return undefined;
      }

      const newFileContent = (0,_import_ng_service_in_file__WEBPACK_IMPORTED_MODULE_2__["default"])(importerFile.content, a);

      _this._projectFilesService.updt_modifyContent({
        path: data.filePath,
        content: newFileContent
      });

      return a.fileName;
    })();
  }

}

CreateNgServiceInFileService.ɵfac = function CreateNgServiceInFileService_Factory(t) {
  return new (t || CreateNgServiceInFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_create_ng_service_in_workspace_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_3__["default"]));
};

CreateNgServiceInFileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CreateNgServiceInFileService,
  factory: CreateNgServiceInFileService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 593:
/*!*******************************************************!*\
  !*** ./src/create-ng-service-in-workspace.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNgServiceInWorkspaceService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _convert_to_kebab_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-to-kebab-case */ 7085);
/* harmony import */ var _get_available_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-available-name */ 2131);
/* harmony import */ var _get_typescript_file_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-typescript-file-name */ 1370);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _show_input_box_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-input-box.service */ 6346);
/* harmony import */ var _to_pascal_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-pascal-case */ 8160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 9332);








const PLACE_HOLDER = 'Angular service name';
const PROMPT = 'Angular service name';
const FILE_SUFFIX = '.service';
const CLASS_NAME_SUFFIX = 'Service';
class CreateNgServiceInWorkspaceService {
  constructor(_showInputBoxService, _projectFilesService) {
    this._showInputBoxService = _showInputBoxService;
    this._projectFilesService = _projectFilesService;
  }

  createNgServiceInWorkspace() {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nameFromUser = yield _this._showInputBoxService.showInputBox({
        placeHolder: PLACE_HOLDER,
        prompt: PROMPT
      });

      if (nameFromUser === undefined) {
        return undefined;
      }

      const kebabName = (0,_convert_to_kebab_case__WEBPACK_IMPORTED_MODULE_1__.convertToKebabCase)(nameFromUser);
      const availableNameKebab = yield (0,_get_available_name__WEBPACK_IMPORTED_MODULE_2__.getAvailableName)(_this._projectFilesService.filePathList.map(e => e.path), kebabName + FILE_SUFFIX);
      const className = getClassName(kebabName);
      const fileContent = getFileContent(className);
      const filePath = (0,_get_typescript_file_name__WEBPACK_IMPORTED_MODULE_3__.getTypescriptFileName)(availableNameKebab);

      _this._projectFilesService.updt_create({
        path: filePath,
        content: fileContent
      });

      return {
        className,
        fileName: availableNameKebab
      };
    })();
  }

}

CreateNgServiceInWorkspaceService.ɵfac = function CreateNgServiceInWorkspaceService_Factory(t) {
  return new (t || CreateNgServiceInWorkspaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_show_input_box_service__WEBPACK_IMPORTED_MODULE_5__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_4__["default"]));
};

CreateNgServiceInWorkspaceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CreateNgServiceInWorkspaceService,
  factory: CreateNgServiceInWorkspaceService.ɵfac,
  providedIn: 'root'
});

function getFileContent(className) {
  return `import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export default class ${className} {
	constructor() {
		
	}
}
`;
}

function getClassName(kebabName) {
  const name = (0,_to_pascal_case__WEBPACK_IMPORTED_MODULE_6__["default"])(kebabName);
  return `${name}${CLASS_NAME_SUFFIX}`;
}

/***/ }),

/***/ 9817:
/*!***************************!*\
  !*** ./src/deep-clone.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deepClone)
/* harmony export */ });
function deepClone(data) {
    if (Array.isArray(data)) {
        return data.map(deepClone);
    }
    if (typeof data === 'object') {
        return Object.keys(data).reduce((prev, curr) => {
            return {
                ...prev,
                [curr]: deepClone(data[curr])
            };
        }, {});
    }
    return data;
}


/***/ }),

/***/ 7259:
/*!***********************************************!*\
  !*** ./src/documentation-button.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocumentationButtonComponent)
/* harmony export */ });
/* harmony import */ var _main_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-button.component */ 9438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


class DocumentationButtonComponent {
}
DocumentationButtonComponent.ɵfac = function DocumentationButtonComponent_Factory(t) { return new (t || DocumentationButtonComponent)(); };
DocumentationButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocumentationButtonComponent, selectors: [["wp-documentation-button"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 2, vars: 0, template: function DocumentationButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "wp-main-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Documentation\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_main_button_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3302:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 1068:
/*!********************************************!*\
  !*** ./src/file-context-menu.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileContextMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _context_menu_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context-menu-ref.service */ 3290);
/* harmony import */ var _workspace_commands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workspace-commands.service */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);





function FileContextMenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileContextMenuComponent_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onClick(option_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
} }
class FileContextMenuComponent {
    constructor(_contextMenuRef, _workspaceCommandsService) {
        this._contextMenuRef = _contextMenuRef;
        this._workspaceCommandsService = _workspaceCommandsService;
        this.options = [];
    }
    ngOnInit() {
        const commands = this._workspaceCommandsService.commands;
        this.options = Object.keys(commands).map(commandId => {
            return {
                label: commands[commandId].name,
                commandId
            };
        });
    }
    onClick(option) {
        this._contextMenuRef.close();
        this._workspaceCommandsService.runCommand(option.commandId, { filePath: this.filePath });
    }
}
FileContextMenuComponent.ɵfac = function FileContextMenuComponent_Factory(t) { return new (t || FileContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_context_menu_ref_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_workspace_commands_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
FileContextMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FileContextMenuComponent, selectors: [["wp-file-context-menu"]], inputs: { filePath: "filePath" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 2, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function FileContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FileContextMenuComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px 0px;\n  background-color: #b8b8b8;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  color: black;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 3px 20px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  background-color: #0769d7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtY29udGV4dC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMERBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFDQztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDQyx5QkFBQTtFQUNBLFlBQUE7QUFDSCIsImZpbGUiOiJmaWxlLWNvbnRleHQtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogNXB4IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2I4YjhiODtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LHNhbnMtc2VyaWY7XG5cdGNvbG9yOiBibGFjaztcblxuXHQ+IGRpdiB7XG5cdFx0cGFkZGluZzogM3B4IDIwcHg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDc2OWQ3O1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdH1cblx0fVxufVxuIl19 */"] });
function getFileName(filePath) {
    const a = filePath.split('.');
    a.pop();
    return a.join('.');
}


/***/ }),

/***/ 429:
/*!****************************************!*\
  !*** ./src/files-in-editor.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilesInEditorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);

class FilesInEditorService {
    constructor() {
        this.files = [];
    }
    open(filePath) {
        this.files.forEach(e => e.selected = false);
        const file = this.files.find(e => e.filePath === filePath);
        if (file !== undefined) {
            file.selected = true;
            return;
        }
        this.files.push({
            filePath,
            selected: true
        });
    }
    close(filePath) {
        this.files = this.files.filter(e => e.filePath !== filePath);
    }
}
FilesInEditorService.ɵfac = function FilesInEditorService_Factory(t) { return new (t || FilesInEditorService)(); };
FilesInEditorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilesInEditorService, factory: FilesInEditorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3178:
/*!*************************************!*\
  !*** ./src/files-tabs.component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilesTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _files_in_editor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-in-editor.service */ 429);
/* harmony import */ var _init_monaco_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-monaco-model.service */ 2539);
/* harmony import */ var _monaco_editor_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monaco-editor-2 */ 6409);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.component */ 9167);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.component */ 3700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9332);









function FilesTabsComponent_wp_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "wp-monaco-editor-2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("isInit", function FilesTabsComponent_wp_tab_1_ng_template_1_Template_wp_monaco_editor_2_isInit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onMonacoInit()); })("codeChange", function FilesTabsComponent_wp_tab_1_ng_template_1_Template_wp_monaco_editor_2_codeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onCodeChange(file_r1.filePath, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r2.getOptions(file_r1.filePath));
} }
function FilesTabsComponent_wp_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "wp-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function FilesTabsComponent_wp_tab_1_Template_wp_tab_close_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const file_r1 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onClose(file_r1.filePath)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FilesTabsComponent_wp_tab_1_ng_template_1_Template, 1, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", file_r1.filePath)("selected", file_r1.selected);
} }
const DEFAULT_THEME = 'vs-dark';
const EXTENSION_LANGUAGE_MAPPING = {
    ts: 'typescript',
    html: 'html',
    scss: 'scss'
};
class FilesTabsComponent {
    constructor(_projectFilesService, _filesInEditorService, _initMonacoModelService) {
        this._projectFilesService = _projectFilesService;
        this._filesInEditorService = _filesInEditorService;
        this._initMonacoModelService = _initMonacoModelService;
        this._map = {};
    }
    get files() {
        return this._filesInEditorService.files;
    }
    onClose(filePath) {
        this._filesInEditorService.close(filePath);
    }
    onCodeChange(filePath, code) {
        this._projectFilesService.updt_modifyContent2({
            path: filePath,
            content: code
        });
    }
    getOptions(filePath) {
        const res = this._map[filePath];
        if (res !== undefined) {
            return res;
        }
        this._map[filePath] = {
            theme: DEFAULT_THEME,
            language: getLanguage(filePath),
            tabSize: 2,
            model: {
                // value: this.getFileContent(filePath),
                // language: 'typescript',
                uri: filePath
            }
        };
        return this._map[filePath];
    }
    onMonacoInit() {
        this._initMonacoModelService.init();
    }
}
FilesTabsComponent.ɵfac = function FilesTabsComponent_Factory(t) { return new (t || FilesTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_project_files_service__WEBPACK_IMPORTED_MODULE_3__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_files_in_editor_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_init_monaco_model_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
FilesTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FilesTabsComponent, selectors: [["wp-files-tabs"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]], decls: 2, vars: 1, consts: [[3, "title", "selected", "close", 4, "ngFor", "ngForOf"], [3, "title", "selected", "close"], [3, "options", "isInit", "codeChange"]], template: function FilesTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "wp-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FilesTabsComponent_wp_tab_1_Template, 2, 2, "wp-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, dependencies: [_tabs_component__WEBPACK_IMPORTED_MODULE_5__["default"],
        _tab_component__WEBPACK_IMPORTED_MODULE_4__["default"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _monaco_editor_2__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["wp-monaco-editor-2[_ngcontent-%COMP%] {\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLXRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsY0FBQTtBQUNEIiwiZmlsZSI6ImZpbGVzLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ3cC1tb25hY28tZWRpdG9yLTIge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });
function getLanguage(filePath) {
    const extension = getExtension(filePath);
    return EXTENSION_LANGUAGE_MAPPING[extension];
}
function getExtension(filePath) {
    return filePath.split('.').slice(-1)[0];
}


/***/ }),

/***/ 2131:
/*!***********************************!*\
  !*** ./src/get-available-name.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvailableName": () => (/* binding */ getAvailableName)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _ts_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts-extension */ 9850);


const FIRST_COUNT = 2;
function getAvailableName(_x, _x2) {
  return _getAvailableName.apply(this, arguments);
}

function _getAvailableName() {
  _getAvailableName = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fileNames, name) {
    const allExistingNames = yield getTypescriptNames(fileNames);

    if (allExistingNames.indexOf(name) < 0) {
      return name;
    }

    return getAvailableNameWithSuffix(allExistingNames, name, FIRST_COUNT);
  });
  return _getAvailableName.apply(this, arguments);
}

function getAvailableNameWithSuffix(allExistingNames, name, counter) {
  const a = name.split('.');
  a[0] = `${a[0]}-${counter}`;
  const nameWithCounter = a.join('.');

  if (allExistingNames.indexOf(nameWithCounter) < 0) {
    return nameWithCounter;
  }

  return getAvailableNameWithSuffix(allExistingNames, name, counter + 1);
}
/**
 * @returns file names without .ts extension.
 */


function getTypescriptNames(_x3) {
  return _getTypescriptNames.apply(this, arguments);
}

function _getTypescriptNames() {
  _getTypescriptNames = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fileNames) {
    const typescriptFiles = fileNames.map(e => {
      if (!e.endsWith(_ts_extension__WEBPACK_IMPORTED_MODULE_1__.TS_EXTENSION)) {
        return undefined;
      }

      return e.slice(0, e.length - _ts_extension__WEBPACK_IMPORTED_MODULE_1__.TS_EXTENSION.length);
    }).filter(e => e !== undefined);
    return typescriptFiles;
  });
  return _getTypescriptNames.apply(this, arguments);
}

/***/ }),

/***/ 929:
/*!************************************!*\
  !*** ./src/get-deps-of-ts-file.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTypescriptDep": () => (/* binding */ convertTypescriptDep),
/* harmony export */   "getDepsOfTypescriptFile": () => (/* binding */ getDepsOfTypescriptFile)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _get_imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-imports */ 8351);
/* harmony import */ var _is_angular_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-angular-component */ 8448);



function getDepsOfTypescriptFile(_x, _x2) {
  return _getDepsOfTypescriptFile.apply(this, arguments);
}

function _getDepsOfTypescriptFile() {
  _getDepsOfTypescriptFile = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file, readFile) {
    const filePath = `${file.fileName}.${file.extension}`;
    const fileContent = yield readFile(filePath);
    const imports = getImportsOfFile(fileContent);
    return (yield Promise.all(imports.map( /*#__PURE__*/function () {
      var _ref = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
        try {
          return yield convertTypescriptDep(e.name, e.alias, readFile);
        } catch (err) {
          return undefined;
        }
      });

      return function (_x6) {
        return _ref.apply(this, arguments);
      };
    }()))).filter(e => e !== undefined);
  });
  return _getDepsOfTypescriptFile.apply(this, arguments);
}

function getImportsOfFile(fileContent) {
  const imports = (0,_get_imports__WEBPACK_IMPORTED_MODULE_1__.getImports)(fileContent);
  const res = [];

  for (const imp of imports) {
    if (res.some(e => e.alias === imp.alias)) {
      continue;
    }

    res.push(imp);
  }

  return res;
}

function convertTypescriptDep(_x3, _x4, _x5) {
  return _convertTypescriptDep.apply(this, arguments);
}

function _convertTypescriptDep() {
  _convertTypescriptDep = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fileName, alias, readFile) {
    const filePath = `${fileName}.ts`;
    const fileContent = yield readFile(filePath);
    const imports = (0,_get_imports__WEBPACK_IMPORTED_MODULE_1__.getImports)(fileContent);
    const isCollapsed = imports.length > 0;
    const isAngular = (0,_is_angular_component__WEBPACK_IMPORTED_MODULE_2__.isAngularComponent)(fileContent);
    return {
      alias,
      fileName,
      isCollapsed,
      extension: 'ts',
      type: isAngular ? 'angular' : 'typescript' // icon: isAngular ? 'angular' : undefined

    };
  });
  return _convertTypescriptDep.apply(this, arguments);
}

/***/ }),

/***/ 5303:
/*!***********************************************!*\
  !*** ./src/get-extension-button.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetExtensionButtonComponent)
/* harmony export */ });
/* harmony import */ var _secondary_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-button.component */ 2602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


class GetExtensionButtonComponent {
}
GetExtensionButtonComponent.ɵfac = function GetExtensionButtonComponent_Factory(t) { return new (t || GetExtensionButtonComponent)(); };
GetExtensionButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GetExtensionButtonComponent, selectors: [["wp-get-extension-button"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 2, vars: 0, template: function GetExtensionButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "wp-secondary-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Obtenir l'extension\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_secondary_button_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtZXh0ZW5zaW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3335:
/*!*********************************************!*\
  !*** ./src/get-first-non-empty-char-pos.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFirstNonEmptyCharPos)
/* harmony export */ });
const EMPTY_CHARS = [
    '\n',
    ' ',
    '\t'
];
function getFirstNonEmptyCharPos(text, firstPos) {
    let index = firstPos;
    while (true) {
        const char = text[index];
        if (!EMPTY_CHARS.includes(char)) {
            return index;
        }
        if (index >= text.length) {
            return index;
        }
        index++;
    }
}


/***/ }),

/***/ 8351:
/*!****************************!*\
  !*** ./src/get-imports.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImports": () => (/* binding */ getImports)
/* harmony export */ });
const REGEXP = /^import ([\w-]+) from '\.\/([\w\-\.]+)';?\s*$/;
function getImports(fileContent) {
    const lines = fileContent.split('\n');
    return lines.map(processLine).filter(e => e !== undefined);
}
function processLine(lineText, row) {
    const match = lineText.match(REGEXP);
    if (match === null) {
        return undefined;
    }
    return {
        name: match[2],
        alias: match[1],
        row
    };
}


/***/ }),

/***/ 1934:
/*!*****************************************!*\
  !*** ./src/get-ts-imports-from-node.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTsImportsFromNode": () => (/* binding */ getTsImportsFromNode)
/* harmony export */ });
/* harmony import */ var _get_first_non_empty_char_pos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-first-non-empty-char-pos */ 3335);

function getTsImportsFromNode(node) {
    return node.statements.map((e) => {
        if (e.importClause === undefined) {
            return undefined;
        }
        const importClause = getImportClause(e.importClause);
        const moduleSpecifier = e.moduleSpecifier.text;
        return {
            importClause,
            moduleSpecifier,
            tokenPosition: {
                start: (0,_get_first_non_empty_char_pos__WEBPACK_IMPORTED_MODULE_0__["default"])(node.text, e.pos),
                end: e.end
            }
        };
    }).filter(e => e !== undefined);
}
function getImportClause(importClause) {
    const namedBindings = importClause.namedBindings;
    if (namedBindings === undefined) {
        return {
            defaultImport: importClause.name.escapedText
        };
    }
    if (namedBindings.name !== undefined) {
        return namedBindings.name.escapedText;
    }
    if (namedBindings.elements !== undefined) {
        return namedBindings.elements.map((element) => {
            const name = element.name.escapedText;
            if (element.propertyName === undefined) {
                return name;
            }
            return {
                propertyName: element.propertyName.escapedText,
                name
            };
        });
    }
    return undefined;
}


/***/ }),

/***/ 9906:
/*!*******************************!*\
  !*** ./src/get-ts-imports.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTsImports": () => (/* binding */ getTsImports)
/* harmony export */ });
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript */ 3130);
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_ts_imports_from_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-ts-imports-from-node */ 1934);


function getTsImports(fileContent) {
    const node = typescript__WEBPACK_IMPORTED_MODULE_0__.createSourceFile('fileName', fileContent, typescript__WEBPACK_IMPORTED_MODULE_0__.ScriptTarget.Latest);
    return (0,_get_ts_imports_from_node__WEBPACK_IMPORTED_MODULE_1__.getTsImportsFromNode)(node);
}


/***/ }),

/***/ 1370:
/*!*****************************************!*\
  !*** ./src/get-typescript-file-name.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypescriptFileName": () => (/* binding */ getTypescriptFileName)
/* harmony export */ });
/* harmony import */ var _ts_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts-extension */ 9850);

function getTypescriptFileName(fileName) {
    return `${fileName}${_ts_extension__WEBPACK_IMPORTED_MODULE_0__.TS_EXTENSION}`;
}


/***/ }),

/***/ 6266:
/*!************************************!*\
  !*** ./src/home-page.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _live_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-preview.component */ 6826);
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.component */ 9127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);



class HomePageComponent {
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["wp-home-page"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 4, vars: 0, consts: [[1, "empty"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "wp-presentation")(2, "div", 0)(3, "wp-live-preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_live_preview_component__WEBPACK_IMPORTED_MODULE_0__["default"],
        _presentation_component__WEBPACK_IMPORTED_MODULE_1__["default"]], styles: ["[_nghost-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.empty[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDREQUFBO0FBQ0Q7O0FBSUE7RUFDQyx1QkFBQTtFQUNBLGFBQUE7QUFERCIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcblx0Ly8gbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuXHQvLyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQsc2Fucy1zZXJpZic7XG59XG5cbi5lbXB0eSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRoZWlnaHQ6IDMwMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 3633:
/*!*******************************************!*\
  !*** ./src/i-ng-project-files-service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ INgProjectFilesService)
/* harmony export */ });
class INgProjectFilesService {
}


/***/ }),

/***/ 1069:
/*!*********************************************!*\
  !*** ./src/i-tree-data-provider-service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ITreeDataProviderService)
/* harmony export */ });
class ITreeDataProviderService {
}


/***/ }),

/***/ 1383:
/*!********************************************!*\
  !*** ./src/import-ng-component-in-file.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ importNgComponentInFile)
/* harmony export */ });
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript */ 3130);
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _insert_new_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-new-import */ 2652);


function importNgComponentInFile(fileContent, data) {
    const fileContentWithNewImport = (0,_insert_new_import__WEBPACK_IMPORTED_MODULE_1__["default"])(fileContent, data);
    return insertInImportsSection(fileContentWithNewImport, data.className);
}
function insertInImportsSection(fileContent, componentClassName) {
    const node = typescript__WEBPACK_IMPORTED_MODULE_0__.createSourceFile('fileName', fileContent, typescript__WEBPACK_IMPORTED_MODULE_0__.ScriptTarget.Latest);
    const classDeclaration = node.statements.find(e => e.kind === typescript__WEBPACK_IMPORTED_MODULE_0__.SyntaxKind.ClassDeclaration);
    if (classDeclaration === undefined) {
        return fileContent;
    }
    if (classDeclaration.decorators === undefined) {
        return fileContent;
    }
    const expression = classDeclaration.decorators[0].expression;
    const properties = expression.arguments[0].properties;
    const imports = properties.find(e => e.name.escapedText === 'imports');
    if (imports === undefined) {
        /**
         * TODO ordre alphabétique
         */
        const lastProperty = properties.slice(-1)[0];
        return fileContent.substring(0, lastProperty.end) + `,\n  imports: [
    ${componentClassName}
  ]` + fileContent.substring(lastProperty.end);
    }
    const elements = imports.initializer.elements;
    let elementBefore = undefined;
    for (const e of elements) {
        if (e.escapedText > componentClassName) {
            break;
        }
        elementBefore = e;
    }
    if (elementBefore === undefined) {
        if (elements.length === 0) {
            const offset = elements.pos;
            return fileContent.substring(0, offset) +
                `\n    ${componentClassName}` +
                fileContent.substring(offset);
        }
        return fileContent.substring(0, elements[0].pos) +
            `\n    ${componentClassName},` +
            fileContent.substring(elements[0].pos);
    }
    return fileContent.substring(0, elementBefore.end) +
        `,\n    ${componentClassName}` +
        fileContent.substring(elementBefore.end);
}


/***/ }),

/***/ 2972:
/*!******************************************!*\
  !*** ./src/import-ng-service-in-file.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ importNgServiceInFile)
/* harmony export */ });
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript */ 3130);
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_first_non_empty_char_pos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-first-non-empty-char-pos */ 3335);
/* harmony import */ var _insert_new_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert-new-import */ 2652);



function importNgServiceInFile(fileContent, data) {
    const fileContentWithNewImport = (0,_insert_new_import__WEBPACK_IMPORTED_MODULE_2__["default"])(fileContent, data);
    return insertInConstructor(fileContentWithNewImport, data);
}
function insertInConstructor(fileContent, data) {
    const node = typescript__WEBPACK_IMPORTED_MODULE_0__.createSourceFile('fileName', fileContent, typescript__WEBPACK_IMPORTED_MODULE_0__.ScriptTarget.Latest);
    const classDeclaration = node.statements.find(e => e.kind === typescript__WEBPACK_IMPORTED_MODULE_0__.SyntaxKind.ClassDeclaration);
    if (classDeclaration === undefined) {
        return fileContent;
    }
    const newParamName = `_${lowerFirstChar(data.className)}`;
    const newLine = `    private readonly ${newParamName}: ${data.className}`;
    const constructor = classDeclaration.members.find(e => e.kind === typescript__WEBPACK_IMPORTED_MODULE_0__.SyntaxKind.Constructor);
    if (constructor === undefined) {
        const offset = classDeclaration.members.pos;
        return fileContent.substring(0, offset) + `\n  constructor(
${newLine}
  ) { }` + fileContent.substring(offset);
    }
    if (constructor.parameters.length > 0) {
        let parameterBefore = undefined;
        for (const e of constructor.parameters) {
            if (e.name.escapedText > newParamName) {
                break;
            }
            parameterBefore = e;
        }
        if (parameterBefore === undefined) {
            const parameterAfter = constructor.parameters[0];
            const a = (0,_get_first_non_empty_char_pos__WEBPACK_IMPORTED_MODULE_1__["default"])(fileContent, parameterAfter.pos);
            return fileContent.substring(0, parameterAfter.pos) + `\n${newLine},\n    ` + fileContent.substring(a);
        }
        const textToInsert = `,\n${newLine}`;
        return fileContent.substring(0, parameterBefore.end) + textToInsert + fileContent.substring(parameterBefore.end);
    }
    /**
     * No params
     */
    const body = constructor.body;
    const offset = body.pos - 1;
    return fileContent.substring(0, offset) + `\n${newLine}\n  ` + fileContent.substring(offset);
}
function lowerFirstChar(text) {
    return text.charAt(0).toLowerCase() + text.slice(1);
}


/***/ }),

/***/ 2539:
/*!******************************************!*\
  !*** ./src/init-monaco-model.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitMonacoModelService)
/* harmony export */ });
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


/**
 * TODO-102 préfixer les uri par un identifiant unique.
 */
class InitMonacoModelService {
    constructor(_projectFilesService) {
        this._projectFilesService = _projectFilesService;
        this._isInit = false;
        this._subscriptions = [];
    }
    init() {
        if (this._isInit) {
            return;
        }
        this._isInit = true;
        /**
         * TODO-102 ne pas supprimer les models des
         * autres workspaces.
         */
        monaco.editor.getModels().forEach((e) => {
            e.dispose();
        });
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            experimentalDecorators: true,
            emitDecoratorMetadata: true
        });
        this._projectFilesService.nodeModules.forEach(e => {
            monaco.editor.createModel(e.content, undefined, monaco.Uri.parse(e.path));
        });
        this._projectFilesService.filePathList.forEach(e => {
            const extension = getExtension(e.path);
            if (extension === 'ts') {
                monaco.editor.createModel(e.content, 'typescript', monaco.Uri.parse(e.path));
            }
            else {
                monaco.editor.createModel(e.content, undefined, monaco.Uri.parse(e.path));
            }
        });
        this.update();
    }
    update() {
        this._subscriptions.push(this._projectFilesService.fileUpdated$.subscribe(filePath => {
            const uri = monaco.Uri.parse(filePath);
            const fileContent = this._projectFilesService.getFile(filePath);
            const model = monaco.editor.getModel(uri);
            if (model === null) {
                monaco.editor.createModel(fileContent, undefined, uri);
                return;
            }
            model.setValue(fileContent);
        }));
        this._subscriptions.push(this._projectFilesService.fileCreated$.subscribe(filePath => {
            const uri = monaco.Uri.parse(filePath);
            const fileContent = this._projectFilesService.getFile(filePath);
            monaco.editor.createModel(fileContent, undefined, uri);
        }));
    }
}
InitMonacoModelService.ɵfac = function InitMonacoModelService_Factory(t) { return new (t || InitMonacoModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
InitMonacoModelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InitMonacoModelService, factory: InitMonacoModelService.ɵfac, providedIn: 'root' });
function getExtension(filePath) {
    const array = filePath.split('.');
    if (array.length < 2) {
        return undefined;
    }
    return array.slice(-1)[0];
}


/***/ }),

/***/ 2652:
/*!**********************************!*\
  !*** ./src/insert-new-import.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertNewImport)
/* harmony export */ });
/* harmony import */ var _get_ts_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-ts-imports */ 9906);

const LOCAL_IMPORT_PREFIX = './';
function insertNewImport(fileContent, data) {
    const imports = (0,_get_ts_imports__WEBPACK_IMPORTED_MODULE_0__.getTsImports)(fileContent);
    let offset = 0;
    let beforeNewLine = '\n\n';
    let afterNewLine = '';
    for (const importClause of imports) {
        const moduleSpecifier = importClause.moduleSpecifier;
        if (moduleSpecifier.startsWith(LOCAL_IMPORT_PREFIX)) {
            const a = moduleSpecifier.slice(LOCAL_IMPORT_PREFIX.length);
            if (data.fileName < a) {
                beforeNewLine = '';
                afterNewLine = '\n';
                offset = importClause.tokenPosition.start;
                break;
            }
            beforeNewLine = '\n';
        }
        offset = importClause.tokenPosition.end;
    }
    const newLine = `import ${data.className} from './${data.fileName}';`;
    return fileContent.substring(0, offset) + beforeNewLine + newLine + afterNewLine + fileContent.substring(offset);
}


/***/ }),

/***/ 8448:
/*!*************************************!*\
  !*** ./src/is-angular-component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAngularComponent": () => (/* binding */ isAngularComponent)
/* harmony export */ });
function isAngularComponent(fileContent) {
    return fileContent.match('@Component') !== null;
}


/***/ }),

/***/ 6826:
/*!***************************************!*\
  !*** ./src/live-preview.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LivePreviewComponent)
/* harmony export */ });
/* harmony import */ var _workspace_with_renderer_debug_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workspace-with-renderer-debug.component */ 1600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


class LivePreviewComponent {
}
LivePreviewComponent.ɵfac = function LivePreviewComponent_Factory(t) { return new (t || LivePreviewComponent)(); };
LivePreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LivePreviewComponent, selectors: [["wp-live-preview"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 7, vars: 0, consts: [[1, "title"], [1, "description"], [1, "workspace-container"]], template: function LivePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Live preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Testez l'extension dans le playground ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "wp-workspace-with-renderer-debug");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_workspace_with_renderer_debug_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: white;\n  padding: 70px 0px;\n  background-color: #223;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 20px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 60px;\n}\n\n.workspace-container[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQUFEOztBQUdBO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBQUQ7O0FBR0E7RUFDQyxVQUFBO0VBQ0EsYUFBQTtBQUFEIiwiZmlsZSI6ImxpdmUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiA3MHB4IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyMztcblx0Ly8gaGVpZ2h0OiA0MDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcblx0Zm9udC1zaXplOiA0MHB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi53b3Jrc3BhY2UtY29udGFpbmVyIHtcblx0d2lkdGg6IDgwJTtcblx0aGVpZ2h0OiA4MDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9438:
/*!**************************************!*\
  !*** ./src/main-button.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);

const _c0 = ["*"];
class MainButtonComponent {
}
MainButtonComponent.ɵfac = function MainButtonComponent_Factory(t) { return new (t || MainButtonComponent)(); };
MainButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainButtonComponent, selectors: [["wp-main-button"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MainButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  padding: 15px 40px;\n  color: white;\n  background-color: #339;\n  border: solid 2px #339;\n  transition: all ease 0.25s;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQ0Q7QUFDQztFQUNDLDZCQUFBO0FBQ0YiLCJmaWxlIjoibWFpbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+IGRpdiB7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdHBhZGRpbmc6IDE1cHggNDBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5O1xuXHRib3JkZXI6IHNvbGlkIDJweCAjMzM5O1xuXHR0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMjVzO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0Ly8gYm9yZGVyLWNvbG9yOiAjMzM5O1xuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9990:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 7831);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5676);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 3302);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    providers: []
});


/***/ }),

/***/ 7611:
/*!************************************!*\
  !*** ./src/menu-item.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);

const _c0 = ["*"];
class MenuItemComponent {
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(); };
MenuItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["wp-menu-item"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: white;\n  transition: all ease 0.25s;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  color: #339;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUNEO0FBQ0M7RUFDQyxXQUFBO0FBQ0YiLCJmaWxlIjoibWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgPiBkaXYge1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMjVzO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6ICMzMzk7IC8vICM3N2E7XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5546:
/*!*******************************!*\
  !*** ./src/menu.component.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.component */ 7611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


class MenuComponent {
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["wp-menu"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 5, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "wp-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "wp-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Live project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_menu_item_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > wp-menu-item[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0FBQ0Q7QUFDQztFQUNDLGtCQUFBO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblxuXHQ+IHdwLW1lbnUtaXRlbSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6409:
/*!********************************!*\
  !*** ./src/monaco-editor-2.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonacoEditor2Component)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2330);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6644);
/* harmony import */ var _base_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-editor */ 1047);
/* harmony import */ var _monaco_editor_config_injection_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monaco-editor-config-injection-token */ 7239);







class MonacoEditor2Component extends _base_editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
    // @Input('model')
    // set model(model: IEditorModel) {
    // 	this._options.model = model;
    // 	if (this._editor) {
    // 		this._editor.dispose();
    // 		this.initMonaco(this._options);
    // 	}
    // }
    constructor(zone, editorConfig) {
        super(editorConfig);
        this.zone = zone;
        this.propagateChange = (_) => { };
        this.onTouched = () => { };
        this._value = '';
        this.codeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    set options(value) {
        this._options = Object.assign({}, this._config.defaultOptions, value);
        if (this._editor) {
            this._editor.dispose();
            this.initMonaco(value);
        }
    }
    get options() {
        return this._options;
    }
    /**
     * Never called.
     */
    writeValue(value) {
        this._value = value || '';
        // Fix for value change while dispose in process.
        setTimeout(() => {
            if (this._editor && !this.options.model) {
                this._editor.setValue(this._value);
            }
        });
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    initMonaco(options) {
        const monacoOptions = { ...options };
        const hasModel = !!options.model;
        if (hasModel) {
            const uri = options.model.uri ? monaco.Uri.parse(options.model.uri) : undefined;
            const model = monaco.editor.getModel(uri);
            if (model) {
                monacoOptions.model = model;
                // model.setValue(this._value);
            }
            else {
                monacoOptions.model = monaco.editor.createModel(options.model.value, options.model.language, uri);
            }
        }
        this._editor = monaco.editor.create(this._editorContainer.nativeElement, monacoOptions);
        if (!hasModel) {
            this._editor.setValue(this._value);
        }
        this._editor.onDidChangeModelContent((e) => {
            const value = this._editor.getValue();
            if (value === this._value) {
                return;
            }
            // value is not propagated to parent when executing outside zone.
            this.zone.run(() => {
                // console.log('onDidChangeModelContent', value);
                // this.propagateChange(value);
                this._value = value;
                this.codeChange.next(value);
            });
        });
        this._editor.onDidBlurEditorWidget(() => {
            this.onTouched();
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'resize').subscribe(() => this._editor.layout());
        this.onInit.emit(this._editor);
    }
}
MonacoEditor2Component.ɵfac = function MonacoEditor2Component_Factory(t) { return new (t || MonacoEditor2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monaco_editor_config_injection_token__WEBPACK_IMPORTED_MODULE_1__["default"])); };
MonacoEditor2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonacoEditor2Component, selectors: [["wp-monaco-editor-2"]], inputs: { options: "options" }, outputs: { codeChange: "codeChange" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _monaco_editor_config_injection_token__WEBPACK_IMPORTED_MODULE_1__["default"],
                useValue: {}
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MonacoEditor2Component),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 2, vars: 0, consts: [[1, "editor-container"], ["editorContainer", ""]], template: function MonacoEditor2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 200px;\n}\n\n.editor-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 98%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmFjby1lZGl0b3ItMi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FBQ0QiLCJmaWxlIjoibW9uYWNvLWVkaXRvci0yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZWRpdG9yLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDk4JTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7239:
/*!*****************************************************!*\
  !*** ./src/monaco-editor-config-injection-token.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);

const MONACO_EDITOR_CONFIG_INJECTION_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_MONACO_EDITOR_CONFIG');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MONACO_EDITOR_CONFIG_INJECTION_TOKEN);


/***/ }),

/***/ 8575:
/*!********************************************!*\
  !*** ./src/overlay-container.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverlayContainerComponent)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3164);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5588);




const _c0 = ["content"];
const _c1 = ["wrapper"];
class OverlayContainerComponent {
  constructor(_cd) {
    this._cd = _cd;
    this._isViewInit = false;
    this._componentRef$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngAfterViewInit() {
    this._isViewInit = true;

    if (this._template !== undefined) {
      this.content.createEmbeddedView(this._template, this._context);
    } else if (this._componentClass !== undefined) {
      const componentRef = this.createComponent(this._componentClass, this._inputs, this._injector);

      this._componentRef$.next(componentRef);
    } else {
      return;
    }

    this._cd.detectChanges();
  }

  setOverlayContentTemplate(value, context) {
    if (!this._isViewInit) {
      this._template = value;
      this._context = context;
      return;
    }

    this.content.createEmbeddedView(value, context);
  }

  setOverlayContentComponent(componentClass, inputs = {}, injector) {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this._isViewInit) {
        _this._componentClass = componentClass;
        _this._inputs = inputs;
        _this._injector = injector;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this._componentRef$);
      }

      return _this.createComponent(componentClass, inputs, injector);
    })();
  }

  get x() {
    return getAxis(this.position.x);
  }

  get y() {
    return getAxis(this.position.y);
  }

  get transform() {
    let res = '';

    if (this.position.x === 'center') {
      res += 'translateX(-50%)';
    }

    if (this.position.y === 'center') {
      res += 'translateY(-50%)';
    }

    return res;
  }

  createComponent(componentClass, inputs = {}, injector) {
    const componentRef = this.content.createComponent(componentClass, {
      injector
    });

    for (const inputName of Object.keys(inputs)) {
      componentRef.instance[inputName] = inputs[inputName];
    }

    return componentRef;
  }

}

OverlayContainerComponent.ɵfac = function OverlayContainerComponent_Factory(t) {
  return new (t || OverlayContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};

OverlayContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OverlayContainerComponent,
  selectors: [["wp-overlay-container"]],
  viewQuery: function OverlayContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 6,
  consts: [["wrapper", ""], ["content", ""]],
  template: function OverlayContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("top", ctx.y)("left", ctx.x)("transform", ctx.transform);
    }
  },
  styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  z-index: 1;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBQ0Q7QUFDQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJvdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR6LWluZGV4OiAxO1xuXG5cdD4gZGl2IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cG9pbnRlci1ldmVudHM6IGFsbDtcblx0fVxufVxuIl19 */"]
});

function getAxis(axis) {
  if (typeof axis === 'number') {
    return `${axis}px`;
  }

  if (axis === 'center') {
    return '50%';
  }

  return '';
}

/***/ }),

/***/ 9127:
/*!***************************************!*\
  !*** ./src/presentation.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PresentationComponent)
/* harmony export */ });
/* harmony import */ var _top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar.component */ 2076);
/* harmony import */ var _wokop_title_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wokop-title-group.component */ 8900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);



class PresentationComponent {
}
PresentationComponent.ɵfac = function PresentationComponent_Factory(t) { return new (t || PresentationComponent)(); };
PresentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PresentationComponent, selectors: [["wp-presentation"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 5, vars: 0, consts: [[1, "content"], [1, "main-container"]], template: function PresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "wp-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "wp-wokop-title-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_top_bar_component__WEBPACK_IMPORTED_MODULE_0__["default"],
        _wokop_title_group_component__WEBPACK_IMPORTED_MODULE_1__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #111;\n  position: relative;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .background[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .background[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 600px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  padding: 20px 400px;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7QUFDRjtBQU1FO0VBQ0MsWUFBQTtBQUpIO0FBUUM7RUFNQyxtQkFBQTtBQVhGO0FBZUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVpEIiwiZmlsZSI6InByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdD4gLmJhY2tncm91bmQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQvLyB6LWluZGV4OiAtMTtcblx0XHQvLyB0b3A6IDA7XG5cdFx0Ly8gYm90dG9tOiAwO1xuXHRcdC8vIHJpZ2h0OiAwO1xuXHRcdC8vIGxlZnQ6IDA7XG5cdFxuXHRcdD4gaW1nIHtcblx0XHRcdHdpZHRoOiA2MDBweDtcblx0XHR9XG5cdH1cblxuXHQ+IC5jb250ZW50IHtcblx0XHQvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ly8gdG9wOiAwO1xuXHRcdC8vIGJvdHRvbTogMDtcblx0XHQvLyByaWdodDogMDtcblx0XHQvLyBsZWZ0OiAwO1xuXHRcdHBhZGRpbmc6IDIwcHggNDAwcHg7XG5cdH1cbn1cblxuLm1haW4tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 5585:
/*!**************************************!*\
  !*** ./src/project-files.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectFilesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3164);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 510);
/* harmony import */ var _deep_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deep-clone */ 9817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);



const DELAY_MS = 2000;
const KEY = 'projectFiles';
class ProjectFilesService {
    constructor() {
        this._change$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this._fileUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this._fileCreated$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this._subscriptions = [];
        this.filePathList = [];
        this.nodeModules = [];
        this.filePathList = getData();
        this.saveInLocalStorageSubscribe();
    }
    ngOnDestroy() {
        this._subscriptions.forEach(e => e.unsubscribe());
    }
    getFile(filePath) {
        const res = this.filePathList.find(e => e.path === filePath)?.content;
        if (res === undefined) {
            throw new Error();
        }
        return res;
    }
    updt_create(file) {
        this.filePathList.push(file);
        this._change$.next();
        this._fileCreated$.next(file.path);
    }
    updt_modifyContent(file) {
        const element = this.filePathList.find(e => e.path === file.path);
        if (element === undefined) {
            return;
        }
        element.content = file.content;
        this._change$.next();
        this._fileUpdated$.next(file.path);
    }
    /**
     * To be call by the editor,
     * no event fired to avoid a cyclic
     * method call.
     */
    updt_modifyContent2(file) {
        const element = this.filePathList.find(e => e.path === file.path);
        if (element === undefined) {
            return;
        }
        element.content = file.content;
        this._change$.next();
    }
    saveInLocalStorageSubscribe() {
        this._subscriptions.push(this._change$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(DELAY_MS)).subscribe(() => {
            localStorage.setItem(KEY, JSON.stringify(this.filePathList));
        }));
    }
    get change$() {
        return this._change$.asObservable();
    }
    get fileUpdated$() {
        return this._fileUpdated$.asObservable();
    }
    get fileCreated$() {
        return this._fileCreated$.asObservable();
    }
}
ProjectFilesService.ɵfac = function ProjectFilesService_Factory(t) { return new (t || ProjectFilesService)(); };
ProjectFilesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProjectFilesService, factory: ProjectFilesService.ɵfac, providedIn: 'root' });
function getData() {
    const data = localStorage.getItem(KEY);
    if (data === null) {
        return (0,_deep_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(FILE_LIST);
    }
    return JSON.parse(data);
}
const FILE_LIST = [
    /**
     * TODO
     * TataComponent est considéré comme un import du
     * fichier courant.
     */
    {
        path: 'example.component.ts',
        content: `import { Component } from '@angular/core';

import ToolbarComponent from './toolbar.component';

@Component({
	selector: 'wp-example',
	standalone: true,
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.scss'],
	imports: [
		ToolbarComponent
	]
})
export default class ExampleComponent {

}
`
    },
    {
        path: 'example.component.html',
        content: `<wp-toolbar></wp-toolbar>

<div class="content" role="main">

	<!-- Highlight Card -->
	<div class="card highlight-card card-small">

		<svg id="rocket" xmlns="http://www.w3.org/2000/svg" width="101.678" height="101.678" viewBox="0 0 101.678 101.678">
			<title>Rocket Ship</title>
			<g id="Group_83" data-name="Group 83" transform="translate(-141 -696)">
				<circle id="Ellipse_8" data-name="Ellipse 8" cx="50.839" cy="50.839" r="50.839" transform="translate(141 696)" fill="#dd0031"/>
				<g id="Group_47" data-name="Group 47" transform="translate(165.185 720.185)">
					<path id="Path_33" data-name="Path 33" d="M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z" transform="translate(0.371 3.363)" fill="#fff"/>
					<path id="Path_34" data-name="Path 34" d="M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z" transform="translate(0 0.005)" fill="#fff"/>
				</g>
			</g>
		</svg>

		<span>{{ title }} app is running!</span>

		<svg id="rocket-smoke" xmlns="http://www.w3.org/2000/svg" width="516.119" height="1083.632" viewBox="0 0 516.119 1083.632">
			<title>Rocket Ship Smoke</title>
			<path id="Path_40" data-name="Path 40" d="M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z" transform="translate(-147.025 -140.939)" fill="#f5f5f5"/>
		</svg>

	</div>

	<!-- Resources -->
	<h2>Resources</h2>
	<p>Here are some links to help you get started:</p>

	<div class="card-container">
		<a class="card" target="_blank" rel="noopener" href="https://angular.io/tutorial">
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
			<span>Learn Angular</span>
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>    </a>

		<a class="card" target="_blank" rel="noopener" href="https://angular.io/cli">
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
			<span>CLI Documentation</span>
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
		</a>

		<a class="card" target="_blank" rel="noopener" href="https://material.angular.io">
			<svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px" width="21.813" height="23.453" viewBox="0 0 179.2 192.7"><path fill="#ffa726" d="M89.4 0 0 32l13.5 118.4 75.9 42.3 76-42.3L179.2 32 89.4 0z"/><path fill="#fb8c00" d="M89.4 0v192.7l76-42.3L179.2 32 89.4 0z"/><path fill="#ffe0b2" d="m102.9 146.3-63.3-30.5 36.3-22.4 63.7 30.6-36.7 22.3z"/><path fill="#fff3e0" d="M102.9 122.8 39.6 92.2l36.3-22.3 63.7 30.6-36.7 22.3z"/><path fill="#fff" d="M102.9 99.3 39.6 68.7l36.3-22.4 63.7 30.6-36.7 22.4z"/></svg>
			<span>Angular Material</span>
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
		</a>

		<a class="card" target="_blank" rel="noopener" href="https://blog.angular.io/">
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
			<span>Angular Blog</span>
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
		</a>

		<a class="card" target="_blank" rel="noopener" href="https://angular.io/devtools/">
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14.73,13.31C15.52,12.24,16,10.93,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.43,0,2.74-0.48,3.81-1.27L19.59,21L21,19.59L14.73,13.31z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z"/><polygon points="10.29,8.44 9.5,6 8.71,8.44 6.25,8.44 8.26,10.03 7.49,12.5 9.5,10.97 11.51,12.5 10.74,10.03 12.75,8.44"/></g></g></svg>
			<span>Angular DevTools</span>
			<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
		</a>

	</div>

	<!-- Footer -->
	<footer>
			Love Angular?&nbsp;
			<a href="https://github.com/angular/angular" target="_blank" rel="noopener"> Give our repo a star.
				<div class="github-star-badge">
						<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
					Star
				</div>
			</a>
			<a href="https://github.com/angular/angular" target="_blank" rel="noopener">
				<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#1976d2"/><path d="M0 0h24v24H0z" fill="none"/></svg>
			</a>
	</footer>

	<svg id="clouds" xmlns="http://www.w3.org/2000/svg" width="2611.084" height="485.677" viewBox="0 0 2611.084 485.677">
		<title>Gray Clouds Background</title>
		<path id="Path_39" data-name="Path 39" d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z" transform="translate(142.69 -634.312)" fill="#eee"/>
	</svg>

</div>
`
    },
    {
        path: 'example.component.scss',
        content: `:host {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 14px;
	color: #333;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 8px 0;
}

p {
	margin: 0;
}

.spacer {
	flex: 1;
}

.content {
	display: flex;
	margin: 82px auto 32px;
	padding: 0 16px;
	max-width: 960px;
	flex-direction: column;
	align-items: center;
}

svg.material-icons {
	height: 24px;
	width: auto;
}

svg.material-icons:not(:last-child) {
	margin-right: 8px;
}

.card svg.material-icons path {
	fill: #888;
}

.card-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 16px;
}

.card {
	all: unset;
	border-radius: 4px;
	border: 1px solid #eee;
	background-color: #fafafa;
	height: 40px;
	width: 200px;
	margin: 0 8px 16px;
	padding: 16px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	line-height: 24px;
}

.card-container .card:not(:last-child) {
	margin-right: 0;
}

.card.card-small {
	height: 16px;
	width: 168px;
}

.card-container .card:not(.highlight-card) {
	cursor: pointer;
}

.card-container .card:not(.highlight-card):hover {
	transform: translateY(-3px);
	box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
}

.card-container .card:not(.highlight-card):hover .material-icons path {
	fill: rgb(105, 103, 103);
}

.card.highlight-card {
	background-color: #1976d2;
	color: white;
	font-weight: 600;
	border: none;
	width: auto;
	min-width: 30%;
	position: relative;
}

.card.card.highlight-card span {
	margin-left: 60px;
}

svg#rocket {
	width: 80px;
	position: absolute;
	left: -10px;
	top: -24px;
}

svg#rocket-smoke {
	height: calc(100vh - 95px);
	position: absolute;
	top: 10px;
	right: 180px;
	z-index: -10;
}

a,
a:visited,
a:hover {
	color: #1976d2;
	text-decoration: none;
}

a:hover {
	color: #125699;
}

.terminal {
	position: relative;
	width: 80%;
	max-width: 600px;
	border-radius: 6px;
	padding-top: 45px;
	margin-top: 8px;
	overflow: hidden;
	background-color: rgb(15, 15, 16);
}

.terminal::before {
	content: "\\2022 \\2022 \\2022";
	position: absolute;
	top: 0;
	left: 0;
	height: 4px;
	background: rgb(58, 58, 58);
	color: #c2c3c4;
	width: 100%;
	font-size: 2rem;
	line-height: 0;
	padding: 14px 0;
	text-indent: 4px;
}

.terminal pre {
	font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
	color: white;
	padding: 0 1rem 1rem;
	margin: 0;
}

.circle-link {
	height: 40px;
	width: 40px;
	border-radius: 40px;
	margin: 8px;
	background-color: white;
	border: 1px solid #eeeeee;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: 1s ease-out;
}

.circle-link:hover {
	transform: translateY(-0.25rem);
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}

footer {
	margin-top: 8px;
	display: flex;
	align-items: center;
	line-height: 20px;
}

footer a {
	display: flex;
	align-items: center;
}

.github-star-badge {
	color: #24292e;
	display: flex;
	align-items: center;
	font-size: 12px;
	padding: 3px 10px;
	border: 1px solid rgba(27,31,35,.2);
	border-radius: 3px;
	background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
	margin-left: 4px;
	font-weight: 600;
}

.github-star-badge:hover {
	background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);
	border-color: rgba(27,31,35,.35);
	background-position: -.5em;
}

.github-star-badge .material-icons {
	height: 16px;
	width: 16px;
	margin-right: 4px;
}

svg#clouds {
	position: fixed;
	bottom: -160px;
	left: -230px;
	z-index: -10;
	width: 1920px;
}

/* Responsive Styles */
@media screen and (max-width: 767px) {
	.card-container > *:not(.circle-link) ,
	.terminal {
		width: 100%;
	}

	.card:not(.highlight-card) {
		height: 16px;
		margin: 8px 0;
	}

	.card.highlight-card span {
		margin-left: 72px;
	}

	svg#rocket-smoke {
		right: 120px;
		transform: rotate(-5deg);
	}
}

@media screen and (max-width: 575px) {
	svg#rocket-smoke {
		display: none;
		visibility: hidden;
	}
}
`
    },
    {
        path: 'toolbar.component.ts',
        content: `import { Component } from '@angular/core';

@Component({
	selector: 'wp-toolbar',
	standalone: true,
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export default class ToolbarComponent { }		
`
    },
    {
        path: 'toolbar.component.html',
        content: `<div role="banner">
	<img
		width="40"
		alt="Angular Logo"
		src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
	/>
	<span>Welcome</span>
		<div class="spacer"></div>
		<a aria-label="Angular on twitter" target="_blank" rel="noopener" href="https://twitter.com/angular" title="Twitter">
			<svg id="twitter-logo" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
				<rect width="400" height="400" fill="none"/>
				<path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="#fff"/>
			</svg>
		</a>
		<a aria-label="Angular on YouTube" target="_blank" rel="noopener" href="https://youtube.com/angular" title="YouTube">
			<svg id="youtube-logo" height="24" width="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
			</svg>
		</a>
</div>
`
    },
    {
        path: 'toolbar.component.scss',
        content: `:host > div {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 60px;
	display: flex;
	align-items: center;
	background-color: #1976d2;
	color: white;
	font-weight: 600;
}

.spacer {
	flex: 1;
}

img {
	margin: 0 16px;
}

#twitter-logo {
	height: 40px;
	margin: 0 8px;
}

#youtube-logo {
	height: 40px;
	margin: 0 16px;
}

#twitter-logo:hover,
#youtube-logo:hover {
	opacity: 0.8;
}
`
    }
];


/***/ }),

/***/ 3998:
/*!***************************************************!*\
  !*** ./src/project-tree-data-provider.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTreeDataProviderService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _get_deps_of_ts_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-deps-of-ts-file */ 929);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);





class ProjectTreeDataProviderService {
  constructor(_projectFilesService) {
    this._projectFilesService = _projectFilesService;
  }

  getRootNode() {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * TODO
       */
      const res = _this._projectFilesService.filePathList[0];
      const fileName = getFileName(res.path);
      return (0,_get_deps_of_ts_file__WEBPACK_IMPORTED_MODULE_1__.convertTypescriptDep)(fileName, res.path, /*#__PURE__*/function () {
        var _ref = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          return _this.readFile(e);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()); // const res = this._projectFilesService.filePathList.find(e => e.path === 'main.ts');
      // if (res === undefined) {
      // 	throw new Error('no file main.ts found');
      // }
      // return convertTypescriptDep(
      // 	'main',
      // 	'main',
      // 	async e => this.readFile(e)
      // );
    })();
  }

  getChildren(node) {
    var _this2 = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (0,_get_deps_of_ts_file__WEBPACK_IMPORTED_MODULE_1__.getDepsOfTypescriptFile)(node, /*#__PURE__*/function () {
        var _ref2 = (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          return _this2.readFile(e);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  get change$() {
    return this._projectFilesService.change$;
  }

  readFile(filePath) {
    var _this3 = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3._projectFilesService.getFile(filePath);
    })();
  }

}

ProjectTreeDataProviderService.ɵfac = function ProjectTreeDataProviderService_Factory(t) {
  return new (t || ProjectTreeDataProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_project_files_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

ProjectTreeDataProviderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProjectTreeDataProviderService,
  factory: ProjectTreeDataProviderService.ɵfac,
  providedIn: 'root'
});

function getFileName(filePath) {
  const a = filePath.split('.');
  a.pop();
  return a.join('.');
}

/***/ }),

/***/ 2340:
/*!**********************************************!*\
  !*** ./src/project-tree-item.component-2.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTreeItemComponent2)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _files_in_editor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-in-editor.service */ 429);
/* harmony import */ var _project_tree_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-tree-item.component */ 3213);
/* harmony import */ var _context_menu_2_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu-2.directive */ 5);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);





class ProjectTreeItemComponent2 {
    constructor(_filesInEditorService) {
        this._filesInEditorService = _filesInEditorService;
    }
    ngOnInit() {
        this.projectTreeItemData = this.getData();
    }
    onClick() {
        this._filesInEditorService.open(this.filePath);
    }
    get filePath() {
        return `${this.data.fileName}.${this.data.extension}`;
    }
    getData() {
        if (this.data.type !== 'angular') {
            return {
                label: this.data.alias
            };
        }
        return {
            label: this.data.alias,
            actions: [
                {
                    icon: 'css',
                    callack: () => {
                        const filePath = `${this.data.fileName}.scss`;
                        this._filesInEditorService.open(filePath);
                    }
                },
                {
                    icon: 'html',
                    callack: () => {
                        const filePath = `${this.data.fileName}.html`;
                        this._filesInEditorService.open(filePath);
                    }
                }
            ]
        };
    }
}
ProjectTreeItemComponent2.ɵfac = function ProjectTreeItemComponent2_Factory(t) { return new (t || ProjectTreeItemComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_files_in_editor_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
ProjectTreeItemComponent2.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectTreeItemComponent2, selectors: [["wp-project-tree-item-2"]], inputs: { data: "data" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]], decls: 2, vars: 2, consts: [["wp-context-menu-2", "", 3, "filePath", "click"], [3, "data"]], template: function ProjectTreeItemComponent2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectTreeItemComponent2_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "wp-project-tree-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("filePath", ctx.filePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.projectTreeItemData);
    } }, dependencies: [_project_tree_item_component__WEBPACK_IMPORTED_MODULE_1__["default"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _context_menu_2_directive__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdHJlZS1pdGVtLmNvbXBvbmVudC0yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0FBQ0QiLCJmaWxlIjoicHJvamVjdC10cmVlLWl0ZW0uY29tcG9uZW50LTIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 3213:
/*!********************************************!*\
  !*** ./src/project-tree-item.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTreeItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _clickable_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickable-icon.component */ 143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);






function ProjectTreeItemComponent_div_3_wp_clickable_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "wp-clickable-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectTreeItemComponent_div_3_wp_clickable_icon_1_Template_wp_clickable_icon_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const action_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onClick(action_r2, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", action_r2.icon);
} }
function ProjectTreeItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectTreeItemComponent_div_3_wp_clickable_icon_1_Template, 1, 1, "wp-clickable-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.actions);
} }
class ProjectTreeItemComponent {
    onClick(action, event) {
        action.callack();
        event.stopPropagation();
    }
}
ProjectTreeItemComponent.ɵfac = function ProjectTreeItemComponent_Factory(t) { return new (t || ProjectTreeItemComponent)(); };
ProjectTreeItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectTreeItemComponent, selectors: [["wp-project-tree-item"]], inputs: { data: "data" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 4, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", 4, "ngIf"], ["fxLayout", "row"], [3, "icon", "click", 4, "ngFor", "ngForOf"], [3, "icon", "click"]], template: function ProjectTreeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectTreeItemComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.actions !== undefined);
    } }, dependencies: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _clickable_icon_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: [".icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdHJlZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFDRCIsImZpbGUiOiJwcm9qZWN0LXRyZWUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTZweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1334:
/*!***************************************!*\
  !*** ./src/project-tree.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTreeComponent)
/* harmony export */ });
/* harmony import */ var _i_tree_data_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i-tree-data-provider-service */ 1069);
/* harmony import */ var _project_tree_data_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-tree-data-provider.service */ 3998);
/* harmony import */ var _project_tree_item_component_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-tree-item.component-2 */ 2340);
/* harmony import */ var _tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree.component */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9332);





function ProjectTreeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "wp-project-tree-item-2", 2);
} if (rf & 2) {
    const itemData_r2 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", itemData_r2);
} }
class ProjectTreeComponent {
}
ProjectTreeComponent.ɵfac = function ProjectTreeComponent_Factory(t) { return new (t || ProjectTreeComponent)(); };
ProjectTreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProjectTreeComponent, selectors: [["wp-project-tree"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _i_tree_data_provider_service__WEBPACK_IMPORTED_MODULE_0__["default"],
                useClass: _project_tree_data_provider_service__WEBPACK_IMPORTED_MODULE_1__["default"]
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]], decls: 3, vars: 1, consts: [[3, "itemTemplateRef"], ["itemTemplate", ""], [3, "data"]], template: function ProjectTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "wp-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectTreeComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemTemplateRef", _r0);
    } }, dependencies: [_tree_component__WEBPACK_IMPORTED_MODULE_3__["default"],
        _project_tree_item_component_2__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LXRyZWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2602:
/*!*******************************************!*\
  !*** ./src/secondary-button.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SecondaryButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);

const _c0 = ["*"];
class SecondaryButtonComponent {
}
SecondaryButtonComponent.ɵfac = function SecondaryButtonComponent_Factory(t) { return new (t || SecondaryButtonComponent)(); };
SecondaryButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryButtonComponent, selectors: [["wp-secondary-button"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function SecondaryButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  padding: 15px 40px;\n  color: white;\n  background-color: transparent;\n  border: solid 2px white;\n  transition: all ease 0.25s;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  border-color: #339;\n  color: #339;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZGFyeS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic2Vjb25kYXJ5LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0cGFkZGluZzogMTVweCA0MHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcblx0dHJhbnNpdGlvbjogYWxsIGVhc2UgLjI1cztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdCY6aG92ZXIge1xuXHRcdGJvcmRlci1jb2xvcjogIzMzOTtcblx0XHRjb2xvcjogIzMzOTtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 6346:
/*!***************************************!*\
  !*** ./src/show-input-box.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowInputBoxService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _show_overlay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-overlay.service */ 2390);
/* harmony import */ var _vscode_input_box_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vscode-input-box-value.service */ 3957);
/* harmony import */ var _vscode_input_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vscode-input-box.component */ 8565);
/* harmony import */ var _vscode_workspace_view_container_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vscode-workspace-view-container-ref.service */ 6454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 9332);






class ShowInputBoxService {
  constructor(_showOverlayService, _vscodeWorkspaceViewContainerRefService, _vscodeInputBoxValueService) {
    this._showOverlayService = _showOverlayService;
    this._vscodeWorkspaceViewContainerRefService = _vscodeWorkspaceViewContainerRefService;
    this._vscodeInputBoxValueService = _vscodeInputBoxValueService;
  }

  showInputBox(value) {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const container = _this._vscodeWorkspaceViewContainerRefService.container;

      if (container === undefined) {
        throw new Error('VscodeWorkspaceViewContainerRefService.container is undefined');
      }

      const componentRef = _this._showOverlayService.showOverlay4(container, _vscode_input_box_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
        x: 'center',
        y: 0
      }, {
        description: value
      });

      return new Promise(resolve => {
        _this._vscodeInputBoxValueService.value$.subscribe(e => {
          componentRef.destroy();
          resolve(e);
        });
      });
    })();
  }

}

ShowInputBoxService.ɵfac = function ShowInputBoxService_Factory(t) {
  return new (t || ShowInputBoxService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_show_overlay_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_vscode_workspace_view_container_ref_service__WEBPACK_IMPORTED_MODULE_4__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_vscode_input_box_value_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

ShowInputBoxService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ShowInputBoxService,
  factory: ShowInputBoxService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2390:
/*!*************************************!*\
  !*** ./src/show-overlay.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOverlayService)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _overlay_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay-container.component */ 8575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);




class ShowOverlayService {
  constructor() {
    this.toto = 1;
  }

  showOverlay(container, componentClass, position) {
    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const containerRef = container.createComponent(_overlay_container_component__WEBPACK_IMPORTED_MODULE_1__["default"]); // const overlayRef = this._createComponentInBodyService.appendComponentToBody(OverlayContainerComponent);
      // const containerRef = overlayRef.componentRef;
      // const injector = Injector.create([
      // 	{
      // 		provide: ContextMenuRef,
      // 		useValue: {
      // 			close: () => {
      // 				this.close();
      // 			}
      // 		}
      // 	}
      // ]);

      const overlayContainerComponent = containerRef.instance;
      overlayContainerComponent.position = position;
      const componentRef = yield overlayContainerComponent.setOverlayContentComponent(componentClass);
      return {
        componentRef,
        destroy: () => {
          containerRef.destroy();
        }
      };
    })();
  }

  showOverlay2(componentClass, position, inputs, injector) {
    /**
     * TODO
     */
    if (this.container === undefined) {
      throw new Error(); // TODO
    }

    return this.showOverlay3(this.container, componentClass, position, inputs, injector);
  }

  showOverlay3(container, componentClass, windowPosition, inputs, injector) {
    const position = convertPosition(windowPosition, container.element.nativeElement);
    const containerRef = container.createComponent(_overlay_container_component__WEBPACK_IMPORTED_MODULE_1__["default"]);
    const overlayContainerComponent = containerRef.instance;
    overlayContainerComponent.position = position;
    overlayContainerComponent.setOverlayContentComponent(componentClass, inputs, injector);
    return containerRef;
  }

  showOverlay4(container, componentClass, windowPosition, inputs, injector) {
    const containerRef = container.createComponent(_overlay_container_component__WEBPACK_IMPORTED_MODULE_1__["default"]);
    const overlayContainerComponent = containerRef.instance;
    overlayContainerComponent.position = windowPosition;
    overlayContainerComponent.setOverlayContentComponent(componentClass, inputs, injector);
    return containerRef;
  }

}

ShowOverlayService.ɵfac = function ShowOverlayService_Factory(t) {
  return new (t || ShowOverlayService)();
};

ShowOverlayService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ShowOverlayService,
  factory: ShowOverlayService.ɵfac,
  providedIn: 'root'
});

function convertPosition(windowPosition, relativeHtmlElement) {
  const rect = relativeHtmlElement.getBoundingClientRect();
  return {
    x: convertAxisValue(windowPosition.x, rect.x),
    y: convertAxisValue(windowPosition.y, rect.y)
  };
}

function convertAxisValue(axis, relativeValue) {
  if (typeof axis !== 'number') {
    return axis;
  }

  return axis - relativeValue;
}

/***/ }),

/***/ 105:
/*!************************************!*\
  !*** ./src/tab-title.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2730);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 8864);
/* harmony import */ var _clickable_element_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickable-element.component */ 375);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);








class TabTitleComponent {
    constructor() {
        this.selected = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.closeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClose;
    }
    onClose() {
        this.close.next();
    }
}
TabTitleComponent.ɵfac = function TabTitleComponent_Factory(t) { return new (t || TabTitleComponent)(); };
TabTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabTitleComponent, selectors: [["wp-tab-title"]], inputs: { title: "title", selected: "selected" }, outputs: { close: "close" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 5, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "3px"], [3, "click"], [3, "icon"]], template: function TabTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "wp-clickable-element", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabTitleComponent_Template_wp_clickable_element_click_3_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.closeIcon);
    } }, dependencies: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _clickable_element_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  border-right: 1px solid rgb(37, 37, 38);\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div.selected[_ngcontent-%COMP%] {\n  background-color: #1E1E1E;\n}\n.codicon-close[_ngcontent-%COMP%]:before {\n  content: \"\\ea76\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FBQ0Q7QUFDQztFQUNDLHlCQUFBO0FBQ0Y7QUFHQTtFQUNDLGdCQUFBO0FBQUQiLCJmaWxlIjoidGFiLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgPiBkaXYge1xuXHRwYWRkaW5nOiAxMHB4IDEwcHg7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigzNywgMzcsIDM4KTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdCYuc2VsZWN0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XG5cdH1cbn1cblxuLmNvZGljb24tY2xvc2U6YmVmb3JlIHtcblx0Y29udGVudDogJ1xcZWE3Nic7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9167:
/*!******************************!*\
  !*** ./src/tab.component.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);


class TabComponent {
    constructor() {
        this.selected = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["wp-tab"]], contentQueries: function TabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { title: "title", selected: "selected" }, outputs: { close: "close" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 0, vars: 0, template: function TabComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3700:
/*!*******************************!*\
  !*** ./src/tabs.component.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component */ 9167);
/* harmony import */ var _tab_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-title.component */ 105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);







function TabsComponent_ng_container_0_wp_tab_title_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "wp-tab-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_ng_container_0_wp_tab_title_3_Template_wp_tab_title_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const tab_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onTabClick(tab_r3)); })("close", function TabsComponent_ng_container_0_wp_tab_title_3_Template_wp_tab_title_close_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const tab_r3 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](tab_r3.close.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", tab_r3.title)("selected", tab_r3.selected);
} }
function TabsComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function TabsComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TabsComponent_ng_container_0_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedTab.templateRef);
} }
function TabsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabsComponent_ng_container_0_wp_tab_title_3_Template, 1, 2, "wp-tab-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TabsComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab !== undefined && ctx_r0.selectedTab.templateRef !== undefined);
} }
class TabsComponent {
    constructor() {
        this.isInit = false;
        this.tabComponents = [];
    }
    ngAfterContentInit() {
        /**
         * We wait tab components inside have their templateRef
         * ready.
         */
        setTimeout(() => {
            this.isInit = true;
        });
    }
    get tabs() {
        return Array.from(this.tabComponents);
    }
    get selectedTab() {
        const res = this.tabComponents.find(e => e.selected);
        return res;
    }
    onTabClick(tabComponent) {
        this.tabComponents.forEach(e => {
            e.selected = false;
        });
        tabComponent.selected = true;
        /**
         * TODO propager l'évenement en dehors
         * du composant
         */
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["wp-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _tab_component__WEBPACK_IMPORTED_MODULE_0__["default"], 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tabComponents = _t);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["fxLayout", "column"], ["fxLayout", "row", 1, "header"], [3, "title", "selected", "click", "close", 4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "content"], [3, "title", "selected", "click", "close"], [4, "ngTemplateOutlet"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TabsComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInit);
    } }, dependencies: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _tab_title_component__WEBPACK_IMPORTED_MODULE_1__["default"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSwwREFBQTtFQUNBLGVBQUE7QUFDRCIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgPiBkaXYge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0OyAvLyAjMkQyRDJEO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEzcHg7XG59XG5cbi5jb250ZW50IHtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8734:
/*!******************************!*\
  !*** ./src/to-camel-case.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camalize": () => (/* binding */ camalize)
/* harmony export */ });
function camalize(text) {
    return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}


/***/ }),

/***/ 8160:
/*!*******************************!*\
  !*** ./src/to-pascal-case.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPascalCase)
/* harmony export */ });
function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}
function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
}


/***/ }),

/***/ 2076:
/*!**********************************!*\
  !*** ./src/top-bar.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ 5546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


class TopBarComponent {
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["wp-top-bar"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 4, vars: 0, consts: [[1, "logo"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wokop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "wp-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_menu_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  color: #339;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUdBLGlCQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQUREIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+IGRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ly8gaGVpZ2h0OiA3MHB4O1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ1O1xuXHRwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLmxvZ28ge1xuXHRjb2xvcjogIzMzOTsgLy8gI2VhMjg0NTtcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 1655:
/*!*****************************!*\
  !*** ./src/transpile-ts.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transpileTs)
/* harmony export */ });
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript */ 3130);
/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_OPTIONS = {
    compilerOptions: {
        module: typescript__WEBPACK_IMPORTED_MODULE_0__.ModuleKind.CommonJS,
        experimentalDecorators: true,
        emitDecoratorMetadata: true
    }
};
function transpileTs(source, options) {
    /**
     * Default options -- you could also perform a merge,
     * or use the project tsconfig.json
     */
    if (options === undefined) {
        options = DEFAULT_OPTIONS;
    }
    return typescript__WEBPACK_IMPORTED_MODULE_0__.transpileModule(source, options).outputText;
}


/***/ }),

/***/ 2282:
/*!*******************************!*\
  !*** ./src/tree.component.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TreeComponent)
/* harmony export */ });
/* harmony import */ var _Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9283);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1105);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2730);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 8864);
/* harmony import */ var _i_tree_data_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i-tree-data-provider-service */ 1069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);












function TreeComponent_div_0_ng_container_2_fa_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 7);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faArrowRight);
  }
}

function TreeComponent_div_0_ng_container_2_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 7);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r5.faArrowDown);
  }
}

function TreeComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeComponent_div_0_ng_container_2_fa_icon_1_Template, 1, 1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeComponent_div_0_ng_container_2_fa_icon_2_Template, 1, 1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isContentDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isContentDisplayed);
  }
}

function TreeComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0) {
  return {
    data: a0
  };
};

function TreeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.toggleOpen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeComponent_div_0_ng_container_2_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TreeComponent_div_0_ng_container_4_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("padding-left", 3 + ctx_r0.indent * 10 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.rootNode.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.itemTemplateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r0.rootNode));
  }
}

function TreeComponent_ng_container_1_wp_tree_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "wp-tree", 9);
  }

  if (rf & 2) {
    const node_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("node", node_r9)("indent", ctx_r8.indent + 1)("itemTemplateRef", ctx_r8.itemTemplateRef);
  }
}

function TreeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeComponent_ng_container_1_wp_tree_1_Template, 1, 3, "wp-tree", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.children);
  }
}

class TreeComponent {
  constructor(_treeDataProviderService) {
    this._treeDataProviderService = _treeDataProviderService;
    this.indent = 0; // @ContentChild('itemTemplate') itemTemplateRef!: TemplateRef<any>;

    this.isContentDisplayed = false;
    this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleRight;
    this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown;
  }

  ngOnInit() {
    this.fetchRootNode();

    this._treeDataProviderService.change$.subscribe(() => {
      this.onChange();
    });
  }

  onChange() {
    var _this = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fetchRootNode();

      if (_this.isContentDisplayed) {
        _this.children = yield _this._treeDataProviderService.getChildren(_this.rootNode);
      }
    })();
  }

  toggleOpen() {
    var _this2 = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.isContentDisplayed) {
        _this2.children = yield _this2._treeDataProviderService.getChildren(_this2.rootNode);
      }

      _this2.isContentDisplayed = !_this2.isContentDisplayed;
    })();
  }

  fetchRootNode() {
    var _this3 = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.rootNode = yield _this3.getRootNode();
    })();
  }

  getRootNode() {
    var _this4 = this;

    return (0,_Users_j_sdurier_Documents_development_wokop_node_modules_pnpm_babel_runtime_7_18_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.node !== undefined) {
        return _this4.node;
      }

      return _this4._treeDataProviderService.getRootNode();
    })();
  }

}

TreeComponent.ɵfac = function TreeComponent_Factory(t) {
  return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_i_tree_data_provider_service__WEBPACK_IMPORTED_MODULE_1__["default"]));
};

TreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TreeComponent,
  selectors: [["wp-tree"]],
  inputs: {
    node: "node",
    indent: "indent",
    itemTemplateRef: "itemTemplateRef"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "root", "fxLayout", "row", "fxLayoutGap", "10px", 3, "padding-left", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", 1, "root"], [1, "icon-container", 3, "click"], ["fxFlex", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "icon", 4, "ngIf"], [3, "icon"], [3, "node", "indent", "itemTemplateRef", 4, "ngFor", "ngForOf"], [3, "node", "indent", "itemTemplateRef"]],
  template: function TreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TreeComponent_div_0_Template, 5, 7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rootNode !== undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isContentDisplayed);
    }
  },
  dependencies: [TreeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
  styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 13px;\n  padding-right: 3px;\n}\n\n.root[_ngcontent-%COMP%] {\n  padding: 3px 0px;\n}\n\n.root[_ngcontent-%COMP%]:hover {\n  background-color: #777;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsMERBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFNQTtFQUNDLGdCQUFBO0FBSEQ7O0FBS0M7RUFDQyxzQkFBQTtBQUhGOztBQU9BO0VBQ0MsV0FBQTtBQUpEIiwiZmlsZSI6InRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+IGRpdiB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0cGFkZGluZy1yaWdodDogM3B4O1xufVxuXG4uY29udGVudCB7XG5cdC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucm9vdCB7XG5cdHBhZGRpbmc6IDNweCAwcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzc3Nztcblx0fVxufVxuXG4uaWNvbi1jb250YWluZXIge1xuXHR3aWR0aDogMTBweDtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9850:
/*!*****************************!*\
  !*** ./src/ts-extension.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TS_EXTENSION": () => (/* binding */ TS_EXTENSION)
/* harmony export */ });
const TS_EXTENSION = '.ts';


/***/ }),

/***/ 3957:
/*!***********************************************!*\
  !*** ./src/vscode-input-box-value.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VscodeInputBoxValueService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);


class VscodeInputBoxValueService {
    constructor() {
        this.value = '';
        this._value$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    cancel() {
        this._value$.next(undefined);
    }
    validate() {
        this._value$.next(this.value);
    }
    get value$() {
        return this._value$.asObservable();
    }
}
VscodeInputBoxValueService.ɵfac = function VscodeInputBoxValueService_Factory(t) { return new (t || VscodeInputBoxValueService)(); };
VscodeInputBoxValueService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VscodeInputBoxValueService, factory: VscodeInputBoxValueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8565:
/*!*******************************************!*\
  !*** ./src/vscode-input-box.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VscodeInputBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2330);
/* harmony import */ var _vscode_input_box_value_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vscode-input-box-value.service */ 3957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9332);





const _c0 = ["input"];
class VscodeInputBoxComponent {
    constructor(_vscodeInputBoxValueService) {
        this._vscodeInputBoxValueService = _vscodeInputBoxValueService;
    }
    ngAfterViewInit() {
        this.input.nativeElement.focus();
    }
    validate() {
        if (this.value === '') {
            return;
        }
        this._vscodeInputBoxValueService.validate();
    }
    escape() {
        this._vscodeInputBoxValueService.cancel();
    }
    get value() {
        return this._vscodeInputBoxValueService.value;
    }
    set value(value) {
        this._vscodeInputBoxValueService.value = value;
    }
}
VscodeInputBoxComponent.ɵfac = function VscodeInputBoxComponent_Factory(t) { return new (t || VscodeInputBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vscode_input_box_value_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
VscodeInputBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VscodeInputBoxComponent, selectors: [["wp-vscode-input-box"]], viewQuery: function VscodeInputBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 5, vars: 2, consts: [["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup.escape"], ["input", ""]], template: function VscodeInputBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VscodeInputBoxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("keyup.enter", function VscodeInputBoxComponent_Template_input_keyup_enter_1_listener() { return ctx.validate(); })("keyup.escape", function VscodeInputBoxComponent_Template_input_keyup_escape_1_listener() { return ctx.escape(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.description.prompt, " (Press 'Enter' to confirm of 'Escape' to cancel) ");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #333;\n  box-shadow: 2px 2px 10px #222;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  color: #ddd;\n  font-size: 13px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 400px;\n  outline: none;\n  border-radius: 3px;\n  border: solid 1px #2222aa;\n  background-color: #555;\n  margin-bottom: 8px;\n  color: #ddd;\n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZzY29kZS1pbnB1dC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRDtBQUVDO0VBQ0MsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREYiLCJmaWxlIjoidnNjb2RlLWlucHV0LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0Ly8gaGVpZ2h0OiA1MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggIzIyMjtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LHNhbnMtc2VyaWY7XG5cdGNvbG9yOiAjZGRkO1xuXHRmb250LXNpemU6IDEzcHg7XG5cblx0PiBpbnB1dCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0d2lkdGg6IDQwMHB4O1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0Ly8gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRib3JkZXI6IHNvbGlkIDFweCAjMjIyMmFhO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdGNvbG9yOiAjZGRkO1xuXHRcdHBhZGRpbmc6IDJweCA1cHg7XG5cblx0XHQmOmZvY3VzIHtcblx0XHRcdC8vIG91dGxpbmU6IG5vbmU7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6454:
/*!************************************************************!*\
  !*** ./src/vscode-workspace-view-container-ref.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VscodeWorkspaceViewContainerRefService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9332);


class VscodeWorkspaceViewContainerRefService {
}
VscodeWorkspaceViewContainerRefService.ɵfac = function VscodeWorkspaceViewContainerRefService_Factory(t) { return new (t || VscodeWorkspaceViewContainerRefService)(); };
VscodeWorkspaceViewContainerRefService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VscodeWorkspaceViewContainerRefService, factory: VscodeWorkspaceViewContainerRefService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2092:
/*!*******************************************!*\
  !*** ./src/vscode-workspace.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VscodeWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9332);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 9600);
/* harmony import */ var _files_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-tabs.component */ 3178);
/* harmony import */ var _project_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-tree.component */ 1334);
/* harmony import */ var _show_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-overlay.service */ 2390);
/* harmony import */ var _vscode_workspace_view_container_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vscode-workspace-view-container-ref.service */ 6454);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5336);








const _c0 = ["container"];
const _c1 = ["hostContainer"];
class VscodeWorkspaceComponent {
    constructor(_viewContainerRefService, _showOverlayService) {
        this._viewContainerRefService = _viewContainerRefService;
        this._showOverlayService = _showOverlayService;
    }
    ngAfterViewInit() {
        this._viewContainerRefService.container = this.container;
        this._showOverlayService.container = this.hostContainer;
    }
}
VscodeWorkspaceComponent.ɵfac = function VscodeWorkspaceComponent_Factory(t) { return new (t || VscodeWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vscode_workspace_view_container_ref_service__WEBPACK_IMPORTED_MODULE_3__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_show_overlay_service__WEBPACK_IMPORTED_MODULE_2__["default"])); };
VscodeWorkspaceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VscodeWorkspaceComponent, selectors: [["wp-vscode-workspace"]], viewQuery: function VscodeWorkspaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.hostContainer = _t.first);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]], decls: 10, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "start"], ["hostContainer", ""], ["container", ""], [1, "tree"], [1, "sidebar-title"], ["fxFlex", "", 1, "content"]], template: function VscodeWorkspaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](2, null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "wp-project-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "wp-files-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } }, dependencies: [_project_tree_component__WEBPACK_IMPORTED_MODULE_1__["default"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _files_tabs_component__WEBPACK_IMPORTED_MODULE_0__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n  min-height: 400px;\n}\n\n.tree[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background-color: #3c3c3c;\n  color: white;\n}\n\n.sidebar-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: rgb(187, 187, 187);\n  line-height: 35px;\n  margin-left: 10px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZzY29kZS13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNEOztBQUVBO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7RUFDQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0FBQ0QiLCJmaWxlIjoidnNjb2RlLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0aGVpZ2h0OiAxMDAlO1xuXHRtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLnRyZWUge1xuXHRtaW4td2lkdGg6IDIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlYmFyLXRpdGxlIHtcblx0Zm9udC1zaXplOiAxMXB4O1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Y29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcblx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGVudCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8900:
/*!********************************************!*\
  !*** ./src/wokop-title-group.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WokopTitleGroupComponent)
/* harmony export */ });
/* harmony import */ var _documentation_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation-button.component */ 7259);
/* harmony import */ var _get_extension_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-extension-button.component */ 5303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9332);



class WokopTitleGroupComponent {
}
WokopTitleGroupComponent.ɵfac = function WokopTitleGroupComponent_Factory(t) { return new (t || WokopTitleGroupComponent)(); };
WokopTitleGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WokopTitleGroupComponent, selectors: [["wp-wokop-title-group"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 8, vars: 0, consts: [[1, "title"], [1, "description"], [1, "buttons"]], template: function WokopTitleGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Wokop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Une extension d'IDE pour simplifier le d\u00E9veloppement, favoriser la r\u00E9utilisabilit\u00E9, et adopter une approche composant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "wp-documentation-button")(7, "wp-get-extension-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_documentation_button_component__WEBPACK_IMPORTED_MODULE_0__["default"],
        _get_extension_button_component__WEBPACK_IMPORTED_MODULE_1__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 500px;\n  margin: 100px 0px;\n  color: white;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 32px;\n  font-weight: 500;\n  margin-bottom: 40px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndva29wLXRpdGxlLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQUFEOztBQUdBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtBQUFEOztBQUVDO0VBQ0Msa0JBQUE7QUFBRiIsImZpbGUiOiJ3b2tvcC10aXRsZS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4gZGl2IHtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzU2Nztcblx0aGVpZ2h0OiAzMDBweDtcblx0d2lkdGg6IDUwMHB4O1xuXHRtYXJnaW46IDEwMHB4IDBweDtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuXHRmb250LXNpemU6IDUwcHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDMycHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5idXR0b25zIHtcblx0ZGlzcGxheTogZmxleDtcblxuXHQ+ICoge1xuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 155:
/*!*******************************************!*\
  !*** ./src/workspace-commands.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkspaceCommandsService)
/* harmony export */ });
/* harmony import */ var _create_function_in_workspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-function-in-workspace.service */ 282);
/* harmony import */ var _create_ng_component_in_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-ng-component-in-file.service */ 550);
/* harmony import */ var _create_ng_service_in_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-ng-service-in-file.service */ 2836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9332);




class WorkspaceCommandsService {
    constructor(createFunctionService, createNgComponentService, createNgServiceInFileService) {
        this.commands = {};
        this.commands = {
            createFunction: {
                name: 'Create function',
                handler: (data) => {
                    createFunctionService.createFunction(data);
                }
            },
            createNgComponent: {
                name: 'Create ng component',
                handler: (data) => {
                    createNgComponentService.createNgComponentInFile(data);
                }
            },
            createNgService: {
                name: 'Create ng service',
                handler: (data) => {
                    createNgServiceInFileService.createNgServiceInFile(data);
                }
            }
        };
    }
    runCommand(commandId, arg) {
        const command = this.commands[commandId];
        if (command === undefined) {
            return;
        }
        command.handler(arg);
    }
}
WorkspaceCommandsService.ɵfac = function WorkspaceCommandsService_Factory(t) { return new (t || WorkspaceCommandsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_create_function_in_workspace_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_create_ng_component_in_file_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_create_ng_service_in_file_service__WEBPACK_IMPORTED_MODULE_2__["default"])); };
WorkspaceCommandsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WorkspaceCommandsService, factory: WorkspaceCommandsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1600:
/*!********************************************************!*\
  !*** ./src/workspace-with-renderer-debug.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkspaceWithRendererDebugComponent)
/* harmony export */ });
/* harmony import */ var _angular_core_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-core-file */ 1825);
/* harmony import */ var _angular_platform_browser_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-platform-browser-file */ 8736);
/* harmony import */ var _compile_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compile-component.component */ 7844);
/* harmony import */ var _deep_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deep-clone */ 9817);
/* harmony import */ var _files_in_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files-in-editor.service */ 429);
/* harmony import */ var _i_ng_project_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i-ng-project-files-service */ 3633);
/* harmony import */ var _project_files_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-files.service */ 5585);
/* harmony import */ var _vscode_workspace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vscode-workspace.component */ 2092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9332);









class WorkspaceWithRendererDebugComponent {
    constructor(projectFilesService, filesInEditorService) {
        this.ngComponentFileName = 'example.component.ts';
        // projectFilesService.filePathList = deepClone(FILE_LIST);
        projectFilesService.nodeModules = [
            {
                path: 'node_modules/@angular/core/index.d.ts',
                content: _angular_core_file__WEBPACK_IMPORTED_MODULE_0__.ANGULAR_CORE_FILE
            },
            {
                path: 'node_modules/@angular/platform-browser/index.d.ts',
                content: _angular_platform_browser_file__WEBPACK_IMPORTED_MODULE_1__["default"]
            }
        ];
        filesInEditorService.files = (0,_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(FILES_IN_EDITOR);
    }
}
WorkspaceWithRendererDebugComponent.ɵfac = function WorkspaceWithRendererDebugComponent_Factory(t) { return new (t || WorkspaceWithRendererDebugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_project_files_service__WEBPACK_IMPORTED_MODULE_6__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_files_in_editor_service__WEBPACK_IMPORTED_MODULE_4__["default"])); };
WorkspaceWithRendererDebugComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: WorkspaceWithRendererDebugComponent, selectors: [["wp-workspace-with-renderer-debug"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([
            {
                provide: _i_ng_project_files_service__WEBPACK_IMPORTED_MODULE_5__["default"],
                useExisting: _project_files_service__WEBPACK_IMPORTED_MODULE_6__["default"]
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]], decls: 5, vars: 1, consts: [[1, "editor"], [1, "renderer"], [3, "ngComponentFileName"]], template: function WorkspaceWithRendererDebugComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "wp-vscode-workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "wp-compile-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngComponentFileName", ctx.ngComponentFileName);
    } }, dependencies: [_vscode_workspace_component__WEBPACK_IMPORTED_MODULE_7__["default"],
        _compile_component_component__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .editor[_ngcontent-%COMP%] {\n  width: 700px;\n  background-color: #336;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .renderer[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZS13aXRoLXJlbmRlcmVyLWRlYnVnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRDtBQUNDO0VBQ0MsWUFBQTtFQUVBLHNCQUFBO0FBQUY7QUFHQztFQUNDLE9BQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FBRkYiLCJmaWxlIjoid29ya3NwYWNlLXdpdGgtcmVuZGVyZXItZGVidWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+IGRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGhlaWdodDogMTAwJTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdD4gLmVkaXRvciB7XG5cdFx0d2lkdGg6IDcwMHB4O1xuXHRcdC8vIGZsZXg6IDE7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzNjtcblx0fVxuXG5cdD4gLnJlbmRlcmVyIHtcblx0XHRmbGV4OiAxO1xuXHRcdC8vIG1pbi13aWR0aDogNjAwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG59XG4iXX0= */"] });
// const FILE_LIST: IFile[] = [
// 	/**
// 	 * TODO
// 	 * TataComponent est considéré comme un import du
// 	 * fichier courant.
// 	 */
// 	{
// 		path: 'toto.component.ts',
// 		content: `import { Component } from '@angular/core';
// import TataComponent from './tata.component';
// @Component({
// 	selector: 'toto',
// 	standalone: true,
// 	templateUrl: './toto.component.html',
// 	styleUrls: ['./toto.component.scss'],
// 	imports: [
// 		TataComponent
// 	]
// })
// export default class TotoComponent {
// }
// `
// 	},
// 	{
// 		path: 'toto.component.html',
// 		content: '<p>I am toto component !!</p> <tata></tata>'
// 	},
// 	{
// 		path: 'toto.component.scss',
// 		content: 'p {color: orange;}'
// 	},
// 	{
// 		path: 'tata.component.ts',
// 		content: `import { Component } from '@angular/core';
// @Component({
// 	selector: 'tata',
// 	standalone: true,
// 	templateUrl: './tata.component.html',
// 	styleUrls: ['./tata.component.scss']
// })
// export default class TataComponent {
// }`
// 	},
// 	{
// 		path: 'tata.component.html',
// 		content: '<p>I am tata component !!</p>'
// 	},
// 	{
// 		path: 'tata.component.scss',
// 		content: 'p {color: blue;}'
// 	}
// ];
const FILES_IN_EDITOR = [
    {
        filePath: 'example.component.ts',
        selected: true
    }
];


/***/ }),

/***/ 6640:
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/typescript@4.7.4/node_modules/typescript/lib/ sync ***!
  \*******************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 6640;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 8350:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4603:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3936:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3786:
/*!***************************!*\
  !*** inspector (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 9878:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2905:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2389:
/*!************************************!*\
  !*** source-map-support (ignored) ***!
  \************************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9990)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map