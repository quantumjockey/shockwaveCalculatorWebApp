shockwaveCalculatorWebApp
=============

This Web App is based on a desktop tool for making variable-layer shockwave calculations for single and dual-stage gas gun apparatuses. Currently, the web app is designed for a five layer (including air buffer) experiment performed within a single-stage apparatus. This tool is meant for deployment on the HiPSEC website and will only serve as a quick, but useful means of calculating outcomes for these experiments. 

Though the desktop tool is under constant improvement in terms of calculation performance, number of features, and usability (among other details), no additional features are planned for the web version at this time. Styling and internal architecture may be subject to change during deployment on the laboratory website as the site changes over time. All significant changes not apparent in this repository's version history will be documented via a changelog at the end of this README file.

This software is a collaborative effort among [Nicola B. DiPalma](http://nicoladipalma.com/), [Oliver Tschauner, Ph.D.](http://geoscience.unlv.edu/people/olivertschauner.html), and scientists at the [University of Nevada, Las Vegas High Pressure Science and Engineering Center (HiPSEC)](http://hipsec.unlv.edu/). This software is intended to augment current data analysis capabilities at HiPSEC and is freely available through this repository for use by members of the scientific community.

Notes
-----

This repository was scaffolded with [Yeoman](http://yeoman.io/) (on OSX) and architected according to a slightly customized interpretation of [Google's Style guide for AngularJS](http://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html). It stresses a module-centric pattern rather than the app/components pattern recently generalized by the Angular team. This approach was chosen to reduce the risk of coupling among application components and is intended to make markup, styles, and scripts associated with each module easier to locate within the application.

This version of the tool was developed using components scaffolded from the [Yeoman angular generator](https://github.com/yeoman/generator-angular). This includes management of external packages/dependencies via [Bower](http://bower.io/), app serving, debug, and build processes via [Grunt](http://gruntjs.com/), and unit-testing via [Karma](http://karma-runner.github.io/0.12/index.html). Some modification may be necessary if the developer chooses to work with a cloned repository in a live-reload-enabled editing environment like [Brackets](http://brackets.io/?lang=en). However, the extent of these changes is unknown as development with this repository has not been completely tested with Brackets - use caution as unexpected results (and headaches) may occur.

Instructions
------------

To get your machine ready for development with this repository:

1. Clone the repository to your machine.
2. Navigate to the directory you cloned your repository to via Terminal.
3. Install [GruntJS](http://gruntjs.com/) to your machine by following instructions provided on the [Getting Started Page](http://gruntjs.com/getting-started).
4. Install a local grunt (without -g option) to the repository so that existing Gruntfile.js configurations can be properly applied during the serve operation.
5. Install [Bower](http://bower.io/) to your machine by following instructions provided on the [Install Bower Page](http://bower.io/#install-bower) posted on the site.
6. Load dependencies to the cloned repository by running bower locally on the [bower.json manifest file](http://bower.io/docs/creating-packages/#bowerjson).

Then, run:

		$ grunt serve

And you're ready to go!

Livereload and hosting are already configured out-of-the-box.

As mentioned above, some modification may be necessary if the developer chooses to work with a cloned repository in a live-reload-enabled editing environment like [Brackets](http://brackets.io/?lang=en). However, the extent of these changes is unknown as development with this repository has not been completely tested with Brackets - use caution as unexpected results (and headaches) may occur.
