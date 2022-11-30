# CDMS: Crime Data Management System - Website

## Requirements

Install the following:

- Nodejs: https://nodejs.org/en/download/
- PostgresSQL: https://www.postgresql.org/download/
- Yarn: Package manger instead of NPM

```console
npm i yarn -g
```

**Note:** The above command will install the yarn command globally on your device.

## Installation

### Step 1. Clone the Repository

```console
git clone https://github.com/sophie210286/DBMS_Project.git
```

### Step 2. Installation

In your project folder's terminal:

```console
cd website
yarn
```

### Step 3. Environment Variable

Create a file name `.env.development` in the website folder, and fill up the following inside:

```console
NEXT_PUBLIC_HOST=<Your hosting service; By default it runs on localhost>
NEXT_PUBLIC_DB_USER=<Your postgresql user name where the database is stored; By default it runs on postgres>
NEXT_PUBLIC_DB_PASSWORD=<Your postgresql user password>
NEXT_PUBLIC_DB_PORT=<Your Port Number; By default it runs on 5432>
NEXT_PUBLIC_DB_NAME=<Your database name>
```

**Note:** If you are running the website on localhost, then you can ignore 'By defaults' but you still need to fill the remaining ones.

### Step 4. Run the Website

```console
yarn run dev
```

The website will run on [http://localhost:3000](http://localhost:3000) on your browser.

## Project Structure

| Path            | Description           |
| :-------------- | :-------------------- |
| **/public**     | Static files          |
| **/pages**      | Web page Routes       |
| **/styles**     | CSS styles            |
| **/components** | Functional components |
| **/utils**      | Database connection   |


## Technologies

* [Nextjs](https://nextjs.org/) (Frontend and Backend)