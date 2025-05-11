import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">losingmoney Poker</h1>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
            Create Room
          </Button>
          <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
            Join Room
          </Button>
        </div>
      </div>
    </Layout>
  );
}
