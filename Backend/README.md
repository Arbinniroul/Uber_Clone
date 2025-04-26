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