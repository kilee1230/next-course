import z from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
});

const envParsed = envSchema.safeParse(process.env);

if (envParsed.success === false) {
  console.error("❌ Missing environment variables: ", envParsed.error.format());

  throw new Error("Missing environment variables.");
}

export const ENV = envParsed.data;
