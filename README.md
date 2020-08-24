# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)

# Development Process

I aimed to build each listed feature one by one rather than planning the overall code architecture beforehand. I first added new logic to existing files (e.g. to the `App` component), then extracted code out into separate files as I found sensible refactor opportunities (e.g. a function that processes an array could be moved to a generic utils file, and a component that is reused in different parts of the application could be extracted into their own file).

I followed the architecture of having "smart" state aware components, so that only 1 component per page can make requests to the backend, whilst all other components are presentational and expect data to be passed into them as properties. The advantage of this is that all the "non-smart" components are reusable in other contexts since they don't have side-effects (such as remote data fetching).

I've used `PropTypes` to ensure components receive the right "shape" of properties. This would help catch bugs early on in the development process. If I wasn't limited to the usage of JavaScript, I'd have instead used TypeScript to strictly type these properties, so that typing is checked in compile time (and by my IDE as I type), massively speeding up the feedback loop.

As for testing, I focused on testing important behaviours of the code (e.g. when an item is selected from the item picker). Conditional styling logic that does not effect the user journey were not tested, as I believe they'd don't provide good return on time investment, plus they tend to be quite brittle.

If I had more time, I'd have invested it in improving the UX (e.g. show a useful message when no items are selected, and make it clearer that the user is meant to select items from the left sidebar).
