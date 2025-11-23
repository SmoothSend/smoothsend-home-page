// Statistics API utility for fetching real data from SmoothSend database
// This can be used when you're ready to connect to real data

export interface DatabaseStats {
  totalTransactions: number;
  successfulTransactions: number;
  totalGasFeesSaved: number;
  totalVolume: number;
  successRate: number;
  averageTransactionTime: string;
  uniqueUsers: number;
  lastUpdated: string;
}

export interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: string;
}

// SQL queries that would be used to fetch real statistics
export const STATS_QUERIES = {
  totalTransactions: `
    SELECT COUNT(*) as count 
    FROM transactions
  `,
  
  successfulTransactions: `
    SELECT COUNT(*) as count 
    FROM transactions 
    WHERE status = 'success'
  `,
  
  totalGasFeesSaved: `
    SELECT SUM(CAST(total_gas_fee AS NUMERIC)) as total 
    FROM transactions 
    WHERE status = 'success'
  `,
  
  totalVolume: `
    SELECT SUM(CAST(amount AS NUMERIC)) as total 
    FROM transactions 
    WHERE status = 'success'
  `,
  
  uniqueUsers: `
    SELECT COUNT(DISTINCT from_address) as count 
    FROM transactions 
    WHERE status = 'success'
  `,
  
  averageTransactionTime: `
    SELECT AVG(EXTRACT(EPOCH FROM (updated_at - created_at))) as avg_seconds
    FROM transactions 
    WHERE status = 'success' 
    AND updated_at IS NOT NULL
  `,
  
  recentTransactions: `
    SELECT COUNT(*) as count 
    FROM transactions 
    WHERE created_at >= NOW() - INTERVAL '24 hours'
  `,
  
  transactionsByCoinType: `
    SELECT coin_type, COUNT(*) as count 
    FROM transactions 
    WHERE status = 'success'
    GROUP BY coin_type
  `
};

// Function to format database results into display format
export function formatStatsForDisplay(dbStats: DatabaseStats): StatItem[] {
  return [
    {
      icon: require('lucide-react').DollarSign,
      label: "Gas Fees Saved",
      value: `$${(dbStats.totalGasFeesSaved / 1000000).toFixed(1)}M+`,
      change: "+127%", // This would need historical data
      changeType: 'positive',
      color: "text-green-400"
    },
    {
      icon: require('lucide-react').Users,
      label: "Active Users",
      value: `${(dbStats.uniqueUsers / 1000).toFixed(1)}K+`,
      change: "+89%", // This would need historical data
      changeType: 'positive',
      color: "text-blue-400"
    },
    {
      icon: require('lucide-react').Zap,
      label: "Transactions",
      value: `${(dbStats.totalTransactions / 1000).toFixed(0)}K+`,
      change: "+156%", // This would need historical data
      changeType: 'positive',
      color: "text-purple-400"
    },
    {
      icon: require('lucide-react').Globe,
      label: "Success Rate",
      value: `${dbStats.successRate.toFixed(1)}%`,
      change: "+0.1%",
      changeType: 'positive',
      color: "text-orange-400"
    },
    {
      icon: require('lucide-react').Clock,
      label: "Avg. Speed",
      value: dbStats.averageTransactionTime,
      change: "99.9%",
      changeType: 'positive',
      color: "text-cyan-400"
    },
    {
      icon: require('lucide-react').TrendingUp,
      label: "Total Volume",
      value: `$${(dbStats.totalVolume / 1000000).toFixed(1)}M+`,
      change: "+45%",
      changeType: 'positive',
      color: "text-emerald-400"
    }
  ];
}

// Example API endpoint structure for your relayer
export const STATS_API_ENDPOINT = '/api/v1/relayer/statistics';

// Example response format
export const EXAMPLE_STATS_RESPONSE = {
  success: true,
  data: {
    totalTransactions: 847000,
    successfulTransactions: 845000,
    totalGasFeesSaved: 2400000, // in USD cents
    totalVolume: 12500000, // in USD cents
    successRate: 99.8,
    averageTransactionTime: "<2s",
    uniqueUsers: 12500,
    lastUpdated: "2025-01-21T10:30:00Z"
  }
};

// Function to fetch stats from API (when ready)
export async function fetchStatsFromAPI(): Promise<DatabaseStats | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_RELAYER_URL || 'https://smoothsendrelayerevm.onrender.com'}${STATS_API_ENDPOINT}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch statistics');
    }
    
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || 'Failed to fetch statistics');
    }
  } catch (error) {
    console.error('Error fetching stats:', error);
    return null;
  }
}

