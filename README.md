Real Estate Marketplace - MERN Stack

Features
- Authentication: Supports JWT, Firebase, and Google OAuth for secure access.
- CRUD Operations: Create, read, update, and delete property listings.
- Image Uploads: Allows uploading and managing property images.
- Search Functionality: Advanced search and filtering features.
- Deployment: Deploy seamlessly using platforms like Render.

Prerequisites
- Basic understanding of MongoDB, ExpressJS, NodeJS and React.
- Installed Node.js and npm.
  
Steps to Set Up Locally
**Clone the Repository**  ```bash git clone https://github.com/yourusername/real-estate-marketplace.git cd real-estate-marketplace ```
**Install Dependencies**  - Backend: ```bash cd backend npm install ``` - Frontend: ```bash cd frontend npm install ```
**Configure Environment Variables**  Create a `.env` file in the `backend` folder and add the following: ``` MONGO_URI=<Your MongoDB URI> JWT_SECRET=<Your JWT Secret> GOOGLE_CLIENT_ID=<Your Google OAuth Client ID> CLOUDINARY_URL=<Your Cloudinary API URL> ```
**Run the Application**  - Backend: ```bash npm run dev ``` - Frontend: ```bash npm start ```
Deployment
- Use [Render](https://render.com) or any hosting platform to deploy the application. - Set the environment variables in the hosting dashboard.
**Start building your Real Estate Marketplace today!** 🚀
