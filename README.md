# Shockwave Calculator (Web version)

This Web App is based on a desktop tool for making variable-layer shockwave calculations for single and dual-stage gas gun apparatuses. Currently, the web app is designed for a five layer (including air buffer) experiment performed within a single-stage apparatus. This tool is meant for deployment on the HiPSEC website and will only serve as a quick, but useful means of calculating outcomes for these experiments. 

Though the desktop tool is under constant improvement in terms of calculation performance, number of features, and usability (among other details), no additional features are planned for the web version at this time. Styling and internal architecture may be subject to change during deployment on the laboratory website as the site changes over time. All significant changes not apparent in this repository's version history will be documented via a changelog at the end of this README file.

This software is a collaborative effort among [Nicola B. DiPalma](http://nicoladipalma.com/), [Oliver Tschauner, Ph.D.](http://geoscience.unlv.edu/people/olivertschauner.html), and scientists at the [University of Nevada, Las Vegas High Pressure Science and Engineering Center (HiPSEC)](http://hipsec.unlv.edu/). This software is intended to augment current data analysis capabilities at HiPSEC and is freely available through this repository for use by members of the scientific community.

## Notes

This repository is a complete refactoring of the original application sources for deployment to [Heroku](https://www.heroku.com/). The application shell is based on [Node.js](https://nodejs.org/) (via [Express.js](http://expressjs.com/)), and the client application is based on Google's [AngularJS](https://angularjs.org/).

## Requirements

Development with this repository requires local [Node.js](https://nodejs.org/), [Bower](http://bower.io/), and [SASS](http://sass-lang.com/) installations.

### Node.js

Please see the [Node website](https://nodejs.org/) for installation instructions specific to your operating system. [NPM](https://www.npmjs.com/) and other node-specific components are included with this installation.

### Bower

While NPM is used for managing server-side dependencies, Bower is used for managing client-side dependencies for the SPA. Instructions for installing Bower for use on your development machine can be found in the [landing page installation/configuration notes](http://bower.io/#install-bower).

### SASS/SCSS

Stylesheets for this project are written in the [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html) dialect of SASS. Consequently, the SASS compiler needs to be installed in order to work with these files (and any included SASS plugins/pre-compilation modules). Instructions for installing the SASS compiler for use on your machine can be found [here](http://sass-lang.com/install).

Though styles for the application shell are structured according to [SASS-recommended project hierarchy](http://thesassway.com/beginner/how-to-structure-a-sass-project), all styles specific to application modules and directives are placed in ```_styles.scss``` files within their respective module/directive folders.

## Instructions

Clone this repository to your machine. Be sure to install all server-side packages locally using,

	$ npm install

Note that any warnings that come up may result from unmet dependencies being registered despite newer versions of those dependencies being downloaded and installed. As of this writing, these warnings can be safely ignored. Further information will be available as dependency updates are released.

Then, install all client-side packages locally using,

	$ bower install

The application server can now be started by running,

	$ npm start

The app can now be viewed in the browser at [localhost:3000](http://localhost:3000/).

If you're developing the old-school way using your favorite text editor and the Terminal (or Command Prompt for you Windows Junkies), that's all you need!

If you're planning to wrap this module in a project with your favorite IDE, tips & tricks will be included soon in the sections below.

## Heroku Application Hosting

At the time of this writing, this repository has been deployed to [shockwavecalculator.herokuapp.com](https://shockwavecalculator.herokuapp.com/)

### Buildpack Configuration

This application utilizes the [Heroku Multi-Buildpack configuration](https://github.com/heroku/heroku-buildpack-multi) via the .buildpacks file. As of this writing, the buildpack stack includes:

*  [Ruby buildpack](https://github.com/heroku/heroku-buildpack-ruby) - For SASS and other pre-compile gems
*  [Node.js buildpack](https://github.com/heroku/heroku-buildpack-nodejs) - For deploying as Node application build to Heroku

Any future buildpacks that are to be included with this application must be listed therein. Note that buildpacks for any pre-compile/trans-pile components must be listed before the Node buildpack in order for Heroku's build process to succeed (for this application). Also, note that the listing within .buildpacks points directly to *.git for each.

In order to ensure that this app is properly configured for accepting a multi-pack configuration via .buildpacks, open the Heroku CLI in Terminal (OSX/Unix) or PowerShell (Windows) and run:

    $ heroku buildpacks:set --app shockwavecalculator https://github.com/heroku/heroku-buildpack-multi.git

...before pushing sources to heroku master. This will clear existing defaults and automatically load the content of .buildpacks before executing each application build.

### env Configuration

There are no specific env configurations required at this time.

### Deploying to Heroku

Since this repository is linked to the application's remote GitHub repo, you can deploy a new version of the app to Heroku by pushing commits from local master to remote master using,

    $ git push origin develop:master

via the Terminal or Powershell console while within the local directory for the repository. Alternatively, use your GUI of choice for deploying to the remote master branch on GitHub.

If your push comes about after merging another branch with master, or making significant changes to the application source, be sure that the app runs locally before pushing commits. Otherwise, you'll be deploying a broken app.

***Happy Development!***
