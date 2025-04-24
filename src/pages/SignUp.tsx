
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";

const signUpSchema = z.object({
  full_name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  target_year: z.coerce.number().min(2024).max(2026),
  previous_score: z.coerce.number().optional(),
  preparation_mode: z.enum(["online", "offline"]).default("online"),
  institute: z.string().optional(),
  weak_subjects: z.array(z.string()).default([]),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      weak_subjects: [],
      preparation_mode: "online",
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setLoading(true);
    try {
      // Extract all required fields explicitly
      await signUp({
        email: data.email,
        password: data.password,
        full_name: data.full_name,
        phone: data.phone,
        target_year: data.target_year,
        previous_score: data.previous_score,
        preparation_mode: data.preparation_mode,
        institute: data.institute,
        weak_subjects: data.weak_subjects,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl px-4 md:px-0">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading text-neet-text">Create Your Account</CardTitle>
              <CardDescription>Join NEET Ace Mentor to get expert guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="target_year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target NEET Year</FormLabel>
                          <Select 
                            onValueChange={val => field.onChange(parseInt(val))}
                            defaultValue={field.value?.toString()}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2026">2026</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="previous_score"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous NEET Score (if any)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Leave blank if first attempt"
                              {...field}
                              onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="study_hours_per_day"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Study Hours per Day</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={1} 
                              max={16} 
                              {...field}
                              onChange={e => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="target_college"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target College (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., AIIMS Delhi" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="weak_subjects"
                    render={() => (
                      <FormItem>
                        <FormLabel>Weak Subjects</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {["Physics", "Chemistry", "Biology"].map((subject) => (
                            <FormField
                              key={subject}
                              control={form.control}
                              name="weak_subjects"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={subject}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(subject)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, subject])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== subject
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {subject}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the{" "}
                            <Link to="/terms" className="text-primary hover:underline">
                              terms of service
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy" className="text-primary hover:underline">
                              privacy policy
                            </Link>
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
