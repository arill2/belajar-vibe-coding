import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  // Health check endpoint
  .get("/", () => ({
    status: "ok",
    message: "Welcome to Elysia + Drizzle + MySQL Backend powered by Bun!",
  }))

  // Get all users from MySQL
  .get("/users", async ({ set }) => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error: any) {
      set.status = 500;
      return {
        success: false,
        message: "Failed to fetch users from database",
        error: error.message,
      };
    }
  })

  // Create a new user in MySQL
  .post(
    "/users",
    async ({ body, set }) => {
      try {
        const { name, email } = body;
        
        // Insert into database
        await db.insert(users).values({ name, email });
        
        set.status = 210; // Created
        return {
          success: true,
          message: "User successfully created!",
          data: { name, email },
        };
      } catch (error: any) {
        set.status = 500;
        return {
          success: false,
          message: "Failed to create user in database",
          error: error.message,
        };
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 1 }),
        email: t.String({ format: "email" }),
      }),
    }
  )

  // Listen to PORT specified in environment or default 3000
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
