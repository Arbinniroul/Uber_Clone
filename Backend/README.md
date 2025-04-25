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