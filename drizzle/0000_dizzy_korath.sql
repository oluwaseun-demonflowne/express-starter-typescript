CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"password" text NOT NULL,
	"verify" text NOT NULL,
	"verified" boolean DEFAULT false NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
