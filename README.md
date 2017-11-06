# iis_express

## Usage
* Environment Install
  * Install [Node](https://nodejs.org/en/) & [Git](https://git-scm.com/)
  * Install IIS [URL Rewrite extension](https://www.iis.net/downloads/microsoft/url-rewrite) (may need to restart the server)
  * Install [iisnode](https://github.com/tjanczuk/iisnode)
    * verification: run `%programfiles%\iisnode\setupsamples.bat` to setup samples.Then visit `http://localhost/node`
* Use
  * clone
  ```shell
  $ git clone https://github.com/cycjimmy/iis_express.git
  ```

  * Install dependencies
  ```shell
  # via npm
  $ npm install

  # or via yarn
  $ yarn install
  ```

  * IIS Configuration
    * add application `iis_express`. Set physical path.
    * verification: `http://localhost/iis_express/api/app`

* enjoy!