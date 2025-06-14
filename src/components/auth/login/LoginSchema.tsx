import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export default LoginSchema;
