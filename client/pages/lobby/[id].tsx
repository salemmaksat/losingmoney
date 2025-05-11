import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';

interface LobbyProps {
  roomId: string;
}

export const getServerSideProps: GetServerSideProps<LobbyProps> = async (context) => {
  const { id } = context.params as { id: string };
  return {
    props: {
      roomId: id,
    },
  };
};

export default function Lobby({ roomId }: LobbyProps) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Lobby: {roomId}</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Player list will be populated here */}
        </ul>
      </div>
    </Layout>
  );
} 