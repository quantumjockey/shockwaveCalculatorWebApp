# Shockwave Calculator (Web version)

This Web App is based on a desktop tool for making variable-layer shockwave calculations for single and dual-stage gas gun apparatuses. Currently, the web app is designed for a five layer (including air buffer) experiment performed within a single-stage apparatus. This tool is meant for deployment on the HiPSEC website and will only serve as a quick, but useful means of calculating outcomes for these experiments. 

Though the desktop tool is under constant improvement in terms of calculation performance, number of features, and usability (among other details), no additional features are planned for the web version at this time. Styling and internal architecture may be subject to change during deployment on the laboratory website as the site changes over time. All significant changes not apparent in this repository's version history will be documented via a changelog at the end of this README file.

This software is a collaborative effort among [Nicola B. DiPalma](http://nicoladipalma.com/), [Oliver Tschauner, Ph.D.](http://geoscience.unlv.edu/people/olivertschauner.html), and scientists at the [University of Nevada, Las Vegas High Pressure Science and Engineering Center (HiPSEC)](http://hipsec.unlv.edu/). This software is intended to augment current data analysis capabilities at HiPSEC and is freely available through this repository for use by members of the scientific community.

## Notes

This repository is a complete refactoring of the original application sources for deployment to [Heroku](https://www.heroku.com/). The application shell is based on [Node.js](https://nodejs.org/) (via [Express.js](http://expressjs.com/)), and the client application is based on Google's [AngularJS](https://angularjs.org/).

## Requirements

Development with this repository requires a local [Node.js](https://nodejs.org/) installation. [NPM](https://www.npmjs.com/) and other node-specific components are included with this installation. Please see the Node website for installation instructions specific to your operating system.

## Instructions

Next, clone this repository to your machine. Be sure to install all packages locally using,

	$ npm install

If you're developing the old-school way using your favorite text editor and the Terminal (or Command Prompt for you Windows Junkies), that's all you need!

If you're planning to wrap this module in a project with your favorite IDE, tips & tricks will be included soon in the sections below.

## Heroku Application Hosting

At the time of this writing, this repository has been deployed to [shockwavecalculator.herokuapp.com](https://shockwavecalculator.herokuapp.com/)

### Buildpack Configuration

This application utilizes the [Heroku Multi-Buildpack configuration](https://github.com/heroku/heroku-buildpack-multi) via the .buildpacks file. As of this writing, the buildpack stack includes:

*  [Node.js buildpack](https://github.com/heroku/heroku-buildpack-nodejs) - For deploying as Node application build to Heroku

Any future buildpacks that are to be included with this application must be listed therein. Note that buildpacks for any pre-compile/trans-pile components must be listed before the Node buildpack in order for Heroku's build process to succeed (for this application). Also, note that the listing within .buildpacks points directly to *.git for each.

In order to ensure that this app is properly configured for accepting a multi-pack configuration via .buildpacks, open the Heroku CLI in Terminal(OSX/Unix) or PowerShell(Windows) and run:

    $ heroku buildpacks:set --app shockwavecalculatorredux https://github.com/heroku/heroku-buildpack-multi.git

...before pushing sources to heroku master. This will clear existing defaults and automatically load the content of .buildpacks before executing each application build.

### env Configuration

There are no specific env configurations required at this time.

### Deploying to Heroku

Since this repository is linked to the application's remote GitHub repo, you can deploy a new version of the app to Heroku by pushing commits from local master to remote master using,

    $ git push origin develop:master

via the Terminal or Powershell console while within the local directory for the repository. Alternatively, use your GUI of choice for deploying to the remote master branch on GitHub.

If your push comes about after merging another branch with master, or making significant changes to the application source, be sure that the app runs locally before pushing commits. Otherwise, you'll be deploying a broken app.

***Happy Development!***