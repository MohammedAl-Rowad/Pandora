# Pandora - Jira performance dashboard generator 
This is a web application that generates a performance dashboard based on Jira API the main goal from this dashboard is to understand the work l
oad your team put in each project.


## Folder strucure 

```

└── screens
    └── ──> Simple Nodejs / express routes - this was created just to escape the CORS errors from the Jira API ( thinking about it this can be completely dropped )
└── Client
    └── ──> Angular application that gets data from the API
```


## Before you install

The angualr application will just get data from the express app then map it and visualize it, and it works out of the box, however, you need to configure the API by
creating a `.env` file, in the app there is a `.env.example` file you can look at to get an idea about how this file should look like

.env.example
```.env
USERNAME=name@org.example
API_TOKEN= get this from jira website ( api token )
ENDPOINT=https://[ORG].atlassian.net/rest/api/2
```

get your Jira API token from here https://confluence.atlassian.com/cloud/api-tokens-938839638.html


## install 

- download the app as a zip file or clone it like this 

```bash 
$ git clone https://github.com/MohammedAl-Rowad/Pandora.git
```
then to run the API, don't forget to create .env file! read the above step

```bash 
$ cd API
$ npm i 
$ npm run start
```

to run the angular app you need to have the angular cli [from here](https://cli.angular.io/) **OR you can just run `npm run ng -- s` which will serve the app without
installing the cli which is something I like (I hate installing global packges in my laptop)**

```bash
$ cd Client
$ npm i
$ # to serve the app
$ npm run ng -- s # without install the angular cli ;) 
$ # OR 
$ ng s  # you need to install the angular cli for this
```

**you are done now**


## Notes

- If you have any suggestions please open an issue with it
- PR's are very welcomed 
- if you are good with js I think you'll have good time looking at the code since it's really simple ( not clean though :/ )


## examples 

<details>
  <summary>Click to see example #1</summary>  
  <img src="ex01.png" />
</details>


<details>
  <summary>Click to see example #2</summary>  
  <img src="ex02.png" />
</details>



<details>
  <summary>Click to see example #3</summary>  
  <img src="ex03.png" />
</details>
