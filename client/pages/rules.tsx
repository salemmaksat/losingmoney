import React from 'react';
import { Layout } from '../components/Layout';

export default function Rules() {
  return (
    <Layout>
      <div className="prose lg:prose-xl mx-auto p-4">
        <h1>How to Play Poker</h1>
        <ol>
          <li>Each player is dealt two private cards (hole cards).</li>
          <li>Five community cards are dealt face-up in the center of the table.</li>
          <li>Players make the best five-card hand using any combination of their hole cards and community cards.</li>
          <li>Betting rounds occur before and after each community card is dealt.</li>
          <li>The player with the best hand at showdown wins the pot.</li>
        </ol>
      </div>
    </Layout>
  );
} 