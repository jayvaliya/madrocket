# Madrocket Internship Project

## Project Overview
This project was developed as part of the internship at Madrocket.

## Table of Contents
- [Madrocket Internship Project](#madrocket-internship-project)
  - [Project Overview](#project-overview)
  - [Table of Contents](#table-of-contents)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Project Setup](#project-setup)
    - [Firebase Setup](#firebase-setup)
  - [Usage](#usage)
  - [License](#license)

## Setup Instructions

### Prerequisites
Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Firebase Account](https://firebase.google.com/)
- [Git](https://git-scm.com/) (for version control)

### Project Setup
Follow these steps to get the project up and running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/madrocket-internship.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd madrocket-internship
   ```

3. **Copy environment configuration**:
   - **Windows (Command Prompt)**:
     ```cmd
     copy .env.example .env
     ```
   - **Windows (PowerShell)**:
     ```powershell
     Copy-Item .env.example .env
     ```
   - **macOS/Linux**:
     ```bash
     cp .env.example .env
     ```

4. **Install the dependencies**:
   ```bash
   npm install
   ```

5. **Run the application**:
   ```bash
   npm start
   ```

Your project should now be up and running on `http://localhost:3000`.

### Firebase Setup
Follow these steps to set up Firebase for your project:

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. **Configure Firebase Credentials**
   - In your Firebase project, go to Project Settings
   - Navigate to "Service Accounts" tab
   - Click "Generate new private key"
   - Save the JSON file securely

3. **Update .env File**
   
  Replace the values with those from your Firebase project settings.

4. **Enable Firebase Services**
   - In Firebase Console, enable the services you need:
     - Authentication
     - Firestore
     - Realtime Database
     - Storage (optional)

## Usage
Use this Credentials to Login.

Email: admin@123.com
Password : admin@123

## License
This project is licensed under the MIT License - see the LICENSE file for details.