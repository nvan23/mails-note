Note: This repository includes the [postman collection for the finished API](postman_collection.json)
Thank  [TomDoesTech](https://github.com/TomDoesTech) for resource about how to write code as senior engineer.

##  What you will need

* A running instance of MongoDB

* Postman

* An IDE or text editor (VS Code)

* A web browser

* A package manager such as NPM or Yarn

* Node.js installed

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node -v
    v14.17.1

    $ npm -v
    7.21.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

If the installation was successful, you should be able to run the following command.

    $ yarn -v
    1.22.4
---

##  Technologies

* Node.js

* MongoDB with Mongoose

* TypeScript

* Express.js & Express.js middleware

* Zod validation

* Moment.js
 
---

## Install

    $ git clone https://github.com/nvan23/mails-note.git
    $ cd mails-note
    $ yarn

## Running the project

    $ yarn dev

## Test with Postman
If the importing with [postman collection for the finished API](postman_collection.json) was successful, you could be able to run some APIs to try somethings you need

Note: If you get Forbidden error, you must run API `http://localhost:5000/api/v1/sessions` first to get `accessToken` and `refreshToken`

Then copy `accessToken` and `refreshToken` and paste it into the `Headers` of the request with the following pair of values:
| KEY           | VALUE                   |
| :------------ | :---------------------- |
| authorization | value of `accessToken`  |
| x-refresh     | value of `refreshToken` |