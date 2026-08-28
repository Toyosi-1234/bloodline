## BloodLine API

BloodLine is a REST API for managing blood donation offers. It is built with Node.js, Express.js, MongoDB, and Mongoose.

## Project Overview

BloodLine allows applications to create, view, update, and delete blood donation offers.

The API follows CRUD:

- **Create** — Add a blood offer
- **Read** — View blood offers
- **Update** — Edit a blood offer
- **Delete** — Remove a blood offer

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon
- Postman

## Project Structure

```text
bloodline/
├── controllers/
│   └── bloodController.js
├── models/
│   └── Blood.js
├── routes/
│   └── bloodRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
PORT=6811
```


3. Start the development server

```bash
npm run dev
```

The API runs at:

```text
http://localhost:6811
```

## Postman API Testing

# Check API

**GET**

```text
http://localhost:6811/
```

# Get all blood offers

**GET**

```text
http://localhost:6811/api/blood
```

# Get one blood offer

**GET**

```text
http://localhost:6811/api/blood/:id
```

Replace `:id` with the MongoDB ID.

# Create a blood offer

**POST**

```text
http://localhost:6811/api/blood
```

Body → raw → JSON:

```json
{
  "donor_name": "toyosi",
  "phone_number": "08060865202",
  "blood_group": "A",
  "rhesus_factor": "Positive",
  "has_donated_before": true,
  "health_status": "perfect"
}
```

# Update a blood offer

**PUT**

```text
http://localhost:6811/api/blood/:id
```

Example body:

```json
{
  "health_status": "Healthy"
}
```

# Delete a blood offer

**DELETE**

```text
http://localhost:6811/api/blood/:id
```

## Blood Offer Fields

| `donor_name` | String | Name of the donor |

| `phone_number` | String | Donor phone number |

| `blood_group` | String | A, B, AB, or O |

| `rhesus_factor` | String | Positive or Negative |

| `has_donated_before` | Boolean | Whether the donor has donated before |

| `health_status` | String | Donor health status |

| `createdAt` | Date | Automatically created |

| `updatedAt` | Date | Automatically updated |

## API Endpoints

| GET | `/` | Check that the API is running |

| GET | `/api/blood` | Get all blood offers |

| GET | `/api/blood/:id` | Get one blood offer |

| POST | `/api/blood` | Create a blood offer |

| PUT | `/api/blood/:id` | Update a blood offer |

| DELETE | `/api/blood/:id` | Delete a blood offer |

## HTTP Status Codes

- **200** — Successful request
- **201** — Resource created
- **400** — Bad request / invalid ID
- **404** — Resource not found
- **500** — Server error

## Environment Variables

Sensitive database credentials are stored in `.env`.

`.env` is included in `.gitignore`:

```text
.env
```

#API Documentation

After publishing your Postman collection, replace the placeholder below with your documentation link:

```text
## BloodLine API

BloodLine is a RESTful API for managing blood donation offers. It is built with Node.js, Express.js, MongoDB, and Mongoose.

## Project Overview

BloodLine allows applications to create, view, update, and delete blood donation offers.

The API follows CRUD:

- **Create** — Add a blood offer
- **Read** — View blood offers
- **Update** — Edit a blood offer
- **Delete** — Remove a blood offer

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon
- Postman

## Project Structure

```text
bloodline/
├── controllers/
│   └── bloodController.js
├── models/
│   └── Blood.js
├── routes/
│   └── bloodRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
PORT=6811
```

Do not share your MongoDB credentials or connection string publicly.

3. Start the development server

```bash
npm run dev
```

The API runs at:

```text
http://localhost:6811
```

## Postman API Testing

# Check API

**GET**

```text
http://localhost:6811/
```

# Get all blood offers

**GET**

```text
http://localhost:6811/api/blood
```

# Get one blood offer

**GET**

```text
http://localhost:6811/api/blood/:id
```

Replace `:id` with the MongoDB ID.

# Create a blood offer

**POST**

```text
http://localhost:6811/api/blood
```

Body → raw → JSON:

```json
{
  "donor_name": "toyosi",
  "phone_number": "08060865202",
  "blood_group": "A",
  "rhesus_factor": "Positive",
  "has_donated_before": true,
  "health_status": "perfect"
}
```

# Update a blood offer

**PUT**

```text
http://localhost:6811/api/blood/:id
```

Example body:

```json
{
  "health_status": "Healthy"
}
```

# Delete a blood offer

**DELETE**

```text
http://localhost:6811/api/blood/:id
```

## Blood Offer Fields

| `donor_name` | String | Name of the donor |

| `phone_number` | String | Donor phone number |

| `blood_group` | String | A, B, AB, or O |

| `rhesus_factor` | String | Positive or Negative |

| `has_donated_before` | Boolean | Whether the donor has donated before |

| `health_status` | String | Donor health status |

| `createdAt` | Date | Automatically created |

| `updatedAt` | Date | Automatically updated |

## API Endpoints

| GET | `/` | Check that the API is running |

| GET | `/api/blood` | Get all blood offers |

| GET | `/api/blood/:id` | Get one blood offer |

| POST | `/api/blood` | Create a blood offer |

| PUT | `/api/blood/:id` | Update a blood offer |

| DELETE | `/api/blood/:id` | Delete a blood offer |

## HTTP Status Codes

- **200** — Successful request
- **201** — Resource created
- **400** — Bad request / invalid ID
- **404** — Resource not found
- **500** — Server error

## Environment Variables

Sensitive database credentials are stored in `.env`.

`.env` is included in `.gitignore`:

```text
.env
```

#API Documentation

After publishing your Postman collection, replace the placeholder below with your documentation link:

```text
## BloodLine API

BloodLine is a RESTful API for managing blood donation offers. It is built with Node.js, Express.js, MongoDB, and Mongoose.

## Project Overview

BloodLine allows applications to create, view, update, and delete blood donation offers.

The API follows CRUD:

- **Create** — Add a blood offer
- **Read** — View blood offers
- **Update** — Edit a blood offer
- **Delete** — Remove a blood offer

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon
- Postman

## Project Structure

```text
bloodline/
├── controllers/
│   └── bloodController.js
├── models/
│   └── Blood.js
├── routes/
│   └── bloodRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
PORT=6811
```

Do not share your MongoDB credentials or connection string publicly.

3. Start the development server

```bash
npm run dev
```

The API runs at:

```text
http://localhost:6811
```

## Postman API Testing

# Check API

**GET**

```text
http://localhost:6811/
```

# Get all blood offers

**GET**

```text
http://localhost:6811/api/blood
```

# Get one blood offer

**GET**

```text
http://localhost:6811/api/blood/:id
```

Replace `:id` with the MongoDB ID.

# Create a blood offer

**POST**

```text
http://localhost:6811/api/blood
```

Body → raw → JSON:

```json
{
  "donor_name": "toyosi",
  "phone_number": "08060865202",
  "blood_group": "A",
  "rhesus_factor": "Positive",
  "has_donated_before": true,
  "health_status": "perfect"
}
```

# Update a blood offer

**PUT**

```text
http://localhost:6811/api/blood/:id
```

Example body:

```json
{
  "health_status": "Healthy"
}
```

# Delete a blood offer

**DELETE**

```text
http://localhost:6811/api/blood/:id
```

## Blood Offer Fields

| `donor_name` | String | Name of the donor |

| `phone_number` | String | Donor phone number |

| `blood_group` | String | A, B, AB, or O |

| `rhesus_factor` | String | Positive or Negative |

| `has_donated_before` | Boolean | Whether the donor has donated before |

| `health_status` | String | Donor health status |

| `createdAt` | Date | Automatically created |

| `updatedAt` | Date | Automatically updated |

## API Endpoints

| GET | `/` | Check that the API is running |

| GET | `/api/blood` | Get all blood offers |

| GET | `/api/blood/:id` | Get one blood offer |

| POST | `/api/blood` | Create a blood offer |

| PUT | `/api/blood/:id` | Update a blood offer |

| DELETE | `/api/blood/:id` | Delete a blood offer |

## HTTP Status Codes

- **200** — Successful request
- **201** — Resource created
- **400** — Bad request / invalid ID
- **404** — Resource not found
- **500** — Server error

## Environment Variables

Sensitive database credentials are stored in `.env`.

`.env` is included in `.gitignore`:

```text
.env
```

#API Documentation

```text
https://documenter.getpostman.com/view/56988059/2sBYAuQqFM
```

## Project

**BloodLine API** — A backend REST API for managing blood donation offers.

```

## Project

**BloodLine API** — A backend REST API for managing blood donation offers.

```

## Project

**BloodLine API** — A backend REST API for managing blood donation offers.
