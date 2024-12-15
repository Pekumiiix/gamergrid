"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { createUserProfile } from "@/lib/contract";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Provide a valid email",
  }),
  class: z.string().min(1, {
    message: "Please select a class.",
  }),
  race: z.string().min(1, {
    message: "Please select a race.",
  }),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "You need to select a gender.",
  }),
});

export default function CreateProfileSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      class: "",
      race: "",
      gender: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const tx = await createUserProfile(
        values.username,
        values.email,
        values.class,
        values.race,
        values.gender
      );

      toast({
        description:
          "Profile created successfully! Transaction Hash: " + tx.hash,
      });
      form.reset();
    } catch (err: unknown) {
      // Change 'error: error' to 'err: unknown'
      if (err instanceof Error) {
        toast({
          description: "Failed to create profile: " + err.message,
          variant: "destructive",
        });
      } else {
        toast({
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    }
  }

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   toast({ description: "Profile has been created successfully!" });
  //   console.log(values);
  //   form.reset();
  // }

  return (
    <section
      id="create"
      className="container flex flex-col items-center gap-[50px] px-5"
    >
      <div className="flex flex-col w-full items-center gap-2">
        <p className="text-2xl md:text-[40px] font-semibold text-orange-300">
          Create a profile
        </p>
        <p className="md:text-xl font-medium text-orange-200">
          Be a Part of Our Community Today!
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-[75%] lg:w-[50%] space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-orange-200 font-bold">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. John Doe"
                    {...field}
                    className="h-14 text-black bg-white/50 rounded-full"
                  />
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
                <FormLabel className="text-orange-200 font-bold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. example123@gmail.com"
                    {...field}
                    className="text-black h-14 rounded-full bg-white/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-orange-200 font-bold">
                  Class
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-14 rounded-full text-black bg-white/50">
                      <SelectValue placeholder="Select a class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {classes.map((item: string) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="race"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-orange-200 font-bold">
                  Race
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-14 rounded-full text-black bg-white/50">
                      <SelectValue placeholder="Select a race" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {races.map((item: string) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-orange-200 font-bold">
                  Gender
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-7"
                  >
                    {genders.map((item: string) => (
                      <FormItem
                        key={item}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item} />
                        </FormControl>
                        <FormLabel className="font-normal text-orange-200">
                          {item}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-11 bg-orange-600 font-semibold"
          >
            Submit
          </Button>

          <div className="flex items-center gap-2">
            <p className="text-orange-200 text-sm">Already have a profile?</p>
            <Button
              asChild
              variant={`link`}
              className="p-0 w-fit h-fit text-orange-300"
            >
              <Link href={`/`}>Update it</Link>
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

const classes: string[] = ["WARRIOR", "WIZARD", "CLERIC", "RANGER", "ROGUE"];

const races: string[] = ["HUMAN", "ELF", "DWARF", "HALFLING", "THIEFLING"];

const genders: string[] = ["Male", "Female", "Other"];
