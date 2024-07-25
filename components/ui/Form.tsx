"use client";
import React, { useRef, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { string } from "three/examples/jsm/nodes/Nodes.js";

export function Form() {
  const ref = useRef<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true)
    setLoader(false)
    emailjs
      .sendForm(
        "service_yjk8gyr",
        "template_vza6dbp",
        ref.current,
        "Fiktgj_ERwJK0wR4V"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setLoader(true)
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div>
      {success ? (
        <div className="flex flex-col items-center justify-center">
          {loader ? (
            <div className="flex flex-col items-center justify-center">
              <Image src="/success.gif" alt="gif" width={300} height={300} />
              <p className="text-3xl font-bold">
                Message has been sent. I will contact you soon!
              </p>
            </div>
          ) : (
            <div>
              {/* <Image
                src="/icons8-loading-infinity.gif"
                alt="gif"
                width={300}
                height={300}
              /> */}
              <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="280" height="280" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg">via GIPHY</a></p>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Connect with me!
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            React out to me today and lets discuss how I can help you achieve
            your goals.
          </p>

          <form className="my-8" ref={ref} onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="fullname">Full name</Label>
                <Input
                  id="fullname"
                  placeholder="Tyler"
                  type="text"
                  name="name"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                name="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="text">Message</Label>
              <Input
                id="textarea"
                placeholder="Type your message here"
                type="text"
                className="h-24"
                name="message"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
