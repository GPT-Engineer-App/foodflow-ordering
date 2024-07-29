import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About CaterEase</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            CaterEase is dedicated to simplifying the catering process for businesses. 
            We connect you with top-quality catering services, ensuring your events 
            and meetings are always accompanied by delicious, professionally prepared food.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
