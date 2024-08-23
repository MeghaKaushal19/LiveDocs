import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

// DocumentCard Component
const DocumentCard = ({
  title,
  lastEdited,
}: {
  title: string;
  lastEdited: string;
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">Last edited: {lastEdited}</p>
      <Button variant="outline" className="mt-2">
        Open Document
      </Button>
    </CardContent>
  </Card>
);

// Documents Component
const Documents = () => (
  <div className="p-8">
    <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold mb-4">Documents</h2>
    <Button className="mb-4 bg-white text-gray-800">
      <Plus className="mr-2 h-4 w-4" /> Create New Document
    </Button>
    </div>
    <DocumentCard title="Live Docs" lastEdited="2 days ago" />
    <DocumentCard title="Live Meet" lastEdited="1 week ago" />
    <DocumentCard title="Test" lastEdited="2 weeks ago" />
  </div>
);

export default Documents;
