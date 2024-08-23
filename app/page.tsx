import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users } from "lucide-react";
import Link from "next/link";

const FeatureButton = ({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<any>;
  label: string;
}) => (
  <Button
    variant="outline"
    size="lg"
    className="h-32 text-lg text-gray-800 font-semibold border-2 border-gray-800 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 flex flex-col items-center justify-center space-y-2"
  >
    <Icon size={32} className="text-gray-800" />
    <Link href="/dashboard">
      <span>{label}</span>
    </Link>
  </Button>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-gray-400 text-white text-center py-8">
          <CardTitle className="text-3xl font-bold">
            Welcome to LiveDocs
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-gray-600 text-center mb-8">
            Explore our features and connect with others. Choose an option below
            to get started.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureButton icon={BookOpen} label="Live Docs" />
            <FeatureButton icon={Users} label="Meet" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
