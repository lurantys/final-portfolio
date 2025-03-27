import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  ranking: number;
  hardSolved: number;
  mediumSolved: number;
  easySolved: number;
  acceptanceRate: number;
}

interface CodingStatsProps {
  leetCodeStats: LeetCodeStats | null;
  loading: boolean;
}

const CodingStats = ({ leetCodeStats, loading }: CodingStatsProps) => {
  const progressValue = leetCodeStats
    ? (leetCodeStats.totalSolved / leetCodeStats.totalQuestions) * 100
    : 0;

  return (
    <div className="py-16">
      <h2 className="text-3xl md:text-4xl font-manrope lowercase mb-6 text-center text-slate-200">
        <span className="text-blue-500">leetcode</span> stats
      </h2>
      <p className="text-center text-slate-300/70 mb-12 max-w-2xl mx-auto">
        My problem-solving journey through competitive programming challenges.
      </p>

      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
              alt="LeetCode"
              className="h-10"
            />
          </div>

          {loading || !leetCodeStats ? (
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 bg-slate-700 rounded w-1/2 mb-4"></div>
              <div className="h-6 bg-slate-700 rounded-full w-1/3"></div>
            </div>
          ) : (
            <div className="text-center">
              {/*
              <div className="relative inline-block mb-8">
                <svg viewBox="0 0 100 100" className="w-48 h-48">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${progressValue * 2.83} 283`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                    initial={{ strokeDasharray: "0 283" }}
                    animate={{ strokeDasharray: `${progressValue * 2.83} 283` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <text
                    x="50"
                    y="45"
                    fontSize="16"
                    textAnchor="middle"
                    fill="#E2E8F0"
                    className="font-bold"
                  >
                    {leetCodeStats.totalSolved}/{leetCodeStats.totalQuestions}
                  </text>
                  <text
                    x="50"
                    y="65"
                    fontSize="12"
                    textAnchor="middle"
                    fill="#94A3B8"
                  >
                    Problems Solved
                  </text>
                </svg>
              </div>
              */}

              <div className="mb-4">
                <span className="text-sm text-slate-400 mr-2">Ranking:</span>
                <span className="font-medium text-yellow-400"># {leetCodeStats.ranking}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Acceptance Rate:</span>
                  <span className="font-medium text-blue-400">
                    {(leetCodeStats?.acceptanceRate ?? 0).toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm text-slate-400 mr-2">Difficulty:</span>
                <div className="flex justify-around">
                  <div>
                    <span className="font-medium text-green-500">{leetCodeStats.easySolved}</span>
                    <span className="text-xs text-slate-400"> Easy</span>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-500">{leetCodeStats.mediumSolved}</span>
                    <span className="text-xs text-slate-400"> Medium</span>
                  </div>
                  <div>
                    <span className="font-medium text-red-500">{leetCodeStats.hardSolved}</span>
                    <span className="text-xs text-slate-400"> Hard</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://leetcode.com/lurantys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View LeetCode Profile →
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CodingStats;
