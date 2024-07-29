import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cateringOptions = [
    { id: 1, name: 'Breakfast Buffet', description: 'A variety of breakfast items including pastries, fruits, and hot dishes.', price: '$15 per person' },
    { id: 2, name: 'Sandwich Platter', description: 'Assorted sandwiches with sides.', price: '$12 per person' },
    { id: 3, name: 'Mediterranean Feast', description: 'Hummus, falafel, pita bread, and more.', price: '$18 per person' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Utensils className="mr-2" /> CaterEase
          </h1>
          <nav>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <Button>Login</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Order Catering for Your Business</h2>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search catering options..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cateringOptions.map((option) => (
            <Card key={option.id}>
              <CardHeader>
                <CardTitle>{option.name}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-bold">{option.price}</p>
              </CardContent>
              <CardFooter>
                <Button>Order Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CaterEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
