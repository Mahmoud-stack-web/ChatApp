import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME
}

// PORT = 3000
// MONGO_URI=mongodb+srv://horsewhite446_db_user:dyfsnka3GfhSAFEj@cluster0.915a32f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// NODE_ENV = development

// JWT_SECRET = myjwtsecret

// RESEND_API_KEY = re_AS3DdsWg_8npBUF5scHf4QqSARBH3CAxd

// EMAIL_FROM = "onboarding@resend.dev"
// EMAIL_FROM_NAME = "Mahmoud Salem"

// CLEINT_URL=http://localhost:5173