# Afghan Proverbs API

A RESTful API to manage traditional Afghan proverbs and sayings in Dari, Pashto, and English.

## Features

- Filter proverbs by category (/proverbs?category=wisdom).
- Search proverbs by keyword (/proverbs?keyword=watermelon).
- Get a random proverb (/proverbs/random).
- Get a proverb by ID (prvoverb/:id).
- Get all Proverbs (/Proverbs).
- Add a new proverb (POST /proverbs).
- Update an existing proverb (PUT /proverbs/:id).
- Delete a proverb (DELETE /proverbs/:id).
- Get all categories (/categories).
- Get a category by ID (/categories/:id).
- Add a new category (POST /categories).
- Update an existing category (PUT /categories/:id).
- Delete a category (DELETE /categories/:id).
- Support for multiple categories per proverb.

## Tech Stack

- Node.js + Express
- JSON file as database
- Deployed on Render

## Setup Locally

1. Clone the repo:
   git clone <repo-url>
   cd afghan-proverbs-api
