import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Counter = () => {
  return (
    <div>
      <section className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {statsData.map((statsData, index) => (
              <div key={index} className=" text-center">
                <div className="text-4xl font-bold mb-2 text-blue-600">
                  {statsData.value}
                </div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((features, index) => (
              <Card key={index} className="p-3 ">
                <CardContent className="space-y-4 pt-4">
                  {features.icon}
                  <h3 className="text-2xl font-semibold">{features.title}</h3>
                  <p className="text-gray-600">{features.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How it Works!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 ">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="pt-4 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={`Profile picture of ${testimonial.name}`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-5">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-center text-white">
            Ready to Take Control of Your Finances?{" "}
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
              size="lg"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Counter;
