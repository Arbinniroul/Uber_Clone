# User Registration Endpoint Documentation

## **POST** `/user/register`

### **Description**
This endpoint allows users to register by providing their details. It validates the input, hashes the password, and stores the user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

---

### **Request Body**
The request body should be in JSON format and include the following fields:

| Field                | Type     | Required | Description                                                                 |
|----------------------|----------|----------|-----------------------------------------------------------------------------|
| `fullName.firstName` | `string` | Yes      | The first name of the user. Must be at least 3 characters long.            |
| `fullName.lastName`  | `string` | No       | The last name of the user. Must be at least 3 characters long (if provided).|
| `email`              | `string` | Yes      | The email address of the user. Must be unique and in a valid email format. |
| `password`           | `string` | Yes      | The password for the user. Must be at least 8 characters long.             |

---

### **Validation Rules**
- `fullName.firstName`: Must be at least 3 characters long.
- `fullName.lastName`: Optional, but if provided, must be at least 3 characters long.
- `email`: Must be a valid email address and unique.
- `password`: Must be at least 8 characters long.

---

### **Response**
#### **Success (201)**
- **Body**:
    ```json
    {
      "token": "string", // JWT token for authentication
      "user": {
        "_id": "string",
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string"
      }
    }
    ```

#### **Error (400)**
- **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string", // Validation error message
          "param": "string", // Field that caused the error
          "location": "body"
        }
      ]
    }
    ```

---

### **Example Request**
```json
POST /user/register
Content-Type: application/json

{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

# User Login Endpoint Documentation

## **POST** `/user/login`

### **Description**
This endpoint allows users to log in by providing their email and password. It validates the input, checks the credentials against the database, and returns a JSON Web Token (JWT) and user details upon successful authentication.

---

### **Request Body**
The request body should be in JSON format and include the following fields:

| Field      | Type     | Required | Description                                                                 |
|------------|----------|----------|-----------------------------------------------------------------------------|
| `email`    | `string` | Yes      | The email address of the user. Must be a valid email format.               |
| `password` | `string` | Yes      | The password for the user. Must be at least 8 characters long.             |

---

### **Validation Rules**
- `email`: Must be a valid email address.
- `password`: Must be at least 8 characters long.

---

### **Response**
#### **Success (200)**
- **Body**:
    ```json
    {
      "token": "string", // JWT token for authentication
      "user": {
        "_id": "string",
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string"
      }
    }
    ```

#### **Error (400)**
- **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string", // Validation error message
          "param": "string", // Field that caused the error
          "location": "body"
        }
      ]
    }
    ```

#### **Error (401)**
- **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

### **Example Request**
```json
POST /user/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

# User Logout and Profile Endpoints Documentation

---

## **GET** `/user/logout`

### **Description**
This endpoint allows users to log out by invalidating their current JWT token. The token is added to a blacklist to prevent further use, and the authentication cookie is cleared.

---

### **Headers**
| Header            | Type     | Required | Description                                      |
|-------------------|----------|----------|--------------------------------------------------|
| `Authorization`   | `string` | Yes      | The Bearer token for the user (if not using cookies). |

---

### **Response**
#### **Success (200)**
- **Body**:
    ```json
    {
      "success": true,
      "message": "Logged out successfully"
    }
    ```

#### **Error (500)**
- **Body**:
    ```json
    {
      "message": "An error occurred while logging out"
    }
    ```

---

### **Example Request**
```http
GET /user/logout
Authorization: Bearer <your-jwt-token>
```

---

### **Example Success Response**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## **GET** `/user/profile`

### **Description**
This endpoint allows authenticated users to retrieve their profile information. The user must be logged in and provide a valid JWT token.

---

### **Headers**
| Header            | Type     | Required | Description                                      |
|-------------------|----------|----------|--------------------------------------------------|
| `Authorization`   | `string` | Yes      | The Bearer token for the user.                  |

---

### **Response**
#### **Success (200)**
- **Body**:
    ```json
    {
      "user": {
        "_id": "string",
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string"
      }
    }
    ```

#### **Error (401)**
- **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

---

### **Example Request**
```http
GET /user/profile
Authorization: Bearer <your-jwt-token>
```

---

### **Example Success Response**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "user": {
    "_id": "64f9c1e2b5d6c2a1b8e4f9c1",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### **Notes**
- The `/user/logout` endpoint uses a blacklist mechanism to invalidate tokens for 24 hours.
- The `/user/profile` endpoint requires the `authMiddleware` to validate the user's token before returning profile information.

# Captain Routes Documentation

## **POST** `/captain/register`

### **Description**
This endpoint allows captains to register by providing their personal and vehicle details. It validates the input, hashes the password, and stores the captain in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the captain's details.

---

### **Request Body**
The request body should be in JSON format and include the following fields:

| Field                  | Type     | Required | Description                                                                 |
|------------------------|----------|----------|-----------------------------------------------------------------------------|
| `fullName.firstName`   | `string` | Yes      | The first name of the captain. Must be at least 3 characters long.         |
| `fullName.lastName`    | `string` | No       | The last name of the captain. Must be at least 3 characters long (if provided). |
| `email`                | `string` | Yes      | The email address of the captain. Must be unique and in a valid email format. |
| `password`             | `string` | Yes      | The password for the captain. Must be at least 8 characters long.          |
| `vehicle.color`        | `string` | Yes      | The color of the vehicle. Must be at least 3 characters long.              |
| `vehicle.plate`        | `string` | Yes      | The license plate of the vehicle. Must be at least 3 characters long.      |
| `vehicle.capacity`     | `number` | Yes      | The capacity of the vehicle. Must be a number and at least 1.              |
| `vehicle.vehicleType`  | `string` | Yes      | The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.    |

---

### **Validation Rules**
- `fullName.firstName`: Must be at least 3 characters long.
- `fullName.lastName`: Optional, but if provided, must be at least 3 characters long.
- `email`: Must be a valid email address and unique.
- `password`: Must be at least 8 characters long.
- `vehicle.color`: Must be at least 3 characters long.
- `vehicle.plate`: Must be at least 3 characters long.
- `vehicle.capacity`: Must be a number and at least 1.
- `vehicle.vehicleType`: Must be one of `car`, `motorcycle`, or `auto`.

---

### **Response**
#### **Success (201)**
- **Body**:
    ```json
    {
      "token": "string", // JWT token for authentication
      "captain": {
        "_id": "string",
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "number",
          "vehicleType": "string"
        }
      }
    }
    ```

#### **Error (400)**
- **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string", // Validation error message
          "param": "string", // Field that caused the error
          "location": "body"
        }
      ]
    }
    ```

#### **Error (500)**
- **Body**:
    ```json
    {
      "message": "An error occurred while registering the captain"
    }
    ```

---

### **Example Request**
```json
POST /captain/register
Content-Type: application/json

{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### **Example Success Response**
```json
HTTP/1.1 201 Created
Content-Type: application/json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64f9c1e2b5d6c2a1b8e4f9c1",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### **Example Error Response**
#### **Validation Error (400)**
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "errors": [
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

#### **Server Error (500)**
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "message": "An error occurred while registering the captain"
}
```

---

### **Notes**
- The password is hashed using bcrypt before being stored in the database.
- The JWT token is signed using the secret defined in the environment variable `JWT_SECRET`.
- If the email is already registered, the endpoint will return a `400 Bad Request` error.