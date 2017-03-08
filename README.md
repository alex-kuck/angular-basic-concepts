# AngularBasicConcepts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1. It introduces some of the most basic concepts of angular. 
Therefore it will display a list of GitHub-Commits in a Master-Detail view.

A running version can be found at [https://alex-kuck.github.io/angular-basic-concepts](https://alex-kuck.github.io/angular-basic-concepts), hosted on GitHub Pages.

## Workshop Tasks
### 0 - Preparations

Install Angular CLI. To do so, perform `npm install -g @angular/cli@latest` on the command line.

### 1 - Initialization

Generate a new angular app with routing capabilities using the CLI. The command to do this is `ng new --routing AngularBasicConcepts`.

### 2 - Create the Views

Generate one component for the home screen of the app, one component for the master-view and one for the detail-view. Embed the detail-view in the master-view and 
add routes to home and master, with default routing to the home screen. Add links to home-screen and master-view in `app.component.html`.

### 3 - Fetch GitHub data

Create model classes and a service to fetch the commit-data from GitHub. You can use e.g. `https://api.github.com/repos/awesome-inc/docker-elk-cyber/commits` or the URL
of this repo. See the [GitHub Api](https://developer.github.com/v3/repos/commits/) for additional information.

Import `rxjs/Observable` and `rxjs/add/operator/map` in your service for comfort.

![PlantUML](http://www.plantuml.com/plantuml/svg/SorBpIjHqDMrKt3EpytDBE5oXGk45gSMMIaabfPav1TnGJZ59KMPUUaAEVdfcNceGebbYIM9HV6bHJceuY01YCbmeTpKukB4z5I8JN3Huen4D16WLW00)

### 4 - Display the information

In the master-view display a list of events. If the user clicks on one element of the list, the detail-view should display the detailed information for this event.
Use an `@Input()` property to enable the communication between parent and child component.

## Angular CLI
### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
